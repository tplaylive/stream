export default async function handler(req, res) {
  const headers = req.headers;
  const referer = headers.referer || 'No Referer';
  const origin = headers.origin || 'No Origin';
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  const log = `
==============================
Time: ${new Date().toISOString()}
IP: ${ip}
Origin: ${origin}
Referer: ${referer}
Headers: ${JSON.stringify(headers, null, 2)}
==============================\n
  `;

  console.log(log); // goes to Vercel logs
  res.status(200).send('Logged.');
}
