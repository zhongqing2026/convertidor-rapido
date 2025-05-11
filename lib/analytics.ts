type EventCategory = "conversion" | "engagement" | "navigation" | "error"

interface AnalyticsEvent {
  category: EventCategory
  action: string
  label?: string
  value?: number
}

export const trackEvent = ({ category, action, label, value }: AnalyticsEvent): void => {
  // Verificar si Google Analytics está disponible
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore - gtag no está tipado en window
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  // También podemos enviar a un endpoint propio para análisis personalizados
  try {
    fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category,
        action,
        label,
        value,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
      // No esperamos la respuesta para no bloquear
      keepalive: true,
    }).catch(() => {
      // Silenciar errores en analytics para no afectar la experiencia del usuario
    })
  } catch (error) {
    // Silenciar errores
  }
}

export const trackConversion = (fromValue: number, fromCurrency: string, toValue: number, toCurrency: string): void => {
  trackEvent({
    category: "conversion",
    action: `${fromCurrency}_to_${toCurrency}`,
    label: `${fromValue} ${fromCurrency} to ${toValue} ${toCurrency}`,
    value: fromValue,
  })
}

export const trackPageView = (url: string, title: string): void => {
  if (typeof window !== "undefined" && "gtag" in window) {
    // @ts-ignore - gtag no está tipado en window
    window.gtag("config", "G-XXXXXXXXXX", {
      page_path: url,
      page_title: title,
    })
  }
}
