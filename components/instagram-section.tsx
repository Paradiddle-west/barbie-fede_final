"use client"

import Image from "next/image"
import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstagramSection() {
  return (
    <section className="py-16 bg-white" id="instagram">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-dancing text-[3.2rem] mb-8">Súmate al instagram de la fiesta</h2>

        <div className="mb-8">
          <div className="inline-block rounded-full overflow-hidden border-4 border-gray-200 mb-4">
            <Image
              src="/images/perfil-ig.png"
              alt="Barbie y Fede sonriendo juntos en un jardín"
              width={100}
              height={100}
              className="object-cover w-[100px] h-[100px]"
            />
          </div>
          <p className="flex items-center justify-center gap-2 text-lg">
            <Instagram className="h-5 w-5" aria-hidden="true" />
            <span>¡Compartí tus fotos con todos!</span>
          </p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <p className="text-base text-gray-600 mb-6">
            Queremos que este momento quede inmortalizado con todas las fotos que se tomen antes, durante y después de
            la celebración
          </p>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">¿Cómo compartir tu foto o video?</h3>
            <p className="text-sm md:text-base text-gray-600">
              Etiqueta tu foto o video con el hashtag <span className="font-bold">#BodaBarbieFede</span> o etiqueta a{" "}
              <span className="font-bold">@barbieyfede</span>
            </p>

            <Button
              className="mt-4 w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={() => window.open("https://www.instagram.com/explore/tags/BodaBarbieFede/", "_blank")}
            >
              <Instagram className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Ver fotos en Instagram</span>
              <span className="sr-only">Abrir Instagram para ver fotos con el hashtag BodaBarbieFede</span>
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">¡Revivé nuestras historias!</h3>
            <p className="text-base text-gray-600">
              Visita nuestro perfil para ver todas las fotos del evento
              <a
                href="https://www.instagram.com/barbieyfede/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:underline ml-1"
              >
                @barbieyfede
                <ExternalLink className="h-3 w-3 ml-1" aria-hidden="true" />
                <span className="sr-only">Abrir perfil de Instagram de la boda en nueva ventana</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

