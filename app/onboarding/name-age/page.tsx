'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import '../../styles/onboarding.css'

export default function NameAgePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    age: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save to localStorage or context
    router.push('/onboarding/interests')
  }

  return (
    <div className="onboarding-page">
      <div className="onboarding-content glass-strong">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="onboarding-header"
        >
          <h1 className="onboarding-title">Tell us about yourself</h1>
          <p className="onboarding-subtitle">We need some basic information</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input glass"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Your Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="form-input glass"
              min="18"
              max="100"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="onboarding-button gradient-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!formData.name || !formData.age}
          >
            Continue
          </motion.button>
        </form>
      </div>
    </div>
  )
}

