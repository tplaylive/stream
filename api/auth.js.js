// /api/m3u8.js
export default async function handler(req, res) {
  try {
    const { id } = req.query;

    // --- 1) Read dynamic cookie (__test) ---
    let userCookie = (req.cookies && req.cookies.__test) || "";

    if (!userCookie && req.headers.cookie) {
      const parsed = Object.fromEntries(
        req.headers.cookie.split(";").map(s => {
          const [k, ...v] = s.trim().split("=");
          return [k, decodeURIComponent((v || []).join("="))];
        })
      );
      userCookie = parsed.__test || "";
    }

    const forwardedCookie = `__test=${userCookie || ""}`;
    console.log(`[m3u8] Cookie used: ${forwardedCookie}`);

    // --- 2) Determine URL to fetch ---
    const playUrl = id
      ? `https://xfireflix.ct.ws/ayna/play.php?id=${encodeURIComponent(id)}`
      : `https://xfireflix.ct.ws/ayna/play.php`;

    const headers = {
      "cache-control": "no-cache, max-age=0",
      "connection": "keep-alive",
      "accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9,bn;q=0.8",
      "cookie": forwardedCookie,
      "dnt": "1",
      "pragma": "no-cache",
      "referer": playUrl,
      "sec-ch-ua":
        '"Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"',
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": '"Android"',
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "upgrade-insecure-requests": "1",
      "user-agent":
        "Mozilla/5.0 (Linux; Android 13; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Mobile Safari/537.36"
    };

    // --- 3) Fetch remote page ---
    const response = await fetch(playUrl, { headers });
    let html = await response.text();

    // --- 4) Fix scripts / links for fallback proxy ---
    // Replace aes.js references
    html = html.replace(/(src\s*=\s*["'])\/?aes\.js(["'])/gi, '$1https://xfireflix.ct.ws/aes.js$2');

    // Remove <a href="...">...</a>
    html = html.replace(/<a\s+[^>]*href=["'][^"']*["'][^>]*>.*?<\/a>/gi, '');

    // Disable location.href JS redirects
    html = html.replace(/location\.href\s*=\s*['"][^'"]*['"]/gi, '// $& removed by proxy');

    // --- 5) Try to extract m3u8 URL ---
    const match = html.match(/(https?:\/\/[^'"]+\.m3u8[^'"]*)/);

    if (id && userCookie && match) {
      // ✅ Normal case: redirect
      const m3u8Url = match[1].replace(/\\\//g, "/").replace(/([^:]\/)\/+/g, "$1");
      console.log(`[m3u8] Redirecting to: ${m3u8Url}`);
      res.writeHead(302, { Location: m3u8Url });
      res.end();
      return;
    }

    // ⚠️ Fallback: fully proxy HTML
    res.setHeader("content-type", "text/html; charset=UTF-8");
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
res.setHeader("Pragma", "no-cache");
res.setHeader("Expires", "0");
res.setHeader("Surrogate-Control", "no-store");
    res.status(200).send(html);
  } catch (err) {
    console.error("[m3u8] Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
