import Link from "next/link"
import { Ruler, Weight, FlaskRoundIcon as Flask, Hash, Thermometer, Grid, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  const icons: Record<string, LucideIcon> = {
    Ruler,
    Weight,
    Flask,
    Hash,
    Thermometer,
    Grid,
  }

  const IconComponent = icons[icon]

  return (
    <Link href={href}>
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-blue-100 dark:bg-blue-950 p-2 rounded-full">
            <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
