import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedItem {
  title: string
  description: string
  href: string
}

interface RelatedContentProps {
  title?: string
  items: RelatedItem[]
}

export function RelatedContent({ title = "Contenido relacionado", items }: RelatedContentProps) {
  if (items.length === 0) return null

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block p-6 border rounded-lg hover:border-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
              Leer más <ArrowRight className="h-4 w-4 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
