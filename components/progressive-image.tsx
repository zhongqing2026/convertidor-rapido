"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ProgressiveImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  placeholder?: string
}

export function ProgressiveImage({
  src,
  alt,
  width,
  height,
  className = "",
  placeholder = "/placeholder.svg",
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState(placeholder)

  useEffect(() => {
    // Precargar la imagen
    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoading(false)
      setCurrentSrc(src)
    }
  }, [src])

  return (
    <div className="relative overflow-hidden">
      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${isLoading ? "opacity-50 blur-sm" : "opacity-100"} ${className}`}
        priority={false}
      />
    </div>
  )
}
