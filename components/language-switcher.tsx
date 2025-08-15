"use client"

import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const isEnglish = language === "en"

  const toggleLanguage = () => {
    setLanguage(isEnglish ? "es" : "en")
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-[#F7F3EF]/95 backdrop-blur-sm border-2 border-[#EBB37E] rounded-full px-3 py-2 shadow-lg">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 text-[#3A3226] hover:text-[#EBB37E] transition-colors"
          aria-label={`${t("lang.switchTo")} ${isEnglish ? t("lang.spanish") : t("lang.english")}`}
        >
          <Globe className="w-4 h-4" />
          <div className="flex items-center space-x-1">
            <span
              className={`text-xs font-medium transition-colors ${!isEnglish ? "text-[#3A3226]" : "text-gray-400"}`}
            >
              ES
            </span>
            <div className="relative">
              <div className="w-8 h-4 bg-[#F2DBC5] rounded-full transition-colors">
                <div
                  className={`absolute top-0.5 left-0.5 w-3 h-3 bg-[#EBB37E] rounded-full transition-transform duration-200 ease-in-out ${
                    isEnglish ? "transform translate-x-4" : ""
                  }`}
                />
              </div>
            </div>
            <span className={`text-xs font-medium transition-colors ${isEnglish ? "text-[#3A3226]" : "text-gray-400"}`}>
              EN
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
