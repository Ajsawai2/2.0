'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import BottomNav from '../components/BottomNav'
import Logo from '../components/Logo'
import RewardIcon from '../components/RewardIcon'
import '../styles/notifications.css'

// Mock notifications
const notifications = [
  {
    id: 1,
    type: 'match',
    message: 'You have a new match!',
    username: 'SilentSoul',
    time: '5 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'like',
    message: 'Someone liked your message',
    username: 'MidnightThinker',
    time: '2 hours ago',
    read: false
  },
  {
    id: 3,
    type: 'match',
    message: 'You have a new match!',
    username: 'DeepConnector',
    time: '1 day ago',
    read: true
  }
]

export default function NotificationsPage() {
  const [notifs] = useState(notifications)

  return (
    <div className="notifications-container">
      <div className="notifications-header">
        <Logo />
        <RewardIcon />
      </div>
      
      <div className="notifications-content">
        <h2 className="notifications-title">Notifications</h2>
        {notifs.length === 0 ? (
          <div className="empty-notifications">
            <p>No notifications yet</p>
            <span>Your notifications will appear here</span>
          </div>
        ) : (
          <div className="notifications-list">
            {notifs.map((notif, index) => (
              <motion.div
                key={notif.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`notification-item glass-strong ${!notif.read ? 'unread' : ''}`}
              >
                <div className="notification-icon">
                  <FontAwesomeIcon 
                    icon={notif.type === 'match' ? faUserGroup : faHeart} 
                    className="notification-icon-svg"
                  />
                </div>
                <div className="notification-text">
                  <p className="notification-message">{notif.message}</p>
                  <span className="notification-user">{notif.username}</span>
                  <span className="notification-time">{notif.time}</span>
                </div>
                {!notif.read && <div className="notification-dot"></div>}
              </motion.div>
            ))}
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  )
}
