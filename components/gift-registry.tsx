import { Gift } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GiftRegistry() {
  return (
    <section className="py-16 bg-gray-50" id="gifts">
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-[3.2rem] text-center mb-4">Mesa de Regalos</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo, aquí hay algunas opciones
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Traditional Registry */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="font-medium text-lg mb-2">Lista de Regalos</h3>
              <p className="text-gray-500 text-sm mb-4">
                Visita nuestra lista de regalos tradicional en Falabella y Crate & Barrel.
              </p>
              <Button variant="outline" className="w-full">
                Ver lista
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Si queres hacernos un regalo, puedes transferir a nuestra cuenta bancaria:
          </p>
          <div className="mt-4 bg-white rounded-lg shadow-sm border p-4 inline-block">
            <p className="font-medium">Banco Nación</p>
            <p className="text-sm text-gray-600">Titular: Barbie Dattile & Federico Caroni</p>
            <p className="text-sm text-gray-600">CBU: 0110012345678901234567</p>
            <p className="text-sm text-gray-600">Alias: BODA.BARBIE.FEDE</p>
          </div>
        </div>
      </div>
    </section>
  )
}

