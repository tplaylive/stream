/* T Play - single page logic
   - Auto detect TV vs Mobile
   - Remote navigation (arrows/enter/back)
   - Categories + search
   - HLS playback using hls.js when needed
*/

const state = {
  mode: "tv",              // 'tv' | 'mobile'
  categories: [],
  activeCatId: null,
  filteredChannels: [],
  nowPlayingId: null,
  hls: null
};

const els = {
  splash: document.getElementById("splash"),
  modeLabel: document.getElementById("modeLabel"),
  toggleMode: document.getElementById("toggleMode"),
  search: document.getElementById("search"),
  catList: document.getElementById("catList"),
  chList: document.getElementById("chList"),
  channelTitle: document.getElementById("channelTitle"),
  nowName: document.getElementById("nowName"),
  video: document.getElementById("video"),
  overlay: document.getElementById("videoOverlay"),
  btnPlayPause: document.getElementById("btnPlayPause"),
  btnFullscreen: document.getElementById("btnFullscreen")
};

function isProbablyTV() {
  const ua = navigator.userAgent || "";
  const tvHints = [
    "SMART-TV", "SmartTV", "SMARTTV", "HbbTV",
    "Android TV", "AFT", "AmazonWebAppPlatform",
    "Tizen", "Web0S", "WebOS", "Viera", "BRAVIA"
  ];
  const hintMatch = tvHints.some(h => ua.includes(h));

  // Pointer-less environments are often TV/remote
  const coarsePointer = matchMedia("(pointer: coarse)").matches;
  const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Heuristic: if TV hint OR no touch + big screen
  const bigScreen = Math.max(screen.width, screen.height) >= 900;
  return hintMatch || (!hasTouch && bigScreen && !coarsePointer);
}

function loadMode() {
  const saved = localStorage.getItem("tplay_mode");
  if (saved === "tv" || saved === "mobile") return saved;
  return isProbablyTV() ? "tv" : "mobile";
}

function applyMode(mode) {
  state.mode = mode;
  document.body.classList.toggle("tv", mode === "tv");
  document.body.classList.toggle("mobile", mode === "mobile");
  els.modeLabel.textContent = mode === "tv" ? "TV UI (Remote ready)" : "Mobile UI";
  localStorage.setItem("tplay_mode", mode);

  // In TV mode, focus search (so remote typing works) only if you want;
  // Here we focus first category for better remote UX
  setTimeout(() => {
    if (mode === "tv") {
      const firstCat = els.catList.querySelector("[data-focusable='cat']");
      if (firstCat) firstCat.focus();
    }
  }, 50);
}

async function loadChannels() {
  const res = await fetch("channels.json", { cache: "no-store" });
  const data = await res.json();
  state.categories = data.categories || [];
  state.activeCatId = state.categories[0]?.id ?? null;
}

function getActiveCategory() {
  return state.categories.find(c => c.id === state.activeCatId) || null;
}

function flattenChannels(cat) {
  if (!cat) return [];
  return (cat.channels || []).map(ch => ({ ...ch, catId: cat.id, catName: cat.name }));
}

function renderCategories() {
  els.catList.innerHTML = "";
  state.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "catItem" + (cat.id === state.activeCatId ? " active" : "");
    btn.type = "button";
    btn.dataset.catId = cat.id;
    btn.dataset.focusable = "cat";
    btn.innerHTML = `
      <span>${escapeHtml(cat.name)}</span>
      <span style="color:#bdbdbd;font-size:12px;">${(cat.channels || []).length}</span>
    `;
    btn.addEventListener("click", () => {
      state.activeCatId = cat.id;
      els.search.value = "";
      updateChannelList();
      renderCategories();
      // focus first channel (nice on TV)
      setTimeout(() => focusFirstChannel(), 30);
    });
    els.catList.appendChild(btn);
  });
}

