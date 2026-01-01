'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
import BottomNav from '../components/BottomNav'
import MessageCard from '../components/MessageCard'
import Logo from '../components/Logo'
import RewardIcon from '../components/RewardIcon'
import '../styles/home.css'

// Mock data
const mockMessages = [
  {
    id: 1,
    message: "कभी-कभी खामोशी भी बहुत कुछ कह जाती है।",
    username: "SilentSoul",
    age: 25,
    gender: "Female",
    interests: ["Writing", "Music", "Night walks"]
  },
  {
    id: 2,
    message: "In the quiet hours, thoughts become poetry and silence becomes music.",
    username: "MidnightThinker",
    age: 28,
    gender: "Male",
    interests: ["Poetry", "Music", "Travel"]
  },
  {
    id: 3,
    message: "Sometimes the deepest connections happen in the spaces between words.",
    username: "DeepConnector",
    age: 30,
    gender: "Non-binary",
    interests: ["Writing", "Movies", "Travel"]
  }
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedCount, setLikedCount] = useState(0)

  const handleLike = () => {
    setLikedCount(prev => prev + 1)
    if (currentIndex < mockMessages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleSkip = () => {
    if (currentIndex < mockMessages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (currentIndex >= mockMessages.length) {
    return (
      <div className="home-container">
        <div className="home-header">
          <Logo />
          <RewardIcon />
        </div>
        <div className="empty-state glass-strong">
          <h2>You've seen all messages</h2>
          <p>Check back later for new connections</p>
        </div>
        <BottomNav activeTab="home" />
      </div>
    )
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <Logo />
        <RewardIcon />
      </div>

      <div className="home-content">
        <MessageCard
          message={mockMessages[currentIndex]}
          onLike={handleLike}
          onSkip={handleSkip}
        />
      </div>

      <div className="home-actions">
        <motion.button
          className="action-button skip-button glass"
          onClick={handleSkip}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faXmark} className="button-icon" />
          <span>Skip</span>
        </motion.button>
        <motion.button
          className="action-button like-button gradient-button"
          onClick={handleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faHeart} className="button-icon" />
          <span>Like</span>
        </motion.button>
      </div>

      <BottomNav activeTab="home" />
    </div>
  )
}

