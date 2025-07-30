import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Pinto - Full Stack Developer',
  description: 'Portafolio de Juan Pinto, desarrollador Full Stack especializado en JavaScript, TypeScript, MERN Stack, Next.js, GraphQL y Firebase',
  keywords: 'JavaScript, TypeScript, React, Next.js, MERN Stack, GraphQL, Firebase, Full Stack Developer',
  authors: [{ name: 'Juan Pinto' }],
  openGraph: {
    title: 'Juan Pinto - Full Stack Developer',
    description: 'Portafolio profesional mostrando proyectos y habilidades en desarrollo web',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
