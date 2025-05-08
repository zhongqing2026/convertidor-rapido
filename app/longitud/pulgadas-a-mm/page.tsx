import { UnitConverter } from "@/components/unit-converter"
import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Convertidor de Pulgadas a Milímetros (in a mm) | ConvertidorRapido.org",
  description:
    "Convertidor rápido y preciso de pulgadas a milímetros (in a mm). Herramienta online gratuita con tabla de conversión y fórmulas para transformar pulgadas a mm.",
  keywords:
    "convertidor pulgadas a mm, pulgadas a milimetros, in a mm, conversion pulgadas milimetros, calculadora pulgadas mm, transformar pulgadas a milimetros, equivalencia pulgadas milimetros",
  alternates: {
    canonical: "https://convertidorrapido.org/longitud/pulgadas-a-mm",
  },
}

export default function PulgadasAMilimetrosPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm mb-6 text-gray-500 dark:text-gray-400">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Inicio
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="flex items-center">
                <Link href="/longitud" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Longitud
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mx-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </li>
              <li className="text-blue-600 dark:text-blue-400">Pulgadas a Milímetros</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Pulgadas a Milímetros</h1>

          <UnitConverter
            fromUnit="in"
            fromUnitLabel="Pulgadas (in)"
            toUnit="mm"
            toUnitLabel="Milímetros (mm)"
            conversionFactor={25.4}
            precision={2}
          />

          <div className="mt-12 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">¿Cómo convertir pulgadas a milímetros?</h2>
              <p>Para convertir pulgadas a milímetros, multiplica el valor en pulgadas por 25.4:</p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
                <p className="font-mono">Milímetros = Pulgadas × 25.4</p>
              </div>
              <p>Por ejemplo, para convertir 2 pulgadas a milímetros:</p>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
                <p className="font-mono">Milímetros = 2 × 25.4 = 50.8 mm</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Tabla de conversión de pulgadas a milímetros</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border px-4 py-2">Pulgadas (in)</th>
                      <th className="border px-4 py-2">Milímetros (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[0.125, 0.25, 0.5, 0.75, 1, 2, 3, 4, 5, 6, 12].map((inches) => (
                      <tr key={inches}>
                        <td className="border px-4 py-2 text-center">{inches}</td>
                        <td className="border px-4 py-2 text-center">{(inches * 25.4).toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
              <h3 className="font-semibold mt-4">Pulgada (in)</h3>
              <p>
                La pulgada es una unidad de longitud utilizada principalmente en los Estados Unidos, Canadá y el Reino
                Unido. Una pulgada equivale a exactamente 25.4 milímetros.
              </p>

              <h3 className="font-semibold mt-4">Milímetro (mm)</h3>
              <p>
                El milímetro es una unidad de longitud en el Sistema Internacional de Unidades (SI). Equivale a una
                milésima parte de un metro (1/1000 m).
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">¿Por qué usar nuestro convertidor pulgadas a mm?</h3>
              <p>
                Nuestro convertidor rápido de pulgadas a milímetros ofrece resultados precisos al instante. Es ideal
                para profesionales de la mecánica, carpintería, diseño y cualquier persona que necesite convertir entre
                sistemas de medición imperial y métrico con exactitud.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Conversiones relacionadas</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                <li>
                  <Link href="/longitud/mm-a-pulgadas" className="text-blue-600 hover:underline dark:text-blue-400">
                    Convertir de milímetros a pulgadas
                  </Link>
                </li>
                <li>
                  <Link href="/longitud/cm-a-pulgadas" className="text-blue-600 hover:underline dark:text-blue-400">
                    Convertir de centímetros a pulgadas
                  </Link>
                </li>
                <li>
                  <Link href="/longitud/pulgadas-a-cm" className="text-blue-600 hover:underline dark:text-blue-400">
                    Convertir de pulgadas a centímetros
                  </Link>
                </li>
                <li>
                  <Link href="/longitud/pulgadas-a-metros" className="text-blue-600 hover:underline dark:text-blue-400">
                    Convertir de pulgadas a metros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Script id="converter-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Convertidor de Pulgadas a Milímetros",
            "url": "https://convertidorrapido.org/longitud/pulgadas-a-mm",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
            },
            "description": "Herramienta online gratuita para convertir pulgadas a milímetros con precisión. Incluye tabla de conversión y fórmulas.",
            "inLanguage": "es",
            "potentialAction": {
              "@type": "ConvertAction",
              "object": {
                "@type": "QuantitativeValue",
                "unitCode": "INH",
                "unitText": "pulgadas"
              },
              "result": {
                "@type": "QuantitativeValue",
                "unitCode": "MMT",
                "unitText": "milímetros"
              }
            }
          }
        `}
      </Script>

      <Script id="howto-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cómo convertir pulgadas a milímetros",
            "description": "Guía paso a paso para convertir medidas de pulgadas a milímetros",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Identificar el valor en pulgadas",
                "text": "Determina el valor en pulgadas que deseas convertir a milímetros."
              },
              {
                "@type": "HowToStep",
                "name": "Multiplicar por el factor de conversión",
                "text": "Multiplica el valor en pulgadas por 25.4 para obtener el equivalente en milímetros."
              },
              {
                "@type": "HowToStep",
                "name": "Obtener el resultado",
                "text": "El resultado de la multiplicación es el valor equivalente en milímetros."
              }
            ],
            "tool": {
              "@type": "HowToTool",
              "name": "Calculadora o convertidor online"
            }
          }
        `}
      </Script>
    </>
  )
}
