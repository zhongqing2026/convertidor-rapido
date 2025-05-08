"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"

export function FaqSection() {
  const faqs = [
    {
      question: "¿Cómo funciona el convertidor de unidades?",
      answer:
        "Nuestro convertidor utiliza fórmulas matemáticas precisas para transformar valores entre diferentes unidades de medida. Simplemente selecciona la herramienta que necesitas, introduce el valor a convertir y obtendrás el resultado instantáneamente.",
    },
    {
      question: "¿Son precisas las conversiones?",
      answer:
        "Sí, todas nuestras conversiones utilizan factores de conversión estándar y fórmulas matemáticas verificadas para garantizar la máxima precisión en los resultados.",
    },
    {
      question: "¿Puedo usar las herramientas en mi teléfono móvil?",
      answer:
        "Absolutamente. Nuestro sitio está completamente optimizado para dispositivos móviles, lo que te permite realizar conversiones desde cualquier smartphone o tablet con la misma facilidad que en un ordenador.",
    },
    {
      question: "¿Necesito registrarme para usar las herramientas?",
      answer:
        "No, todas nuestras herramientas de conversión son completamente gratuitas y no requieren registro. Puedes utilizarlas tantas veces como necesites sin crear una cuenta.",
    },
    {
      question: "¿Cómo puedo sugerir una nueva herramienta de conversión?",
      answer:
        "Valoramos tus sugerencias. Puedes enviarnos tus ideas a través de nuestro formulario de contacto o por email a info@convertidorrapido.org. Estamos constantemente trabajando para añadir nuevas herramientas útiles basadas en el feedback de nuestros usuarios.",
    },
    {
      question: "¿Las herramientas funcionan sin conexión a internet?",
      answer:
        "Actualmente, nuestras herramientas requieren conexión a internet para funcionar correctamente. Sin embargo, estamos trabajando en una versión PWA (Progressive Web App) que permitirá el uso básico de algunas herramientas sin conexión en el futuro.",
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <Script id="faq-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${faqs
                .map(
                  (faq) => `{
                  "@type": "Question",
                  "name": "${faq.question}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${faq.answer}"
                  }
                }`,
                )
                .join(",")}
            ]
          }
        `}
      </Script>
    </>
  )
}
