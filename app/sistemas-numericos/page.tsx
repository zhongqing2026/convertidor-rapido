import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convertidor de Números Romanos | ConvertidorRapido.org",
  description:
    "Convertidor rápido de números romanos a arábigos y viceversa. Herramienta precisa y fácil de usar para transformar entre sistemas numéricos.",
  keywords:
    "convertidor numeros romanos, convertidor romano a arabigo, convertidor arabigo a romano, numeros romanos, sistema numerico romano",
}

export default function SistemasNumericosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Convertidor de Números Romanos</h1>

      <div className="prose max-w-none dark:prose-invert mb-8">
        <p>
          Bienvenido a nuestra sección de conversión de sistemas numéricos. Aquí encontrarás herramientas precisas para
          convertir entre números romanos y arábigos. Nuestro convertidor rápido te permite realizar conversiones
          instantáneas con resultados precisos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Números Romanos"
          description="Convertidor de números romanos a arábigos y viceversa. Herramienta completa con explicación de reglas."
          icon="Hash"
          href="/sistemas-numericos/numeros-romanos"
        />
      </div>

      <div className="mt-12 prose max-w-none dark:prose-invert">
        <h2>Convertidor Rápido de Números Romanos</h2>
        <p>
          Nuestro <strong>convertidor de números romanos</strong> está diseñado para ofrecer resultados precisos de
          manera instantánea. Te permite transformar números arábigos (1, 2, 3...) a números romanos (I, II, III...) y
          viceversa con total exactitud.
        </p>
        <p>
          La herramienta incluye validación de entrada para asegurar que los números romanos cumplen con las reglas
          tradicionales de este sistema numérico, como la no repetición de ciertos símbolos o las reglas de sustracción.
        </p>
        <p>
          Además de la conversión, proporcionamos información detallada sobre la historia de los números romanos, sus
          reglas de formación y ejemplos prácticos para facilitar tu comprensión de este sistema numérico clásico.
        </p>
        <p>
          Esta herramienta es ideal para estudiantes, profesores, historiadores o cualquier persona que necesite
          trabajar con números romanos en documentos, fechas históricas o proyectos educativos.
        </p>
      </div>
    </div>
  )
}
