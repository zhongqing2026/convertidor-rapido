"use client"

import { useState, useEffect, type ReactNode } from "react"

interface LazyComponentProps {
  children: ReactNode
  threshold?: number
}

export function LazyComponent({ children, threshold = 0.1 }: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, threshold])

  return (
    <div ref={setRef} className="min-h-[20px]">
      {isVisible ? children : <div className="animate-pulse bg-gray-200 dark:bg-gray-800 h-20 rounded-md" />}
    </div>
  )
}
