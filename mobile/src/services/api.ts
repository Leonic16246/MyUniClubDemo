const BASE_URL = 'http://10.0.2.2:8000/api' 

export async function getPosts() {
    const res = await fetch(`${BASE_URL}/posts`)
    if (!res.ok) throw new Error('Failed to fetch posts')
    return res.json()
}

export async function getClubs() {
    const res = await fetch(`${BASE_URL}/clubs`)
    if (!res.ok) throw new Error('Failed to fetch clubs')
    return res.json()
}