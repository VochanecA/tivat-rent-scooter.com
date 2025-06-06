"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Zap, Clock, Users, Gauge } from "lucide-react"
import { getTranslations } from "@/lib/i18n"

interface ScooterData {
  id: string
  name: string
  price: number
  image: string
  specs: {
    maxSpeed: number
    range: number
    passengers: number
    engine: string
  }
  features: string[]
}

const scootersData: ScooterData[] = [
  {
    id: "classic-50",
    name: "Classic 50cc",
    price: 25,
    image: "/scooter-classic-50.jpg?height=300&width=400",
    specs: {
      maxSpeed: 45,
      range: 80,
      passengers: 1,
      engine: "50cc"
    },
    features: ["Perfect for city rides", "Fuel efficient", "Easy to park"]
  },
  {
    id: "sport-125",
    name: "Sport 125cc",
    price: 35,
    image: "/scooter-sport-125.jpg?height=300&width=400",
    specs: {
      maxSpeed: 85,
      range: 120,
      passengers: 2,
      engine: "125cc"
    },
    features: ["Higher speed", "Comfortable for two", "Great for longer trips"]
  },
  {
    id: "retro-vintage",
    name: "Retro Vintage",
    price: 30,
    image: "/scooter-retro.jpg?height=300&width=400",
    specs: {
      maxSpeed: 60,
      range: 100,
      passengers: 2,
      engine: "150cc"
    },
    features: ["Classic Italian style", "Instagram worthy", "Premium comfort"]
  },
  {
    id: "electric-eco",
    name: "Electric Eco",
    price: 40,
    image: "/scooter-electric.jpg?height=300&width=400",
    specs: {
      maxSpeed: 50,
      range: 60,
      passengers: 1,
      engine: "Electric"
    },
    features: ["Zero emissions", "Silent operation", "USB charging port"]
  },
  {
    id: "touring-250",
    name: "Touring 250cc",
    price: 55,
    image: "/scooter-touring.jpg?height=300&width=400",
    specs: {
      maxSpeed: 110,
      range: 200,
      passengers: 2,
      engine: "250cc"
    },
    features: ["Long distance comfort", "Large storage", "Wind protection"]
  },
  {
    id: "premium-300",
    name: "Premium 300cc",
    price: 70,
    image: "/scooter-premium.jpg?height=300&width=400",
    specs: {
      maxSpeed: 130,
      range: 250,
      passengers: 2,
      engine: "300cc"
    },
    features: ["Top performance", "ABS braking", "Premium features"]
  }
]

export default function Scooters({ lang }: { lang: string }) {
  const t = getTranslations(lang)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const scooterCards = document.querySelectorAll(".scooter-card")
    scooterCards.forEach((el) => observer.observe(el))

    return () => {
      scooterCards.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="scootersPricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.ourScooters || "Our Scooter Fleet"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.scooterDescription || "Choose from our premium collection of scooters, perfect for exploring Tivat and Montenegro"}
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {scootersData.map((scooter, index) => (
            <div 
              key={scooter.id} 
              className={`scooter-card opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 1) * 100}`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={scooter.image}
                    alt={`${scooter.name} scooter`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    €{scooter.price}/day
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {scooter.name}
                  </h3>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <Gauge className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Max Speed</p>
                        <p className="text-sm font-semibold">{scooter.specs.maxSpeed} km/h</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Range</p>
                        <p className="text-sm font-semibold">{scooter.specs.range} km</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <Users className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Passengers</p>
                        <p className="text-sm font-semibold">{scooter.specs.passengers}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Engine</p>
                        <p className="text-sm font-semibold">{scooter.specs.engine}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {scooter.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    {t.bookNow || "Book Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              {t.rentalInfo || "Rental Information"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-semibold mb-2">{t.requirements || "Requirements"}</h4>
                <p>Valid driving license required. Minimum age 18 years.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.included || "Included"}</h4>
                <p>Helmet, insurance, and 24/7 roadside assistance.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.discounts || "Discounts"}</h4>
                <p>Weekly rentals 15% off. Monthly rentals 25% off.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}