const URL =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=25&cryptocurrency_type=tokens&sort=total_supply&sort_dir=asc"

export async function GET() {
    const res = await fetch(URL, {
        method: "GET",
        headers: {
            "X-CMC_PRO_API_KEY": process.env.API_KEY ?? "",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    })
    const data = await res.json()

    return Response.json({ data })
}
