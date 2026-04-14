import * as SecureStore from 'expo-secure-store'

const BASE_URL = 'http://10.0.2.2:8000/api' 

async function getToken() {
    return await SecureStore.getItemAsync('auth_token')
}

async function request(path: string, options: RequestInit = {}) {
    const token = await getToken()
    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    })
    if (!res.ok) {
        const error = await res.json()
        throw new Error(error.message || 'Request failed')
    }
    return res.json()
}

export async function login(email: string, password: string) {
    const data = await request('/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
    })
    await SecureStore.setItemAsync('auth_token', data.token)
    await SecureStore.setItemAsync('auth_user', JSON.stringify(data.user))
    return data
}

export async function logout() {
    await request('/logout', { method: 'POST' })
    await SecureStore.deleteItemAsync('auth_token')
    await SecureStore.deleteItemAsync('auth_user')
}

export async function getStoredUser() {
    const user = await SecureStore.getItemAsync('auth_user')
    return user ? JSON.parse(user) : null
}

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