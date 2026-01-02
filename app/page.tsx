'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/auth')
  }, [router])

  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <p className="text-white text-sm opacity-80 animate-pulse">
        Redirecting…
      </p>
    </main>
  )
}
