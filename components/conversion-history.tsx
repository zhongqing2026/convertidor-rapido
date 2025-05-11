"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Clock, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ConversionRecord {
  id: string
  fromCurrency: string
  toCurrency: string
  fromValue: number
  toValue: number
  rate: number
  timestamp: number
}

export function ConversionHistory() {
  const [history, setHistory] = useState<ConversionRecord[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Cargar historial del localStorage
    const savedHistory = localStorage.getItem("conversionHistory")
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory))
      } catch (e) {
        console.error("Error parsing conversion history", e)
      }
    }
  }, [])

  const addConversion = (record: Omit<ConversionRecord, "id" | "timestamp">) => {
    const newRecord: ConversionRecord = {
      ...record,
      id: Date.now().toString(),
      timestamp: Date.now(),
    }

    const updatedHistory = [newRecord, ...history].slice(0, 10) // Mantener solo los últimos 10
    setHistory(updatedHistory)
    localStorage.setItem("conversionHistory", JSON.stringify(updatedHistory))
  }

  const clearHistory = () => {
    setHistory([])
    localStorage.removeItem("conversionHistory")
    toast({
      title: "Historial borrado",
      description: "Se ha eliminado todo el historial de conversiones",
    })
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="relative">
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <Clock className="h-4 w-4 mr-2" />
        Historial
        {history.length > 0 && (
          <span className="ml-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {history.length}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 border rounded-md shadow-lg z-50">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Historial de conversiones</h3>
              {history.length > 0 && (
                <Button variant="ghost" size="sm" onClick={clearHistory}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>

            {history.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">No hay conversiones recientes</p>
            ) : (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {history.map((record) => (
                  <div key={record.id} className="text-sm border-b pb-2">
                    <div className="flex justify-between">
                      <span>
                        {record.fromValue} {record.fromCurrency} → {record.toValue.toFixed(2)} {record.toCurrency}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(record.timestamp)} • Tasa: {record.rate.toFixed(4)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
