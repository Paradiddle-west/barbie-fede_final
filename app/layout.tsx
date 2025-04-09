import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barbie & Fede | ¡Nos casamos! 01/11/2025',
  description: 'El gran día es el 1 de noviembre de 2025 en Álamos de Cañuelas. Te esperamos!',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}