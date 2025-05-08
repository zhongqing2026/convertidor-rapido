import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "small" | "footer"
  showText?: boolean
}

export function Logo({ variant = "default", showText = true }: LogoProps) {
  const sizes = {
    default: { width: 40, height: 40 },
    small: { width: 32, height: 32 },
    footer: { width: 48, height: 48 },
  }

  const { width, height } = sizes[variant]

  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative">
        <Image
          src="/logo.png"
          alt="ConvertidorRapido Logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">ConvertidorRapido</span>
          <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">.org</span>
        </div>
      )}
    </Link>
  )
}