function updateChannelList() {
  const cat = getActiveCategory();
  const all = flattenChannels(cat);
  const q = (els.search.value || "").trim().toLowerCase();

  state.filteredChannels = q
    ? all.filter(ch => ch.name.toLowerCase().includes(q))
    : all;

  els.channelTitle.textContent = cat ? `Channels • ${cat.name}` : "Channels";
  renderChannels();
}

function renderChannels() {
  els.chList.innerHTML = "";

  if (state.filteredChannels.length === 0) {
    const empty = document.createElement("div");
    empty.style.color = "#bdbdbd";
    empty.style.padding = "10px";
    empty.textContent = "No channels found.";
    els.chList.appendChild(empty);
    return;
  }

  state.filteredChannels.forEach((ch, idx) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile" + (ch.id === state.nowPlayingId ? " playing" : "");
    tile.dataset.channelId = ch.id;
    tile.dataset.index = String(idx);
    tile.dataset.focusable = "channel";
    tile.innerHTML = `
      <img src="${escapeAttr(ch.logo || "assets/logo.png")}" alt="" />
      <div>
        <div class="tName">${escapeHtml(ch.name)}</div>
        <div class="tMeta">${escapeHtml(ch.catName || "")}</div>
      </div>
    `;
    tile.addEventListener("click", () => playChannel(ch));
    els.chList.appendChild(tile);
  });
}

function focusFirstChannel() {
  const first = els.chList.querySelector("[data-focusable='channel']");
  if (first) first.focus();
}

function playChannel(ch) {
  if (!ch?.url) return;

  state.nowPlayingId = ch.id;
  els.nowName.textContent = ch.name;
  els.overlay.classList.add("hidden");

  // Update UI highlight
  renderChannels();

  const video = els.video;
  const src = ch.url;

  // Cleanup previous
  if (state.hls) {
    try { state.hls.destroy(); } catch {}
    state.hls = null;
  }
  video.pause();
  video.removeAttribute("src");
  video.load();

  // If browser supports native HLS (Safari/iOS), set src directly
  const canNativeHls = video.canPlayType("application/vnd.apple.mpegurl");

  if (canNativeHls) {
    video.src = src;
    video.play().catch(() => {});
    return;
  }

  // Use hls.js if supported
  if (window.Hls && window.Hls.isSupported()) {
    const hls = new Hls({
      enableWorker: true,
      lowLatencyMode: true
    });
    state.hls = hls;
    hls.loadSource(src);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play().catch(() => {});
    });

    hls.on(Hls.Events.ERROR, (_, data) => {
      console.warn("HLS error:", data);
      // show overlay if fatal
      if (data?.fatal) {
        els.overlay.textContent = "Playback error. Try another channel or check stream URL.";
        els.overlay.classList.remove("hidden");
      }
    });

    return;
  }

  // Fallback
  els.overlay.textContent = "This device can't play HLS streams. Try a different device/browser.";
  els.overlay.classList.remove("hidden");
}

function togglePlayPause() {
  const v = els.video;
  if (v.paused) v.play().catch(() => {});
  else v.pause();
}

function toggleFullscreen() {
  const el = document.querySelector(".videoWrap");
  if (!document.fullscreenElement) {
    el.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.().catch(() => {});
  }
}

