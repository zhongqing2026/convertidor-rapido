import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Todas las Herramientas de Conversión | ConvertidorRapido.org",
  description:
    "Explora todas nuestras herramientas de conversión: pulgadas a mm, cm a pulgadas, gramos a onzas, litros a kilos y números romanos. Convertidor rápido para todas tus necesidades.",
  keywords:
    "convertidor rapido, herramientas conversion, pulgadas a mm, cm a pulgadas, gramos a onzas, litros a kilos, numeros romanos",
}

export default function HerramientasPage() {
  const tools = [
    {
      category: "Longitud",
      items: [
        { name: "Pulgadas a Milímetros", href: "/longitud/pulgadas-a-mm", desc: "Convertidor pulgadas a mm" },
        { name: "CM a Pulgadas", href: "/longitud/cm-a-pulgadas", desc: "Convertidor de cm a pulgadas" },
        {
          name: "Milímetros a Pulgadas",
          href: "/longitud/mm-a-pulgadas",
          desc: "Convertidor de milímetros a pulgadas",
        },
        {
          name: "Pulgadas a Centímetros",
          href: "/longitud/pulgadas-a-cm",
          desc: "Convertidor de pulgadas a centímetros",
        },
        { name: "Pulgadas a Metros", href: "/longitud/pulgadas-a-metros", desc: "Convertidor de pulgadas a metros" },
        { name: "Metros a Pulgadas", href: "/longitud/metros-a-pulgadas", desc: "Convertidor de metros a pulgadas" },
        { name: "Pulgadas a Pies", href: "/longitud/pulgadas-a-pies", desc: "Convertidor de pulgadas a pies" },
      ],
    },
    {
      category: "Peso/Masa",
      items: [
        { name: "Convertidor General", href: "/peso/general", desc: "Convertidor de unidades de peso y masa" },
        { name: "Gramos a Onzas", href: "/peso/gramos-a-onzas", desc: "Convertidor de gramos a onzas" },
      ],
    },
    {
      category: "Volumen/Peso",
      items: [
        {
          name: "Gramos a Mililitros",
          href: "/volumen-peso/gramos-a-mililitros",
          desc: "Convertidor de gramos a mililitros",
        },
        {
          name: "Onzas a Mililitros",
          href: "/volumen-peso/onzas-a-mililitros",
          desc: "Convertidor de onzas a mililitros",
        },
        { name: "Litros a Kilos", href: "/volumen-peso/litros-a-kilos", desc: "Convertidor de litros a kilos" },
        {
          name: "Mililitros a Gramos",
          href: "/volumen-peso/mililitros-a-gramos",
          desc: "Convertidor de mililitros a gramos",
        },
      ],
    },
    {
      category: "Sistemas Numéricos",
      items: [
        {
          name: "Números Romanos",
          href: "/sistemas-numericos/numeros-romanos",
          desc: "Convertidor de números romanos",
        },
      ],
    },
    {
      category: "Temperatura",
      items: [
        {
          name: "Celsius a Fahrenheit",
          href: "/temperatura/celsius-a-fahrenheit",
          desc: "Convertidor de Celsius a Fahrenheit",
        },
        {
          name: "Fahrenheit a Celsius",
          href: "/temperatura/fahrenheit-a-celsius",
          desc: "Convertidor de Fahrenheit a Celsius",
        },
        { name: "Celsius a Kelvin", href: "/temperatura/celsius-a-kelvin", desc: "Convertidor de Celsius a Kelvin" },
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Todas las Herramientas de Conversión</h1>

      <div className="prose max-w-none dark:prose-invert mb-8">
        <p>
          Bienvenido a nuestra colección completa de herramientas de conversión. Aquí encontrarás todos nuestros
          convertidores rápidos organizados por categoría para facilitar tu búsqueda. Desde conversiones de longitud
          como pulgadas a mm hasta transformaciones de peso, volumen y sistemas numéricos.
        </p>
      </div>

      <div className="space-y-8">
        {tools.map((category) => (
          <div key={category.category}>
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((tool) => (
                <Link key={tool.href} href={tool.href}>
                  <Card className="h-full transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{tool.desc}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 prose max-w-none dark:prose-invert">
        <h2>Convertidor Rápido para Todas tus Necesidades</h2>
        <p>
          En ConvertidorRapido.org nos especializamos en proporcionar herramientas de conversión precisas y fáciles de
          usar. Nuestro <strong>convertidor rápido</strong> te permite transformar entre diferentes unidades de medida
          con total exactitud.
        </p>
        <p>
          Ya sea que necesites un <strong>convertidor pulgadas a mm</strong>, un{" "}
          <strong>convertidor de cm a pulgadas</strong>, un <strong>convertidor de gramos a onzas</strong>, un{" "}
          <strong>convertidor de litros a kilos</strong> o un
          <strong> convertidor de números romanos</strong>, todas nuestras herramientas están diseñadas para ofrecerte
          resultados precisos al instante.
        </p>
        <p>
          Cada herramienta incluye información detallada sobre las unidades, fórmulas de conversión y tablas de
          referencia para facilitar tu comprensión y uso. Nuestro objetivo es simplificar tus necesidades de conversión
          con un convertidor rápido, preciso y fácil de usar.
        </p>
      </div>
    </div>
  )
}
