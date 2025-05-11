"use client"

import { useState, useEffect } from "react"
import { List } from "lucide-react"

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    // Encontrar todos los encabezados h2 y h3 en la página
    const elements = Array.from(document.querySelectorAll("h2, h3"))

    const items: TOCItem[] = elements.map((element) => {
      // Asegurarse de que cada encabezado tenga un id
      if (!element.id) {
        element.id = element.textContent?.trim().toLowerCase().replace(/\s+/g, "-") || ""
      }

      return {
        id: element.id,
        text: element.textContent || "",
        level: element.tagName === "H2" ? 2 : 3,
      }
    })

    setHeadings(items)

    // Configurar el observador de intersección para detectar qué encabezado está visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  if (headings.length < 3) return null // No mostrar si hay pocos encabezados

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
      <div className="flex items-center mb-3">
        <List className="h-5 w-5 mr-2" />
        <h4 className="font-medium">Contenido</h4>
      </div>
      <nav>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id} className={`${heading.level === 3 ? "ml-4" : ""}`}>
              <a
                href={`#${heading.id}`}
                className={`block py-1 text-sm hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeId === heading.id
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
