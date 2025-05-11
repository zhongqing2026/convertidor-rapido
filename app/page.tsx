import { CategoryCard } from "@/components/category-card"
import { HeroSection } from "@/components/hero-section"
import { FaqSection } from "@/components/faq-section"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "ConvertidorRapido.org | Conversiones de unidades rápidas y precisas",
  description:
    "Convertidor rápido de unidades online: pulgadas a mm, cm a pulgadas, gramos a onzas, litros a kilos y números romanos. Herramientas gratuitas y precisas para todo tipo de conversiones.",
  keywords:
    "convertidor rapido, convertidor de unidades, convertidor online, convertidor pulgadas a mm, convertidor cm a pulgadas, convertidor gramos a onzas, convertidor litros a kilos, convertidor numeros romanos, conversor medidas, calculadora unidades",
}

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <HeroSection />

        <section className="py-12">
          <h2 className="text-2xl font-bold text-center mb-8">Categorías de Conversión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryCard
              title="Longitud"
              description="Conversiones entre pulgadas, centímetros, milímetros, metros y más. Convertidor pulgadas a mm, cm a pulgadas y otras medidas."
              icon="Ruler"
              href="/longitud"
            />
            <CategoryCard
              title="Peso/Masa"
              description="Conversiones entre gramos, kilogramos, libras, onzas y más. Convertidor de unidades de peso y masa para todas tus necesidades."
              icon="Weight"
              href="/peso"
            />
            <CategoryCard
              title="Volumen/Peso"
              description="Conversiones entre volumen y peso usando densidad. Convertidor de gramos a mililitros, litros a kilos y más."
              icon="Flask"
              href="/volumen-peso"
            />
            <CategoryCard
              title="Sistemas Numéricos"
              description="Conversiones entre números romanos y arábigos. Convertidor de números romanos rápido y preciso."
              icon="Hash"
              href="/sistemas-numericos"
            />
            <CategoryCard
              title="Temperatura"
              description="Conversiones entre Celsius, Fahrenheit y Kelvin. Convertidor de temperatura preciso y fácil de usar."
              icon="Thermometer"
              href="/temperatura"
            />
            <CategoryCard
              title="Divisas"
              description="Conversiones entre diferentes monedas como USD a EUR. Convertidor de divisas con tasas de cambio en tiempo real."
              icon="Banknote"
              href="/divisas"
            />
            <CategoryCard
              title="Todas las Herramientas"
              description="Ver todas las herramientas de conversión disponibles en nuestro convertidor rápido online."
              icon="Grid"
              href="/herramientas"
            />
          </div>
        </section>

        <section className="py-12 bg-blue-50 rounded-lg p-8 dark:bg-blue-950/30">
          <h2 className="text-2xl font-bold mb-4 text-center">¿Por qué usar ConvertidorRapido.org?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Rápido</h3>
              <p>Conversiones instantáneas sin necesidad de recargar la página.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Preciso</h3>
              <p>Resultados exactos con fórmulas matemáticas verificadas.</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">Fácil de Usar</h3>
              <p>Interfaz intuitiva diseñada para todos los usuarios.</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Conversiones Populares</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Pulgadas a Milímetros", href: "/longitud/pulgadas-a-mm", desc: "Convertidor pulgadas a mm" },
              { name: "Centímetros a Pulgadas", href: "/longitud/cm-a-pulgadas", desc: "Convertidor de cm a pulgadas" },
              { name: "Gramos a Onzas", href: "/peso/gramos-a-onzas", desc: "Convertidor de gramos a onzas" },
              { name: "Litros a Kilos", href: "/volumen-peso/litros-a-kilos", desc: "Convertidor de litros a kilos" },
              {
                name: "Números Romanos",
                href: "/sistemas-numericos/numeros-romanos",
                desc: "Convertidor de números romanos",
              },
              {
                name: "Mililitros a Gramos",
                href: "/volumen-peso/mililitros-a-gramos",
                desc: "Convertidor de mililitros a gramos",
              },
            ].map((tool, i) => (
              <a
                key={i}
                href={tool.href}
                className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors text-center dark:hover:bg-gray-800"
                title={tool.desc}
                aria-label={tool.desc}
              >
                <span className="font-medium">{tool.name}</span>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{tool.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">¿Cómo Funciona?</h2>
          <div className="prose max-w-none dark:prose-invert">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Proceso Simple en 3 Pasos</h3>
                <ol className="space-y-4 list-decimal pl-5">
                  <li>
                    <strong>Selecciona la herramienta</strong> - Elige el tipo de conversión que necesitas entre
                    nuestras categorías: longitud, peso, volumen, temperatura o sistemas numéricos.
                  </li>
                  <li>
                    <strong>Introduce el valor</strong> - Ingresa el número que deseas convertir en el campo
                    correspondiente. Nuestro sistema acepta decimales y valores negativos cuando aplica.
                  </li>
                  <li>
                    <strong>Obtén el resultado</strong> - ¡Instantáneamente verás el resultado de tu conversión! Puedes
                    copiarlo con un solo clic o invertir las unidades para realizar la conversión inversa.
                  </li>
                </ol>
                <p className="mt-4">
                  Todas las conversiones se realizan en tiempo real, sin necesidad de recargar la página o esperar.
                  Nuestros algoritmos utilizan los factores de conversión más precisos para garantizar resultados
                  exactos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Características Principales</h3>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong>Conversiones precisas</strong> - Utilizamos fórmulas matemáticas exactas para todas nuestras
                    herramientas, desde <strong>pulgadas a mm</strong> hasta <strong>gramos a onzas</strong>.
                  </li>
                  <li>
                    <strong>Interfaz intuitiva</strong> - Diseño limpio y fácil de usar, optimizado tanto para
                    ordenadores como para dispositivos móviles.
                  </li>
                  <li>
                    <strong>Información educativa</strong> - Cada herramienta incluye explicaciones detalladas, fórmulas
                    y tablas de referencia para ayudarte a entender las conversiones.
                  </li>
                  <li>
                    <strong>Sin registro necesario</strong> - Accede a todas nuestras herramientas de forma gratuita,
                    sin necesidad de crear una cuenta o proporcionar datos personales.
                  </li>
                  <li>
                    <strong>Múltiples categorías</strong> - Desde <strong>convertidores de longitud</strong> como cm a
                    pulgadas hasta <strong>convertidores de temperatura</strong> como Celsius a Fahrenheit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <FaqSection />
        </section>
      </div>

      <Script id="homepage-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Convertidor de Longitud",
                "url": "https://convertidorrapido.org/longitud"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Convertidor de Peso",
                "url": "https://convertidorrapido.org/peso"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Convertidor de Volumen a Peso",
                "url": "https://convertidorrapido.org/volumen-peso"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Convertidor de Sistemas Numéricos",
                "url": "https://convertidorrapido.org/sistemas-numericos"
              },
              {
                "@type": "ListItem",
                "position": 5,
                "name": "Convertidor de Temperatura",
                "url": "https://convertidorrapido.org/temperatura"
              }
            ]
          }
        `}
      </Script>
    </>
  )
}
