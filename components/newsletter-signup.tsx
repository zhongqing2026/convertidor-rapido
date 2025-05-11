"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast({
        title: "Error",
        description: "Por favor, introduce un email válido",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Aquí iría la lógica para enviar el email a un servicio de newsletter
      // Por ahora simulamos una respuesta exitosa
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubscribed(true)
      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo completar la suscripción. Inténtalo de nuevo más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Mantente actualizado</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Suscríbete para recibir actualizaciones sobre nuevas herramientas y consejos de conversión
      </p>

      {isSubscribed ? (
        <div className="flex items-center text-green-600 dark:text-green-400">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>¡Gracias por suscribirte!</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="email"
            placeholder="Tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" disabled={isLoading} className="flex items-center">
            {isLoading ? (
              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
            ) : (
              <Send className="h-4 w-4 mr-2" />
            )}
            Suscribirse
          </Button>
        </form>
      )}
    </div>
  )
}
