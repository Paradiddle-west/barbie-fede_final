"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "scale-in"
  delay?: number
  threshold?: number
}

export default function AnimatedSection({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [threshold])

  const animationClasses = {
    "fade-in": "opacity-0 animate-fade-in",
    "slide-up": "opacity-0 translate-y-8 animate-slide-up",
    "scale-in": "opacity-0 scale-95 animate-scale-in",
  }

  return (
    <div
      ref={sectionRef}
      className={cn(className, isVisible ? animationClasses[animation] : "opacity-0", "transition-all duration-700")}
      style={{
        animationDelay: isVisible ? `${delay}ms` : "0ms",
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  )
}

