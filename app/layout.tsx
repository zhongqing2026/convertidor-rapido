import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ConvertidorRapido.org - Conversiones de unidades rápidas y precisas",
  description:
    "Convertidor rápido online para todo tipo de unidades: pulgadas a mm, cm a pulgadas, gramos a onzas, litros a kilos y números romanos. Herramientas gratuitas y precisas.",
  keywords:
    "convertidor rapido, convertidor unidades, pulgadas a mm, cm a pulgadas, gramos a onzas, litros a kilos, numeros romanos, conversor medidas, calculadora unidades",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      {
        rel: "mask-icon",
        url: "/favicon-32x32.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://convertidorrapido.org",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://convertidorrapido.org",
    siteName: "ConvertidorRapido.org",
    title: "ConvertidorRapido.org - Conversiones de unidades rápidas y precisas",
    description: "Herramientas de conversión de unidades online rápidas, precisas y fáciles de usar.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "ConvertidorRapido.org",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ConvertidorRapido.org - Conversiones de unidades rápidas y precisas",
    description: "Herramientas de conversión de unidades online rápidas, precisas y fáciles de usar.",
    images: ["/android-chrome-512x512.png"],
  },
  verification: {
    google: "verificacion-google", // Reemplazar con tu código de verificación real
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#1E40AF" />
        <link rel="alternate" hrefLang="es" href="https://convertidorrapido.org" />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ConvertidorRapido.org",
              "url": "https://convertidorrapido.org",
              "description": "Herramientas de conversión de unidades online rápidas, precisas y fáciles de usar, diseñadas específicamente para el público de habla hispana.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://convertidorrapido.org/herramientas?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "logo": "https://convertidorrapido.org/logo.png",
              "sameAs": [
                "https://twitter.com/convertidorrapido",
                "https://facebook.com/convertidorrapido"
              ],
              "inLanguage": "es",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX'); // Reemplazar con tu ID de Google Analytics
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
