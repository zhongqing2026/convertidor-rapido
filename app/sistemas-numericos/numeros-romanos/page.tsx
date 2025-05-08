import { RomanNumeralConverter } from "@/components/roman-numeral-converter"

export const metadata = {
  title: "Convertidor de Números Romanos | ConvertidorRapido.org",
  description:
    "Convierte entre números romanos y arábigos. Herramienta online gratuita para conversión de sistemas numéricos.",
}

export default function NumerosRomanosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Convertidor de Números Romanos</h1>

        <RomanNumeralConverter />

        <div className="mt-12 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">¿Cómo funcionan los números romanos?</h2>
            <p>
              Los números romanos son un sistema de numeración que utiliza letras del alfabeto latino para representar
              valores. Los símbolos básicos son:
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Símbolo</th>
                    <th className="border px-4 py-2">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">I</td>
                    <td className="border px-4 py-2 text-center">1</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">V</td>
                    <td className="border px-4 py-2 text-center">5</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">X</td>
                    <td className="border px-4 py-2 text-center">10</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">L</td>
                    <td className="border px-4 py-2 text-center">50</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">C</td>
                    <td className="border px-4 py-2 text-center">100</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">D</td>
                    <td className="border px-4 py-2 text-center">500</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">M</td>
                    <td className="border px-4 py-2 text-center">1000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Reglas de los números romanos</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Los símbolos se suman cuando están en orden descendente o igual: VI = 5 + 1 = 6</li>
              <li>Si un símbolo de menor valor está antes de uno de mayor valor, se resta: IV = 5 - 1 = 4</li>
              <li>Un símbolo no puede repetirse más de tres veces consecutivas: III es válido, IIII no lo es</li>
              <li>Los símbolos V, L y D no pueden repetirse</li>
              <li>Solo se puede restar I de V y X, X de L y C, y C de D y M</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ejemplos de números romanos</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border px-4 py-2">Número Romano</th>
                    <th className="border px-4 py-2">Número Arábigo</th>
                    <th className="border px-4 py-2">Explicación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-center">III</td>
                    <td className="border px-4 py-2 text-center">3</td>
                    <td className="border px-4 py-2">1 + 1 + 1 = 3</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">IV</td>
                    <td className="border px-4 py-2 text-center">4</td>
                    <td className="border px-4 py-2">5 - 1 = 4</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">IX</td>
                    <td className="border px-4 py-2 text-center">9</td>
                    <td className="border px-4 py-2">10 - 1 = 9</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">XXIV</td>
                    <td className="border px-4 py-2 text-center">24</td>
                    <td className="border px-4 py-2">10 + 10 + (5 - 1) = 24</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 text-center">MCMXCIV</td>
                    <td className="border px-4 py-2 text-center">1994</td>
                    <td className="border px-4 py-2">1000 + (1000 - 100) + (100 - 10) + (5 - 1) = 1994</td>
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