/* Remote navigation: arrows move between focusables.
   - left/right within channel grid
   - up/down within grid and between panels
*/
function setupRemoteKeys() {
  window.addEventListener("keydown", (e) => {
    const key = e.key;

    // Back button behavior (Android back often maps to Escape / Backspace)
    if (key === "Escape" || key === "Backspace") {
      const active = document.activeElement;
      // If focused in channel tile, go back to categories
      if (active?.dataset?.focusable === "channel") {
        const activeCatBtn = els.catList.querySelector(`[data-cat-id="${state.activeCatId}"]`);
        (activeCatBtn || els.catList.querySelector("[data-focusable='cat']"))?.focus();
        e.preventDefault();
        return;
      }
    }

    // Enter/OK
    if (key === "Enter") {
      const active = document.activeElement;
      if (active?.dataset?.focusable === "channel") {
        const id = active.dataset.channelId;
        const ch = state.filteredChannels.find(c => c.id === id);
        if (ch) playChannel(ch);
        e.preventDefault();
        return;
      }
      return;
    }

    // Arrow navigation (TV mode only; mobile users still can use keyboard if they want)
    if (!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(key)) return;

    const active = document.activeElement;
    const focusType = active?.dataset?.focusable;

    if (focusType === "cat") {
      const cats = [...els.catList.querySelectorAll("[data-focusable='cat']")];
      const idx = cats.indexOf(active);
      if (key === "ArrowDown" && idx < cats.length - 1) { cats[idx + 1].focus(); e.preventDefault(); }
      if (key === "ArrowUp" && idx > 0) { cats[idx - 1].focus(); e.preventDefault(); }
      if (key === "ArrowRight") { focusFirstChannel(); e.preventDefault(); }
      return;
    }

    if (focusType === "channel") {
      const tiles = [...els.chList.querySelectorAll("[data-focusable='channel']")];
      const idx = tiles.indexOf(active);
      if (idx < 0) return;

      // Determine columns based on CSS grid (rough heuristic)
      const cols = document.body.classList.contains("mobile") ? 2 : 3;

      if (key === "ArrowLeft") {
        if (idx % cols === 0) {
          // jump to categories
          const activeCatBtn = els.catList.querySelector(`[data-cat-id="${state.activeCatId}"]`);
          (activeCatBtn || els.catList.querySelector("[data-focusable='cat']"))?.focus();
        } else {
          tiles[idx - 1]?.focus();
        }
        e.preventDefault();
        return;
      }

      if (key === "ArrowRight") {
        tiles[idx + 1]?.focus();
        e.preventDefault();
        return;
      }

      if (key === "ArrowUp") {
        const target = idx - cols;
        if (target >= 0) tiles[target]?.focus();
        else {
          // go to search bar
          els.search.focus();
        }
        e.preventDefault();
        return;
      }

      if (key === "ArrowDown") {
        const target = idx + cols;
        if (target < tiles.length) tiles[target]?.focus();
        else {
          // go to player controls
          els.btnPlayPause.focus();
        }
        e.preventDefault();
        return;
      }
    }

    // From search bar: down to channels
    if (active === els.search) {
      if (key === "ArrowDown") { focusFirstChannel(); e.preventDefault(); }
      if (key === "ArrowLeft") {
        const activeCatBtn = els.catList.querySelector(`[data-cat-id="${state.activeCatId}"]`);
        (activeCatBtn || els.catList.querySelector("[data-focusable='cat']"))?.focus();
        e.preventDefault();
      }
      return;
    }

    // From player buttons: up to channels
    if (active === els.btnPlayPause || active === els.btnFullscreen) {
      if (key === "ArrowUp") { focusFirstChannel(); e.preventDefault(); }
    }
  });
}

function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function escapeAttr(s){ return escapeHtml(s); }

async function init() {
  // Mode first
  applyMode(loadMode());

  // UI actions
  els.toggleMode.addEventListener("click", () => {
    applyMode(state.mode === "tv" ? "mobile" : "tv");
    // re-focus
    setTimeout(() => {
      const firstCat = els.catList.querySelector("[data-focusable='cat']");
      firstCat?.focus();
    }, 30);
  });

  els.search.addEventListener("input", () => updateChannelList());

  els.btnPlayPause.addEventListener("click", togglePlayPause);
  els.btnFullscreen.addEventListener("click", toggleFullscreen);

  setupRemoteKeys();

  await loadChannels();
  renderCategories();
  updateChannelList();

  // Friendly overlay
  els.overlay.classList.remove("hidden");

  // Hide splash
  setTimeout(() => {
    els.splash.style.display = "none";
  }, 600);
}

init().catch(err => {
  console.error(err);
  els.overlay.textContent = "Failed to load channels.json. Check hosting paths.";
  els.overlay.classList.remove("hidden");
  els.splash.style.display = "none";
});
