"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Send, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function RsvpSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    attending: "yes",
    dietaryRestrictions: "ninguna",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)
    
    // Preparar plantilla con campos personalizados
    const templateParams = {
      from_name: formState.name,
      attending: formState.attending === 'yes' ? 'Sí asistiré' : 'No podré asistir',
      dietary_restrictions: formState.dietaryRestrictions,
      message: formState.message || 'Sin mensaje',
      reply_to: 'bodacliente@gmail.com', // Puedes reemplazar esto con un campo de email en el formulario
    };
    
    // Enviar email usando EmailJS con variables de entorno
    // En Next.js, solo las variables que comienzan con NEXT_PUBLIC_ son accesibles en el cliente
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID || '', // Debe ser accesible vía process.env.NEXT_PUBLIC_SERVICE_ID en producción
      process.env.NEXT_PUBLIC_TEMPLATE_ID || '', // Debe ser accesible vía process.env.NEXT_PUBLIC_TEMPLATE_ID en producción
      templateParams,
      process.env.NEXT_PUBLIC_KEY || 'Eg8GylH3wOseK9nDp'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          attending: "yes",
          dietaryRestrictions: "ninguna",
          message: "",
        })
      }, 5000)
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setIsSubmitting(false)
      setError(true)
    });
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800" id="rsvp">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-dancing text-[3.2rem] mb-6 text-blue-800">¿Asistirás a nuestra boda?</h2>
        <p className="text-sm mb-8 text-gray-600">
          Por favor completa este formulario para confirmar tu asistencia. ¡Gracias!
        </p>

        <div className="max-w-md mx-auto">
          {error ? (
            <div className="bg-white/80 rounded-lg p-8 text-center scale-in shadow-md">
              <div className="flex justify-center mb-4">
                <AlertCircle className="h-16 w-16 text-red-500" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-red-800">Hubo un problema</h3>
              <p className="text-sm text-gray-600 mb-4">
                No pudimos enviar tu confirmación. Por favor, intenta nuevamente o contáctanos directamente.
              </p>
              <Button 
                onClick={() => setError(false)} 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Volver al formulario
              </Button>
            </div>
          ) : isSubmitted ? (
            <div className="bg-white/80 rounded-lg p-8 text-center scale-in shadow-md">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-blue-800">¡Gracias por confirmar!</h3>
              <p className="text-sm text-gray-600">
                Hemos recibido tu respuesta. Estamos muy emocionados de compartir este día especial contigo.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-md"
            >
              <div className="space-y-2 text-left px-1 md:px-0">
                <Label htmlFor="name" className="text-gray-700">
                  Nombre y apellido
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Tu nombre y apellido"
                  required
                  className="bg-white border-blue-200 text-gray-800 placeholder:text-gray-400 mobile-touch-target"
                />
              </div>

              <div className="space-y-2 text-left px-1 md:px-0">
                <Label className="text-gray-700">¿Asistirás a nuestra boda?</Label>
                <RadioGroup
                  value={formState.attending}
                  onValueChange={(value) => handleSelectChange("attending", value)}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="attending-yes" className="mobile-touch-target text-blue-600" />
                    <Label htmlFor="attending-yes" className="text-gray-700">
                      Sí, asistiré
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="attending-no" className="mobile-touch-target text-blue-600" />
                    <Label htmlFor="attending-no" className="text-gray-700">
                      No podré asistir
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formState.attending === "yes" && (
                <div className="space-y-2 text-left px-1 md:px-0">
                  <Label htmlFor="dietaryRestrictions" className="text-gray-700">
                    Restricciones alimentarias
                  </Label>
                  <Select
                    value={formState.dietaryRestrictions}
                    onValueChange={(value) => handleSelectChange("dietaryRestrictions", value)}
                  >
                    <SelectTrigger className="bg-white border-blue-200 text-gray-800 mobile-touch-target">
                      <SelectValue placeholder="Selecciona restricción alimentaria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ninguna">Ninguna</SelectItem>
                      <SelectItem value="vegetariano">Vegetariano</SelectItem>
                      <SelectItem value="vegano">Vegano</SelectItem>
                      <SelectItem value="sin-tacc">Sin TACC (Sin Gluten)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2 text-left px-1 md:px-0">
                <Label htmlFor="message" className="text-gray-700">
                  Mensaje para los novios (opcional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Escribe un mensaje para Barbie y Fede..."
                  className="bg-white border-blue-200 text-gray-800 placeholder:text-gray-400 min-h-[100px] mobile-touch-target"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 py-4 md:py-6 text-base md:text-lg mobile-touch-target"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-1" />
                    {formState.attending === "yes" ? "¡Confirmo mi asistencia!" : "Enviar respuesta"}
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
