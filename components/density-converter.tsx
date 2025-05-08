"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, ArrowRightLeft } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Densidades comunes de sustancias en kg/L o g/mL
const commonSubstances = [
  { name: "Agua", density: 1.0 },
  { name: "Leche", density: 1.03 },
  { name: "Aceite de oliva", density: 0.92 },
  { name: "Aceite vegetal", density: 0.91 },
  { name: "Miel", density: 1.42 },
  { name: "Gasolina", density: 0.75 },
  { name: "Alcohol etílico", density: 0.79 },
  { name: "Glicerina", density: 1.26 },
  { name: "Vinagre", density: 1.01 },
  { name: "Jarabe de maíz", density: 1.38 },
  { name: "Harina", density: 0.59 },
  { name: "Azúcar", density: 0.85 },
  { name: "Sal", density: 2.16 },
]

interface DensityConverterProps {
  fromUnit: string
  fromUnitLabel: string
  toUnit: string
  toUnitLabel: string
  conversionType: "mass-to-volume" | "volume-to-mass"
  precision?: number
  bidirectional?: boolean
}

export function DensityConverter({
  fromUnit,
  fromUnitLabel,
  toUnit,
  toUnitLabel,
  conversionType,
  precision = 2,
  bidirectional = true,
}: DensityConverterProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [selectedSubstance, setSelectedSubstance] = useState<string>("Agua")
  const [customDensity, setCustomDensity] = useState<string>("")
  const [direction, setDirection] = useState<"forward" | "backward">("forward")
  const { toast } = useToast()

  const getDensity = (): number => {
    if (customDensity && !isNaN(Number.parseFloat(customDensity))) {
      return Number.parseFloat(customDensity)
    }

    const substance = commonSubstances.find((s) => s.name === selectedSubstance)
    return substance ? substance.density : 1.0 // Default to water if not found
  }

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

    const density = getDensity()
    let calculatedResult: number

    if (direction === "forward") {
      if (conversionType === "volume-to-mass") {
        // Litros a Kilos: multiplicar por densidad
        calculatedResult = value * density
      } else {
        // Gramos a Mililitros: dividir por densidad
        calculatedResult = value / density
      }
    } else {
      if (conversionType === "volume-to-mass") {
        // Kilos a Litros: dividir por densidad
        calculatedResult = value / density
      } else {
        // Mililitros a Gramos: multiplicar por densidad
        calculatedResult = value * density
      }
    }

    setResult(calculatedResult.toFixed(precision))
  }, [inputValue, conversionType, precision, selectedSubstance, customDensity, direction])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleCustomDensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomDensity(e.target.value)
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
          <label htmlFor="substance" className="block text-sm font-medium mb-1">
            Sustancia
          </label>
          <Select
            value={selectedSubstance}
            onValueChange={(value) => {
              setSelectedSubstance(value)
              if (value !== "Personalizado") {
                setCustomDensity("")
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccione una sustancia" />
            </SelectTrigger>
            <SelectContent>
              {commonSubstances.map((substance) => (
                <SelectItem key={substance.name} value={substance.name}>
                  {substance.name} ({substance.density} kg/L)
                </SelectItem>
              ))}
              <SelectItem value="Personalizado">Personalizado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedSubstance === "Personalizado" && (
          <div>
            <label htmlFor="custom-density" className="block text-sm font-medium mb-1">
              Densidad Personalizada (kg/L)
            </label>
            <Input
              id="custom-density"
              type="number"
              value={customDensity}
              onChange={handleCustomDensityChange}
              placeholder="Ingrese la densidad en kg/L"
              step="0.01"
              min="0"
              className="w-full"
            />
          </div>
        )}

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
                  const density = getDensity()
                  let calculatedResult: number

                  if (direction === "forward") {
                    if (conversionType === "volume-to-mass") {
                      calculatedResult = value * density
                    } else {
                      calculatedResult = value / density
                    }
                  } else {
                    if (conversionType === "volume-to-mass") {
                      calculatedResult = value / density
                    } else {
                      calculatedResult = value * density
                    }
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

        <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded text-sm">
          <p className="font-medium mb-1">Información:</p>
          <p>
            {direction === "forward"
              ? conversionType === "volume-to-mass"
                ? `${fromUnitLabel} × Densidad (${getDensity()} kg/L) = ${toUnitLabel}`
                : `${fromUnitLabel} ÷ Densidad (${getDensity()} g/mL) = ${toUnitLabel}`
              : conversionType === "volume-to-mass"
                ? `${fromUnitLabel} ÷ Densidad (${getDensity()} kg/L) = ${toUnitLabel}`
                : `${fromUnitLabel} × Densidad (${getDensity()} g/mL) = ${toUnitLabel}`}
          </p>
        </div>
      </div>
    </div>
  )
}
