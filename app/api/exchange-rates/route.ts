import { type NextRequest, NextResponse } from "next/server"
import { apiMiddleware } from "@/lib/security"

// Caché en memoria para tasas de cambio
const ratesCache: {
  [key: string]: {
    rates: Record<string, number>
    timestamp: number
  }
} = {}

// Tiempo de caché: 1 hora
const CACHE_TTL = 60 * 60 * 1000

async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const baseCurrency = searchParams.get("base") || "USD"

    // Verificar si tenemos datos en caché y si son recientes
    const cachedData = ratesCache[baseCurrency]
    const now = Date.now()

    if (cachedData && now - cachedData.timestamp < CACHE_TTL) {
      // Usar datos en caché
      return NextResponse.json({
        base: baseCurrency,
        rates: cachedData.rates,
        timestamp: cachedData.timestamp,
        cached: true,
      })
    }

    // Si no hay caché o está obsoleta, obtener datos frescos
    const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`)

    if (!response.ok) {
      throw new Error(`Error fetching exchange rates: ${response.status}`)
    }

    const data = await response.json()

    // Guardar en caché
    ratesCache[baseCurrency] = {
      rates: data.rates,
      timestamp: now,
    }

    return NextResponse.json({
      base: baseCurrency,
      rates: data.rates,
      timestamp: now,
      cached: false,
    })
  } catch (error) {
    console.error("Exchange rate API error:", error)

    return NextResponse.json({ error: "Failed to fetch exchange rates" }, { status: 500 })
  }
}

export const GET = apiMiddleware(handler)
