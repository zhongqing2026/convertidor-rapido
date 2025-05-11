import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import Script from "next/script"

interface Breadcrumb {
  name: string
  href: string
}

interface EnhancedBreadcrumbsProps {
  items: Breadcrumb[]
  currentPage: string
}

export function EnhancedBreadcrumbs({ items, currentPage }: EnhancedBreadcrumbsProps) {
  // Construir el array completo incluyendo la página actual
  const allItems = [{ name: "Inicio", href: "/" }, ...items]

  // Crear el JSON-LD para breadcrumbs
  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `https://convertidorrapido.org${item.href}`,
      }))
      .concat({
        "@type": "ListItem",
        position: allItems.length + 1,
        name: currentPage,
      }),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-sm mb-6 text-gray-500 dark:text-gray-400">
        <ol className="list-none p-0 inline-flex items-center flex-wrap">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <Link href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                {item.name}
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
            </li>
          ))}
          <li className="text-blue-600 dark:text-blue-400" aria-current="page">
            {currentPage}
          </li>
        </ol>
      </nav>

      <Script id="breadcrumbs-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbsJsonLd)}
      </Script>
    </>
  )
}
