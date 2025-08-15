import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Congreso AES - El evento de sastrería más importante de España",
  description:
    "Congreso AES es el evento más importante de sastrería en España. Únete a profesionales del sector para aprender, compartir y crecer.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
