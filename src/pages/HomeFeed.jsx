import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MessageCard from '../components/MessageCard'
import '../styles/HomeFeed.css'

// Mock data - replace with API calls
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

function HomeFeed({ user }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedMessages, setLikedMessages] = useState([])

  const handleLike = () => {
    setLikedMessages([...likedMessages, mockMessages[currentIndex].id])
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
      <div className="feed-empty">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="empty-state glass-strong"
        >
          <h2>You've seen all messages for now</h2>
          <p>Check back later for new connections</p>
        </motion.div>
      </div>
    )
  }

  const currentMessage = mockMessages[currentIndex]

  return (
    <div className="feed-container">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="feed-header glass-strong"
      >
        <h1 className="feed-title">Emotion Match</h1>
        <div className="feed-stats">
          <span className="stat-item">
            <span className="stat-number">{likedMessages.length}</span>
            <span className="stat-label">Liked</span>
          </span>
        </div>
      </motion.header>

      <div className="feed-content">
        <AnimatePresence mode="wait">
          <MessageCard
            key={currentMessage.id}
            message={currentMessage}
            onLike={handleLike}
            onSkip={handleSkip}
          />
        </AnimatePresence>
      </div>

      <div className="feed-actions">
        <motion.button
          className="action-button skip-button glass"
          onClick={handleSkip}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="button-icon">✕</span>
          Skip
        </motion.button>
        <motion.button
          className="action-button like-button gradient-button"
          onClick={handleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="button-icon">❤️</span>
          Like
        </motion.button>
      </div>
    </div>
  )
}

export default HomeFeed

