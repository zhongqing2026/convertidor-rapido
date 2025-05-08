import { UnitConverter } from "@/components/unit-converter"

export const metadata = {
  title: "Convertidor de Gramos a Onzas | ConvertidorRapido.org",
  description:
    "Convierte gramos a onzas de forma rápida y precisa. Herramienta online gratuita para conversión de unidades de peso.",
}

export default function GramosAOnzasPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Gramos a Onzas</h1>

        <UnitConverter
          fromUnit="g"
          fromUnitLabel="Gramos (g)"
          toUnit="oz"
          toUnitLabel="Onzas (oz)"
          conversionFactor={0.03527396}
          precision={3}
        />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo convertir gramos a onzas?</h2>
            <p>Para convertir gramos a onzas, multiplica el valor en gramos por 0.03527396:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Onzas = Gramos × 0.03527396</p>
            </div>
            <p>Por ejemplo, para convertir 100 gramos a onzas:</p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md my-4">
              <p className="font-mono">Onzas = 100 × 0.03527396 = 3.527 oz</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de gramos a onzas</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Gramos (g)</th>
                    <th className="border px-4 py-2">Onzas (oz)</th>
                  </tr>
                </thead>
                <tbody>
                  {[10, 25, 50, 100, 150, 200, 250, 300, 500, 1000].map((grams) => (
                    <tr key={grams}>
                      <td className="border px-4 py-2 text-center">{grams}</td>
                      <td className="border px-4 py-2 text-center">{(grams * 0.03527396).toFixed(3)}</td>
                    </tr>
                  ))}
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

            <h3 className="font-semibold mt-4">Onza (oz)</h3>
            <p>
              La onza es una unidad de masa utilizada principalmente en los Estados Unidos y otros países que utilizan
              el sistema imperial. Una onza equivale a aproximadamente 28.35 gramos. Hay 16 onzas en una libra.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
