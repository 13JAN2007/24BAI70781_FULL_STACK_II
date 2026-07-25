import { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [storedUser, setStoredUser] = useLocalStorage('campushub-user', null)
  const [currentUser, setCurrentUser] = useState(storedUser)

  useEffect(() => {
    setCurrentUser(storedUser)
  }, [storedUser])

  const handleLogin = (user) => {
    setStoredUser(user)
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setStoredUser(null)
    setCurrentUser(null)
  }

  return currentUser ? (
    <Dashboard user={currentUser} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  )
}

export default App
