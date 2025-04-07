"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export default function CalendarModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  // Event details
  const eventTitle = "Boda de Barbie & Fede"
  const eventDate = "2025-11-01"
  const eventStartTime = "17:00"
  const eventEndTime = "23:59"
  const eventLocation = "Álamos de Cañuelas, Buenos Aires, Argentina"
  const eventDescription = "¡Nos casamos! Acompáñanos en este día tan especial."

  // Generate calendar links
  const googleCalendarLink = () => {
    const startDate = new Date(`${eventDate}T${eventStartTime}:00`)
    const endDate = new Date(`${eventDate}T${eventEndTime}:00`)

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "")
    }

    const url = new URL("https://calendar.google.com/calendar/render")
    url.searchParams.append("action", "TEMPLATE")
    url.searchParams.append("text", eventTitle)
    url.searchParams.append("dates", `${formatDate(startDate)}/${formatDate(endDate)}`)
    url.searchParams.append("details", eventDescription)
    url.searchParams.append("location", eventLocation)
    url.searchParams.append("sf", "true")
    url.searchParams.append("output", "xml")

    return url.toString()
  }

  const outlookCalendarLink = () => {
    const startDate = new Date(`${eventDate}T${eventStartTime}:00`)
    const endDate = new Date(`${eventDate}T${eventEndTime}:00`)

    const url = new URL("https://outlook.live.com/calendar/0/deeplink/compose")
    url.searchParams.append("subject", eventTitle)
    url.searchParams.append("startdt", startDate.toISOString())
    url.searchParams.append("enddt", endDate.toISOString())
    url.searchParams.append("body", eventDescription)
    url.searchParams.append("location", eventLocation)
    url.searchParams.append("path", "/calendar/action/compose")
    url.searchParams.append("rru", "addevent")

    return url.toString()
  }

  const appleCalendarLink = () => {
    const startDate = new Date(`${eventDate}T${eventStartTime}:00`)
    const endDate = new Date(`${eventDate}T${eventEndTime}:00`)

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "")
    }

    const url = new URL("data:text/calendar;charset=utf8,")
    const content = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${eventTitle}`,
      `DESCRIPTION:${eventDescription}`,
      `LOCATION:${eventLocation}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\n")

    return `data:text/calendar;charset=utf8,${encodeURIComponent(content)}`
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Agenda nuestra boda</DialogTitle>
          <DialogDescription className="text-center">
            Añade este evento a tu calendario para no olvidarlo
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-3 mb-3">
              <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium">Sábado, 1° de noviembre de 2025</p>
                <p className="text-sm text-gray-500">Añade esta fecha a tu calendario</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium">17:00 hs</p>
                <p className="text-sm text-gray-500">Te esperamos puntualmente</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium">Álamos de Cañuelas</p>
                <p className="text-sm text-gray-500">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <a
              href={googleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <img src="/placeholder.svg?height=24&width=24&text=G" alt="Google Calendar" className="h-6 w-6" />
              <span>Añadir a Google Calendar</span>
            </a>

            <a
              href={outlookCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <img src="/placeholder.svg?height=24&width=24&text=O" alt="Outlook" className="h-6 w-6" />
              <span>Añadir a Outlook</span>
            </a>

            <a
              href={appleCalendarLink()}
              download="boda-barbie-fede.ics"
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <img src="/placeholder.svg?height=24&width=24&text=A" alt="Apple Calendar" className="h-6 w-6" />
              <span>Añadir a Apple Calendar</span>
            </a>
          </div>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

