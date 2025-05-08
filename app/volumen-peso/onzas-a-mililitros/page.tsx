import { DensityConverter } from "@/components/density-converter"

export const metadata = {
  title: "Convertidor de Onzas a Mililitros | ConvertidorRapido.org",
  description:
    "Convierte onzas (peso) a mililitros según la densidad de diferentes sustancias. Herramienta online gratuita para conversión de masa a volumen.",
}

export default function OnzasAMililitrosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Onzas a Mililitros</h1>

        <DensityConverter
          fromUnit="oz"
          fromUnitLabel="Onzas (oz peso)"
          toUnit="mL"
          toUnitLabel="Mililitros (mL)"
          conversionType="mass-to-volume"
          precision={2}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir onzas a mililitros?</h2>
            <p>
              Para convertir onzas (peso) a mililitros, primero convierte las onzas a gramos (multiplicando por 28.35) y
              luego divide por la densidad de la sustancia:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Mililitros = (Onzas × 28.35) ÷ Densidad (g/mL)</p>
            </div>
            <p>Por ejemplo, para convertir 2 onzas de agua a mililitros (densidad del agua = 1 g/mL):</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Mililitros = (2 oz × 28.35) ÷ 1 g/mL = 56.7 mL</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Importante: Onzas de peso vs. Onzas líquidas</h2>
            <p>
              Es crucial diferenciar entre onzas de peso (oz) y onzas líquidas (fl oz). Esta herramienta convierte onzas
              de peso a mililitros considerando la densidad de la sustancia. Las onzas líquidas son una medida directa
              de volumen (1 fl oz ≈ 29.57 mL) y no requieren conocer la densidad.
            </p>
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
            <h3 className="font-semibold mt-4">Onza (oz)</h3>
            <p>
              La onza es una unidad de masa utilizada principalmente en los Estados Unidos y otros países que utilizan
              el sistema imperial. Una onza equivale a aproximadamente 28.35 gramos.
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
