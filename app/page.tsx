"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Download } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import Gallery from "@/components/gallery"
import EmailSignup from "@/components/email-signup"
import ProgramSchedule from "@/components/program-schedule"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-[#F7F3EF]">
      {/* Header */}
      <header className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/cabecera-hero.jpg" alt={t("header.title")} fill className="object-cover" priority />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-4">
          <div className="bg-white p-6 mb-8 shadow-lg rounded-lg">
            <div className="w-24 h-24 mx-auto mb-4">
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
            {t("header.cta")}
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
        <div className="absolute inset-0 opacity-20">
          <svg
            width="1058"
            height="769"
            viewBox="0 0 1058 769"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          >
            <path
              d="M1053.69 1C1053.69 1 1072.98 433.454 808.354 560.201C522.966 696.911 368.692 532.683 327.257 405.35C307.081 343.335 311.891 230.573 429.218 198.873C518.428 174.791 637.259 288.859 572.59 436.304C515.246 567.101 322.077 754.025 1 765"
              stroke="#EBB37E"
              strokeWidth="7"
              strokeMiterlimit="10"
              strokeDasharray="11.6 11.6"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ProgramSchedule />
          <div className="text-center mt-10">
            <Link
              href="#programa-completo"
              className="inline-flex items-center text-[#F7F3EF] font-medium hover:text-[#EBB37E] transition-colors"
            >
              {t("program.viewFull")}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
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
      <section className="py-10 bg-[#F7F3EF]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-8">{t("sponsors.ourSponsors")}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((sponsor, index) => (
              <div
                key={index}
                className="w-32 md:w-40 h-20 bg-white rounded-lg flex items-center justify-center shadow-sm"
              >
                <span className="text-[#3A3226] font-medium">Logo {sponsor}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Information */}
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
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-12">{t("sponsors.title")}</h2>
          <div className="max-w-3xl mx-auto bg-[#F7F3EF] p-8 rounded-lg shadow-md">
            <p className="text-[#3A3226] mb-6 text-center">{t("sponsors.description")}</p>
            <div className="flex justify-center">
              <Link
                href="#dossier"
                className="inline-flex items-center bg-[#EBB37E] hover:bg-[#d4a06b] text-[#3A3226] font-medium px-6 py-3 rounded-md transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("sponsors.download")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-[#3A3226] relative">
        {/* Decorative dotted line */}
        <div className="absolute top-16 lg:top-0 left-8 hidden md:block">
          <div className="flex space-x-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#EBB37E] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8">
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
                  {t("location.map")}
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
          <h2 className="text-3xl font-bold text-center text-[#3A3226] mb-8">{t("email.title")}</h2>
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
            {t("cta.button")}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3226] text-[#F7F3EF] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="bg-[#F7F3EF] p-4 mb-4 inline-block rounded-lg">
                <div className="w-16 h-16">
                  <Image
                    src="/logo-aes.svg"
                    alt="AES Logo"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-[#F2DBC5] mb-4">{t("footer.location")}</p>
              <p className="text-[#F2DBC5] text-sm">{t("footer.description")}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#EBB37E]">{t("footer.contact")}</h4>
              <ul className="space-y-2 text-[#F2DBC5] text-sm">
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  {t("location.email")}
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  {t("location.phoneNumber")}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#EBB37E]">{t("footer.information")}</h4>
              <ul className="space-y-2 text-[#F2DBC5] text-sm">
                <li>{t("footer.program")}</li>
                <li>{t("footer.sponsors")}</li>
                <li>{t("footer.location2")}</li>
                <li>{t("footer.registration")}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#EBB37E]">{t("footer.follow")}</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#F2DBC5] hover:text-[#EBB37E] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-[#F2DBC5] hover:text-[#EBB37E] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-[#F2DBC5] hover:text-[#EBB37E] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#EBB37E]/30 text-center text-[#F2DBC5] text-sm">
            <p>
              © {new Date().getFullYear()} AES - Asociación Española de Sastrería. {t("footer.rights")}.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
