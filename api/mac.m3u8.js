export default async function handler(req, res) {
    try {
        // Get the ID from the query parameter
        const { id } = req.query;
        if (!id) {
            return res.status(400).send("Missing 'id' parameter");
        }

        // Construct the M3U8 URL
        const m3u8Url = `https://starshare.live/live/KVSingh/KVSingh/${id}.m3u8`;
        
        // Fetch the M3U8 file
        const response = await fetch(m3u8Url);
        if (!response.ok) {
            return res.status(response.status).send("Failed to fetch M3U8 file");
        }
        const m3u8Content = await response.text();

        // Base URL to prepend to each link
        const baseUrl = "https://allinonereborn.com/test.m3u8/ts.php?ts=https://live6.ostv.pro/";
        
        // Modify the M3U8 content
        const modifiedM3U8 = m3u8Content.split('\n').map(line => {
            return line.startsWith("/") ? baseUrl + line.substring(1) : line;
        }).join('\n');

        // Return the modified M3U8
        res.setHeader("Content-Type", "application/vnd.apple.mpegurl");
        res.status(200).send(modifiedM3U8);
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
}
