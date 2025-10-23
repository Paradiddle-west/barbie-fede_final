import { MapPin } from "lucide-react"
import Image from "next/image"

export default function WeddingDetails() {
  return (
    <section className="py-16 relative text-white" id="details">
      {/* Fondo de imagen actualizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/wedding-bg-new.webp"
          alt="Fondo degradado suave para sección de la boda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/50 via-amber-900/40 to-rose-800/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-dancing text-[3.2rem] text-center mb-12">Cómo llegar a la fiesta</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-rose-900/25 p-6 rounded-lg backdrop-blur-sm border border-amber-200/20 shadow-xl">
            <h3 className="text-2xl font-semibold text-center mb-4 text-amber-100">Cómo llegar a Álamos de Cañuelas</h3>

            <div className="mb-6 text-center">
              <p className="text-lg text-amber-50 flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2 text-amber-200" />
                RN3 km 51,5 – Cañuelas, Provincia de Buenos Aires
              </p>
            </div>

            <div className="bg-amber-900/30 p-5 rounded-md border border-amber-200/10">
              <ol className="list-decimal pl-5 space-y-2 text-sm text-amber-50/95 leading-relaxed">
                <li>Tomá la Autopista Ezeiza–Cañuelas en dirección sur.</li>
                <li>Continuá por la Ruta 205 hasta la rotonda de Cañuelas.</li>
                <li>En la rotonda, girá a la derecha en la primera salida a Ruta 3.</li>
                <li>
                  Seguí por la Ruta 3 durante 11 km, en sentido hacia Buenos Aires, hasta ver el cartel de “Álamos” a mano derecha.
                </li>
                <li>Doblá a la derecha y avanzá unos 200 metros por el camino de entrada hasta el salón.</li>
              </ol>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white/90 p-2 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.9313085072417!2d-58.72212202398037!3d-34.93325967283793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bd202bcf94d47d%3A0x1645e89def0c507!2sALAMOS%20DE%20CA%C3%91UELAS!5e0!3m2!1ses!2sar!4v1740347969328!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la boda - Álamos de Cañuelas"
              className="rounded"
              aria-label="Mapa mostrando la ubicación de Álamos de Cañuelas, Buenos Aires"
            />
            <div className="mt-2 p-2">
              <a
                href="https://maps.app.goo.gl/9oCiBBttJ4Vq6B8XA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rose-600 text-white py-2 px-4 rounded-md text-sm flex items-center justify-center hover:bg-rose-700 transition-colors shadow-md"
                aria-label="Obtener indicaciones a Álamos de Cañuelas en Google Maps"
              >
                <MapPin className="h-4 w-4 mr-1" />
                Obtener indicaciones en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
