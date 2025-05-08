import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Metros a Pulgadas | ConvertidorRapido.org",
  description:
    "Convierte metros a pulgadas de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de longitud.",
}

export default function MetrosAPulgadasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Metros a Pulgadas</h1>

        <UnitConverter
          fromUnit="m"
          fromUnitLabel="Metros (m)"
          toUnit="in"
          toUnitLabel="Pulgadas (in)"
          conversionFactor={39.3701}
          precision={2}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir metros a pulgadas?</h2>
            <p>Para convertir metros a pulgadas, multiplica el valor en metros por 39.3701:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pulgadas = Metros × 39.3701</p>
            </div>
            <p>Por ejemplo, para convertir 2 metros a pulgadas:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pulgadas = 2 × 39.3701 = 78.74 in</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de metros a pulgadas</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Metros (m)</th>
                    <th className="border px-4 py-2">Pulgadas (in)</th>
                  </tr>
                </thead>
                <tbody>
                  {[0.1, 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 5, 10].map((meters) => (
                    <tr key={meters}>
                      <td className="border px-4 py-2 text-center">{meters}</td>
                      <td className="border px-4 py-2 text-center">{(meters * 39.3701).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Metro (m)</h3>
            <p>
              El metro es la unidad básica de longitud en el Sistema Internacional de Unidades (SI). Se define como la
              distancia que recorre la luz en el vacío durante un intervalo de 1/299,792,458 de segundo.
            </p>

            <h3 className="font-semibold mt-4">Pulgada (in)</h3>
            <p>
              La pulgada es una unidad de longitud utilizada principalmente en los Estados Unidos, Canadá y el Reino
              Unido. Una pulgada equivale a exactamente 2.54 centímetros, lo que significa que hay 39.3701 pulgadas en
              un metro.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
