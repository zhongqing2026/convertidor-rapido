import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="py-12 md:py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        <span className="text-blue-600 dark:text-blue-400">ConvertidorRapido</span>.org
      </h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
        Conversiones de Unidades Rápidas y Precisas
      </p>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
        Herramientas de conversión online diseñadas específicamente para el público de habla hispana. Convierte pulgadas
        a mm, cm a pulgadas, gramos a onzas y más de forma rápida, precisa y sin complicaciones.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/herramientas">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Ver Todas las Herramientas
          </Button>
        </Link>
        <Link href="/longitud/pulgadas-a-mm">
          <Button variant="outline" className="px-6 py-2 rounded-md">
            Convertidor Pulgadas a MM
          </Button>
        </Link>
      </div>
    </div>
  )
}
