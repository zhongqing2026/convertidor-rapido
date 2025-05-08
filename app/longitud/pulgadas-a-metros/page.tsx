import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Pulgadas a Metros | ConvertidorRapido.org",
  description:
    "Convierte pulgadas a metros de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de longitud.",
}

export default function PulgadasAMetrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Pulgadas a Metros</h1>

        <UnitConverter
          fromUnit="in"
          fromUnitLabel="Pulgadas (in)"
          toUnit="m"
          toUnitLabel="Metros (m)"
          conversionFactor={0.0254}
          precision={4}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir pulgadas a metros?</h2>
            <p>Para convertir pulgadas a metros, multiplica el valor en pulgadas por 0.0254:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Metros = Pulgadas × 0.0254</p>
            </div>
            <p>Por ejemplo, para convertir 100 pulgadas a metros:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Metros = 100 × 0.0254 = 2.54 m</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de pulgadas a metros</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Pulgadas (in)</th>
                    <th className="border px-4 py-2">Metros (m)</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 10, 12, 24, 36, 48, 60, 72, 84, 96, 100].map((inches) => (
                    <tr key={inches}>
                      <td className="border px-4 py-2 text-center">{inches}</td>
                      <td className="border px-4 py-2 text-center">{(inches * 0.0254).toFixed(4)}</td>
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
              Unido. Una pulgada equivale a exactamente 2.54 centímetros o 0.0254 metros.
            </p>

            <h3 className="font-semibold mt-4">Metro (m)</h3>
            <p>
              El metro es la unidad básica de longitud en el Sistema Internacional de Unidades (SI). Se define como la
              distancia que recorre la luz en el vacío durante un intervalo de 1/299,792,458 de segundo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
