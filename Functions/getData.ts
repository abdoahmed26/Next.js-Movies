
export async function getData(api:string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTJlNzVlZjNiZjMzZDVlNzRmMjExZWRmNWUwYzQ5ZSIsInN1YiI6IjY2NmNlN2NjZjU1YTA1N2YzYTYxY2ViZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.efMkKg8-QFfIKMPRoGLdzyQFMCoaGOUbMj01rhIoUSo`,
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