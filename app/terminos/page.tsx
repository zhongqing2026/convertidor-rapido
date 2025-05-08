import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Términos de Uso | ConvertidorRapido.org",
  description:
    "Conoce los términos y condiciones de uso de ConvertidorRapido.org. Información sobre el uso adecuado de nuestras herramientas de conversión, propiedad intelectual y limitaciones de responsabilidad.",
  keywords: "términos de uso, condiciones, uso legal, propiedad intelectual, limitaciones responsabilidad",
}

export default function TerminosPage() {
  const fechaActualizacion = "8 de mayo de 2025"

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Términos de Uso</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Última actualización: {fechaActualizacion}</p>

        <div className="prose prose-blue max-w-none dark:prose-invert">
          <section className="mb-6">
            <p>
              Bienvenido a ConvertidorRapido.org. Al acceder y utilizar este sitio web, aceptas cumplir y estar sujeto a
              los siguientes términos y condiciones de uso. Si no estás de acuerdo con alguno de estos términos, por
              favor, no utilices nuestro sitio.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">1. Uso del sitio</h2>
            <p>
              ConvertidorRapido.org proporciona herramientas gratuitas de conversión de unidades para uso personal y no
              comercial. Puedes utilizar nuestras herramientas para:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Realizar conversiones entre diferentes unidades de medida.</li>
              <li>Consultar información educativa sobre las unidades y sus relaciones.</li>
              <li>Utilizar las tablas de referencia proporcionadas para fines informativos.</li>
            </ul>
            <p>Al utilizar nuestro sitio, te comprometes a:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>No utilizar el sitio de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el sitio.</li>
              <li>No intentar obtener acceso no autorizado a nuestros sistemas o redes.</li>
              <li>
                No utilizar ningún robot, spider u otro dispositivo automático para monitorear o copiar el contenido del
                sitio sin nuestro permiso previo por escrito.
              </li>
              <li>No utilizar el sitio para cualquier propósito ilegal o prohibido por estos términos.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">2. Precisión de las conversiones</h2>
            <p>
              En ConvertidorRapido.org nos esforzamos por proporcionar conversiones precisas y actualizadas. Sin
              embargo, no podemos garantizar la exactitud absoluta de todas las conversiones. Las herramientas se
              proporcionan "tal cual" y "según disponibilidad".
            </p>
            <p>Te recomendamos:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Verificar los resultados críticos con múltiples fuentes, especialmente para aplicaciones profesionales,
                científicas o médicas.
              </li>
              <li>Informarnos si encuentras alguna discrepancia o error en nuestras conversiones.</li>
            </ul>
            <p>
              No nos hacemos responsables de decisiones tomadas basadas únicamente en los resultados proporcionados por
              nuestras herramientas.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido incluido en o disponible a través de ConvertidorRapido.org, incluyendo pero no limitado
              a texto, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, recopilaciones de
              datos y software, es propiedad de ConvertidorRapido.org o sus proveedores de contenido y está protegido
              por las leyes internacionales de derechos de autor.
            </p>
            <p>No puedes:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Modificar, copiar, distribuir, transmitir, mostrar, ejecutar, reproducir, publicar, licenciar, crear
                trabajos derivados, transferir o vender cualquier información obtenida de ConvertidorRapido.org sin
                nuestro permiso previo por escrito.
              </li>
              <li>
                Utilizar nuestro contenido en cualquier otro sitio web o entorno informático en red con fines
                comerciales.
              </li>
              <li>
                Eliminar cualquier aviso de derechos de autor, marca registrada u otros avisos de propiedad de nuestro
                contenido.
              </li>
            </ul>
            <p>
              Puedes utilizar pequeños fragmentos de información para uso personal o educativo no comercial, siempre que
              se atribuya adecuadamente a ConvertidorRapido.org.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">4. Enlaces a terceros</h2>
            <p>
              Nuestro sitio web puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan
              únicamente para tu conveniencia e información. No tenemos control sobre el contenido de esos sitios y no
              somos responsables de:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>El contenido de cualquier sitio vinculado.</li>
              <li>Los cambios o actualizaciones en cualquier sitio vinculado.</li>
              <li>Cualquier forma de transmisión recibida desde cualquier sitio vinculado.</li>
            </ul>
            <p>
              La inclusión de cualquier enlace no implica necesariamente una recomendación o respaldo de las opiniones
              expresadas en ellos.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">5. Limitación de responsabilidad</h2>
            <p>En la medida máxima permitida por la ley aplicable, ConvertidorRapido.org no será responsable por:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Cualquier daño directo, indirecto, incidental, especial, consecuente o punitivo que resulte del uso o la
                imposibilidad de usar nuestros servicios.
              </li>
              <li>Cualquier pérdida de beneficios, ingresos, datos, fondo de comercio u otras pérdidas intangibles.</li>
              <li>Cualquier inexactitud en los resultados de conversión o información proporcionada en el sitio.</li>
              <li>Cualquier decisión tomada o acción realizada en base a la información proporcionada en el sitio.</li>
              <li>Cualquier interrupción, suspensión o terminación del servicio.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">6. Indemnización</h2>
            <p>
              Aceptas defender, indemnizar y mantener indemne a ConvertidorRapido.org, sus funcionarios, directores,
              empleados y agentes, de y contra cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo
              o deuda, y gastos (incluidos, entre otros, honorarios de abogados) que surjan de:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Tu uso y acceso al sitio.</li>
              <li>Tu violación de cualquiera de estos Términos de Uso.</li>
              <li>
                Tu violación de cualquier derecho de terceros, incluidos, entre otros, los derechos de autor, propiedad
                o privacidad.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">7. Modificaciones del servicio y términos</h2>
            <p>Nos reservamos el derecho, a nuestra sola discreción, de:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Modificar, suspender o interrumpir el sitio o cualquier parte del mismo en cualquier momento, con o sin
                previo aviso.
              </li>
              <li>
                Modificar estos Términos de Uso en cualquier momento. La versión más actualizada estará siempre
                disponible en nuestro sitio.
              </li>
            </ul>
            <p>
              Tu uso continuado del sitio después de la publicación de cualquier modificación constituye tu aceptación
              de dichos cambios.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">8. Ley aplicable</h2>
            <p>
              Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de España, sin tener en cuenta
              sus disposiciones sobre conflictos de leyes.
            </p>
            <p>
              Cualquier disputa que surja en relación con estos Términos de Uso estará sujeta a la jurisdicción
              exclusiva de los tribunales de España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Contacto</h2>
            <p>Si tienes alguna pregunta sobre estos Términos de Uso, por favor contáctanos:</p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@convertidorrapido.org" className="text-blue-600 hover:underline">
                info@convertidorrapido.org
              </a>
            </p>
            <p className="mt-2">
              <strong>Sitio web:</strong>{" "}
              <a href="https://convertidorrapido.org" className="text-blue-600 hover:underline">
                https://convertidorrapido.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
