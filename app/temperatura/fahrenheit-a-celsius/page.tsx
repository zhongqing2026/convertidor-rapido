import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Fahrenheit a Celsius | ConvertidorRapido.org",
  description:
    "Convierte grados Fahrenheit a grados Celsius de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de temperatura.",
}

export default function FahrenheitACelsiusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Fahrenheit a Celsius</h1>

        <UnitConverter
          fromUnit="°F"
          fromUnitLabel="Fahrenheit (°F)"
          toUnit="°C"
          toUnitLabel="Celsius (°C)"
          conversionFactor={5 / 9}
          conversionOffset={(-32 * 5) / 9}
          formula="°C = (°F - 32) × 5/9"
          precision={1}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir Fahrenheit a Celsius?</h2>
            <p>Para convertir grados Fahrenheit a grados Celsius, utiliza la siguiente fórmula:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Celsius = (Fahrenheit - 32) × 5/9</p>
            </div>
            <p>Por ejemplo, para convertir 77 grados Fahrenheit a Celsius:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Celsius = (77 - 32) × 5/9 = 25°C</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de Fahrenheit a Celsius</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Fahrenheit (°F)</th>
                    <th className="border px-4 py-2">Celsius (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  {[-4, 14, 32, 50, 68, 77, 86, 98.6, 104, 122, 212].map((fahrenheit) => (
                    <tr key={fahrenheit}>
                      <td className="border px-4 py-2 text-center">{fahrenheit}</td>
                      <td className="border px-4 py-2 text-center">{(((fahrenheit - 32) * 5) / 9).toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Fahrenheit (°F)</h3>
            <p>
              La escala Fahrenheit es una escala de temperatura utilizada principalmente en Estados Unidos. En esta
              escala, el punto de congelación del agua es 32 grados y el punto de ebullición es 212 grados a presión
              atmosférica estándar.
            </p>

            <h3 className="font-semibold mt-4">Celsius (°C)</h3>
            <p>
              La escala Celsius es una escala de temperatura en la que el punto de congelación del agua es 0 grados y el
              punto de ebullición es 100 grados a presión atmosférica estándar. Es la escala de temperatura más
              utilizada en el mundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
