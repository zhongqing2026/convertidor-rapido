import { GeneralWeightConverter } from "@/components/general-weight-converter"

export const metadata = {
  title: "Convertidor General de Unidades de Peso | ConvertidorRapido.org",
  description:
    "Convierte entre diferentes unidades de peso y masa como gramos, kilogramos, libras, onzas y más. Herramienta online gratuita para conversión de unidades.",
}

export default function GeneralWeightPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor General de Unidades de Peso</h1>

        <GeneralWeightConverter />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Acerca de las unidades de peso</h2>
            <p>
              Las unidades de peso o masa se utilizan para medir la cantidad de materia en un objeto. Existen diferentes
              sistemas de unidades, como el Sistema Internacional (SI) que utiliza kilogramos, y el sistema imperial que
              utiliza libras y onzas.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Tabla de conversión de unidades de peso</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Unidad</th>
                    <th className="border px-4 py-2">Equivalencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1 kilogramo (kg)</td>
                    <td className="border px-4 py-2">1000 gramos (g)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1 kilogramo (kg)</td>
                    <td className="border px-4 py-2">2.20462 libras (lb)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1 libra (lb)</td>
                    <td className="border px-4 py-2">453.592 gramos (g)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1 libra (lb)</td>
                    <td className="border px-4 py-2">16 onzas (oz)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1 onza (oz)</td>
                    <td className="border px-4 py-2">28.3495 gramos (g)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1 tonelada métrica (t)</td>
                    <td className="border px-4 py-2">1000 kilogramos (kg)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">1 tonelada corta (US)</td>
                    <td className="border px-4 py-2">907.185 kilogramos (kg)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
