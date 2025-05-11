"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, ThumbsDown, X } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [feedbackType, setFeedbackType] = useState<"positive" | "negative" | null>(null)
  const { toast } = useToast()

  const handleSubmit = async () => {
    if (!feedbackType) return

    // Aquí se enviaría el feedback a un backend
    console.log("Feedback enviado:", { type: feedbackType, message: feedback })

    toast({
      title: "¡Gracias por tu feedback!",
      description: "Tu opinión nos ayuda a mejorar nuestras herramientas.",
    })

    setIsOpen(false)
    setFeedback("")
    setFeedbackType(null)
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
        variant="outline"
      >
        ¿Te ha sido útil?
      </Button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Tu opinión nos importa</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center space-x-4 mb-4">
        <Button
          variant={feedbackType === "positive" ? "default" : "outline"}
          size="sm"
          onClick={() => setFeedbackType("positive")}
          className="flex items-center"
        >
          <ThumbsUp className="h-4 w-4 mr-2" />
          Útil
        </Button>
        <Button
          variant={feedbackType === "negative" ? "default" : "outline"}
          size="sm"
          onClick={() => setFeedbackType("negative")}
          className="flex items-center"
        >
          <ThumbsDown className="h-4 w-4 mr-2" />
          Mejorable
        </Button>
      </div>

      {feedbackType && (
        <>
          <Textarea
            placeholder="¿Cómo podemos mejorar? (opcional)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mb-4"
            rows={3}
          />
          <Button onClick={handleSubmit} className="w-full">
            Enviar feedback
          </Button>
        </>
      )}
    </div>
  )
}
