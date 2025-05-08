import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Pulgadas a Centímetros | ConvertidorRapido.org",
  description:
    "Convierte pulgadas a centímetros de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de longitud.",
}

export default function PulgadasACmPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Pulgadas a Centímetros</h1>

        <UnitConverter
          fromUnit="in"
          fromUnitLabel="Pulgadas (in)"
          toUnit="cm"
          toUnitLabel="Centímetros (cm)"
          conversionFactor={2.54}
          precision={2}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir pulgadas a centímetros?</h2>
            <p>Para convertir pulgadas a centímetros, multiplica el valor en pulgadas por 2.54:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Centímetros = Pulgadas × 2.54</p>
            </div>
            <p>Por ejemplo, para convertir 5 pulgadas a centímetros:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Centímetros = 5 × 2.54 = 12.7 cm</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de pulgadas a centímetros</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Pulgadas (in)</th>
                    <th className="border px-4 py-2">Centímetros (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[0.5, 1, 2, 3, 4, 5, 6, 10, 12, 24, 36].map((inches) => (
                    <tr key={inches}>
                      <td className="border px-4 py-2 text-center">{inches}</td>
                      <td className="border px-4 py-2 text-center">{(inches * 2.54).toFixed(2)}</td>
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
              Unido. Una pulgada equivale a exactamente 2.54 centímetros.
            </p>

            <h3 className="font-semibold mt-4">Centímetro (cm)</h3>
            <p>
              El centímetro es una unidad de longitud en el Sistema Internacional de Unidades (SI). Equivale a una
              centésima parte de un metro (1/100 m).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
