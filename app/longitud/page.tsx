import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convertidor de Longitud | Pulgadas a mm, cm a pulgadas y más | ConvertidorRapido.org",
  description:
    "Convertidor rápido de unidades de longitud: pulgadas a mm, cm a pulgadas, mm a pulgadas, pulgadas a cm, metros a pulgadas y más. Herramientas precisas y fáciles de usar.",
  keywords:
    "convertidor longitud, convertidor pulgadas a mm, convertidor cm a pulgadas, convertidor mm a pulgadas, convertidor pulgadas a cm, convertidor pulgadas a metros, convertidor metros a pulgadas, convertidor pulgadas a pies",
}

export default function LongitudPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Convertidor de Unidades de Longitud</h1>

      <div className="prose max-w-none dark:prose-invert mb-8">
        <p>
          Bienvenido a nuestra sección de conversión de longitud. Aquí encontrarás herramientas precisas para convertir
          entre diferentes unidades de longitud como pulgadas, milímetros, centímetros, metros y pies. Nuestro
          convertidor rápido te permite realizar conversiones instantáneas con resultados precisos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Pulgadas a Milímetros"
          description="Convertidor pulgadas a mm rápido y preciso. Convierte pulgadas a milímetros con facilidad."
          icon="Ruler"
          href="/longitud/pulgadas-a-mm"
        />
        <CategoryCard
          title="CM a Pulgadas"
          description="Convertidor de cm a pulgadas con resultados exactos. Transforma centímetros a pulgadas al instante."
          icon="Ruler"
          href="/longitud/cm-a-pulgadas"
        />
        <CategoryCard
          title="Milímetros a Pulgadas"
          description="Convertidor de milímetros a pulgadas y mm a pulgadas preciso. Ideal para trabajos técnicos."
          icon="Ruler"
          href="/longitud/mm-a-pulgadas"
        />
        <CategoryCard
          title="Pulgadas a Centímetros"
          description="Convertidor de pulgadas a centímetros exacto. Transforma medidas imperiales a métricas."
          icon="Ruler"
          href="/longitud/pulgadas-a-cm"
        />
        <CategoryCard
          title="Pulgadas a Metros"
          description="Convertidor de pulgadas a metros para medidas más grandes. Conversión precisa y rápida."
          icon="Ruler"
          href="/longitud/pulgadas-a-metros"
        />
        <CategoryCard
          title="Metros a Pulgadas"
          description="Convertidor de metros a pulgadas eficiente. Transforma del sistema métrico al imperial."
          icon="Ruler"
          href="/longitud/metros-a-pulgadas"
        />
        <CategoryCard
          title="Pulgadas a Pies"
          description="Convertidor de pulgadas a pies para medidas imperiales. Ideal para construcción y arquitectura."
          icon="Ruler"
          href="/longitud/pulgadas-a-pies"
        />
      </div>

      <div className="mt-12 prose max-w-none dark:prose-invert">
        <h2>Convertidor Rápido de Unidades de Longitud</h2>
        <p>
          Nuestras herramientas de conversión de longitud están diseñadas para ofrecer resultados precisos de manera
          instantánea. Ya sea que necesites un <strong>convertidor pulgadas a mm</strong> para trabajos de precisión, un
          <strong> convertidor de cm a pulgadas</strong> para proyectos internacionales, o cualquier otra conversión de
          longitud, nuestras calculadoras te proporcionan resultados exactos.
        </p>
        <p>
          El <strong>convertidor de milímetros a pulgadas</strong> y <strong>convertidor de mm a pulgadas</strong> es
          especialmente útil para trabajos de mecánica y manufactura, mientras que el{" "}
          <strong>convertidor de pulgadas a centímetros</strong> y<strong> convertidor de pulgadas a metros</strong>{" "}
          facilita la conversión entre sistemas de medición.
        </p>
        <p>
          Para quienes trabajan con el sistema imperial, nuestro <strong>convertidor de metros a pulgadas</strong> y
          <strong> convertidor de pulgadas a pies</strong> resulta indispensable para realizar conversiones precisas sin
          complicaciones.
        </p>
        <p>
          Todas nuestras herramientas incluyen información detallada sobre las unidades, fórmulas de conversión y tablas
          de referencia para facilitar tu comprensión y uso.
        </p>
      </div>
    </div>
  )
}
