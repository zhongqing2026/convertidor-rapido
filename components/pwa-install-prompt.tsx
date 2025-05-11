"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya ha descartado la notificación
    const hasDismissed = localStorage.getItem("pwaPromptDismissed")
    if (hasDismissed) {
      setDismissed(true)
    }

    // Escuchar el evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevenir que Chrome muestre la notificación automáticamente
      e.preventDefault()
      // Guardar el evento para usarlo más tarde
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Mostrar nuestra notificación personalizada
      setShowPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    // Mostrar el prompt de instalación
    deferredPrompt.prompt()

    // Esperar a que el usuario responda
    const { outcome } = await deferredPrompt.userChoice

    // Limpiar el prompt guardado
    setDeferredPrompt(null)
    setShowPrompt(false)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    setDismissed(true)
    // Guardar la preferencia del usuario
    localStorage.setItem("pwaPromptDismissed", "true")
  }

  if (!showPrompt || dismissed) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border z-50">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium mb-1">Instalar aplicación</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Instala ConvertidorRapido para acceder rápidamente sin conexión
          </p>
          <div className="flex space-x-2">
            <Button size="sm" onClick={handleInstall} className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Instalar
            </Button>
            <Button size="sm" variant="outline" onClick={handleDismiss}>
              Ahora no
            </Button>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={handleDismiss} className="ml-2">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
