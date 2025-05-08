import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convertidor de Volumen a Peso | Gramos a ml, Litros a kilos | ConvertidorRapido.org",
  description:
    "Convertidor rápido entre volumen y peso: gramos a mililitros, onzas a mililitros, litros a kilos y mililitros a gramos según la densidad de diferentes sustancias.",
  keywords:
    "convertidor gramos a mililitros, convertidor onzas a mililitros, convertidor litros a kilos, convertidor mililitros a gramos, convertidor volumen peso, convertidor densidad",
}

export default function VolumenPesoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Convertidor de Volumen a Peso</h1>

      <div className="prose max-w-none dark:prose-invert mb-8">
        <p>
          Bienvenido a nuestra sección de conversión entre volumen y peso. Aquí encontrarás herramientas precisas para
          convertir entre unidades de volumen y peso considerando la densidad de diferentes sustancias. Nuestro
          convertidor rápido te permite realizar conversiones instantáneas con resultados precisos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Gramos a Mililitros"
          description="Convertidor de gramos a mililitros según la densidad de diferentes sustancias. Ideal para cocina y laboratorio."
          icon="Flask"
          href="/volumen-peso/gramos-a-mililitros"
        />
        <CategoryCard
          title="Onzas a Mililitros"
          description="Convertidor de onzas a mililitros preciso. Transforma peso en volumen considerando la densidad."
          icon="Flask"
          href="/volumen-peso/onzas-a-mililitros"
        />
        <CategoryCard
          title="Litros a Kilos"
          description="Convertidor de litros a kilos para diferentes sustancias. Conversión precisa según densidad."
          icon="Flask"
          href="/volumen-peso/litros-a-kilos"
        />
        <CategoryCard
          title="Mililitros a Gramos"
          description="Convertidor de mililitros a gramos exacto. Transforma volumen en peso según la sustancia."
          icon="Flask"
          href="/volumen-peso/mililitros-a-gramos"
        />
      </div>

      <div className="mt-12 prose max-w-none dark:prose-invert">
        <h2>Convertidor Rápido de Volumen a Peso</h2>
        <p>
          Nuestras herramientas de conversión entre volumen y peso están diseñadas para ofrecer resultados precisos
          considerando la densidad de diferentes sustancias. El <strong>convertidor de gramos a mililitros</strong> es
          especialmente útil para cocina y aplicaciones de laboratorio donde necesitas transformar masa en volumen.
        </p>
        <p>
          El <strong>convertidor de onzas a mililitros</strong> facilita la conversión entre sistemas de medición
          diferentes, mientras que el <strong>convertidor de litros a kilos</strong> resulta indispensable para cálculos
          industriales y logísticos.
        </p>
        <p>
          Nuestro <strong>convertidor de mililitros a gramos</strong> te permite transformar medidas de volumen en peso
          considerando la densidad específica de cada sustancia, desde agua hasta miel, aceite o alcohol.
        </p>
        <p>
          Todas nuestras herramientas incluyen información detallada sobre las densidades de sustancias comunes,
          fórmulas de conversión y explicaciones claras para facilitar tu comprensión y uso.
        </p>
      </div>
    </div>
  )
}
