import { CategoryCard } from "@/components/category-card"

export const metadata = {
  title: "Conversores de Temperatura | ConvertidorRapido.org",
  description: "Herramientas de conversión de unidades de temperatura online rápidas, precisas y fáciles de usar.",
}

export default function TemperaturaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Conversores de Temperatura</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <CategoryCard
          title="Celsius a Fahrenheit"
          description="Convierte grados Celsius a grados Fahrenheit de forma rápida y precisa."
          icon="Thermometer"
          href="/temperatura/celsius-a-fahrenheit"
        />
        <CategoryCard
          title="Fahrenheit a Celsius"
          description="Convierte grados Fahrenheit a grados Celsius de forma rápida y precisa."
          icon="Thermometer"
          href="/temperatura/fahrenheit-a-celsius"
        />
        <CategoryCard
          title="Celsius a Kelvin"
          description="Convierte grados Celsius a Kelvin de forma rápida y precisa."
          icon="Thermometer"
          href="/temperatura/celsius-a-kelvin"
        />
      </div>
    </div>
  )
}
