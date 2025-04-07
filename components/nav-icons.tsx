import type React from "react"
import { Calendar, MapPin, Gift, Camera } from "lucide-react"

export default function NavIcons() {
  return (
    <div className="flex justify-center -mt-8 relative z-20">
      <div className="flex gap-4">
        <NavIcon icon={<Calendar className="h-5 w-5" />} label="Fecha" />
        <NavIcon icon={<MapPin className="h-5 w-5" />} label="Lugar" />
        <NavIcon icon={<Gift className="h-5 w-5" />} label="Regalos" />
        <NavIcon icon={<Camera className="h-5 w-5" />} label="Fotos" />
      </div>
    </div>
  )
}

function NavIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-full p-4 w-14 h-14 flex items-center justify-center shadow-md">{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  )
}

