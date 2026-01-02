'use client'

import { useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/messageCard.css'

interface MessageCardProps {
  message: {
    id: number
    message: string
    username: string
    age: number
    gender: string
    interests: string[]
  }
  onLike: () => void
  onSkip: () => void
}

export default memo(function MessageCard({ message, onLike, onSkip }: MessageCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [canInteract, setCanInteract] = useState(false)

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true)
      setTimeout(() => setCanInteract(true), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.4 }}
      className="message-card-container"
    >
      <motion.div
        className={`message-card glass-strong ${isRevealed ? 'revealed' : ''}`}
        onClick={handleReveal}
        whileHover={!isRevealed ? { scale: 1.02 } : {}}
        whileTap={!isRevealed ? { scale: 0.98 } : {}}
      >
        {!isRevealed ? (
          <motion.div
            className="message-blurred"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="blur-overlay"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="blur-hint glass"
              >
                Tap to reveal message
              </motion.p>
              <div className="blur-effect"></div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="message-content"
          >
            <motion.div
              className="message-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p
                className="message-quote"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {message.message}
              </motion.p>
            </motion.div>

            <motion.div
              className="message-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="user-info">
                <span className="username">{message.username}</span>
                <span className="user-details">
                  {message.age} • {message.gender}
                </span>
              </div>

              <div className="interests">
                {message.interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="interest-tag glass"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {!canInteract && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wait-indicator glass"
              >
                <p>Take a moment to feel the connection...</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>

      {isRevealed && canInteract && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="interaction-hint"
        >
          <p>You can now like or skip</p>
        </motion.div>
      )}
    </motion.div>
  )
})
