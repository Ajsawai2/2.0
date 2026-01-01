'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import '../../styles/onboarding.css'

export default function MessagePage() {
  const router = useRouter()
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.length >= 20) {
      // Save to localStorage or context
      router.push('/home')
    }
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-content glass-strong">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="onboarding-header"
        >
          <h1 className="onboarding-title">Your Best Message</h1>
          <p className="onboarding-subtitle">
            Share your thoughts, feelings, or poetry (at least 20 characters)
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="form-group">
            <textarea
              placeholder="कभी-कभी खामोशी भी बहुत कुछ कह जाती है...&#10;&#10;Write from your heart..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-textarea glass"
              rows={8}
              required
            />
            <p className="char-count">{message.length}/20 characters</p>
          </div>

          <motion.button
            type="submit"
            className="onboarding-button gradient-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={message.length < 20}
          >
            Complete Setup
          </motion.button>
        </form>
      </div>
    </div>
  )
}

