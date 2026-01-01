import { useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/MessageCard.css'

function MessageCard({ message, onLike, onSkip }) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [canInteract, setCanInteract] = useState(false)

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true)
      // User must wait 2 seconds before they can like/skip
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
        className={`message-card glass-stronger ${isRevealed ? 'revealed' : ''}`}
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
                className="blur-hint"
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
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="message-content"
          >
            <motion.div
              className="message-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.p
                className="message-quote"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {message.message}
              </motion.p>
            </motion.div>

            <div className="message-meta">
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
                    transition={{ delay: index * 0.1 }}
                    className="interest-tag glass-subtle"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {!canInteract && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="wait-indicator"
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
}

export default MessageCard

