"use client"

import { useState, useEffect } from "react"
import { ChevronUp, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "header", label: "Inicio" },
  { id: "date", label: "Fecha" },
  { id: "couple", label: "Nosotros" },
  { id: "details", label: "Como llegar" },
 //{ id: "rsvp", label: "RSVP" },
  { id: "gallery", label: "Galería" },
  { id: "instagram", label: "Instagram" },
  { id: "story", label: "Regalos" },
  { id: "faq", label: "FAQ" },
]

export default function NavigationMenu() {
  const [activeSection, setActiveSection] = useState("header")
  const [visible, setVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Show navigation after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }

      // Calculate scroll progress
      const scrollable = document.body.scrollHeight - window.innerHeight
      const progress = Math.min((window.scrollY / scrollable) * 100, 100)
      setScrollProgress(progress)

      // Determine active section
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element)

      // Find the section that is currently in view
      const currentSection = sections.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 150 && rect.bottom >= 150
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Fixed Navigation Menu for Desktop */}
      <nav
        className={cn(
          "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out hidden md:block",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        )}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 py-2 flex items-center space-x-1 md:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-xs md:text-sm px-2 md:px-3 py-2 rounded-full transition-colors",
                activeSection === item.id
                  ? "bg-blue-100 text-blue-800 font-medium"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 md:hidden",
          visible ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="flex justify-between items-center bg-white/90 backdrop-blur-sm p-4 shadow-md">
          <button onClick={scrollToTop} className="text-blue-800 font-dancing text-xl">
            Barbie & Fede
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-blue-800 p-2 rounded-full bg-blue-50 mobile-touch-target"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-screen py-4" : "max-h-0",
          )}
        >
          <div className="flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "py-3 px-6 text-left transition-colors mobile-touch-target",
                  activeSection === item.id ? "bg-blue-50 text-blue-800 font-medium" : "text-gray-600",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out mobile-touch-target",
          visible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none",
        )}
        aria-label="Volver arriba"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-blue-600"
          style={{
            width: `${scrollProgress}%`,
            transition: "width 0.2s ease-out",
          }}
        />
      </div>
    </>
  )
}

