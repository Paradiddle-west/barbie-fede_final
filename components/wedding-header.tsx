"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import CalendarModal from "@/components/calendar-modal"

export default function WeddingHeader() {
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Marcar como cargado para activar animaciones
    setIsLoaded(true)
  }, [])

  const scrollToNextSection = () => {
    const dateSection = document.getElementById("date")
    if (dateSection) {
      dateSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="relative h-screen w-full flex flex-col items-center justify-between text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada-1.webp"
          alt="Barbie y Fede sonriendo juntos en un mirador con vista al mar turquesa"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay menos oscuro para que la imagen se vea más clara */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/30"></div>
      </div>

      {/* Content - Reorganizado para seguir la distribución exacta de la imagen */}
      <div className="z-10 flex flex-col items-center w-full pt-16">
        {/* Título en la parte superior */}
        <div className={`text-center ${isLoaded ? "fade-in" : "opacity-0"}`} style={{ transitionDelay: "0.3s" }}>
          <h1 className="font-dancing text-5xl md:text-7xl text-shadow-lg text-white">Barbie & Fede</h1>
        </div>
      </div>

      {/* Sección central con el texto "¡Nos casamos!" */}
      <div className="z-10 flex flex-col items-center w-full mt-auto">
        <p
          className={`uppercase tracking-[0.2em] text-xl md:text-2xl font-medium mb-4 ${isLoaded ? "fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.4s" }}
        >
          ¡Nos casamos!
        </p>
      </div>

      {/* Sección inferior con la información del evento */}
      <div className="z-10 flex flex-col items-center w-full mb-16">
        {/* Event Info Card - Rediseñado para coincidir exactamente con la imagen */}
        <div
          className={`bg-white/95 backdrop-blur-sm rounded-3xl px-8 py-5 text-gray-800 shadow-lg max-w-xs mx-auto mb-6 ${isLoaded ? "fade-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Sábado</p>
            <p className="font-medium text-lg md:text-xl">1° de noviembre, 2025</p>
            <p className="text-blue-600 font-medium">17:00 hs</p>
          </div>

          <div className="text-center mt-3">
            <p className="font-medium text-lg md:text-xl">Álamos de Cañuelas</p>
            <p className="text-sm text-gray-600">Buenos Aires</p>
          </div>
        </div>

        {/* CTA Button - Destacado */}
        <Button
          size="lg"
          className={`bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-wider text-sm md:text-base py-3 px-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 ${isLoaded ? "scale-in" : "opacity-0"}`}
          style={{ transitionDelay: "0.6s" }}
          onClick={() => setIsCalendarModalOpen(true)}
        >
          <Calendar className="h-5 w-5" />
          <span>Agenda el día</span>
        </Button>
      </div>

      {/* Calendar Modal */}
      <CalendarModal isOpen={isCalendarModalOpen} onClose={() => setIsCalendarModalOpen(false)} />
    </header>
  )
}

