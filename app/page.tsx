'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in, if not redirect to login
    // For now, redirect to auth
    router.push('/auth')
  }, [router])

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      background: '#000'
    }}>
      <p style={{ color: '#fff' }}>Loading...</p>
    </div>
  )
}

