"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Header
    "header.title": "AES",
    "header.subtitle": "II CONGRESO INTERNACIONAL DE SASTRERÍA",
    "header.description": "Un encuentro único que reúne a la comunidad de la sastrería internacional.",
    "header.cta": "inscríbete ahora disponible",
    "header.registrationSoon": "Inscribirse al evento",

    // Countdown
    "countdown.title": "DEL 13 AL 15 DE MARZO",
    "countdown.subtitle": "Faltan tan solo estos días",
    "countdown.days": "DÍAS",
    "countdown.hours": "HORAS",
    "countdown.minutes": "MIN",
    "countdown.seconds": "SEG",

    // Official Poster
    "poster.title": "CARTEL EDICIÓN 2026",
    "poster.alt": "Cartel Oficial Congreso AES 2026",

    // Program
    "program.title": "PROGRAMA 2026",
    "program.day1": "VIERNES 13 MARZO",
    "program.day2": "SÁBADO 14 MARZO",
    "program.day3": "DOMINGO 15 MARZO",
    "program.location1": "Forbes House Madrid",
    "program.location2": "Museo del Traje Madrid y Forbes House Madrid",
    "program.location3": "Museo del Traje",

    // Day 1 Events
    "program.day1.event1": "Cóctel de bienvenida a cargo del presidente de AES",

    // Day 2 Events
    "program.day2.event1": "Acreditaciones",
    "program.day2.event2": "Inauguración Presencia institucional - Presidente de AES",
    "program.day2.event3": "Sastrería, camisería y calidad",
    "program.day2.event4": "Catering",
    "program.day2.event5": 'Presentación de la exposición "Sastrería, del taller a la calle"',
    "program.day2.event6": "Representación sectorial",
    "program.day2.event7": "Sostenibilidad en la industria textil",
    "program.day2.event8": "Almuerzo",
    "program.day2.event9": "Representación sectorial",
    "program.day2.event10": "Formación artesanal e industrial",
    "program.day2.event11": "Sastrería internacional - Inspiraciones y evolución",
    "program.day2.event12": "Cena en Forbes House Madrid",
    "program.day2.event12.location": "Forbes House Madrid",
    "program.day2.event13": "Entrega de Premios AES",
    "program.day2.event13.location": "Forbes House Madrid",
    "program.day2.event14": "Clausura",
    "program.day2.event14.location": "Forbes House Madrid",

    // Day 3 Events
    "program.day3.event1": "Visita Guiada Museo del Traje",

    "program.viewFull": "Ver programa completo",
    "program.viewMore": "Ver más eventos",
    "program.viewLess": "Ver menos eventos",

    // Ticket Sales
    "tickets.title": "VENTA DE ENTRADAS",
    "tickets.description":
      "Las inscripciones para el Congreso AES 2026 ya están abiertas. Reserve su plaza ahora y benefíciese de la tarifa anticipada.",
    "tickets.platform": "Plataforma de inscripción",

    // Sponsors
    "sponsors.title": "INFORMACIÓN PARA PATROCINADORES",
    "sponsors.description":
      "Hazte patrocinador del Congreso AES y conecta con los profesionales más destacados del sector de la sastrería. Ofrecemos diferentes paquetes de patrocinio adaptados a tus necesidades.",
    "sponsors.download": "Descargar Dossier Patrocinadores",
    "sponsors.ourSponsors": "PATROCINADORES OFICIALES",

    // Location
    "location.title": "LOCALIZACIÓN",
    "location.venue": "Museo del Traje de Madrid",
    "location.address": "Av. de Juan de Herrera, 2, Moncloa - Aravaca, 28040 Madrid",
    "location.contact": "Contacto",
    "location.phone": "Teléfono",
    "location.email": "info@congresoaes.com",
    "location.phoneNumber": "+34 912 345 678",
    "location.map": "Ver en Google Maps",

    // Gallery
    "gallery.title": "EDICIÓN ANTERIOR - OVIEDO 2022",
    "gallery.caption1": "Cóctel de networking y bienvenida - Congreso AES 2022",
    "gallery.caption2": "Exposición de materiales y catálogos especializados - Oviedo 2022",
    "gallery.caption3": "Mesa redonda con expertos del sector - Intercambio de conocimientos",
    "gallery.caption4": "Networking entre profesionales del sector - Ambiente distendido",
    "gallery.caption5": "Conferencia magistral sobre tendencias en sastrería - Ponente experto",
    "gallery.caption6": "Exposición de trajes de alta costura - Artesanía y tradición",
    "gallery.prevImage": "Imagen anterior",
    "gallery.nextImage": "Imagen siguiente",

    // Email Signup
    "email.title": "MANTENTE INFORMADO",
    "email.description":
      "Suscríbete para recibir las últimas actualizaciones sobre el Congreso AES y no perderte ninguna novedad.",
    "email.placeholder": "Tu email",
    "email.subscribe": "Suscribirse",
    "email.thanks": "¡Gracias por suscribirte!",
    "email.thanksMessage": "Te mantendremos informado sobre todas las novedades del Congreso AES.",
    "email.error.required": "Por favor, introduce tu email",
    "email.error.invalid": "Por favor, introduce un email válido",
    "email.label": "Tu dirección de email",

    // Final CTA
    "cta.title": "NO TE PIERDAS ESTE GRAN EVENTO",
    "cta.button": "inscríbete ahora",

    // Footer
    "footer.location": "MADRID",
    "footer.description": "Evento especializado para la Asociación Española de Sastrería",
    "footer.contact": "Contacto",
    "footer.information": "Información",
    "footer.program": "Programa",
    "footer.sponsors": "Patrocinadores",
    "footer.location2": "Localización",
    "footer.registration": "Inscripciones",
    "footer.follow": "Síguenos",
    "footer.rights": "Todos los derechos reservados",

    // Language Switcher
    "lang.switchTo": "Cambiar idioma a",
    "lang.spanish": "Español",
    "lang.english": "English",
  },
  en: {
    // Header
    "header.title": "AES",
    "header.subtitle": "II INTERNATIONAL TAILORING CONGRESS",
    "header.description": "A unique gathering that brings together the international tailoring community.",
    "header.cta": "register now available",
    "header.registrationSoon": "Register for the event",

    // Countdown
    "countdown.title": "MARCH 13TH TO 15TH",
    "countdown.subtitle": "Only these days left",
    "countdown.days": "DAYS",
    "countdown.hours": "HOURS",
    "countdown.minutes": "MIN",
    "countdown.seconds": "SEC",

    // Official Poster
    "poster.title": "2026 EDITION POSTER",
    "poster.alt": "AES Congress 2026 Official Poster",

    // Program
    "program.title": "2026 PROGRAM",
    "program.day1": "FRIDAY 13 MARCH",
    "program.day2": "SATURDAY 14 MARCH",
    "program.day3": "SUNDAY 15 MARCH",
    "program.location1": "Forbes House Madrid",
    "program.location2": "Costume Museum Madrid & Forbes House Madrid",
    "program.location3": "Costume Museum",

    // Day 1 Events
    "program.day1.event1": "Welcome cocktail hosted by the AES president",

    // Day 2 Events
    "program.day2.event1": "Accreditations",
    "program.day2.event2": "Opening Institutional presence - AES President",
    "program.day2.event3": "Tailoring, shirt making and quality",
    "program.day2.event4": "Catering",
    "program.day2.event5": 'Presentation of the exhibition "Tailoring, from workshop to street"',
    "program.day2.event6": "Sectoral representation",
    "program.day2.event7": "Sustainability in the textile industry",
    "program.day2.event8": "Lunch",
    "program.day2.event9": "Sectoral representation",
    "program.day2.event10": "Artisanal and industrial training",
    "program.day2.event11": "International tailoring - Inspirations and evolution",
    "program.day2.event12": "Dinner at Forbes House Madrid",
    "program.day2.event12.location": "Forbes House Madrid",
    "program.day2.event13": "AES Awards Ceremony",
    "program.day2.event13.location": "Forbes House Madrid",
    "program.day2.event14": "Closing",
    "program.day2.event14.location": "Forbes House Madrid",

    // Day 3 Events
    "program.day3.event1": "Guided Visit Costume Museum",

    "program.viewFull": "View full program",
    "program.viewMore": "View more events",
    "program.viewLess": "View fewer events",

    // Ticket Sales
    "tickets.title": "TICKET SALES",
    "tickets.description":
      "Registration for AES Congress 2026 is now open. Reserve your spot now and benefit from the early bird rate.",
    "tickets.platform": "Registration platform",

    // Sponsors
    "sponsors.title": "INFORMATION FOR SPONSORS",
    "sponsors.description":
      "Become a sponsor of the AES Congress and connect with the most outstanding professionals in the tailoring sector. We offer different sponsorship packages adapted to your needs.",
    "sponsors.download": "Download Sponsors Dossier",
    "sponsors.ourSponsors": "OFFICIAL SPONSORS",

    // Location
    "location.title": "LOCATION",
    "location.venue": "Madrid Costume Museum",
    "location.address": "Av. de Juan de Herrera, 2, Moncloa - Aravaca, 28040 Madrid",
    "location.contact": "Contact",
    "location.phone": "Phone",
    "location.email": "info@congresoaes.com",
    "location.phoneNumber": "+34 912 345 678",
    "location.map": "View on Google Maps",

    // Gallery
    "gallery.title": "PREVIOUS EDITION - OVIEDO 2022",
    "gallery.caption1": "Networking and welcome cocktail - AES Congress 2022",
    "gallery.caption2": "Exhibition of specialized materials and catalogs - Oviedo 2022",
    "gallery.caption3": "Expert panel discussion - Knowledge sharing session",
    "gallery.caption4": "Professional networking among industry experts - Relaxed atmosphere",
    "gallery.caption5": "Keynote conference on tailoring trends - Expert speaker",
    "gallery.caption6": "High fashion suits exhibition - Craftsmanship and tradition",
    "gallery.prevImage": "Previous image",
    "gallery.nextImage": "Next image",

    // Email Signup
    "email.title": "STAY INFORMED",
    "email.description": "Subscribe to receive the latest updates about the AES Congress and don't miss any news.",
    "email.placeholder": "Your email",
    "email.subscribe": "Subscribe",
    "email.thanks": "Thank you for subscribing!",
    "email.thanksMessage": "We'll keep you informed about all AES Congress news.",
    "email.error.required": "Please enter your email",
    "email.error.invalid": "Please enter a valid email",
    "email.label": "Your email address",

    // Final CTA
    "cta.title": "DON'T MISS THIS GREAT EVENT",
    "cta.button": "register now",

    // Footer
    "footer.location": "MADRID",
    "footer.description": "Specialized event for the Spanish Tailoring Association",
    "footer.contact": "Contact",
    "footer.information": "Information",
    "footer.program": "Program",
    "footer.sponsors": "Sponsors",
    "footer.location2": "Location",
    "footer.registration": "Registration",
    "footer.follow": "Follow us",
    "footer.rights": "All rights reserved",

    // Language Switcher
    "lang.switchTo": "Switch language to",
    "lang.spanish": "Español",
    "lang.english": "English",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
