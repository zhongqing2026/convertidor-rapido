"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

const categories = [
  {
    name: "Longitud",
    href: "/longitud",
    tools: [
      { name: "Pulgadas a Milímetros", href: "/longitud/pulgadas-a-mm" },
      { name: "CM a Pulgadas", href: "/longitud/cm-a-pulgadas" },
      { name: "Milímetros a Pulgadas", href: "/longitud/mm-a-pulgadas" },
      { name: "Pulgadas a Centímetros", href: "/longitud/pulgadas-a-cm" },
      { name: "Pulgadas a Metros", href: "/longitud/pulgadas-a-metros" },
      { name: "Metros a Pulgadas", href: "/longitud/metros-a-pulgadas" },
      { name: "Pulgadas a Pies", href: "/longitud/pulgadas-a-pies" },
    ],
  },
  {
    name: "Peso/Masa",
    href: "/peso",
    tools: [
      { name: "Convertidor General", href: "/peso/general" },
      { name: "Gramos a Onzas", href: "/peso/gramos-a-onzas" },
    ],
  },
  {
    name: "Volumen/Peso",
    href: "/volumen-peso",
    tools: [
      { name: "Gramos a Mililitros", href: "/volumen-peso/gramos-a-mililitros" },
      { name: "Onzas a Mililitros", href: "/volumen-peso/onzas-a-mililitros" },
      { name: "Litros a Kilos", href: "/volumen-peso/litros-a-kilos" },
      { name: "Mililitros a Gramos", href: "/volumen-peso/mililitros-a-gramos" },
    ],
  },
  {
    name: "Sistemas Numéricos",
    href: "/sistemas-numericos",
    tools: [{ name: "Números Romanos", href: "/sistemas-numericos/numeros-romanos" }],
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setOpenCategory(null)
  }

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName)
  }

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50 dark:bg-gray-950 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <Button
                  variant="ghost"
                  className="flex items-center gap-1"
                  onClick={() => toggleCategory(category.name)}
                >
                  {category.name}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <Link href="/herramientas">
              <Button variant="ghost">Todas las Herramientas</Button>
            </Link>
          </nav>

          <div className="flex items-center">
            <ThemeToggle />

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden ml-2" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {categories.map((category) => (
              <div key={category.name}>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => toggleCategory(category.name)}
                >
                  {category.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openCategory === category.name ? "rotate-180" : ""}`}
                  />
                </Button>

                {openCategory === category.name && (
                  <div className="pl-4 space-y-1 mt-1">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block py-2 px-3 text-base rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={toggleMenu}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/herramientas" onClick={toggleMenu}>
              <Button variant="ghost" className="w-full justify-start">
                Todas las Herramientas
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
