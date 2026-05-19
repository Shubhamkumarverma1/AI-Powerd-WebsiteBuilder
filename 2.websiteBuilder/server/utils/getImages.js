export const getImages = async (keyword, count = 8) => {
    const res = await fetch(
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=${count}`,
        { headers: { Authorization: process.env.PEXELS_API_KEY } }
    )
    const data = await res.json()
    return data.photos.map(p => p.src.large)
}