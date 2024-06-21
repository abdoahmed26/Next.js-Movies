
export async function getData(api:string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY as string}`,
        },
    };
    const res = await fetch(api,{...options,cache:"no-store"})
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

//Bearer ${process.env.TMDB_READ_ACCESS_KEY}