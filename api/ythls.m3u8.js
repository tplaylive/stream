export default async function handler(req, res) {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  const username = searchParams.get("user");

  if (!username) {
    res.statusCode = 400;
    return res.end("Missing 'user' parameter");
  }

  try {
    const url = `https://www.youtube.com/@${username}/streams?app=desktop`;
    const html = await fetch(url).then(r => r.text());

    // Find the first "videoRenderer" object and extract its videoId
    const match = html.match(/"videoRenderer":\s*{[^}]*?"videoId":"(.*?)"/);

    if (match && match[1]) {
      const videoId = match[1];
      const streamUrl = `https://stream-cdn-bostaflix.global.ssl.fastly.net/Youtube/live.php?id=${videoId}&e=.m3u8`;

      res.writeHead(302, { Location: streamUrl });
      return res.end();
    } else {
      res.statusCode = 404;
      return res.end("No live video found");
    }
  } catch (err) {
    res.statusCode = 500;
    return res.end("Error fetching stream info");
  }
}
