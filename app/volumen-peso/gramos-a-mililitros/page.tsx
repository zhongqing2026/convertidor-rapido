import { DensityConverter } from "@/components/density-converter"

export const metadata = {
  title: "Convertidor de Gramos a Mililitros | ConvertidorRapido.org",
  description:
    "Convierte gramos a mililitros según la densidad de diferentes sustancias. Herramienta online gratuita para conversión de masa a volumen.",
}

export default function GramosAMililitrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Gramos a Mililitros</h1>

        <DensityConverter
          fromUnit="g"
          fromUnitLabel="Gramos (g)"
          toUnit="mL"
          toUnitLabel="Mililitros (mL)"
          conversionType="mass-to-volume"
          precision={2}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir gramos a mililitros?</h2>
            <p>
              Para convertir gramos a mililitros, divide el valor en gramos por la densidad de la sustancia en g/mL:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Mililitros = Gramos ÷ Densidad (g/mL)</p>
            </div>
            <p>Por ejemplo, para convertir 100 gramos de agua a mililitros (densidad del agua = 1 g/mL):</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Mililitros = 100 g ÷ 1 g/mL = 100 mL</p>
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
                    <td className="border px-4 py-2">Harina</td>
                    <td className="border px-4 py-2 text-center">0.59</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Azúcar</td>
                    <td className="border px-4 py-2 text-center">0.85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Información sobre las unidades</h2>
            <h3 className="font-semibold mt-4">Gramo (g)</h3>
            <p>
              El gramo es una unidad de masa en el Sistema Internacional de Unidades (SI). Originalmente se definió como
              la masa de un centímetro cúbico de agua a 4°C.
            </p>

            <h3 className="font-semibold mt-4">Mililitro (mL)</h3>
            <p>
              El mililitro es una unidad de volumen en el Sistema Internacional de Unidades (SI). Un mililitro equivale
              a un centímetro cúbico (cm³) o 1/1000 de un litro.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
