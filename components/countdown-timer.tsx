"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

interface CountdownTimerProps {
  targetDate: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { t } = useLanguage()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()
      let newTimeLeft = {} as TimeLeft

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      } else {
        newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return newTimeLeft
    }

    setTimeLeft(calculateTimeLeft())

    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
      <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl md:text-5xl font-bold text-secondary-foreground">{timeLeft.days}</div>
        <div className="text-muted-foreground font-medium mt-2 text-sm">{t("countdown.days")}</div>
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl md:text-5xl font-bold text-secondary-foreground">{timeLeft.hours}</div>
        <div className="text-muted-foreground font-medium mt-2 text-sm">{t("countdown.hours")}</div>
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl md:text-5xl font-bold text-secondary-foreground">{timeLeft.minutes}</div>
        <div className="text-muted-foreground font-medium mt-2 text-sm">{t("countdown.minutes")}</div>
      </div>
      <div className="bg-secondary p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl md:text-5xl font-bold text-secondary-foreground">{timeLeft.seconds}</div>
        <div className="text-muted-foreground font-medium mt-2 text-sm">{t("countdown.seconds")}</div>
      </div>
    </div>
  )
}
