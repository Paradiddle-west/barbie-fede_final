"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Estilos para las animaciones del lightbox
const lightboxStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`

export default function WeddingGallery() {
  // Estado para el lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // Estado para detectar si es dispositivo móvil
  const [isMobile, setIsMobile] = useState(false)
  
  // Manejar teclas para navegación
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      
      if (e.key === "Escape") {
        setLightboxOpen(false)
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
      } else if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
      }
    },
    [lightboxOpen]
  )
  
  // Agregar/eliminar event listener para teclas
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])
  
  // Detectar si es dispositivo móvil basado en el ancho de la pantalla
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px es típicamente el breakpoint para tablets/móviles
    }
    
    // Comprobar al inicio
    checkIsMobile()
    
    // Comprobar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  
  // Bloquear el scroll cuando el lightbox está abierto
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])
  
  // Abrir lightbox con la imagen seleccionada
  const openLightbox = (index: number) => {
    // No abrir el lightbox en dispositivos móviles
    if (isMobile) return
    
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }
  
  // Navegar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1))
  }
  
  // Navegar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1))
  }
  
  const galleryItems = [
    {
      id: 1,
      src: "/images/gallery/gal-1.webp",
      title: "Mirando al horizonte",
      category: "AVENTURAS",
      alt: "Barbie y Fede abrazados mirando un hermoso lago azul con montañas",
    },
    {
      id: 2,
      src: "/images/gallery/gal-2.webp",
      title: "Otoño dorado",
      category: "MOMENTOS",
      alt: "Barbie y Fede sonriendo juntos en un parque con árboles de otoño",
    },
    {
      id: 3,
      src: "/images/gallery/gal-3.webp",
      title: "Cruzando la meta juntos",
      category: "DEPORTES",
      alt: "Barbie y Fede con camisetas deportivas rojas y medallas después de una carrera",
    },
    {
      id: 4,
      src: "/images/gallery/gal-4.webp",
      title: "Noche mágica",
      category: "CELEBRACIONES",
      alt: "Barbie y Fede en una fiesta con pintura fluorescente en sus rostros",
    },
  ]

  return (
    <section className="py-16 bg-gray-50" id="gallery">
      {/* Estilos para animaciones */}
      <style jsx global>{lightboxStyles}</style>
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-[3.2rem] text-center mb-4">Galería de Fotos</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Momentos especiales que hemos compartido y que queremos celebrar con ustedes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-blue-500 ${!isMobile ? 'cursor-pointer' : ''}`}
              tabIndex={isMobile ? -1 : 0}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
              aria-disabled={isMobile}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <span className="text-xs uppercase tracking-wider">{item.category}</span>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox para vista de pantalla completa */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center overflow-hidden"
            style={{
              animation: 'fadeIn 0.3s ease-in-out',
            }}
            onClick={(e) => {
              // Cerrar al hacer clic en el fondo
              if (e.target === e.currentTarget) setLightboxOpen(false);
            }}
          >
            {/* Botón de cierre */}
            <button
              className="absolute top-4 right-4 text-white p-3 rounded-full bg-black/60 hover:bg-black/80 transition-colors z-10 shadow-lg"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Contenedor principal de la imagen */}
            <div 
              className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center transform-gpu"
              style={{
                animation: 'zoomIn 0.3s ease-out',
              }}
            >
              <Image
                src={galleryItems[currentImageIndex].src || "/placeholder.svg"}
                alt={galleryItems[currentImageIndex].alt}
                width={1200}
                height={800}
                className="max-h-full max-w-full object-contain p-4 mx-auto"
                priority
                style={{
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
              
              {/* Información de la imagen */}
              <div className="absolute bottom-6 left-0 right-0 text-center text-white bg-black/60 py-4 px-4 mx-auto max-w-sm rounded-full">
                <p className="text-xs uppercase tracking-wider">{galleryItems[currentImageIndex].category}</p>
                <h3 className="text-lg font-medium text-slate-300">{galleryItems[currentImageIndex].title}</h3>
              </div>
              
              {/* Botones de navegación - más grandes y visibles */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-6 md:px-10">
                <button
                  className="bg-black/60 hover:bg-black/80 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
                </button>
                
                <button
                  className="bg-black/60 hover:bg-black/80 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all transform hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

