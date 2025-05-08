import { DensityConverter } from "@/components/density-converter"

export const metadata = {
  title: "Convertidor de Mililitros a Gramos | ConvertidorRapido.org",
  description:
    "Convierte mililitros a gramos según la densidad de diferentes sustancias. Herramienta online gratuita para conversión de volumen a masa.",
}

export default function MililitrosAGramosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Mililitros a Gramos</h1>

        <DensityConverter
          fromUnit="mL"
          fromUnitLabel="Mililitros (mL)"
          toUnit="g"
          toUnitLabel="Gramos (g)"
          conversionType="volume-to-mass"
          precision={2}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir mililitros a gramos?</h2>
            <p>
              Para convertir mililitros a gramos, multiplica el volumen en mililitros por la densidad de la sustancia en
              g/mL:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Gramos = Mililitros × Densidad (g/mL)</p>
            </div>
            <p>Por ejemplo, para convertir 200 mililitros de agua a gramos (densidad del agua = 1 g/mL):</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Gramos = 200 mL × 1 g/mL = 200 g</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Densidades comunes de sustancias</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Sustancia</th>
                    <th className="border px-4 py-2">Densidad (g/mL)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Agua</td>
                    <td className="border px-4 py-2 text-center">1.00</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Leche</td>
                    <td className="border px-4 py-2 text-center">1.03</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Aceite de oliva</td>
                    <td className="border px-4 py-2 text-center">0.92</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Miel</td>
                    <td className="border px-4 py-2 text-center">1.42</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Gasolina</td>
                    <td className="border px-4 py-2 text-center">0.75</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Alcohol etílico</td>
                    <td className="border px-4 py-2 text-center">0.79</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Mililitro (mL)</h3>
            <p>
              El mililitro es una unidad de volumen en el Sistema Internacional de Unidades (SI). Un mililitro equivale
              a un centímetro cúbico (cm³) o 1/1000 de un litro.
            </p>

            <h3 className="font-semibold mt-4">Gramo (g)</h3>
            <p>
              El gramo es una unidad de masa en el Sistema Internacional de Unidades (SI). Originalmente se definió como
              la masa de un centímetro cúbico de agua a 4°C.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
