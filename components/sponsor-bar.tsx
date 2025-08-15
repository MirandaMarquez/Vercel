"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function SponsorBar() {
  const { t } = useLanguage()

  const sponsors = [
    {
      name: "Sponsor 1",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Sponsor 2",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Sponsor 3",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Sponsor 4",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Sponsor 5",
      logo: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-[#3a3226] mb-8">{t("sponsors.ourSponsors")}</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-32 md:w-40">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
