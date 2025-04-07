"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Cuál es el código de vestimenta?",
      answer:
        "El código de vestimenta para nuestra boda es formal. Para los caballeros sugerimos traje oscuro o smoking, y para las damas vestido largo o cocktail. Evitar el color blanco, por favor.",
    },
    {
      question: "¿Hay opciones de alojamiento cerca?",
      answer: (
        <div>
          <p className="mb-2">
            Hay múltiples opciones de alojamiento en Cañuelas y alrededores disponibles en plataformas como:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                href="https://www.booking.com/searchresults.es.html?ss=Ca%C3%B1uelas%2C+Buenos+Aires%2C+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
                onClick={(e) => {
                  // En dispositivos móviles, intentar abrir la app de Booking
                  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    window.location.href = "booking://hotel/searchresults?city=cañuelas"
                    e.preventDefault()
                  }
                }}
              >
                Booking.com
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              {" - Hoteles y posadas"}
            </li>
            <li>
              <a
                href="https://www.airbnb.com.ar/s/Ca%C3%B1uelas--Buenos-Aires--Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center"
                onClick={(e) => {
                  // En dispositivos móviles, intentar abrir la app de Airbnb
                  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                    window.location.href = "airbnb://search?location=Cañuelas"
                    e.preventDefault()
                  }
                }}
              >
                Airbnb
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              {" - Casas y departamentos"}
            </li>
          </ul>
          <p className="mt-2">
            Recomendamos reservar con anticipación ya que la disponibilidad puede ser limitada en la fecha del evento.
          </p>
        </div>
      ),
    },
    {
      question: "¿Habrá opciones para dietas especiales?",
      answer:
        "Por supuesto. Ofreceremos opciones vegetarianas, veganas y sin gluten. Por favor, indícanos tus restricciones alimentarias en el formulario de confirmación de asistencia.",
    },
  ]

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-[3.2rem] text-center mb-4">Preguntas Frecuentes</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Todo lo que necesitas saber para nuestro gran día
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs md:text-sm">
                  {typeof faq.answer === "string" ? faq.answer : faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

