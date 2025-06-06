"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslations } from "@/lib/i18n"

const scooters = [
  {
    id: 1,
    name: "Urban Explorer",
    image: "/placeholder.svg?height=600&width=800",
    speed: "45 km/h",
    range: "60 km",
  },
  {
    id: 2,
    name: "Coastal Cruiser",
    image: "/placeholder.svg?height=600&width=800",
    speed: "40 km/h",
    range: "70 km",
  },
  {
    id: 3,
    name: "Mountain Rider",
    image: "/placeholder.svg?height=600&width=800",
    speed: "50 km/h",
    range: "55 km",
  },
  {
    id: 4,
    name: "City Hopper",
    image: "/placeholder.svg?height=600&width=800",
    speed: "35 km/h",
    range: "80 km",
  },
  {
    id: 5,
    name: "Beach Glider",
    image: "/placeholder.svg?height=600&width=800",
    speed: "42 km/h",
    range: "65 km",
  },
]

export default function ScooterCarousel({ lang }: { lang: string }) {
  const t = getTranslations(lang)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % scooters.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + scooters.length) % scooters.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  return (
    <section
      id="scooters"
      className="py-20 bg-white dark:bg-gray-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          {t.ourScooters}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {scooters.map((scooter) => (
                <div key={scooter.id} className="w-full flex-shrink-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image src={scooter.image || "/placeholder.svg"} alt={scooter.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-bold text-white mb-2">{scooter.name}</h3>
                      <div className="flex gap-4 text-white/90 mb-4">
                        <p>
                          {t.maxSpeed}: {scooter.speed}
                        </p>
                        <p>
                          {t.range}: {scooter.range}
                        </p>
                      </div>
                      <Button className="w-fit bg-orange-500 hover:bg-orange-600">{t.rentThis}</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full z-10"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full z-10"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {scooters.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-orange-500 w-6" : "bg-gray-300 dark:bg-gray-700"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
