import Image from "next/image"

export default function WeddingGallery() {
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
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-[3.2rem] text-center mb-4">Galería de Fotos</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Momentos especiales que hemos compartido y que queremos celebrar con ustedes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
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
      </div>
    </section>
  )
}
