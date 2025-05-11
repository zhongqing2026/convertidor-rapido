type Locale = "es" | "en" | "fr" | "de" | "it" | "pt"

interface Translations {
  [key: string]: {
    [locale in Locale]?: string
  }
}

// Traducciones básicas para empezar
const translations: Translations = {
  "common.convert": {
    es: "Convertir",
    en: "Convert",
    fr: "Convertir",
    de: "Konvertieren",
    it: "Convertire",
    pt: "Converter",
  },
  "common.from": {
    es: "De",
    en: "From",
    fr: "De",
    de: "Von",
    it: "Da",
    pt: "De",
  },
  "common.to": {
    es: "A",
    en: "To",
    fr: "À",
    de: "Zu",
    it: "A",
    pt: "Para",
  },
  "common.result": {
    es: "Resultado",
    en: "Result",
    fr: "Résultat",
    de: "Ergebnis",
    it: "Risultato",
    pt: "Resultado",
  },
  "common.copy": {
    es: "Copiar",
    en: "Copy",
    fr: "Copier",
    de: "Kopieren",
    it: "Copiare",
    pt: "Copiar",
  },
  "common.clear": {
    es: "Limpiar",
    en: "Clear",
    fr: "Effacer",
    de: "Löschen",
    it: "Cancellare",
    pt: "Limpar",
  },
  "currency.usd": {
    es: "Dólares (USD)",
    en: "Dollars (USD)",
    fr: "Dollars (USD)",
    de: "Dollar (USD)",
    it: "Dollari (USD)",
    pt: "Dólares (USD)",
  },
  "currency.eur": {
    es: "Euros (EUR)",
    en: "Euros (EUR)",
    fr: "Euros (EUR)",
    de: "Euro (EUR)",
    it: "Euro (EUR)",
    pt: "Euros (EUR)",
  },
}

// Función para obtener una traducción
export function t(key: string, locale: Locale = "es"): string {
  const translation = translations[key]

  if (!translation) {
    console.warn(`Translation key not found: ${key}`)
    return key
  }

  return translation[locale] || translation["es"] || key
}

// Función para detectar el idioma del navegador
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "es"

  const browserLang = navigator.language.split("-")[0]

  const supportedLocales: Locale[] = ["es", "en", "fr", "de", "it", "pt"]

  return supportedLocales.includes(browserLang as Locale) ? (browserLang as Locale) : "es"
}

// Hook para usar traducciones en componentes
export function useTranslation() {
  const locale = detectLocale()

  return {
    t: (key: string) => t(key, locale),
    locale,
  }
}
