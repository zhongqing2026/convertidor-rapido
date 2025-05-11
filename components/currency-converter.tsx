"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, ArrowRightLeft, RefreshCw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface CurrencyConverterProps {
  fromCurrency: string
  toCurrency: string
  apiKey?: string
}

interface ExchangeRateData {
  rates: Record<string, number>
  timestamp: number
  base: string
}

export function CurrencyConverter({ fromCurrency, toCurrency, apiKey }: CurrencyConverterProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const { toast } = useToast()

  // Función para obtener la tasa de cambio actual
  const fetchExchangeRate = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // Usamos la API de ExchangeRate-API para obtener tasas de cambio
      // En un entorno de producción, deberías usar tu propia clave API
      const response = await fetch(
        `https://open.er-api.com/v6/latest/${direction === "forward" ? fromCurrency : toCurrency}`,
      )

      if (!response.ok) {
        throw new Error("No se pudo obtener la tasa de cambio actual")
      }

      const data: ExchangeRateData = await response.json()

      if (direction === "forward") {
        setExchangeRate(data.rates[toCurrency])
      } else {
        setExchangeRate(data.rates[fromCurrency])
      }

      setLastUpdated(new Date(data.timestamp * 1000))

      // Recalcular el resultado con la nueva tasa
      if (inputValue) {
        const value = Number.parseFloat(inputValue)
        if (!isNaN(value)) {
          const calculatedResult =
            direction === "forward" ? value * data.rates[toCurrency] : value * data.rates[fromCurrency]
          setResult(calculatedResult.toFixed(2))
        }
      }
    } catch (err) {
      console.error("Error fetching exchange rate:", err)
      setError("No se pudo obtener la tasa de cambio actual. Por favor, inténtalo de nuevo más tarde.")
      // Usar una tasa de respaldo en caso de error
      setExchangeRate(direction === "forward" ? 0.93 : 1.08) // Tasas aproximadas EUR/USD
    } finally {
      setIsLoading(false)
    }
  }

  // Obtener la tasa de cambio al cargar el componente
  useEffect(() => {
    fetchExchangeRate()
    // Actualizar la tasa cada 30 minutos
    const intervalId = setInterval(fetchExchangeRate, 30 * 60 * 1000)
    return () => clearInterval(intervalId)
  }, [direction, fromCurrency, toCurrency])

  // Manejar cambios en el input
  useEffect(() => {
    if (inputValue === "") {
      setResult("")
      return
    }

    const value = Number.parseFloat(inputValue)
    if (isNaN(value)) {
      setResult("Valor inválido")
      return
    }

    if (exchangeRate !== null) {
      const calculatedResult = value * exchangeRate
      setResult(calculatedResult.toFixed(2))
    }
  }, [inputValue, exchangeRate])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleClear = () => {
    setInputValue("")
    setResult("")
  }

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result)
      toast({
        title: "Copiado al portapapeles",
        description: `${result} ${direction === "forward" ? toCurrency : fromCurrency}`,
      })
    }
  }

  const toggleDirection = () => {
    setDirection(direction === "forward" ? "backward" : "forward")
    setInputValue(result || "")
    setResult(inputValue || "")
    fetchExchangeRate()
  }

  const getFromCurrencyLabel = () => {
    if (direction === "forward") {
      return fromCurrency === "USD" ? "Dólares (USD)" : "Euros (EUR)"
    } else {
      return toCurrency === "USD" ? "Dólares (USD)" : "Euros (EUR)"
    }
  }

  const getToCurrencyLabel = () => {
    if (direction === "forward") {
      return toCurrency === "EUR" ? "Euros (EUR)" : "Dólares (USD)"
    } else {
      return fromCurrency === "EUR" ? "Euros (EUR)" : "Dólares (USD)"
    }
  }

  const formatCurrency = (value: string, currency: string) => {
    if (value === "" || value === "Valor inválido") return value

    const numValue = Number.parseFloat(value)
    if (isNaN(numValue)) return value

    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numValue)
  }

  const getConversionText = () => {
    if (direction === "forward" && fromCurrency === "USD" && toCurrency === "EUR") {
      return "Convertir USD a euros"
    } else if (direction === "backward" && fromCurrency === "USD" && toCurrency === "EUR") {
      return "Convertir euros a USD"
    } else {
      return `Convertir ${direction === "forward" ? fromCurrency : toCurrency} a ${
        direction === "forward" ? toCurrency : fromCurrency
      }`
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border">
      <h3 className="text-lg font-semibold mb-4 text-center">{getConversionText()}</h3>
      <div className="space-y-6">
        <div>
          <label htmlFor="input-value" className="block text-sm font-medium mb-1">
            {getFromCurrencyLabel()}
          </label>
          <Input
            id="input-value"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={`Ingrese el valor en ${getFromCurrencyLabel()}`}
            className="w-full"
            step="0.01"
            aria-label={`Cantidad en ${getFromCurrencyLabel()}`}
          />
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDirection}
            className="rounded-full"
            title="Invertir conversión"
            aria-label="Invertir dirección de conversión"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </Button>
        </div>

        <div>
          <label htmlFor="result" className="block text-sm font-medium mb-1">
            {getToCurrencyLabel()}
          </label>
          <div className="flex">
            <Input
              id="result"
              readOnly
              value={
                result
                  ? formatCurrency(result, getToCurrencyLabel().split(" ")[1].replace("(", "").replace(")", ""))
                  : ""
              }
              className="w-full"
              placeholder="Resultado"
              aria-label={`Resultado en ${getToCurrencyLabel()}`}
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              disabled={!result}
              className="ml-2"
              title="Copiar resultado"
              aria-label="Copiar resultado al portapapeles"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={handleClear} className="w-full mr-2" aria-label="Limpiar valores">
            Limpiar
          </Button>
          <Button
            onClick={fetchExchangeRate}
            className="w-full ml-2 bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
            disabled={isLoading}
            aria-label="Actualizar tasa de cambio"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
            Actualizar tasa
          </Button>
        </div>

        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-sm">
          <p className="font-medium mb-1">Información:</p>
          <p>
            Tasa de cambio: 1 {getFromCurrencyLabel().split(" ")[0]} = {exchangeRate?.toFixed(4) || "..."}{" "}
            {getToCurrencyLabel().split(" ")[0]}
          </p>
          {lastUpdated && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Última actualización: {lastUpdated.toLocaleString("es-ES")}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
