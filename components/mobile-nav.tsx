"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleEnhanced } from "@/components/theme-toggle-enhanced"
import { motion, AnimatePresence } from "framer-motion"

interface NavCategory {
  name: string
  href: string
  tools: { name: string; href: string }[]
}

interface MobileNavProps {
  categories: NavCategory[]
}

export function MobileNav({ categories }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setOpenCategory(null)
  }

  const toggleCategory = (categoryName: string) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName)
  }

  return (
    <div className="md:hidden">
      <div className="flex items-center">
        <ThemeToggleEnhanced />
        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menú">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-white dark:bg-gray-950 border-t dark:border-gray-800 mt-2">
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

                    <AnimatePresence>
                      {openCategory === category.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-1 mt-1">
                            {category.tools.map((tool) => (
                              <Link
                                key={tool.href}
                                href={tool.href}
                                className="flex items-center py-2 px-3 text-base rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                onClick={toggleMenu}
                              >
                                <ChevronRight className="h-4 w-4 mr-2" />
                                {tool.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link href="/herramientas" onClick={toggleMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Todas las Herramientas
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
