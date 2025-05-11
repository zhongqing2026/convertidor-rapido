"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface SocialShareProps {
  title: string
  description?: string
  hashtags?: string[]
  className?: string
}

export function SocialShare({ title, description, hashtags = [], className = "" }: SocialShareProps) {
  const [url, setUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    toast({
      title: "Enlace copiado",
      description: "El enlace ha sido copiado al portapapeles",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnTwitter = () => {
    const hashtagsString = hashtags.length > 0 ? `&hashtags=${hashtags.join(",")}` : ""
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}${hashtagsString}`
    window.open(twitterUrl, "_blank")
  }

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(facebookUrl, "_blank")
  }

  const shareOnLinkedin = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedinUrl, "_blank")
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <span className="text-sm font-medium mr-2">Compartir:</span>
      <Button
        variant="outline"
        size="icon"
        onClick={shareOnTwitter}
        title="Compartir en Twitter"
        className="rounded-full"
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Compartir en Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={shareOnFacebook}
        title="Compartir en Facebook"
        className="rounded-full"
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Compartir en Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={shareOnLinkedin}
        title="Compartir en LinkedIn"
        className="rounded-full"
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Compartir en LinkedIn</span>
      </Button>
      <Button variant="outline" size="icon" onClick={handleCopyLink} title="Copiar enlace" className="rounded-full">
        {copied ? <Check className="h-4 w-4 text-green-600" /> : <Link2 className="h-4 w-4" />}
        <span className="sr-only">Copiar enlace</span>
      </Button>
    </div>
  )
}
