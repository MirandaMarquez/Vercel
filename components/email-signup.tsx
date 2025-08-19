"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function EmailSignup() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError(t("email.error.required"))
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError(t("email.error.invalid"))
      return
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitted(true)
        setError("")
        console.log("Email guardado exitosamente:", email)
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Error al guardar el email')
      }
    } catch (error) {
      console.error('Error al guardar email:', error)
      setError('Error de conexión. Inténtalo de nuevo.')
    }
  }

  return (
    <div className="max-w-xl mx-auto">
      {submitted ? (
        <div className="bg-[#F7F3EF] p-6 rounded-lg shadow-md text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-green-600 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-[#3A3226] mb-2">{t("email.thanks")}</h3>
          <p className="text-[#3A3226]">{t("email.thanksMessage")}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#F7F3EF] p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("email.placeholder")}
              className="flex-1 px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EBB37E] bg-white border-[]"
              aria-label={t("email.label")}
            />
            <button
              type="submit"
              className="bg-[#EBB37E] hover:bg-[#d4a06b] text-[#3A3226] font-medium px-6 py-3 rounded-md transition-colors"
            >
              {t("email.subscribe")}
            </button>
          </div>
          {error && <p className="mt-2 text-red-600 text-sm">{error}</p>}
        </form>
      )}
    </div>
  )
}
