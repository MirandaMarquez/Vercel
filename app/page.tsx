"use client"

import Image from "next/image"
import Link from "next/link"
import CountdownTimer from "@/components/countdown-timer"
import Gallery from "@/components/gallery"
import EmailSignup from "@/components/email-signup"
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function Home() {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="min-h-screen bg-[#F7F3EF]">
      {/* Header */}
      <header className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/cabecera-hero.jpg" alt={t("header.title")} fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
          <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
            <div className="w-24 h-24 mx-auto mb-0">
              <Image
                src="/logo-aes.svg"
                alt="AES Logo"
                width={96}
                height={96}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{t("header.subtitle")}</h2>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">{t("header.description")}</p>
          <Link
            href="#entradas"
            className="bg-[#EBB37E] hover:bg-[#d4a06b] text-[#3A3226] font-medium px-8 py-3 rounded-md transition-colors"
          >
            {t("header.cta").toLowerCase()}
          </Link>
        </div>
      </header>

      {/* Countdown */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-4">{t("countdown.title")}</h2>
          <p className="text-center text-[#3A3226] mb-12">{t("countdown.subtitle")}</p>
          <CountdownTimer targetDate="2025-11-21T20:00:00" />
        </div>
      </section>

      {/* Official Poster */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/83a3df5c6e214b6c369f6b4360604de279697fcb.jpg-NPCaXInxOoRMy3O4QXwHTQ2nkyrAH8.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-12">{t("poster.title")}</h2>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-[600px] shadow-xl">
              <Image src="/cartel-oficial-2025.jpg" alt={t("poster.alt")} fill className="object-cover rounded-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-16 bg-[#3A3226] relative overflow-hidden">
        {/* SVG Background Overlay */}
        <div
          className="absolute inset-0 opacity-100 mx-[100] mr-[] ml-[50%] mb-[-20px]"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vector_Fondo-npC32PdUcLedJAtDTbRMPSlGGdNjcY.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Decorative dotted circle */}
        <div className="absolute top-10 right-10 hidden lg:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-xl font-bold text-center text-[#F2DBC5] mb-12">{t("program.title")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Day 1 - Friday */}
            <div className="bg-[#F7F3EF] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-6 bg-transparent rounded-none flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#F2DBC5]"
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
                  <h3 className="text-lg font-bold text-[#3A3226]">VIERNES 21 NOVIEMBRE</h3>
                  <p className="text-sm text-[#EBB37E] italic">{t("program.location1")}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-[#F2DBC5]"
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
                    <p className="font-medium text-[#3A3226]">20:00h</p>
                    <p className="text-sm text-[#3A3226]">{t("program.day1.event1")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 - Saturday */}
            <div className="bg-[#F7F3EF] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-6 bg-transparent rounded-none flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#F2DBC5]"
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
                  <h3 className="text-lg font-bold text-[#3A3226]">SÁBADO 22 NOVIEMBRE</h3>
                  <p className="text-sm text-[#EBB37E] italic">{t("program.location2")}</p>
                </div>
              </div>

              <div className="space-y-2">
                {/* Primeros 3 eventos siempre visibles */}
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-[#F2DBC5]"
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
                    <p className="font-medium text-[#3A3226] text-sm">09:00h</p>
                    <p className="text-xs text-[#3A3226]">{t("program.day2.event1")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-[#F2DBC5]"
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
                    <p className="font-medium text-[#3A3226] text-sm">09:30h</p>
                    <p className="text-xs text-[#3A3226]">{t("program.day2.event2")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-[#F2DBC5]"
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
                    <p className="font-medium text-[#3A3226] text-sm">10:30h</p>
                    <p className="text-xs text-[#3A3226]">{t("program.day2.event3")}</p>
                  </div>
                </div>

                {/* Eventos adicionales que se muestran/ocultan */}
                {isExpanded && (
                  <div className="space-y-2 mt-2">
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">11:30h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event4")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">12:00h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event5")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">12:30h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event6")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">13:15h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event7")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">14:15h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event8")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">15:15h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event9")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">16:00h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event10")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">17:00h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event11")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">21:30h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event12")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">23:45h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event13")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-[#F2DBC5]"
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
                        <p className="font-medium text-[#3A3226] text-sm">00:00h</p>
                        <p className="text-xs text-[#3A3226]">{t("program.day2.event14")}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botón para expandir/contraer */}
                <div className="pt-4 text-center">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#EBB37E] hover:text-[#d4a06b] font-medium text-sm transition-colors flex items-center mx-auto"
                  >
                    {isExpanded ? "ver menos eventos" : "ver más eventos"}
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
            <div className="bg-[#F7F3EF] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-8 h-6 bg-transparent rounded-none flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#F2DBC5]"
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
                  <h3 className="text-lg font-bold text-[#3A3226]">DOMINGO 23 NOVIEMBRE</h3>
                  <p className="text-sm text-[#EBB37E] italic">{t("program.location3")}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-6 h-4 bg-transparent rounded-none flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-[#F2DBC5]"
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
                    <p className="font-medium text-[#3A3226]">11:00h</p>
                    <p className="text-sm text-[#3A3226]">{t("program.day3.event1")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Sales */}
      <section id="entradas" className="py-16 bg-[#EBB37E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-12">{t("tickets.title")}</h2>
          <div className="max-w-4xl mx-auto bg-[#F7F3EF] p-8 rounded-lg shadow-md">
            <p className="text-center text-[#3A3226] mb-8 text-lg">{t("tickets.description")}</p>
            <div className="w-full h-[400px] bg-[#F2DBC5] border border-[#EBB37E] rounded-lg flex items-center justify-center">
              <p className="text-[#3A3226] text-lg font-medium">{t("tickets.platform")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Logos */}
      <section className="py-16 bg-[#F7F3EF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-8">{t("sponsors.ourSponsors")}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Logo real de Pressing */}
            <div className="w-40 md:w-48 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm p-4">
              <Image
                src="/logo-pressing.svg"
                alt="Pressing Group"
                width={180}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Espacios promocionales para otros patrocinadores */}
            <div className="w-40 md:w-48 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm border-2 border-dashed border-gray-300">
              <span className="text-gray-400 font-medium text-sm text-center px-2">Tu logo aquí</span>
            </div>
            <div className="w-40 md:w-48 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm border-2 border-dashed border-gray-300">
              <span className="text-gray-400 font-medium text-sm text-center px-2">Tu logo aquí</span>
            </div>
            <div className="w-40 md:w-48 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm border-2 border-dashed border-gray-300">
              <span className="text-gray-400 font-medium text-sm text-center px-2">Tu logo aquí</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#3A3226] relative">
        {/* Decorative dotted line */}
        <div className="absolute top-16 lg:top-0 left-8 hidden md:block"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto border-dashed border-[]">
            {/* Left Content */}
            <div className="space-y-8 border-t-4 border-[rgba(235,179,126,1)] border-dashed mx-[] px-0 my-[] py-10">
              <h2 className="text-3xl font-bold text-[#F2DBC5] mb-8">{t("location.title")}</h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#F2DBC5]">{t("location.venue")}</h3>
                <p className="text-[#F2DBC5] text-lg leading-relaxed">{t("location.address")}</p>
              </div>

              <div className="pt-6">
                <Link
                  href="https://maps.app.goo.gl/VaJcoBBA11WAqJnr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#EBB37E] hover:bg-[#d4a06b] text-[#3A3226] font-medium px-8 py-4 rounded-lg transition-colors text-lg"
                >
                  {t("location.map").toLowerCase()}
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/museo-del-traje.jpg" alt={t("location.venue")} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-[#F7F3EF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-12">{t("gallery.title")}</h2>
          <Gallery />
        </div>
      </section>

      {/* Email Collection */}
      <section className="py-16 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/83a3df5c6e214b6c369f6b4360604de279697fcb.jpg-NPCaXInxOoRMy3O4QXwHTQ2nkyrAH8.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-12">{t("email.title")}</h2>
          <p className="text-center text-[#3A3226] max-w-2xl mx-auto mb-10">{t("email.description")}</p>
          <EmailSignup />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#EBB37E]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#3A3226] mb-8">{t("cta.title")}</h2>
          <Link
            href="#entradas"
            className="inline-flex items-center bg-[#3A3226] hover:bg-[#2a251a] text-[#F7F3EF] font-medium px-8 py-4 rounded-md transition-colors text-lg"
          >
            {t("cta.button").toLowerCase()}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3226] text-[#F7F3EF] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Organiza */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-[#EBB37E] mb-4">Organiza:</h4>
              <div className="flex justify-center md:justify-start">
                <div className="w-28 h-16">
                  <Image
                    src="/logo-aes-blanco.svg"
                    alt="AES - Asociación Española de Sastrería"
                    width={112}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Colabora */}
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-[#EBB37E] mb-4">Colabora:</h4>
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <div className="w-32 h-10">
                  <Image
                    src="/logo-ayuntamiento-madrid.svg"
                    alt="Ayuntamiento de Madrid"
                    width={128}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-32 h-12">
                  <Image
                    src="/logo-museo-traje.svg"
                    alt="Museo del Traje"
                    width={128}
                    height={48}
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>
            </div>

            {/* Contacto */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-[#EBB37E] mb-4">Contacto:</h4>
              <div className="space-y-1 text-[#F2DBC5] text-sm">
                <p>info@aesastreria.es</p>
                <p>www.aesastreria.es</p>
                <div className="pt-2 space-y-0">
                  <p>Paseo de la</p>
                  <p>Castellana 210 5-9,</p>
                  <p>28046 Madrid</p>
                </div>
              </div>
            </div>
          </div>

          {/* Entidad subvencionada */}
          <div className="text-center mb-6">
            <p className="text-[#F2DBC5] text-xs">Entidad subvencionada por el Ayuntamiento de Madrid</p>
          </div>

          {/* Footer bottom */}
          <div className="border-t border-[#EBB37E]/30 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link
                  href="https://www.aesastreria.es/politica-de-privacidad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2DBC5] hover:text-[#EBB37E] transition-colors text-xs"
                >
                  Política de Privacidad
                </Link>
              </div>
              <p className="text-[#F2DBC5] text-xs">
                © {new Date().getFullYear()} AES Asociación Española de Sastrería
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
