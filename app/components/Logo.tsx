'use client'

import { memo } from 'react'

export default memo(function Logo() {
  return (
    <div className="logo-container">
      <svg
        width="80"
        height="24"
        viewBox="0 0 80 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-image"
      >
        <text x="0" y="18" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="white">LAFZO</text>
      </svg>
    </div>
  )
})
