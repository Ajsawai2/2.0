'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BottomNav from '../components/BottomNav'
import Logo from '../components/Logo'
import RewardIcon from '../components/RewardIcon'
import '../styles/likes.css'

// Mock liked messages
const likedMessages = [
  {
    id: 1,
    message: "कभी-कभी खामोशी भी बहुत कुछ कह जाती है।",
    username: "SilentSoul",
    age: 25,
    gender: "Female",
    interests: ["Writing", "Music", "Night walks"],
    likedAt: "2 hours ago"
  },
  {
    id: 2,
    message: "In the quiet hours, thoughts become poetry and silence becomes music.",
    username: "MidnightThinker",
    age: 28,
    gender: "Male",
    interests: ["Poetry", "Music", "Travel"],
    likedAt: "1 day ago"
  }
]

export default function LikesPage() {
  const [likes] = useState(likedMessages)

  return (
    <div className="likes-container">
      <div className="likes-header">
        <Logo />
        <RewardIcon />
      </div>
      
      <div className="likes-content">
        <h2 className="likes-title">Your Likes</h2>
        {likes.length === 0 ? (
          <div className="empty-likes">
            <p>No likes yet</p>
            <span>Messages you like will appear here</span>
          </div>
        ) : (
          <div className="likes-list">
            {likes.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="liked-card glass-strong"
              >
                <p className="liked-message">{message.message}</p>
                <div className="liked-meta">
                  <div className="liked-user">
                    <span className="liked-username">{message.username}</span>
                    <span className="liked-details">{message.age} • {message.gender}</span>
                  </div>
                  <div className="liked-interests">
                    {message.interests.map((interest, i) => (
                      <span key={i} className="liked-interest">{interest}</span>
                    ))}
                  </div>
                  <span className="liked-time">{message.likedAt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  )
}
