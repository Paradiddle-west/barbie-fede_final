"use client"

import { Heart, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mb-16 pt-16 pb-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Top section with contact info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            {/* <h3 className="font-dancing text-2xl mb-4">Contacto</h3>
            <div className="flex flex-col items-center space-y-2">
              <a
                href="mailto:barbieyfedeboda@gmail.com"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>barbieyfedeboda@gmail.com</span>
              </a>
            </div> */}
          </div>

          <div className="text-center">
            <h3 className="font-dancing text-2xl mb-4">Fecha</h3>
            <p className="text-gray-600">Sábado, 1° de noviembre de 2025</p>
            <p className="text-gray-600">17:00 hs</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              onClick={() => {
                const dateSection = document.getElementById("date")
                if (dateSection) {
                  dateSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Ver detalles
            </Button>
          </div>

          <div className="text-center">
            <h3 className="font-dancing text-2xl mb-4">Redes Sociales</h3>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/barbieyfede/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition-colors transform hover:scale-110 p-2"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Síguenos en Instagram <span className="font-medium">@barbieyfede</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom section with copyright */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">© {currentYear} · Barbie & Fede</p>

          <p className="text-xs text-gray-400 flex items-center justify-center">
            Hecho con <Heart className="h-3 w-3 mx-1 text-pink-500 animate-pulse" /> para nuestra boda
          </p>

          <p className="text-xs text-gray-400 mt-4">Diseñado con amor para el día más especial</p>
        </div>
      </div>
    </footer>
  )
}

