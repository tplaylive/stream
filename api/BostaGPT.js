const https = require('https');

module.exports = (req, res) => {
  const { text } = req.query;

  if (!text) {
    res.status(400).json({ error: 'Missing `text` query parameter' });
    return;
  }

  // Use the environment variable instead of hardcoding the key
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'API_KEY is not set in environment variables' });
    return;
  }

  const data = JSON.stringify({
    contents: [
      {
        parts: [
          { text }
        ]
      }
    ]
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    path: `/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  const apiReq = https.request(options, apiRes => {
    const chunks = [];

    apiRes.on('data', chunk => {
      chunks.push(chunk);
    });

    apiRes.on('end', () => {
      try {
        const buffer = Buffer.concat(chunks);
        const responseData = buffer.toString('utf-8');
        const result = JSON.parse(responseData);
        res.status(200).json(result);
      } catch (err) {
        res.status(500).json({ error: 'Failed to parse API response', details: err.message });
      }
    });
  });

  apiReq.on('error', error => {
    res.status(500).json({ error: 'Request failed', details: error.message });
  });

  apiReq.write(data);
  apiReq.end();
};
