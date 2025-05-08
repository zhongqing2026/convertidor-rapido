import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Pulgadas a Pies | ConvertidorRapido.org",
  description:
    "Convierte pulgadas a pies de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de longitud.",
}

export default function PulgadasAPiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Pulgadas a Pies</h1>

        <UnitConverter
          fromUnit="in"
          fromUnitLabel="Pulgadas (in)"
          toUnit="ft"
          toUnitLabel="Pies (ft)"
          conversionFactor={1 / 12}
          precision={3}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir pulgadas a pies?</h2>
            <p>Para convertir pulgadas a pies, divide el valor en pulgadas por 12:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pies = Pulgadas ÷ 12</p>
            </div>
            <p>Por ejemplo, para convertir 24 pulgadas a pies:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pies = 24 ÷ 12 = 2 ft</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Representación en pies y pulgadas</h2>
            <p>
              En muchos contextos, especialmente en construcción y arquitectura, las medidas se expresan como una
              combinación de pies y pulgadas. Por ejemplo, 5 pies y 3 pulgadas se escribe como 5' 3".
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Pulgadas (in)</th>
                    <th className="border px-4 py-2">Pies (decimal)</th>
                    <th className="border px-4 py-2">Pies y Pulgadas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">15</td>
                    <td className="border px-4 py-2 text-center">1.25</td>
                    <td className="border px-4 py-2 text-center">1' 3"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">24</td>
                    <td className="border px-4 py-2 text-center">2.00</td>
                    <td className="border px-4 py-2 text-center">2' 0"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">30</td>
                    <td className="border px-4 py-2 text-center">2.50</td>
                    <td className="border px-4 py-2 text-center">2' 6"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">36</td>
                    <td className="border px-4 py-2 text-center">3.00</td>
                    <td className="border px-4 py-2 text-center">3' 0"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">42</td>
                    <td className="border px-4 py-2 text-center">3.50</td>
                    <td className="border px-4 py-2 text-center">3' 6"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">65</td>
                    <td className="border px-4 py-2 text-center">5.42</td>
                    <td className="border px-4 py-2 text-center">5' 5"</td>
                  </tr>
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

            <h3 className="font-semibold mt-4">Pie (ft)</h3>
            <p>
              El pie es una unidad de longitud utilizada principalmente en los Estados Unidos y el Reino Unido. Un pie
              equivale a 12 pulgadas o aproximadamente 30.48 centímetros.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
