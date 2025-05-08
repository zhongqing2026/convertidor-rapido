"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy, ArrowRightLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface UnitConverterProps {
  fromUnit: string
  fromUnitLabel: string
  toUnit: string
  toUnitLabel: string
  conversionFactor: number
  conversionOffset?: number
  precision?: number
  bidirectional?: boolean
  formula?: string
}

export function UnitConverter({
  fromUnit,
  fromUnitLabel,
  toUnit,
  toUnitLabel,
  conversionFactor,
  conversionOffset = 0,
  precision = 2,
  bidirectional = true,
  formula,
}: UnitConverterProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const { toast } = useToast()

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

    let calculatedResult: number
    if (direction === "forward") {
      calculatedResult = value * conversionFactor + conversionOffset
    } else {
      calculatedResult = (value - conversionOffset) / conversionFactor
    }

    setResult(calculatedResult.toFixed(precision))
  }, [inputValue, conversionFactor, conversionOffset, precision, direction])

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
        description: `${result} ${direction === "forward" ? toUnit : fromUnit}`,
      })
    }
  }

  const toggleDirection = () => {
    if (bidirectional) {
      setDirection(direction === "forward" ? "backward" : "forward")
      setInputValue(result)
    }
  }

  const getInputLabel = () => (direction === "forward" ? fromUnitLabel : toUnitLabel)
  const getOutputLabel = () => (direction === "forward" ? toUnitLabel : fromUnitLabel)

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border">
      <div className="space-y-6">
        <div>
          <label htmlFor="input-value" className="block text-sm font-medium mb-1">
            {getInputLabel()}
          </label>
          <Input
            id="input-value"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={`Ingrese el valor en ${direction === "forward" ? fromUnit : toUnit}`}
            className="w-full"
          />
        </div>

        {bidirectional && (
          <div className="flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDirection}
              className="rounded-full"
              title="Invertir conversión"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
          </div>
        )}

        <div>
          <label htmlFor="result" className="block text-sm font-medium mb-1">
            {getOutputLabel()}
          </label>
          <div className="flex">
            <Input id="result" readOnly value={result} className="w-full" placeholder="Resultado" />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopy}
              disabled={!result}
              className="ml-2"
              title="Copiar resultado"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handleClear} className="w-full mr-2">
            Limpiar
          </Button>
          <Button
            onClick={() => {
              if (inputValue) {
                const value = Number.parseFloat(inputValue)
                if (!isNaN(value)) {
                  let calculatedResult: number
                  if (direction === "forward") {
                    calculatedResult = value * conversionFactor + conversionOffset
                  } else {
                    calculatedResult = (value - conversionOffset) / conversionFactor
                  }
                  setResult(calculatedResult.toFixed(precision))
                }
              }
            }}
            className="w-full ml-2 bg-blue-600 hover:bg-blue-700"
          >
            Convertir
          </Button>
        </div>

        {formula && (
          <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-sm">
            <p className="font-medium mb-1">Fórmula:</p>
            <p className="font-mono">{formula}</p>
          </div>
        )}
      </div>
    </div>
  )
}
