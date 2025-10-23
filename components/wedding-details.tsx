import { Clock, MapPin, Car, Plane, Train } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-dancing text-[3.2rem] text-center mb-12" style={{ color: "#ffffff" }}>Cómo llegar</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="bg-blue-800/30 p-6 rounded-lg backdrop-blur-sm border border-white/10">

            {/* Transportation Tabs */}
            <div className="mt-6">
              <h4 className="text-center text-base font-bold text-white uppercase tracking-wider mb-4">Cómo llegar a <span className="font-bold">Álamos de Cañuelas</span></h4>
              <div className="w-full">
                <span className="mt-2 md:mt-4 text-xs md:text-sm">
                  <p className="mb-2">Desde CABA:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Toma la <span className="font-bold">Autopista Ezeiza-Cañuelas</span> dirección sur.</li>
                    <li>Continúa por la <span className="font-bold">Ruta 205</span> hasta la <span className="font-bold">Rotonda Cañuelas</span>.</li>
                    <li>En la rotonda, tomá la <span className="font-bold">primera salida a la derecha</span> hacia la <span className="font-bold">Ruta Nacional 3</span>.</li>
                    <li>Seguí por la <span className="font-bold">Ruta 3</span> durante 10 km, en sentido <span className="font-bold">"hacia Buenos Aires"</span>, hasta ver el cartel de <span className="font-bold">“Álamos”</span> a mano derecha.</li>
                    <li>Doblá a la derecha y avanzá unos <span className="font-bold">200 metros</span> por el camino de entrada hasta el salón.</li>
                  </ol>
                  <p className="mt-2 text-xs mt-1">Tiempo estimado: 1 hora desde CABA, verificar con Google Maps para actualizar este tiempo en el momento del viaje.</p>
                </span>
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="flex justify-center space-x-12 mt-4">
                <div className="flex flex-col items-center">
                  <Clock className="h-6 w-6 mb-2 text-blue-200" />
                  <span className="text-base font-bold text-white">17:00 hs</span>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-6 w-6 mb-2 text-blue-200" />
                  <span className="text-base font-bold text-white">Sábado 1° de Noviembre, 2025</span>
                </div>
              </div>
            </div>

          </div>

          {/* Google Maps */}
          <div className="bg-white/90 p-2 rounded-lg overflow-hidden shadow-lg">
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
                href="https://maps.app.goo.gl/5eFFj1hx1jcip5n67"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm flex items-center justify-center hover:bg-blue-700 transition-colors"
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

