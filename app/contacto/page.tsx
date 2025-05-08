import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contacto | ConvertidorRapido.org",
  description:
    "Ponte en contacto con el equipo de ConvertidorRapido.org. Estamos aquí para ayudarte con cualquier pregunta o sugerencia sobre nuestras herramientas de conversión.",
  keywords: "contacto convertidorrapido, email convertidorrapido, ayuda conversiones, soporte convertidor unidades",
}

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contacto</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Ponte en contacto con nosotros</h2>
            <p className="mb-6">
              Gracias por tu interés en ConvertidorRapido.org. Estamos aquí para ayudarte con cualquier pregunta,
              sugerencia o comentario que puedas tener sobre nuestras herramientas de conversión.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:info@convertidorrapido.org" className="hover:underline">
                      info@convertidorrapido.org
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Ubicación</h3>
                  <p className="text-gray-600 dark:text-gray-400">España</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Horario de atención</h3>
                  <p className="text-gray-600 dark:text-gray-400">Lunes a Viernes: 9:00 - 18:00 (CET)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h3 className="font-medium mb-2">¿Necesitas ayuda con alguna conversión?</h3>
              <p className="text-sm">
                Si tienes alguna duda sobre cómo utilizar nuestras herramientas o necesitas una conversión específica
                que no encuentras en nuestro sitio, háznoslo saber y estaremos encantados de ayudarte.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Formulario de contacto</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <Input id="nombre" placeholder="Tu nombre" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium mb-1">
                  Asunto
                </label>
                <Input id="asunto" placeholder="Asunto de tu mensaje" />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <Textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows={5} />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Enviar mensaje
              </Button>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Al enviar este formulario, aceptas nuestra{" "}
                <a href="/privacidad" className="text-blue-600 hover:underline">
                  Política de Privacidad
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">¿Las herramientas de ConvertidorRápido.org son gratuitas?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sí, todas nuestras herramientas de conversión son completamente gratuitas y no requieren registro.
              </p>
            </div>

            <div>
              <h3 className="font-medium">¿Puedo sugerir una nueva herramienta de conversión?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                ¡Por supuesto! Nos encantaría escuchar tus sugerencias. Puedes enviarnos un email o utilizar el
                formulario de contacto para hacernos saber qué herramienta te gustaría ver en nuestro sitio.
              </p>
            </div>

            <div>
              <h3 className="font-medium">¿Cómo puedo reportar un error en una conversión?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Si encuentras algún error en nuestras herramientas, por favor contáctanos con los detalles específicos
                del problema y lo investigaremos lo antes posible.
              </p>
            </div>

            <div>
              <h3 className="font-medium">¿Puedo utilizar ConvertidorRápido.org en mi dispositivo móvil?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sí, nuestro sitio está completamente optimizado para dispositivos móviles, por lo que puedes realizar
                conversiones desde cualquier smartphone o tablet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
