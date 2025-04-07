"use client"

import { useState, useEffect } from "react"

export default function DateAnnouncement() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const targetDate = new Date("November 1, 2025 00:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-[3.2rem] text-gray-800 mb-2">¡El gran día!</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-4">1° de noviembre de 2025</p>
        <p className="text-base text-gray-500 max-w-md mx-auto mb-10">
          Estamos emocionados de compartir este momento especial con todos ustedes
        </p>

        {/* Countdown */}
        <div
          className={`flex justify-center gap-4 md:gap-8 mt-10 ${isLoaded ? "slide-up" : "opacity-0"}`}
          style={{ transitionDelay: "0.3s" }}
        >
          <TimeUnit value={timeLeft.days} label="DÍAS" />
          <TimeUnit value={timeLeft.hours} label="HORAS" />
          <TimeUnit value={timeLeft.minutes} label="MINUTOS" />
          <TimeUnit value={timeLeft.seconds} label="SEGUNDOS" />
        </div>
      </div>
    </section>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-50 rounded-lg p-3 md:p-4 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center shadow-md border border-blue-100">
        <span className="text-xl md:text-3xl font-bold text-blue-900">{value.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-xs md:text-sm mt-2 font-medium text-gray-600">{label}</span>
    </div>
  )
}

