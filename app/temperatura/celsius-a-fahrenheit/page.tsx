import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Celsius a Fahrenheit | ConvertidorRapido.org",
  description:
    "Convierte grados Celsius a grados Fahrenheit de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de temperatura.",
}

export default function CelsiusAFahrenheitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Celsius a Fahrenheit</h1>

        <UnitConverter
          fromUnit="°C"
          fromUnitLabel="Celsius (°C)"
          toUnit="°F"
          toUnitLabel="Fahrenheit (°F)"
          conversionFactor={1.8}
          conversionOffset={32}
          formula="°F = °C × 1.8 + 32"
          precision={1}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir Celsius a Fahrenheit?</h2>
            <p>Para convertir grados Celsius a grados Fahrenheit, utiliza la siguiente fórmula:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Fahrenheit = Celsius × 1.8 + 32</p>
            </div>
            <p>Por ejemplo, para convertir 25 grados Celsius a Fahrenheit:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Fahrenheit = 25 × 1.8 + 32 = 77°F</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de Celsius a Fahrenheit</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Celsius (°C)</th>
                    <th className="border px-4 py-2">Fahrenheit (°F)</th>
                  </tr>
                </thead>
                <tbody>
                  {[-20, -10, 0, 10, 20, 25, 30, 37, 40, 50, 100].map((celsius) => (
                    <tr key={celsius}>
                      <td className="border px-4 py-2 text-center">{celsius}</td>
                      <td className="border px-4 py-2 text-center">{(celsius * 1.8 + 32).toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Celsius (°C)</h3>
            <p>
              La escala Celsius es una escala de temperatura en la que el punto de congelación del agua es 0 grados y el
              punto de ebullición es 100 grados a presión atmosférica estándar. Es la escala de temperatura más
              utilizada en el mundo.
            </p>

            <h3 className="font-semibold mt-4">Fahrenheit (°F)</h3>
            <p>
              La escala Fahrenheit es una escala de temperatura utilizada principalmente en Estados Unidos. En esta
              escala, el punto de congelación del agua es 32 grados y el punto de ebullición es 212 grados a presión
              atmosférica estándar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
