const video = document.getElementById("video");
const overlay = document.getElementById("overlay");
const menuList = document.getElementById("menuList");

let channels = [];
let flatChannels = [];
let currentIndex = 0;
let overlayVisible = false;
let hls;

// Load channels
fetch("channels.json")
  .then(r => r.json())
  .then(data => {
    data.categories.forEach(cat => {
      cat.channels.forEach(ch => {
        flatChannels.push({
          name: ch.name,
          url: ch.url,
          category: cat.name,
          language: cat.language
        });
      });
    });

    renderMenu(data.categories);
    playChannel(0); // ▶️ AUTO PLAY FIRST CHANNEL
    enterFullscreen();
  });

function playChannel(index) {
  currentIndex = index;

  if (hls) {
    hls.destroy();
  }

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(flatChannels[index].url);
    hls.attachMedia(video);
  } else {
    video.src = flatChannels[index].url;
  }

  video.play();
  highlightActive();
}

function renderMenu(categories) {
  menuList.innerHTML = "";

  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category";

    div.innerHTML = `<h3>${cat.name} (${cat.language})</h3>`;

    cat.channels.forEach(ch => {
      const idx = flatChannels.findIndex(c => c.name === ch.name);
      const item = document.createElement("div");
      item.className = "channel";
      item.tabIndex = 0;
      item.innerText = ch.name;

      item.onclick = () => {
        playChannel(idx);
        hideOverlay();
      };

      div.appendChild(item);
    });

    menuList.appendChild(div);
  });
}

function highlightActive() {
  document.querySelectorAll(".channel").forEach((el, i) => {
    el.classList.toggle("active", i === currentIndex);
  });
}

function enterFullscreen() {
  const el = document.documentElement;

  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}
}

// 🎮 REMOTE CONTROL HANDLING
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    if (!overlayVisible) {
      currentIndex = (currentIndex + 1) % flatChannels.length;
      playChannel(currentIndex);
    }
  }

  if (e.key === "ArrowLeft") {
    if (!overlayVisible) {
      currentIndex =
        (currentIndex - 1 + flatChannels.length) % flatChannels.length;
      playChannel(currentIndex);
    }
  }

  if (e.key === "Enter") {
    overlayVisible ? hideOverlay() : showOverlay();
  }

  if (e.key === "Escape" || e.key === "Backspace") {
    hideOverlay();
  }
});

function showOverlay() {
  overlay.classList.remove("hidden");
  overlayVisible = true;
  document.querySelector(".channel.active")?.focus();
}

function hideOverlay() {
  overlay.classList.add("hidden");
  overlayVisible = false;
  video.play();
}
