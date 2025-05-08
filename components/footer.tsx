import Link from "next/link"
import { Logo } from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Logo variant="footer" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-md">
              Herramientas de conversión de unidades online rápidas, precisas y fáciles de usar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 md:mt-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Categorías</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/longitud" className="text-sm hover:underline">
                    Longitud
                  </Link>
                </li>
                <li>
                  <Link href="/peso" className="text-sm hover:underline">
                    Peso/Masa
                  </Link>
                </li>
                <li>
                  <Link href="/volumen-peso" className="text-sm hover:underline">
                    Volumen/Peso
                  </Link>
                </li>
                <li>
                  <Link href="/sistemas-numericos" className="text-sm hover:underline">
                    Sistemas Numéricos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Herramientas Populares</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/longitud/pulgadas-a-mm" className="text-sm hover:underline">
                    Pulgadas a Milímetros
                  </Link>
                </li>
                <li>
                  <Link href="/longitud/cm-a-pulgadas" className="text-sm hover:underline">
                    CM a Pulgadas
                  </Link>
                </li>
                <li>
                  <Link href="/peso/gramos-a-onzas" className="text-sm hover:underline">
                    Gramos a Onzas
                  </Link>
                </li>
                <li>
                  <Link href="/volumen-peso/litros-a-kilos" className="text-sm hover:underline">
                    Litros a Kilos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/acerca-de" className="text-sm hover:underline">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-sm hover:underline">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/privacidad" className="text-sm hover:underline">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-sm hover:underline">
                    Términos de Uso
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ConvertidorRapido.org - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
