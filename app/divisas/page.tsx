import { CategoryCard } from "@/components/category-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convertidor de Divisas | Convertir USD a Euros y más | ConvertidorRapido.org",
  description:
    "Herramientas gratuitas para convertir divisas: dólar a euro, euro a dólar y más. Convertidores con tasas de cambio en tiempo real.",
  keywords:
    "convertir usd a euros, convertidor divisas, conversor monedas, cambio dolar euro, tipo de cambio, usd a eur, eur a usd, conversor divisas online",
}

export default function DivisasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Convertidor de Divisas - Convertir USD a Euros y más</h1>

      <div className="prose max-w-none dark:prose-invert mb-8">
        <p className="text-lg">
          Bienvenido a nuestra sección de conversión de divisas. Aquí encontrarás herramientas precisas para convertir
          entre diferentes monedas con tasas de cambio en tiempo real. Nuestro convertidor rápido te permite realizar
          conversiones instantáneas con resultados precisos.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Convertir USD a Euros"
          description="Convertidor de dólares a euros con tasas de cambio en tiempo real. Convierte USD a EUR de forma rápida y precisa."
          icon="Banknote"
          href="/divisas/usd-a-eur"
        />
        {/* Aquí se pueden agregar más convertidores de divisas en el futuro */}
      </div>

      <div className="mt-12 prose max-w-none dark:prose-invert">
        <h2>Convertidor Rápido de Divisas</h2>
        <p>
          Nuestras herramientas de conversión de divisas están diseñadas para ofrecer resultados precisos utilizando
          tasas de cambio en tiempo real. Ya sea que necesites <strong>convertir USD a euros</strong> para planificar un
          viaje, hacer compras internacionales o simplemente mantenerte informado sobre los tipos de cambio, nuestras
          calculadoras te proporcionan resultados exactos.
        </p>
        <p>
          El convertidor para <strong>convertir USD a euros</strong> es especialmente útil para quienes necesitan
          realizar transacciones entre Estados Unidos y la Eurozona, o para viajeros que desean conocer el valor de su
          dinero antes de viajar.
        </p>
        <p>
          Todas nuestras herramientas incluyen información detallada sobre las divisas, factores que afectan los tipos
          de cambio y explicaciones claras para facilitar tu comprensión de los mercados de divisas.
        </p>
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">¿Por qué usar nuestro convertidor para convertir USD a euros?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Ventajas principales</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tasas de cambio actualizadas en tiempo real</li>
              <li>Interfaz intuitiva y fácil de usar</li>
              <li>Conversión bidireccional entre divisas</li>
              <li>Información detallada sobre factores que afectan las tasas</li>
              <li>Herramienta completamente gratuita y sin registro</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Usos comunes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Planificación de viajes internacionales</li>
              <li>Compras en tiendas online extranjeras</li>
              <li>Negocios y transacciones internacionales</li>
              <li>Seguimiento de inversiones en diferentes divisas</li>
              <li>Educación financiera y conocimiento de mercados</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes sobre conversión de divisas</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold">¿Cómo puedo convertir USD a euros de forma precisa?</h3>
            <p>
              Para convertir USD a euros con precisión, utiliza nuestro convertidor que emplea tasas de cambio
              actualizadas. Simplemente ingresa la cantidad en dólares y obtendrás instantáneamente su equivalente en
              euros.
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-semibold">¿Con qué frecuencia se actualizan las tasas de cambio?</h3>
            <p>
              Nuestras tasas para convertir USD a euros y otras divisas se actualizan regularmente durante el día para
              reflejar los movimientos del mercado de divisas internacional.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">¿Puedo usar el convertidor para otras divisas además de USD a euros?</h3>
            <p>
              Actualmente ofrecemos la herramienta para convertir USD a euros, y estamos trabajando para añadir más
              pares de divisas próximamente. Mantente atento a nuestras actualizaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
