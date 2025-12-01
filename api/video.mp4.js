export default async function handler(req, res) {
  try {
    const range = req.headers.range || '';
    const response = await fetch('https://bostaflix.vercel.app/video.mp4', {
      headers: range ? { Range: range } : {},
    });

    // Copy headers safely
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    res.status(response.status);

    // Convert Web ReadableStream → Node stream
    const reader = response.body.getReader();
    const encoder = new TextEncoder();

    const streamToNode = async () => {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(Buffer.from(value));
      }
      res.end();
    };

    await streamToNode();
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy failed');
  }
}
