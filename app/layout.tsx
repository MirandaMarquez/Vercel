import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import LanguageSwitcher from "@/components/language-switcher"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Congreso Internacional de Sastrería - Un encuentro único que reúne a la comunidad de la sastrería internacional",
  description: "Un encuentro único que reúne a la comunidad de la sastrería internacional.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <LanguageProvider>
          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
