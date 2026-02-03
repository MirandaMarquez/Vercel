"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export default function SponsorBar() {
  const { t } = useLanguage()

  const sponsors = [
    {
      name: "Davion",
      logo: "/sponsors/davion-logo.jpg",
    },
    {
      name: "Dormeuil Cloth",
      logo: "/sponsors/dormeuil-logo.jpg",
    },
    {
      name: "Carnet Como",
      logo: "/sponsors/carnet-como-logo.jpg",
    },
    {
      name: "Vitale Barberis Canonico",
      logo: "/sponsors/vitale-barberis-logo.jpg",
    },
    {
      name: "Fratelli Tallia Delfino",
      logo: "/sponsors/fratelli-tallia-logo.jpg",
    },
    {
      name: "Holland & Sherry",
      logo: "/sponsors/holland-sherry-logo.jpg",
    },
    {
      name: "Drago",
      logo: "/sponsors/drago-logo.jpg",
    },
    {
      name: "Scabal",
      logo: "/sponsors/scabal-logo.jpg",
    },
    {
      name: "IDF Lining",
      logo: "/sponsors/idf-lining-logo.jpg",
    },
    {
      name: "Group Pressing+",
      logo: "/sponsors/pressing-group-logo.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3a3226] mb-12">{t("sponsors.ourSponsors")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-full max-w-[200px] h-[120px] flex items-center justify-center">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={120}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
