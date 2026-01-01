'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHeart, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/bottomNav.css'

interface BottomNavProps {
  activeTab: 'home' | 'likes' | 'notifications' | 'profile'
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  const pathname = usePathname()

  const navItems = [
    { 
      id: 'home', 
      label: 'HOME', 
      icon: faHome,
      path: '/home' 
    },
    { 
      id: 'likes', 
      label: 'LIKES', 
      icon: faHeart,
      path: '/likes' 
    },
    { 
      id: 'notifications', 
      label: 'NOTIFICATIONS', 
      icon: faBell,
      path: '/notifications' 
    },
    { 
      id: 'profile', 
      label: 'PROFILE', 
      icon: faUser,
      path: '/profile' 
    }
  ]

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = activeTab === item.id
        return (
          <Link key={item.id} href={item.path}>
            <motion.div
              className={`nav-item ${isActive ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={item.icon} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
              {isActive && (
                <motion.div
                  className="nav-indicator"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        )
      })}
    </nav>
  )
}
