'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import '../../styles/onboarding.css'

const interests = [
  'Music', 'Movies', 'Writing', 'Travel', 'Night walks',
  'Reading', 'Photography', 'Art', 'Cooking', 'Sports',
  'Gaming', 'Dancing', 'Yoga', 'Meditation', 'Poetry'
]

export default function InterestsPage() {
  const router = useRouter()
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedInterests.length >= 3) {
      // Save to localStorage or context
      router.push('/onboarding/message')
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
          <h1 className="onboarding-title">Your Interests</h1>
          <p className="onboarding-subtitle">Select at least 3 interests</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`interest-button glass ${
                  selectedInterests.includes(interest) ? 'active' : ''
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {interest}
              </motion.button>
            ))}
          </div>

          <motion.button
            type="submit"
            className="onboarding-button gradient-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={selectedInterests.length < 3}
          >
            Continue ({selectedInterests.length}/3)
          </motion.button>
        </form>
      </div>
    </div>
  )
}

