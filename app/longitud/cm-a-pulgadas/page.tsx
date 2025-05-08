import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de CM a Pulgadas | ConvertidorRapido.org",
  description:
    "Convierte centímetros a pulgadas de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de longitud.",
}

export default function CmAPulgadasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de CM a Pulgadas</h1>

        <UnitConverter
          fromUnit="cm"
          fromUnitLabel="Centímetros (cm)"
          toUnit="in"
          toUnitLabel="Pulgadas (in)"
          conversionFactor={0.393701}
          precision={3}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir centímetros a pulgadas?</h2>
            <p>Para convertir centímetros a pulgadas, multiplica el valor en centímetros por 0.393701:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pulgadas = Centímetros × 0.393701</p>
            </div>
            <p>Por ejemplo, para convertir 10 centímetros a pulgadas:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pulgadas = 10 × 0.393701 = 3.93701 in</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de centímetros a pulgadas</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Centímetros (cm)</th>
                    <th className="border px-4 py-2">Pulgadas (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 5, 10, 15, 20, 25, 30, 50, 100].map((cm) => (
                    <tr key={cm}>
                      <td className="border px-4 py-2 text-center">{cm}</td>
                      <td className="border px-4 py-2 text-center">{(cm * 0.393701).toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Centímetro (cm)</h3>
            <p>
              El centímetro es una unidad de longitud en el Sistema Internacional de Unidades (SI). Equivale a una
              centésima parte de un metro (1/100 m).
            </p>

            <h3 className="font-semibold mt-4">Pulgada (in)</h3>
            <p>
              La pulgada es una unidad de longitud utilizada principalmente en los Estados Unidos, Canadá y el Reino
              Unido. Una pulgada equivale a exactamente 2.54 centímetros.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
