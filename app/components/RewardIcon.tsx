'use client'

import { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default memo(function RewardIcon() {
  return (
    <div className="reward-icon-container">
      <FontAwesomeIcon icon={faStar} className="reward-icon" />
    </div>
  )
})
