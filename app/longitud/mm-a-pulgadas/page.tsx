import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Milímetros a Pulgadas | ConvertidorRapido.org",
  description:
    "Convierte milímetros a pulgadas de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de longitud.",
}

export default function MmAPulgadasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Milímetros a Pulgadas</h1>

        <UnitConverter
          fromUnit="mm"
          fromUnitLabel="Milímetros (mm)"
          toUnit="in"
          toUnitLabel="Pulgadas (in)"
          conversionFactor={0.0393701}
          precision={4}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir milímetros a pulgadas?</h2>
            <p>Para convertir milímetros a pulgadas, multiplica el valor en milímetros por 0.0393701:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pulgadas = Milímetros × 0.0393701</p>
            </div>
            <p>Por ejemplo, para convertir 25 milímetros a pulgadas:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Pulgadas = 25 × 0.0393701 = 0.9843 in</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Representación fraccionaria común</h2>
            <p>
              En muchos contextos, especialmente en carpintería y mecánica, las pulgadas se expresan como fracciones.
              Aquí hay algunas conversiones comunes:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Milímetros (mm)</th>
                    <th className="border px-4 py-2">Pulgadas (decimal)</th>
                    <th className="border px-4 py-2">Pulgadas (fracción)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">3.175</td>
                    <td className="border px-4 py-2 text-center">0.125</td>
                    <td className="border px-4 py-2 text-center">1/8"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">6.35</td>
                    <td className="border px-4 py-2 text-center">0.25</td>
                    <td className="border px-4 py-2 text-center">1/4"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">12.7</td>
                    <td className="border px-4 py-2 text-center">0.5</td>
                    <td className="border px-4 py-2 text-center">1/2"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">19.05</td>
                    <td className="border px-4 py-2 text-center">0.75</td>
                    <td className="border px-4 py-2 text-center">3/4"</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">25.4</td>
                    <td className="border px-4 py-2 text-center">1.0</td>
                    <td className="border px-4 py-2 text-center">1"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Milímetro (mm)</h3>
            <p>
              El milímetro es una unidad de longitud en el Sistema Internacional de Unidades (SI). Equivale a una
              milésima parte de un metro (1/1000 m).
            </p>

            <h3 className="font-semibold mt-4">Pulgada (in)</h3>
            <p>
              La pulgada es una unidad de longitud utilizada principalmente en los Estados Unidos, Canadá y el Reino
              Unido. Una pulgada equivale a exactamente 25.4 milímetros.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
