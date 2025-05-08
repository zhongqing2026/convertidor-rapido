import { DensityConverter } from "@/components/density-converter"

export const metadata = {
  title: "Convertidor de Litros a Kilos | ConvertidorRapido.org",
  description:
    "Convierte litros a kilos según la densidad de diferentes sustancias. Herramienta online gratuita para conversión de volumen a peso.",
}

export default function LitrosAKilosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Litros a Kilos</h1>

        <DensityConverter
          fromUnit="L"
          fromUnitLabel="Litros (L)"
          toUnit="kg"
          toUnitLabel="Kilogramos (kg)"
          conversionType="volume-to-mass"
          precision={3}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir litros a kilos?</h2>
            <p>
              Para convertir litros a kilos, multiplica el volumen en litros por la densidad de la sustancia en kg/L:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Kilogramos = Litros × Densidad (kg/L)</p>
            </div>
            <p>Por ejemplo, para convertir 2 litros de agua a kilos (densidad del agua = 1 kg/L):</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Kilogramos = 2 L × 1 kg/L = 2 kg</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Densidades comunes de sustancias</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Sustancia</th>
                    <th className="border px-4 py-2">Densidad (kg/L)</th>
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
            <h3 className="font-semibold mt-4">Litro (L)</h3>
            <p>
              El litro es una unidad de volumen en el Sistema Internacional de Unidades (SI). Un litro equivale a 1
              decímetro cúbico (dm³) o 1000 centímetros cúbicos (cm³).
            </p>

            <h3 className="font-semibold mt-4">Kilogramo (kg)</h3>
            <p>
              El kilogramo es la unidad básica de masa en el Sistema Internacional de Unidades (SI). Originalmente se
              definió como la masa de un litro de agua a 4°C.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
