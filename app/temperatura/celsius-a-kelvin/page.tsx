import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Celsius a Kelvin | ConvertidorRapido.org",
  description:
    "Convierte grados Celsius a Kelvin de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de temperatura.",
}

export default function CelsiusAKelvinPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Celsius a Kelvin</h1>

        <UnitConverter
          fromUnit="°C"
          fromUnitLabel="Celsius (°C)"
          toUnit="K"
          toUnitLabel="Kelvin (K)"
          conversionFactor={1}
          conversionOffset={273.15}
          formula="K = °C + 273.15"
          precision={2}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir Celsius a Kelvin?</h2>
            <p>Para convertir grados Celsius a Kelvin, simplemente suma 273.15:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Kelvin = Celsius + 273.15</p>
            </div>
            <p>Por ejemplo, para convertir 25 grados Celsius a Kelvin:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Kelvin = 25 + 273.15 = 298.15 K</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de Celsius a Kelvin</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Celsius (°C)</th>
                    <th className="border px-4 py-2">Kelvin (K)</th>
                  </tr>
                </thead>
                <tbody>
                  {[-273.15, -100, -50, -20, 0, 20, 25, 37, 50, 100, 200].map((celsius) => (
                    <tr key={celsius}>
                      <td className="border px-4 py-2 text-center">{celsius}</td>
                      <td className="border px-4 py-2 text-center">{(celsius + 273.15).toFixed(2)}</td>
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

            <h3 className="font-semibold mt-4">Kelvin (K)</h3>
            <p>
              La escala Kelvin es la unidad de temperatura del Sistema Internacional de Unidades (SI). Es una escala
              absoluta, lo que significa que 0 Kelvin es el cero absoluto, la temperatura teórica más baja posible donde
              las partículas tienen energía cinética mínima. No se utiliza el símbolo de grado (°) con Kelvin.
            </p>
            <p className="mt-2">
              La relación entre Celsius y Kelvin es simple: una diferencia de 1 grado Celsius es igual a una diferencia
              de 1 Kelvin, pero el punto cero de la escala Kelvin está desplazado 273.15 unidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
