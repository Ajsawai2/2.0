import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../styles/Onboarding.css'

function Onboarding({ onComplete }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    gender: '',
    age: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onComplete(formData)
    navigate('/feed')
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="onboarding-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="onboarding-content"
      >
        <div className="onboarding-header">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="onboarding-title"
          >
            Welcome to Emotion Match
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="onboarding-subtitle"
          >
            Connect through words, not photos
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
          className="onboarding-form glass-strong"
        >
          <div className="form-step">
            <label className="form-label">Choose a username</label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              placeholder="Your unique name"
              className="form-input glass"
              required
            />
          </div>

          <div className="form-step">
            <label className="form-label">Select your gender</label>
            <div className="gender-options">
              {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map((option) => (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => handleChange('gender', option)}
                  className={`gender-option glass ${formData.gender === option ? 'active' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="form-step">
            <label className="form-label">Your age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
              placeholder="Age"
              min="18"
              max="100"
              className="form-input glass"
              required
            />
          </div>

          <div className="form-step">
            <label className="form-label">
              Share your emotional message
              <span className="label-hint">(Poetry, thought, feeling - one paragraph)</span>
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="कभी-कभी खामोशी भी बहुत कुछ कह जाती है...&#10;&#10;Write from your heart..."
              className="form-textarea glass"
              rows="6"
              required
            />
          </div>

          <div className="privacy-notice glass-subtle">
            <p>
              <strong>Privacy Notice:</strong> If you match with someone, your contact info may be shared.
              This builds trust from day one.
            </p>
          </div>

          <motion.button
            type="submit"
            className="submit-button gradient-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!formData.username || !formData.gender || !formData.age || !formData.message}
          >
            Begin Your Journey
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Onboarding

