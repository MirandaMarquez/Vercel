"use client"

import { useState } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function Gallery() {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    {
      src: "/gallery/networking-evento.jpg",
      alt: "Networking Congreso AES",
      caption: t("gallery.caption1"),
    },
    {
      src: "/gallery/exposicion-materiales.jpg",
      alt: "Exposición de materiales",
      caption: t("gallery.caption2"),
    },
    {
      src: "/gallery/mesa-redonda.jpg",
      alt: "Mesa redonda profesional",
      caption: t("gallery.caption3"),
    },
    {
      src: "/gallery/networking-profesional.jpg",
      alt: "Networking profesional",
      caption: t("gallery.caption4"),
    },
    {
      src: "/gallery/conferencia-magistral.jpg",
      alt: "Conferencia magistral",
      caption: t("gallery.caption5"),
    },
    {
      src: "/gallery/exposicion-trajes.jpg",
      alt: "Exposición de trajes",
      caption: t("gallery.caption6"),
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src={images[activeIndex].src || "/placeholder.svg"}
            alt={images[activeIndex].alt}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-white">
            <p className="text-lg">{images[activeIndex].caption}</p>
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface text-surface-foreground p-2 rounded-full shadow-md transition-colors"
          aria-label={t("gallery.prevImage")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-surface/80 hover:bg-surface text-surface-foreground p-2 rounded-full shadow-md transition-colors"
          aria-label={t("gallery.nextImage")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative h-20 overflow-hidden rounded-md ${
              index === activeIndex ? "ring-2 ring-accent" : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
