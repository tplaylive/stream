export default async function handler(req, res) {
  try {
    const { id } = req.query;
    if (!id) {
      res.statusCode = 400;
      return res.end("Missing ?id parameter");
    }

    // Fetch the HTML from Fastly CDN
    const resp = await fetch(`https://aynaxbosta.global.ssl.fastly.net/Ayna/play.php?id=${encodeURIComponent(id)}`);
    const html = await resp.text();

    // Extract streamUrl using regex
    const match = html.match(/streamUrl:\s*"(https:\/\/[^"]+)"/);
    if (!match) {
      res.statusCode = 404;
      return res.end("streamUrl not found");
    }

    let streamUrl = match[1];

    // Replace domain if it matches tvsen6.aynascope.net
    streamUrl = streamUrl.replace(
      "tvsen6.bostascope.net",
      "ayna6-bostaflix.global.ssl.fastly.net"
    );

    // Redirect (302)
    res.statusCode = 302;
    res.setHeader("Location", streamUrl);
    res.end();
  } catch (err) {
    res.statusCode = 500;
    res.end("Server error: " + err.message);
  }
}
