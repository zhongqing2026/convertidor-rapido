interface ErrorDetails {
  message: string
  stack?: string
  componentName?: string
  additionalInfo?: Record<string, any>
}

export const trackError = (error: Error, componentName?: string, additionalInfo?: Record<string, any>): void => {
  const errorDetails: ErrorDetails = {
    message: error.message,
    stack: error.stack,
    componentName,
    additionalInfo,
  }

  // Enviar a un servicio de seguimiento de errores
  try {
    fetch("/api/error-tracking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...errorDetails,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      }),
      // No esperamos la respuesta para no bloquear
      keepalive: true,
    }).catch(() => {
      // Silenciar errores en el tracking para no afectar la experiencia del usuario
    })
  } catch (e) {
    // Silenciar errores
    console.error("Error al enviar reporte de error:", e)
  }

  // También registrar en la consola en desarrollo
  if (process.env.NODE_ENV === "development") {
    console.error("Error tracked:", errorDetails)
  }
}

export const setupGlobalErrorTracking = (): void => {
  if (typeof window !== "undefined") {
    const originalOnError = window.onerror

    window.onerror = (message, source, lineno, colno, error) => {
      // Llamar al handler original si existe
      if (originalOnError) {
        originalOnError.apply(window, [message, source, lineno, colno, error])
      }

      // Trackear el error
      if (error) {
        trackError(error, "global", { source, lineno, colno })
      } else if (typeof message === "string") {
        trackError(new Error(message), "global", { source, lineno, colno })
      }

      // No prevenir el comportamiento por defecto
      return false
    }

    // Capturar también promesas rechazadas no manejadas
    window.addEventListener("unhandledrejection", (event) => {
      const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason))

      trackError(error, "unhandledRejection")
    })
  }
}
