import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acerca de ConvertidorRapido.org | Nuestra misión y equipo",
  description:
    "Conoce más sobre ConvertidorRapido.org, nuestra misión de proporcionar herramientas de conversión precisas y fáciles de usar para el público hispanohablante.",
  keywords:
    "acerca de convertidorrapido, sobre nosotros, herramientas de conversión, convertidor online, historia convertidorrapido",
}

export default function AcercaDePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Acerca de ConvertidorRapido.org</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="mb-4">
            En ConvertidorRapido.org, nuestra misión es proporcionar herramientas de conversión de unidades precisas,
            rápidas y fáciles de usar, diseñadas específicamente para el público de habla hispana. Entendemos que la
            conversión entre diferentes sistemas de medidas puede ser confusa, especialmente cuando la mayoría de las
            herramientas disponibles están en inglés.
          </p>
          <p>
            Nos esforzamos por eliminar esa barrera, ofreciendo una plataforma completamente en español que permite a
            estudiantes, profesionales y cualquier persona realizar conversiones con confianza y comprender mejor las
            relaciones entre diferentes unidades de medida.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4">
            ConvertidorRapido.org nació de la necesidad de tener herramientas de conversión confiables en español.
            Fundado en 2023, nuestro sitio comenzó con un pequeño conjunto de conversores básicos y ha crecido hasta
            incluir una amplia gama de herramientas que cubren longitud, peso, volumen, temperatura y sistemas
            numéricos.
          </p>
          <p>
            A lo largo de nuestro desarrollo, hemos escuchado atentamente los comentarios de nuestros usuarios para
            mejorar continuamente nuestras herramientas y añadir nuevas funcionalidades que satisfagan sus necesidades.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Precisión:</strong> Nos comprometemos a proporcionar resultados de conversión exactos, utilizando
              las fórmulas y factores de conversión más actualizados.
            </li>
            <li>
              <strong>Accesibilidad:</strong> Creemos que las herramientas de conversión deben ser accesibles para
              todos, independientemente de su nivel técnico o dispositivo.
            </li>
            <li>
              <strong>Educación:</strong> No solo ofrecemos herramientas de conversión, sino también información
              educativa sobre las unidades y sus relaciones.
            </li>
            <li>
              <strong>Simplicidad:</strong> Diseñamos nuestras herramientas para ser intuitivas y fáciles de usar,
              eliminando complejidades innecesarias.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Nuestro Equipo</h2>
          <p className="mb-4">
            Detrás de ConvertidorRapido.org hay un equipo apasionado de desarrolladores, diseñadores y expertos en
            contenido comprometidos con la creación de la mejor experiencia posible para nuestros usuarios. Combinamos
            conocimientos técnicos con una profunda comprensión de las necesidades de la comunidad hispanohablante.
          </p>
          <p>
            Nuestro equipo trabaja constantemente para mejorar las herramientas existentes y desarrollar nuevas
            funcionalidades que hagan que las conversiones sean aún más sencillas y útiles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p className="mb-4">
            Valoramos enormemente tus comentarios y sugerencias. Si tienes alguna pregunta, idea para mejorar nuestro
            sitio o has encontrado algún error, no dudes en contactarnos:
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@convertidorrapido.org" className="text-blue-600 hover:underline">
              info@convertidorrapido.org
            </a>
          </p>
          <p>
            También puedes visitar nuestra{" "}
            <a href="/contacto" className="text-blue-600 hover:underline">
              página de contacto
            </a>{" "}
            para más información.
          </p>
        </section>
      </div>
    </div>
  )
}
