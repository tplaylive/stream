export default async function handler(req, res) {
  const { masterUrl } = req.query;

  if (!masterUrl) {
    return res.status(400).send("Missing 'masterUrl' query parameter.");
  }

  try {
    // Fetch the master M3U8 playlist
    const masterResponse = await fetch(masterUrl);
    if (!masterResponse.ok) {
      return res.status(masterResponse.status).send("Failed to fetch master playlist.");
    }
    const masterPlaylist = await masterResponse.text();

    // Extract the base URL from the master URL
    const baseUrl = new URL(masterUrl).origin + new URL(masterUrl).pathname.replace(/\/[^/]*$/, "/");

    // Convert relative URLs to absolute URLs
    const modifiedPlaylist = masterPlaylist.replace(
      /^(?!#)([^#\n]+)/gm, // Match lines that are not comments (do not start with #)
      (relativePath) => new URL(relativePath, baseUrl).href
    );

    // Proxy the modified playlist back to the client
    res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
    res.status(200).send(modifiedPlaylist);
  } catch (error) {
    console.error("Error processing playlist:", error);
    res.status(500).send("An internal server error occurred.");
  }
}
