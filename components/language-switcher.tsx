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
      <div className="bg-background/95 backdrop-blur-sm border-2 border-accent rounded-full px-3 py-2 shadow-lg">
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
          aria-label={`${t("lang.switchTo")} ${isEnglish ? t("lang.spanish") : t("lang.english")}`}
        >
          <Globe className="w-4 h-4" />
          <div className="flex items-center space-x-1">
            <span
              className={`text-xs font-medium transition-colors ${!isEnglish ? "text-foreground" : "text-muted-foreground"}`}
            >
              ES
            </span>
            <div className="relative">
              <div className="w-8 h-4 bg-muted rounded-full transition-colors">
                <div
                  className={`absolute top-0.5 left-0.5 w-3 h-3 bg-accent rounded-full transition-transform duration-200 ease-in-out ${
                    isEnglish ? "transform translate-x-4" : ""
                  }`}
                />
              </div>
            </div>
            <span
              className={`text-xs font-medium transition-colors ${isEnglish ? "text-foreground" : "text-muted-foreground"}`}
            >
              EN
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
