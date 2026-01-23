"use client"

import Image from "next/image"
import Link from "next/link"
import CountdownTimer from "@/components/countdown-timer"
import Gallery from "@/components/gallery"
import EmailSignup from "@/components/email-signup"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export default function Home() {
  const { t, language } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  // Configuración del widget según el idioma
  const weezeventLocale = language === "en" ? "en" : "es-ES"
  const weezeventUrl = `https://widget.weezevent.com/ticket/E1486253/?code=15835&locale=${weezeventLocale}&width_auto=1&color_primary=ebb37e`

  // Cargar script de Weezevent
  useEffect(() => {
    if (typeof window === "undefined") return
    
    // Verificar si el script ya existe
    const existingScript = document.querySelector('script[src="https://widget.weezevent.com/weez.js"]')
    if (existingScript) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://widget.weezevent.com/weez.js"
    script.async = true
    document.body.appendChild(script)
  }, [])


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative w-full h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/cabecera-hero-new.jpg" alt={t("header.title")} fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4 py-20 h-auto px-5">
          <div className="w-64 h-64 mx-auto mb-8">
            <Image
              src="/logo-aes-white-new.png"
              alt="AES - Asociación Española de Sastrería - Congreso Internacional de Sastrería 2025"
              width={256}
              height={256}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t("header.subtitle")}</h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl leading-4">{t("header.description")}</p>
          <Link
            href="#entradas"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-3 rounded-md transition-colors"
          >
            {t("header.registrationSoon")}
          </Link>
        </div>
      </header>

      {/* Countdown - WHITE BACKGROUND */}
      <section className="py-20 bg-surface overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-surface-foreground mb-4">
            {t("countdown.title")}
          </h2>
          <p className="text-center text-surface-foreground mb-12">{t("countdown.subtitle")}</p>
          <CountdownTimer targetDate="2026-03-13T20:00:00" />
        </div>
      </section>

      {/* Official Poster - LIGHT BEIGE BACKGROUND */}
      <section className="py-20 bg-background relative overflow-x-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/83a3df5c6e214b6c369f6b4360604de279697fcb.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">{t("poster.title")}</h2>
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-md mx-auto shadow-2xl rounded-lg overflow-hidden"
              style={{ aspectRatio: "210/297" }}
            >
              <Image
                src={language === "en" ? "/cartel-oficial-2026-en.jpg" : "/cartel-oficial-2026.jpg"}
                alt={t("poster.alt")}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program - DARK BROWN BACKGROUND */}
      <section className="py-20 bg-primary relative overflow-hidden overflow-x-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary-foreground mb-12">
            {t("program.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Day 1 - Friday */}
            <div className="bg-surface p-6 rounded-lg shadow-md h-[320px]">
              <div className="flex mb-4 items-start">
                <div className="w-8 bg-transparent rounded-none flex items-center justify-start mr-0 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-surface-foreground leading-5">{t("program.day1")}</h3>
                  <p className="text-sm text-accent italic">{t("program.location1")}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center flex-shrink-0 mt-1 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-surface-foreground">20:00h</p>
                    <p className="text-sm text-surface-foreground">{t("program.day1.event1")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 - Saturday */}
            <div className="bg-surface p-6 rounded-lg shadow-md min-h-[320px]">
              <div className="flex mb-4 items-start">
                <div className="w-8 h-6 bg-transparent rounded-none flex items-center justify-start mr-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-surface-foreground leading-5">{t("program.day2")}</h3>
                  <p className="text-sm text-accent italic">{t("program.location2")}</p>
                </div>
              </div>

              <div className="space-y-2">
                {/* Primeros 3 eventos siempre visibles */}
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-surface-foreground text-sm">09:00h</p>
                    <p className="text-xs text-surface-foreground">{t("program.day2.event1")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-surface-foreground text-sm">09:30h</p>
                    <p className="text-xs text-surface-foreground">{t("program.day2.event2")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-surface-foreground text-sm">10:30h</p>
                    <p className="text-xs text-surface-foreground">{t("program.day2.event3")}</p>
                  </div>
                </div>

                {/* Eventos adicionales que se muestran/ocultan */}
                {isExpanded && (
                  <div className="space-y-2 mt-2">
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">11:30h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event4")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">12:00h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event5")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">12:30h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event6")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">13:15h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event7")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">14:15h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event8")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">15:15h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event9")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">16:00h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event10")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">17:00h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event11")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">21:30h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event12")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">23:45h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event13")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-surface-foreground text-sm">00:00h</p>
                        <p className="text-xs text-surface-foreground">{t("program.day2.event14")}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botón para expandir/contraer */}
                <div className="pt-4 text-center">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-accent hover:text-accent/80 font-medium text-sm transition-colors flex items-center mx-auto"
                  >
                    {isExpanded ? t("program.viewLess") : t("program.viewMore")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Day 3 - Sunday */}
            <div className="bg-surface p-6 rounded-lg shadow-md h-[320px]">
              <div className="flex mb-4 items-start">
                <div className="w-8 h-6 bg-transparent rounded-none flex items-center justify-start mr-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-surface-foreground leading-5">{t("program.day3")}</h3>
                  <p className="text-sm text-accent italic">{t("program.location3")}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-surface-foreground">11:00h</p>
                    <p className="text-sm text-surface-foreground">{t("program.day3.event1")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venta de Entradas - #EBB37E BACKGROUND */}
      <section id="entradas" className="py-20 relative overflow-x-hidden" style={{ backgroundColor: "#EBB37E" }}>
        <div className="container mx-auto px-4 relative z-10">
          {/* Header con texto marrón */}
         
            <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-16">
              {t("tickets.title")}
            </h2>
          
          
          {/* Widget de Weezevent */}
          <div className="flex justify-center px-4" suppressHydrationWarning>
            <div className="w-full max-w-6xl rounded-2xl overflow-hidden bg-white shadow-lg p-4 md:p-8">
              <a
                title="Logiciel billetterie en ligne"
                href={`https://widget.weezevent.com/ticket/E1486253/?code=15835&locale=${weezeventLocale}&width_auto=1`}
                className="weezevent-widget-integration"
                data-src={`https://widget.weezevent.com/ticket/E1486253/?code=15835&locale=${weezeventLocale}&width_auto=1`}
                data-id="1486253"
                data-resize="1"
                data-width_auto="1"
                data-noscroll="0"
                data-use-container="yes"
                data-type="neo"
                target="_blank"
              >
                Billetterie Weezevent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Logos - WHITE BACKGROUND (as in reference) */}
      <section className="py-20 bg-surface overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-surface-foreground mb-7">
            {t("sponsors.ourSponsors")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center">
            {/* Carnet Como */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/carnet-como-logo.jpg"
                alt="Carnet Como"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Davion */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/davion-logo.jpg"
                alt="Davion"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Dormeuil Cloth */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/dormeuil-logo.jpg"
                alt="Dormeuil Cloth"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Drago */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/drago-logo.jpg"
                alt="Drago"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Fratelli Tallia di Delfino */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/fratelli-tallia-logo.jpg"
                alt="Fratelli Tallia di Delfino"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Group Pressing+ */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/pressing-group-logo.jpg"
                alt="Group Pressing+"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Holland & Sherry */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/holland-sherry-logo.jpg"
                alt="Holland & Sherry"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* IDF Lining */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/idf-lining-logo.jpg"
                alt="IDF Lining"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Scabal */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/scabal-logo.jpg"
                alt="Scabal"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>

            {/* Vitale Barberis Canonico */}
            <div className="w-full max-w-[240px] h-[80px] md:h-[140px] lg:h-[140px] flex items-center justify-center bg-surface rounded-lg shadow-sm p-2 border border-gray-100">
              <Image
                src="/sponsors/vitale-barberis-logo.jpg"
                alt="Vitale Barberis Canonico"
                width={240}
                height={140}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Información para Patrocinadores - LIGHT BEIGE BACKGROUND */}
      <section className="hidden py-20 bg-background relative overflow-x-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/83a3df5c6e214b6c369f6b4360604de279697fcb.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">{t("sponsors.title")}</h2>
          <div className="flex justify-center">
            <div className="bg-surface p-8 rounded-lg shadow-lg max-w-2xl text-center">
              <p className="text-surface-foreground leading-relaxed leading-4 mb-5 text-sm">
                {t("sponsors.description")}
              </p>
              <button
                onClick={() => {
                  const link = document.createElement("a")
                  if (language === "es") {
                    link.href = "/Dossier_Patrocinadores_Congreso_2026_ESP.pdf"
                    link.download = "Dossier Patrocinadores Congreso 2026.pdf"
                  } else {
                    link.href = "/Sponsorship_Dossier_Congress_2026_ENG.pdf"
                    link.download = "Sponsorship Dossier Congress 2026.pdf"
                  }
                  link.click()
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg transition-colors flex items-center mx-auto text-sm font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                {t("sponsors.download")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location - DARK BROWN BACKGROUND */}
      <section className="py-20 bg-primary relative overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl mx-auto border-dashed gap-5">
            {/* Left Content */}
            <div className="border-t-4 border-accent border-dashed mx-[] px-0 my-[] space-y-4 md:space-y-2.5 py-8 md:py-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-8 leading-7">
                {t("location.title")}
              </h2>

              <div className="space-y-2">
                <h3 className="font-bold text-primary-foreground leading-4 text-xl">{t("location.venue")}</h3>
                <p className="text-primary-foreground text-base md:text-lg leading-tight md:leading-relaxed">
                  {t("location.address")}
                </p>
              </div>

              <div className="pt-4 md:pt-6">
                <Link
                  href="https://maps.app.goo.gl/VaJcoBBA11WAqJnr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  {t("location.map").charAt(0).toUpperCase() + t("location.map").slice(1)}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/museo-del-traje.jpg" alt={t("location.venue")} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - WHITE BACKGROUND */}
      <section className="py-20 bg-surface overflow-x-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-surface-foreground mb-4">
            {t("gallery.title")}
          </h2>
          <Gallery />
        </div>
      </section>

      {/* Email Collection - LIGHT BEIGE BACKGROUND */}
      <section className="py-20 bg-background relative overflow-x-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/83a3df5c6e214b6c369f6b4360604de279697fcb.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">{t("email.title")}</h2>
          <p className="text-center text-foreground max-w-2xl mx-auto mb-10 font-normal text-base">
            {t("email.description")}
          </p>
          <EmailSignup />
        </div>
      </section>

      {/* Final CTA - ACCENT COLOR BACKGROUND */}
      <section className="py-20 bg-accent overflow-x-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-8">{t("cta.title")}</h2>
          <Link
            href="#entradas"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-md transition-colors text-lg"
          >
            {t("cta.button").charAt(0).toUpperCase() + t("cta.button").slice(1).toLowerCase()}
          </Link>
        </div>
      </section>

      {/* Footer - DARK BROWN BACKGROUND */}
      <footer className="bg-primary text-primary-foreground py-20 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-7 gap-2">
            {/* Organiza */}
            <div className="md:text-left text-left">
              <h4 className="text-lg font-semibold text-accent leading-4 h-6 flex items-start mb-px w-[15%]">Organiza:</h4>
              <div className="flex justify-start items-end h-20">
                <Image
                  src="/logo-aes-blanco.svg"
                  alt="AES - Asociación Española de Sastrería"
                  width={144}
                  height={80}
                  className="object-contain h-[3rem] w-auto"
                />
              </div>
            </div>

            {/* Colabora */}
            <div className="md:text-left text-left">
              <h4 className="text-lg font-semibold text-accent leading-4 mb-3.5 h-6 flex items-start">Colabora:</h4>
              <div className="flex h-20 items-end gap-1">
                <div className="w-48 h-16 flex items-end">
                  <Image
                    src="/logo-ayuntamiento-madrid.svg"
                    alt="Ayuntamiento de Madrid"
                    width={192}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-56 h-20 flex items-end">
                  <Image
                    src="/logo-museo-traje.svg"
                    alt="Museo del Traje"
                    width={224}
                    height={96}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Organiza la Cena de Gala y la Entrega de Premios */}
            <div className="md:text-left text-left">
              <h4 className="text-lg font-semibold text-accent leading-4 h-6 flex items-start mb-2.5">Organiza la Cena de Gala y la Entrega de Premios:</h4>
              <div className="flex justify-start items-end h-20">
                <div className="w-48 h-16">
                  <Image
                    src="/thread-viewer-1.png"
                    alt="Forbes House Madrid"
                    width={192}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="text-left md:text-right">
              <h4 className="text-lg font-semibold text-accent mb-3.5 h-6 flex items-end md:justify-end text-left md:text-right">Contacto:</h4>
              <div className="space-y-1 text-primary-foreground text-sm text-left md:text-right h-20 flex flex-col justify-end">
                <p>info@aesastreria.es</p>
                <p>www.aesastreria.es</p>
                <div className="pt-2">
                  <p>Paseo de la Castellana 210 5-9,</p>
                  <p>28046 Madrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Entidad subvencionada */}
          <div className="mb-7 text-left">
            <p className="text-primary-foreground text-xs">
              Entidad subvencionada por el Ayuntamiento de Madrid
            </p>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-accent/30 pt-2">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link
                  href="https://www.aesastreria.es/politica-de-privacidad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-accent transition-colors text-xs"
                >
                  Política de Privacidad
                </Link>
              </div>
              <p className="text-primary-foreground text-xs">
                © {new Date().getFullYear()} AES Asociación Española de Sastrería
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
