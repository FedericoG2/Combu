import { createContext, useContext, useEffect, useState } from 'react'
import { mockCredentials, mockProfile } from '../data'

const AuthContext = createContext(null)
const SESSION_KEY = 'combu_mock_session'

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(SESSION_KEY)
    if (stored === 'true') {
      setSession({ user: { id: mockProfile.id, email: mockCredentials.email } })
      setProfile(mockProfile)
    }
    setLoading(false)
  }, [])

  async function signIn(email, password) {
    await new Promise((resolve) => setTimeout(resolve, 400))

    if (email !== mockCredentials.email || password !== mockCredentials.password) {
      throw new Error('Invalid login credentials')
    }

    localStorage.setItem(SESSION_KEY, 'true')
    setSession({ user: { id: mockProfile.id, email: email.trim() } })
    setProfile(mockProfile)
  }

  async function signOut() {
    localStorage.removeItem(SESSION_KEY)
    setSession(null)
    setProfile(null)
  }

  return (
    <AuthContext.Provider value={{ session, profile, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider')
  }
  return context
}
