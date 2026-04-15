import React, { createContext, useContext, useEffect, useState } from 'react'
import { login as apiLogin, logout as apiLogout, getStoredUser } from '@/services/api'

type User = {
    id: number
    name: string
    email: string
}

type AuthContextType = {
    user: User | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getStoredUser()
            .then(setUser)
            .finally(() => setLoading(false))
    }, [])

    const login = async (email: string, password: string) => {
        const data = await apiLogin(email, password)
        setUser(data.user)
    }

    const logout = async () => {
        await apiLogout()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}