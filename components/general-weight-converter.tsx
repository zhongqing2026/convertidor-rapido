"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Definir las unidades de peso y sus factores de conversión a gramos
const weightUnits = [
  { name: "Microgramos (μg)", value: "ug", factor: 0.000001 },
  { name: "Miligramos (mg)", value: "mg", factor: 0.001 },
  { name: "Gramos (g)", value: "g", factor: 1 },
  { name: "Kilogramos (kg)", value: "kg", factor: 1000 },
  { name: "Toneladas métricas (t)", value: "t", factor: 1000000 },
  { name: "Onzas (oz)", value: "oz", factor: 28.3495 },
  { name: "Libras (lb)", value: "lb", factor: 453.592 },
  { name: "Stones (st)", value: "st", factor: 6350.29 },
  { name: "Toneladas cortas (US)", value: "us-ton", factor: 907185 },
  { name: "Toneladas largas (UK)", value: "uk-ton", factor: 1016050 },
]

export function GeneralWeightConverter() {
  const [inputValue, setInputValue] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [fromUnit, setFromUnit] = useState<string>("g")
  const [toUnit, setToUnit] = useState<string>("kg")
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

    // Obtener los factores de conversión
    const fromUnitData = weightUnits.find((unit) => unit.value === fromUnit)
    const toUnitData = weightUnits.find((unit) => unit.value === toUnit)

    if (!fromUnitData || !toUnitData) {
      setResult("Unidad no encontrada")
      return
    }

    // Convertir a gramos y luego a la unidad de destino
    const valueInGrams = value * fromUnitData.factor
    const convertedValue = valueInGrams / toUnitData.factor

    // Determinar la precisión adecuada según la magnitud del resultado
    let precision = 4
    if (convertedValue >= 1000) precision = 2
    else if (convertedValue >= 10) precision = 3
    else if (convertedValue < 0.001) precision = 8
    else if (convertedValue < 0.1) precision = 6

    setResult(convertedValue.toFixed(precision))
  }, [inputValue, fromUnit, toUnit])

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
        description: `${result} ${toUnit}`,
      })
    }
  }

  const handleSwapUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    if (result) {
      setInputValue(result)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="from-unit" className="block text-sm font-medium mb-1">
              Desde Unidad
            </label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger id="from-unit">
                <SelectValue placeholder="Seleccione unidad" />
              </SelectTrigger>
              <SelectContent>
                {weightUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="to-unit" className="block text-sm font-medium mb-1">
              A Unidad
            </label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger id="to-unit">
                <SelectValue placeholder="Seleccione unidad" />
              </SelectTrigger>
              <SelectContent>
                {weightUnits.map((unit) => (
                  <SelectItem key={unit.value} value={unit.value}>
                    {unit.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex-1">
            <label htmlFor="input-value" className="block text-sm font-medium mb-1">
              Valor
            </label>
            <Input
              id="input-value"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Ingrese el valor a convertir"
              className="w-full"
            />
          </div>

          <div className="pt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapUnits}
              className="rounded-full"
              title="Intercambiar unidades"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-left-right"
              >
                <path d="m8 3-6 6 6 6" />
                <path d="M2 9h20" />
                <path d="m16 21 6-6-6-6" />
                <path d="M22 15H2" />
              </svg>
            </Button>
          </div>

          <div className="flex-1">
            <label htmlFor="result" className="block text-sm font-medium mb-1">
              Resultado
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
                  const fromUnitData = weightUnits.find((unit) => unit.value === fromUnit)
                  const toUnitData = weightUnits.find((unit) => unit.value === toUnit)

                  if (fromUnitData && toUnitData) {
                    const valueInGrams = value * fromUnitData.factor
                    const convertedValue = valueInGrams / toUnitData.factor

                    let precision = 4
                    if (convertedValue >= 1000) precision = 2
                    else if (convertedValue >= 10) precision = 3
                    else if (convertedValue < 0.001) precision = 8
                    else if (convertedValue < 0.1) precision = 6

                    setResult(convertedValue.toFixed(precision))
                  }
                }
              }
            }}
            className="w-full ml-2 bg-blue-600 hover:bg-blue-700"
          >
            Convertir
          </Button>
        </div>
      </div>
    </div>
  )
}
