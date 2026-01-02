'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faHeart,
  faBell,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import '../styles/bottomNav.css'

const Icon = memo(FontAwesomeIcon)

const NAV_ITEMS = [
  { id: 'home', icon: faHome, path: '/home' },
  { id: 'likes', icon: faHeart, path: '/likes' },
  { id: 'notifications', icon: faBell, path: '/notifications' },
  { id: 'profile', icon: faUser, path: '/profile' },
]

export default memo(function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path

        return (
          <Link
            key={item.id}
            href={item.path}
            prefetch
            className={`nav-item ${isActive ? 'active' : ''}`}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.08 }}
            >
              <Icon icon={item.icon} className="nav-icon" />
              {isActive && (
                <div className="nav-indicator" />
              )}
            </motion.div>
          </Link>
        )
      })}
    </nav>
  )
})
