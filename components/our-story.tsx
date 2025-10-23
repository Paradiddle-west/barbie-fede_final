import Image from "next/image"
import { Heart, Gift } from "lucide-react"

export default function OurStory() {
  return (
    <section className="py-16 bg-gray-50" id="story">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-500 mb-12">
          Tu presencia es nuestro mejor regalo, pero si deseas ayudarnos...
          <Heart className="inline-block h-4 w-4 text-pink-500 ml-1" />
        </p>
        <h2 className="font-dancing text-[3.2rem] text-center mb-12">
          {"Estamos ahorrando para cumplir nuestro sueño..."}
          <br />
          {"tener un auto cohete y una casa de oro puro."}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Gift Registry Card */}
              <div className="p-8 flex flex-col justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Gift className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-500 text-center mb-8">
                  Si preferís hacer un regalo en efectivo, puedes transferir a nuestras cuentas bancarias.
                </p>

                <div className="grid grid-cols-1 gap-4 md:gap-6 mt-2 pt-4 border-t border-gray-100">
                  {/* Cuenta en Pesos - Actualizada */}
                  <div className="text-center p-2 md:p-3 rounded-lg bg-gray-50">
                    <h4 className="font-medium text-gray-800 mb-2">Cuenta en Pesos ($)</h4>
                    <p className="text-sm text-gray-600 mb-1">Banco BBVA Francés</p>
                    <p className="text-sm text-gray-600">Titular: Federico Caroni</p>
                    <p className="text-sm text-gray-600">CBU: 0170342740000042063843</p>
                    <p className="text-base font-bold text-blue-600 mt-2">Alias: barbieyfede-pesos</p>
                  </div>

                  {/* Cuenta en Dólares - Actualizada */}
                  <div className="text-center p-2 md:p-3 rounded-lg bg-gray-50">
                    <h4 className="font-medium text-gray-800 mb-2">Cuenta en Dólares (U$S)</h4>
                    <p className="text-sm text-gray-600 mb-1">Banco BBVA Francés</p>
                    <p className="text-sm text-gray-600">Titular: Federico Caroni</p>
                    <p className="text-sm text-gray-600">CBU: 0170342744000040879639</p>
                    <p className="text-base font-bold text-blue-600 mt-2">Alias: barbieyfede-dolar</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-full min-h-[300px]">
                <Image
                  src="/images/design-mode/chester.png"
                  alt="Los Simpson relajándose en el jardín"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent md:bg-none"></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-base text-gray-500">
            <p>¡Gracias por ser parte de nuestro día especial y ayudarnos a cumplir nuestros sueños!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
