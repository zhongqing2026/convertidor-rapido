"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function RomanNumeralConverter() {
  const [arabicNumber, setArabicNumber] = useState<string>("")
  const [romanNumber, setRomanNumber] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  // Convertir de arábigo a romano
  const convertToRoman = (num: number): string => {
    if (num <= 0 || num > 3999) {
      setError("El número debe estar entre 1 y 3999")
      return ""
    }

    setError(null)

    const romanNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" },
    ]

    let result = ""
    let remaining = num

    for (const { value, symbol } of romanNumerals) {
      while (remaining >= value) {
        result += symbol
        remaining -= value
      }
    }

    return result
  }

  // Convertir de romano a arábigo
  const convertToArabic = (roman: string): number => {
    const romanMap: Record<string, number> = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }

    // Validar caracteres romanos
    const validRoman = /^[IVXLCDM]+$/i
    if (!validRoman.test(roman)) {
      setError("El número romano contiene caracteres inválidos")
      return 0
    }

    // Validar reglas de repetición
    if (/IIII|XXXX|CCCC|MMMM|VV|LL|DD/.test(roman.toUpperCase())) {
      setError("El número romano no cumple con las reglas de repetición")
      return 0
    }

    setError(null)

    const upperRoman = roman.toUpperCase()
    let result = 0

    for (let i = 0; i < upperRoman.length; i++) {
      const current = romanMap[upperRoman[i]]
      const next = romanMap[upperRoman[i + 1]]

      if (next && current < next) {
        result += next - current
        i++
      } else {
        result += current
      }
    }

    return result
  }

  // Manejar cambios en el campo arábigo
  const handleArabicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setArabicNumber(value)

    if (value === "") {
      setRomanNumber("")
      setError(null)
      return
    }

    const num = Number.parseInt(value, 10)
    if (isNaN(num)) {
      setError("Por favor ingrese un número válido")
      setRomanNumber("")
      return
    }

    const roman = convertToRoman(num)
    setRomanNumber(roman)
  }

  // Manejar cambios en el campo romano
  const handleRomanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setRomanNumber(value)

    if (value === "") {
      setArabicNumber("")
      setError(null)
      return
    }

    const num = convertToArabic(value)
    if (num > 0) {
      setArabicNumber(num.toString())
    } else {
      setArabicNumber("")
    }
  }

  // Limpiar campos
  const handleClear = () => {
    setArabicNumber("")
    setRomanNumber("")
    setError(null)
  }

  // Copiar al portapapeles
  const handleCopyArabic = () => {
    if (arabicNumber) {
      navigator.clipboard.writeText(arabicNumber)
      toast({
        title: "Copiado al portapapeles",
        description: arabicNumber,
      })
    }
  }

  const handleCopyRoman = () => {
    if (romanNumber) {
      navigator.clipboard.writeText(romanNumber)
      toast({
        title: "Copiado al portapapeles",
        description: romanNumber,
      })
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border">
      <div className="space-y-6">
        <div>
          <label htmlFor="arabic-number" className="block text-sm font-medium mb-1">
            Número Arábigo
          </label>
          <div className="flex">
            <Input
              id="arabic-number"
              type="number"
              value={arabicNumber}
              onChange={handleArabicChange}
              placeholder="Ingrese un número (1-3999)"
              min="1"
              max="3999"
              className="w-full"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyArabic}
              disabled={!arabicNumber}
              className="ml-2"
              title="Copiar número arábigo"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label htmlFor="roman-number" className="block text-sm font-medium mb-1">
            Número Romano
          </label>
          <div className="flex">
            <Input
              id="roman-number"
              value={romanNumber}
              onChange={handleRomanChange}
              placeholder="Ingrese un número romano (ej. MCMXCIV)"
              className="w-full uppercase"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyRoman}
              disabled={!romanNumber}
              className="ml-2"
              title="Copiar número romano"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 rounded-md text-sm">
            {error}
          </div>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={handleClear} className="w-full">
            Limpiar
          </Button>
        </div>
      </div>
    </div>
  )
}
