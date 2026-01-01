import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import HomeFeed from './pages/HomeFeed'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <Routes>
          <Route path="/" element={<Onboarding onComplete={setUser} />} />
          <Route path="/feed" element={<HomeFeed user={user} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

