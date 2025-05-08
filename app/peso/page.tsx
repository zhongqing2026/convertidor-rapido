import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convertidor de Unidades de Peso y Masa | Gramos a onzas | ConvertidorRapido.org",
  description:
    "Convertidor rápido de unidades de peso y masa: gramos a onzas y más. Herramientas de conversión precisas para todas tus necesidades de medición de peso.",
  keywords:
    "convertidor unidades de peso, convertidor medidas de peso, convertidor unidades de masa, convertidor gramos a onzas, convertidor peso",
}

export default function PesoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Convertidor de Unidades de Peso y Masa</h1>

      <div className="prose max-w-none dark:prose-invert mb-8">
        <p>
          Bienvenido a nuestra sección de conversión de peso y masa. Aquí encontrarás herramientas precisas para
          convertir entre diferentes unidades como gramos, kilogramos, libras, onzas y más. Nuestro convertidor rápido
          te permite realizar conversiones instantáneas con resultados precisos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Convertidor General"
          description="Convertidor de unidades de peso y medidas de peso completo. Transforma entre múltiples unidades de masa."
          icon="Weight"
          href="/peso/general"
        />
        <CategoryCard
          title="Gramos a Onzas"
          description="Convertidor de gramos a onzas preciso. Ideal para cocina y mediciones precisas."
          icon="Weight"
          href="/peso/gramos-a-onzas"
        />
      </div>

      <div className="mt-12 prose max-w-none dark:prose-invert">
        <h2>Convertidor Rápido de Unidades de Peso</h2>
        <p>
          Nuestras herramientas de conversión de peso están diseñadas para ofrecer resultados precisos de manera
          instantánea. Ofrecemos un completo <strong>convertidor de unidades de peso</strong> y{" "}
          <strong>convertidor de medidas de peso</strong>
          que te permite transformar entre diferentes sistemas de medición.
        </p>
        <p>
          El <strong>convertidor de unidades de masa</strong> es especialmente útil para aplicaciones científicas y
          técnicas, mientras que nuestro <strong>convertidor de gramos a onzas</strong> resulta indispensable para
          cocina internacional y recetas que utilizan diferentes sistemas de medición.
        </p>
        <p>
          Todas nuestras herramientas incluyen información detallada sobre las unidades, fórmulas de conversión y tablas
          de referencia para facilitar tu comprensión y uso. Nuestro objetivo es proporcionar un convertidor rápido y
          preciso para todas tus necesidades de conversión de peso.
        </p>
      </div>
    </div>
  )
}
