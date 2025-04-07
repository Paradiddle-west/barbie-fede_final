import type React from "react"
import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
  icon?: React.ReactNode
  color?: "primary" | "accent" | "neutral"
}

export default function SectionDivider({ className, icon, color = "primary" }: SectionDividerProps) {
  const gradientColors = {
    primary: "from-transparent via-blue-300 to-transparent",
    accent: "from-transparent via-pink-300 to-transparent",
    neutral: "from-transparent via-gray-300 to-transparent",
  }

  const borderColors = {
    primary: "border-blue-300",
    accent: "border-pink-300",
    neutral: "border-gray-300",
  }

  return (
    <div className={cn("relative h-16 w-full overflow-hidden", className)}>
      <div className={cn("absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r", gradientColors[color])}></div>

      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-10 h-10 bg-white rounded-full flex items-center justify-center",
          "border",
          borderColors[color],
        )}
      >
        {icon || (
          <div
            className={cn(
              "w-2 h-2 rounded-full",
              color === "primary" ? "bg-blue-500" : color === "accent" ? "bg-pink-500" : "bg-gray-500",
            )}
          ></div>
        )}
      </div>
    </div>
  )
}

