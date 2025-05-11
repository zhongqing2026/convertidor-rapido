import { type NextRequest, NextResponse } from "next/server"

// Función para verificar el origen de las solicitudes
export function validateOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin")
  const referer = request.headers.get("referer")

  const allowedOrigins = [
    "https://convertidorrapido.org",
    "https://www.convertidorrapido.org",
    // Añadir aquí otros dominios permitidos
  ]

  // En desarrollo, permitir localhost
  if (process.env.NODE_ENV === "development") {
    allowedOrigins.push("http://localhost:3000")
  }

  // Verificar si el origen está en la lista de permitidos
  if (origin && allowedOrigins.includes(origin)) {
    return true
  }

  // Verificar el referer como respaldo
  if (referer) {
    return allowedOrigins.some((allowed) => referer.startsWith(allowed))
  }

  return false
}

// Middleware para proteger las API
export function apiMiddleware(handler: (req: NextRequest) => Promise<NextResponse> | NextResponse) {
  return async (req: NextRequest) => {
    // Verificar el origen
    if (!validateOrigin(req)) {
      return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
        status: 403,
        headers: {
          "Content-Type": "application/json",
        },
      })
    }

    // Verificar límite de tasa (rate limiting)
    // Aquí se implementaría la lógica de rate limiting

    // Si pasa todas las verificaciones, procesar la solicitud
    return handler(req)
  }
}

// Función para sanitizar entradas de usuario
export function sanitizeInput(input: string): string {
  // Eliminar etiquetas HTML y caracteres potencialmente peligrosos
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").trim()
}
