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

          <div className="mb-8">
            <p className="text-sm md:text-base text-gray-600">
              Etiqueta tu foto o video con el hashtag <span className="font-bold">#BodaBarbieFede</span> o etiqueta a{" "}
              <span className="font-bold">@barbieyfede</span>
            </p>

            <Button
              className="mt-4 w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={() => window.open("https://www.instagram.com/barbieyfede/", "_blank")}
            >
              <Instagram className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Ver perfíl de Instagram</span>
              <span className="sr-only">Abrir Instagram para ver fotos con el hashtag BodaBarbieFede</span>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

