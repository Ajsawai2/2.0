'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BottomNav from '../components/BottomNav'
import Logo from '../components/Logo'
import RewardIcon from '../components/RewardIcon'
import '../styles/profile.css'

export default function ProfilePage() {
  const [user] = useState({
    name: 'John Doe',
    age: 28,
    gender: 'Male',
    message: 'Sometimes the deepest connections happen in the spaces between words.',
    interests: ['Writing', 'Music', 'Travel', 'Poetry'],
    stats: {
      likes: 12,
      matches: 5,
      messages: 8
    }
  })

  return (
    <div className="profile-container">
      <div className="profile-header">
        <Logo />
        <RewardIcon />
      </div>
      
      <div className="profile-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="profile-card glass-strong"
        >
          <div className="profile-avatar">
            <div className="avatar-circle">
              {user.name.charAt(0)}
            </div>
          </div>
          
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-details">{user.age} • {user.gender}</p>
          </div>

          <div className="profile-message">
            <p className="profile-quote">"{user.message}"</p>
          </div>

          <div className="profile-interests">
            <h3 className="interests-title">Interests</h3>
            <div className="interests-list">
              {user.interests.map((interest, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="profile-interest"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">{user.stats.likes}</span>
              <span className="stat-label">Likes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{user.stats.matches}</span>
              <span className="stat-label">Matches</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{user.stats.messages}</span>
              <span className="stat-label">Messages</span>
            </div>
          </div>

          <motion.button
            className="edit-profile-button glass"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Edit Profile
          </motion.button>
        </motion.div>
      </div>
      
      <BottomNav activeTab="profile" />
    </div>
  )
}
