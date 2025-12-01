export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).send('Missing id parameter');
    return;
  }

  const fetchPage = (url) =>
    new Promise((resolve, reject) => {
      const https = require('https');
      https
        .get(url, (resp) => {
          let data = '';
          resp.on('data', (chunk) => (data += chunk));
          resp.on('end', () => resolve(data));
        })
        .on('error', (err) => reject(err));
    });

  const extractSource = (html) => {
    const match = html.match(/source:\s*['"]([^'"]+)['"]/);
    return match ? match[1] : null;
  };

  const targetUrl = `https://bostacdn.global.ssl.fastly.net/sliv/play.php?id=${id}`;

  try {
    const page = await fetchPage(targetUrl);
    const sourceUrl = extractSource(page);

    if (!sourceUrl) {
      res.status(500).send('Source URL not found');
      return;
    }

  const redirectedUrl = sourceUrl.replace(
  /^https:\/\/yflix\.top/,
  'https://bostacdn.global.ssl.fastly.net'
  );

    res.writeHead(302, { Location: redirectedUrl });
    res.end();
  } catch (e) {
    res.status(500).send('Error: ' + e.message);
  }
}
