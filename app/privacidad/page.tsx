import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Política de Privacidad | ConvertidorRapido.org",
  description:
    "Conoce nuestra política de privacidad y cómo protegemos tus datos en ConvertidorRapido.org. Información sobre cookies, recopilación de datos y tus derechos.",
  keywords: "política privacidad, protección datos, cookies, RGPD, privacidad convertidorrapido",
}

export default function PrivacidadPage() {
  const fechaActualizacion = "8 de mayo de 2025"

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Política de Privacidad</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Última actualización: {fechaActualizacion}</p>

        <div className="prose prose-blue max-w-none dark:prose-invert">
          <section className="mb-6">
            <p>
              En ConvertidorRapido.org, accesible desde https://convertidorrapido.org, una de nuestras principales
              prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene
              información sobre qué datos recopilamos y cómo los utilizamos.
            </p>
            <p>
              Si tienes preguntas adicionales o necesitas más información sobre nuestra Política de Privacidad, no dudes
              en contactarnos a través de info@convertidorrapido.org.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Información que recopilamos</h2>
            <p>
              ConvertidorRapido.org está diseñado para funcionar sin necesidad de recopilar información personal
              identificable. Nuestras herramientas de conversión funcionan directamente en tu navegador y no almacenamos
              los valores que introduces para realizar conversiones.
            </p>
            <p>
              Sin embargo, recopilamos cierta información no personal para mejorar la experiencia del usuario y entender
              cómo se utiliza nuestro sitio:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Datos de uso:</strong> Podemos recopilar información sobre cómo interactúas con nuestro sitio,
                como las páginas que visitas, el tiempo que pasas en ellas y las herramientas que utilizas con más
                frecuencia.
              </li>
              <li>
                <strong>Información del dispositivo:</strong> Podemos recopilar información sobre el dispositivo que
                utilizas para acceder a nuestro sitio, como el tipo de dispositivo, sistema operativo y navegador.
              </li>
              <li>
                <strong>Datos de ubicación aproximada:</strong> Podemos recopilar información sobre tu ubicación
                aproximada basada en tu dirección IP para entender mejor la distribución geográfica de nuestros
                usuarios.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Cookies y tecnologías de seguimiento</h2>
            <p>
              Como muchos sitios web, utilizamos "cookies" para mejorar tu experiencia. Las cookies son pequeños
              archivos que un sitio o su proveedor de servicios transfiere al disco duro de tu ordenador a través de tu
              navegador web (si lo permites).
            </p>
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Entender y guardar las preferencias del usuario para futuras visitas.</li>
              <li>
                Recopilar datos agregados sobre el tráfico del sitio y las interacciones para ofrecer mejores
                experiencias y herramientas en el futuro.
              </li>
              <li>Analizar el rendimiento y funcionamiento de nuestro sitio.</li>
            </ul>
            <p>
              Puedes configurar tu navegador para que te avise cuando se envíe una cookie, o puedes elegir desactivar
              todas las cookies. Esto se hace a través de la configuración de tu navegador. Cada navegador es un poco
              diferente, así que consulta el menú de ayuda de tu navegador para aprender la manera correcta de modificar
              tus cookies.
            </p>
            <p>
              Si desactivas las cookies, algunas funciones que hacen que tu experiencia en el sitio sea más eficiente
              pueden no funcionar correctamente.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Servicios de terceros</h2>
            <p>
              Podemos utilizar servicios de terceros, como Google Analytics, para ayudarnos a entender cómo los usuarios
              interactúan con nuestro sitio. Estos servicios pueden utilizar cookies y tecnologías similares para
              recopilar información sobre tu uso de nuestro sitio y otros sitios web.
            </p>
            <p>
              Estos servicios de terceros tienen sus propias políticas de privacidad que rigen cómo recopilan y utilizan
              esta información. Te recomendamos revisar sus políticas de privacidad para entender mejor cómo utilizan
              tus datos.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Cómo utilizamos tu información</h2>
            <p>Utilizamos la información que recopilamos para:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Mejorar nuestro sitio web y las herramientas de conversión que ofrecemos.</li>
              <li>Entender mejor las necesidades de nuestros usuarios y proporcionar un mejor servicio.</li>
              <li>Analizar tendencias de uso para desarrollar nuevas funcionalidades.</li>
              <li>Diagnosticar problemas y mantener la seguridad de nuestro sitio.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Protección de datos y RGPD</h2>
            <p>
              Si eres residente de la Unión Europea, tienes ciertos derechos en relación con tus datos personales según
              el Reglamento General de Protección de Datos (RGPD):
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Derecho a ser informado sobre cómo se utilizan tus datos.</li>
              <li>Derecho de acceso a los datos personales que tenemos sobre ti.</li>
              <li>Derecho a rectificación si tus datos son inexactos o incompletos.</li>
              <li>Derecho al olvido (eliminación de tus datos) en determinadas circunstancias.</li>
              <li>Derecho a restringir el procesamiento de tus datos.</li>
              <li>Derecho a la portabilidad de datos.</li>
              <li>Derecho a oponerte al procesamiento de tus datos.</li>
              <li>Derechos relacionados con la toma de decisiones automatizada y la elaboración de perfiles.</li>
            </ul>
            <p>Para ejercer cualquiera de estos derechos, por favor contáctanos en info@convertidorrapido.org.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Seguridad de los datos</h2>
            <p>
              Nos comprometemos a garantizar que tu información esté segura. Para evitar el acceso o divulgación no
              autorizados, hemos implementado procedimientos físicos, electrónicos y administrativos adecuados para
              salvaguardar y asegurar la información que recopilamos en línea.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Enlaces a otros sitios web</h2>
            <p>
              Nuestro sitio web puede contener enlaces a otros sitios web de interés. Sin embargo, una vez que hayas
              utilizado estos enlaces para salir de nuestro sitio, debes tener en cuenta que no tenemos ningún control
              sobre ese otro sitio web. Por lo tanto, no podemos ser responsables de la protección y privacidad de
              cualquier información que proporciones al visitar dichos sitios, y dichos sitios no están regidos por esta
              política de privacidad. Debes ejercer precaución y revisar la política de privacidad aplicable al sitio
              web en cuestión.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Cambios en nuestra política de privacidad</h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio
              publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "última
              actualización" al principio de este documento.
            </p>
            <p>
              Te recomendamos revisar esta Política de Privacidad periódicamente para estar informado sobre cómo estamos
              protegiendo tu información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contacto</h2>
            <p>Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos:</p>
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
