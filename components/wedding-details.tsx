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
        <h2 className="font-dancing text-[3.2rem] text-center mb-12">La boda</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="bg-blue-800/30 p-6 rounded-lg backdrop-blur-sm border border-white/10">
            <div className="text-center mb-6">
              <h3 className="uppercase tracking-wider text-sm mb-4 font-medium">Evento Principal</h3>
              <div className="flex justify-center space-x-12 mt-4">
                <div className="flex flex-col items-center">
                  <Clock className="h-6 w-6 mb-2 text-blue-200" />
                  <span className="text-base font-bold text-white">17:00 hs</span>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="h-6 w-6 mb-2 text-blue-200" />
                  <span className="text-base font-bold text-white">1° de Noviembre, 2025</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-center mb-6">Celebraremos nuestra boda en Álamos de Cañuelas, Buenos Aires.</p>

            {/* Transportation Tabs */}
            <div className="mt-6">
              <h4 className="text-center text-sm uppercase tracking-wider mb-4">Cómo llegar</h4>
              <Tabs defaultValue="car" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-blue-700/50 text-xs md:text-sm">
                  <TabsTrigger
                    value="car"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white"
                  >
                    <Car className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Auto</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="public"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white"
                  >
                    <Train className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Transporte</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="airport"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-white"
                  >
                    <Plane className="h-4 w-4 mr-2" />
                    <span className="hidden sm:inline">Aeropuerto</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="car" className="mt-2 md:mt-4 text-xs md:text-sm">
                  <p className="mb-2">Desde Buenos Aires:</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Toma la Autopista Ezeiza-Cañuelas dirección sur</li>
                    <li>Continúa por la Ruta 205 hasta la rotonda Cañuelas</li>
                    <li>Gira a la derecha hacia la RN3</li>
                    <li>Sigue por RN3 durante 11km hasta el camino de entrada, luego 300mts hasta el salón</li>
                  </ol>
                  <p className="mt-2 text-xs">Tiempo estimado: 1 hora desde CABA</p>
                </TabsContent>
                <TabsContent value="public" className="mt-2 md:mt-4 text-xs md:text-sm">
                  <p className="mb-2">Opciones de transporte público:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Tren Roca hasta Cañuelas + taxi (15 min) hasta el salón</li>
                    <li>Bus línea 51 desde Constitución hasta Cañuelas</li>
                  </ul>
                  <p className="mt-2 text-xs">Confirma tu lugar en el transporte al enviar tu RSVP</p>
                </TabsContent>
                <TabsContent value="airport" className="mt-2 md:mt-4 text-xs md:text-sm">
                  <p className="mb-2">Desde el Aeropuerto Internacional Ezeiza:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>El salón está a 35 km del Aeropuerto Internacional Ezeiza</li>
                    <li>Puedes tomar un taxi o servicio de Uber (aprox. 40 minutos)</li>
                    <li>Alquiler de auto disponible en el aeropuerto</li>
                    <li>Si necesitas asistencia con el transporte, contáctanos</li>
                  </ul>
                  <p className="mt-2 text-xs">Recomendamos llegar al menos un día antes del evento</p>
                </TabsContent>
              </Tabs>
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
                href="https://maps.google.com/maps?ll=-34.933260,-58.722122&z=15&t=m&hl=es&gl=AR&mapclient=embed&daddr=ALAMOS+DE+CA%C3%91UELAS"
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

