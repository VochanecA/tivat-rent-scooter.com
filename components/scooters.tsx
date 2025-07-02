"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Star, Shield, MapPin, Calendar, MessageCircle } from "lucide-react"
import { getTranslations } from "@/lib/i18n"

interface ScooterData {
  id: string
  name: string
  price: number
  image: string
  specs: {
    rating: number
    availability: string
    bestFor: string
    duration: string
  }
  features: string[]
}

const scootersData: ScooterData[] = [
  {
    id: "classic-city",
    name: "VERA CRUZ 125cc/2025",
    price: 30,
    image: "/scooters/scooter1.jpg",
    specs: {
      rating: 5.0,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["New, 2025", "USB charging", "CBS breaks", "Digital dashboard", "Comfortable seat"]
  },
  {
    id: "classic-city2",
    name: "VERA CRUZ 125cc/2025",
    price: 35,
    image: "/scooters/scooter2.jpg",
    specs: {
      rating: 5.0,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["New, 2025", "USB charging", "CBS breaks", "Digital dashboard", "Comfortable seat"]
  },
  {
    id: "retro-vintage",
    name: "SYM CRUISE 300",
    price: 50,
    image: "/scooters/scooter3.jpg",
    specs: {
      rating: 4.8,
      availability: "Available",
      bestFor: "Photo tours",
      duration: "Full day"
    },
    features: ["Classic Italian style", "Instagram worthy", "Efficient", "Premium comfort","Comfortable seat", "Modern charm"]
  },
  {
    id: "sport-adventure",
    name: "KOVE 500 cc/2024 Manual",
    price: 65,
    image: "/scooters/scooter4.jpg",
    specs: {
      rating: 4.8,
      availability: "Available",
      bestFor: "Eco tours",
      duration: "Full day"
    },
    features: ["Manual transmission", "Efficient", "Cross", "Comfortable seat","Modern design"]
  },
  {
    id: "classic-city-2020",
    name: "VERA CRUZ 125cc/2020",
    price: 30,
    image: "/scooters/scooter5.jpg",
    specs: {
      rating: 4.8,
      availability: "Available",
      bestFor: "City tours",
      duration: "Full day/Multi day"
    },
    features: ["Reliable model", "Great value", "Easy to ride", "Comfortable seat"]
  }
]

export default function Scooters({ lang }: { lang: string }) {
  const t = getTranslations(lang)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Handle Viber message
  const handleViberMessage = () => {
    const phoneNumber = "38268775468"; // The predefined phone number (without +)
    const message = "I want to rent a scooter"; // Your predefined message
    const encodedMessage = encodeURIComponent(message); // URL-encode the message

    // Construct the Viber deep link
    const viberLink = `viber://chat?number=${phoneNumber}&text=${encodedMessage}`;

    // Open the Viber link
    window.open(viberLink, '_blank');
  }

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

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {scootersData.map((scooter, index) => (
            <div
              key={scooter.id}
              className={`scooter-card opacity-0 translate-y-8 transition-all duration-700 delay-${(index + 1) * 100}`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={scooter.image}
                    alt={`${scooter.name} scooter`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-md">
                    €{scooter.price}/day
                  </div>
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    scooter.specs.availability === 'Available'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {scooter.specs.availability}
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
                      <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                        <Star className="h-4 w-4 text-yellow-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                        <p className="text-sm font-semibold">{scooter.specs.rating} ⭐</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Best For</p>
                        <p className="text-sm font-semibold">{scooter.specs.bestFor}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                        <p className="text-sm font-semibold">{scooter.specs.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                        <Shield className="h-4 w-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                        <p className="text-sm font-semibold">Best buy!</p>
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
                      {/* Helmet included free with rounded rectangle */}
                      <li className="mt-3">
                        <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-3 py-1 rounded-full">
                          Helmet included free
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Book Button for Viber */}
                  <button
                    onClick={handleViberMessage}
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.bookNow || "Book Now via Viber"}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div>
                <h4 className="font-semibold mb-2">{t.requirements || "Requirements"}</h4>
                <p>{t.requirementsText}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">{t.included || "Included"}</h4>
                <p>{t.includedText}</p>
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
