"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Fecha objetivo: 1 de noviembre de 2025
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
    <div className="flex justify-center -mt-12 relative z-20">
      <div className="flex gap-4 md:gap-8">
        <TimeUnit value={timeLeft.days} label="Días" />
        <TimeUnit value={timeLeft.hours} label="Horas" />
        <TimeUnit value={timeLeft.minutes} label="Minutos" />
        <TimeUnit value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-lg p-3 md:p-4 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center shadow-md">
        <span className="text-xl md:text-3xl font-bold text-blue-900">{value.toString().padStart(2, "0")}</span>
      </div>
      <span className="text-xs md:text-sm mt-2 font-medium">{label}</span>
    </div>
  )
}

