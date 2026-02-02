"use client"

import { useState, useRef, useEffect } from "react"
import { MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ProgramSchedule() {
  const { t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const programData = [
    {
      day: t("program.day1"),
      location: t("program.location1"),
      events: [{ time: "20:00h", title: t("program.day1.event1") }],
      isShort: true,
    },
    {
      day: t("program.day2"),
      location: t("program.location2"),
      events: [
        { time: "09:00h", title: t("program.day2.event1") },
        { time: "09:30h", title: t("program.day2.event2") },
        { time: "10:30h", title: t("program.day2.event3") },
        { time: "11:30h", title: t("program.day2.event4") },
        { time: "12:00h", title: t("program.day2.event5") },
        { time: "12:30h", title: t("program.day2.event6") },
        { time: "13:15h", title: t("program.day2.event7") },
        { time: "14:15h", title: t("program.day2.event8") },
        { time: "15:15h", title: t("program.day2.event9") },
        { time: "16:00h", title: t("program.day2.event10") },
        { time: "17:00h", title: t("program.day2.event11") },
        { time: "20:30h", title: t("program.day2.event13"), location: t("program.day2.event13.location") },
        { time: "21:15h", title: t("program.day2.event12"), location: t("program.day2.event12.location") },
      ],
      isShort: false,
    },
    {
      day: t("program.day3"),
      location: t("program.location3"),
      events: [{ time: "11:00h", title: t("program.day3.event1") }],
      isShort: true,
    },
  ]

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full transition-colors ${
            canScrollLeft
              ? "bg-[#EBB37E] hover:bg-[#d4a06b] text-[#3A3226]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-3xl font-bold text-center text-[#F7F3EF]">{t("program.title")}</h2>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={`p-2 rounded-full transition-colors ${
            canScrollRight
              ? "bg-[#EBB37E] hover:bg-[#d4a06b] text-[#3A3226]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Program Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {programData.map((dayData, index) => (
          <div
            key={index}
            className={`flex-shrink-0 bg-[#F7F3EF] rounded-lg shadow-md overflow-hidden ${
              dayData.isShort ? "w-80" : "w-96"
            }`}
          >
            {/* Day Header */}
            <div className="bg-[#EBB37E] p-4 text-center">
              <h3 className="text-lg font-bold text-[#3A3226] mb-2">{dayData.day}</h3>
              <div className="flex items-center justify-center text-[#3A3226] text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{dayData.location}</span>
              </div>
            </div>

            {/* Events List */}
            <div className={`p-4 ${dayData.isShort ? "space-y-3" : "space-y-2"}`}>
              {dayData.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className={`flex items-start gap-3 ${dayData.isShort ? "p-3 bg-[#F2DBC5] rounded-lg" : "py-2"}`}
                >
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#EBB37E]" />
                    <span className="text-sm font-medium text-[#3A3226] min-w-[50px]">{event.time}</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-[#3A3226] ${dayData.isShort ? "text-base font-medium" : "text-sm"}`}>
                      {event.title}
                      {event.location && <span className="font-bold"> - {event.location}</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Special styling for short days */}
            {dayData.isShort && (
              <div className="px-4 pb-4">
                <div className="h-1 bg-[#EBB37E] rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {programData.map((_, index) => (
          <div key={index} className="w-2 h-2 rounded-full bg-[#EBB37E] opacity-50" />
        ))}
      </div>
    </div>
  )
}
