export const config = { runtime: 'edge' };

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing 'id' query parameter" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Step 1: Fetch the player HTML
    const playerUrl = `https://aynaxbosta.global.ssl.fastly.net/test/player.php?play=${encodeURIComponent(id)}`;
    const html = await fetch(playerUrl).then(r => r.text());

    // Step 2: Extract the live.php link using RegExp
    const match = html.match(/live\.php\?id=[^"'&<> ]+[^"'<>]*/i);
    if (!match) {
      return new Response(JSON.stringify({ error: "No live.php link found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Step 3: Construct the full redirect URL
    const liveUrl = `https://aynaxbosta.global.ssl.fastly.net/test/${match[0]}`;

    // Step 4: Return a 302 redirect
    return new Response(null, {
      status: 302,
      headers: { Location: liveUrl },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error", details: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
