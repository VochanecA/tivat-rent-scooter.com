"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Instagram, Facebook, Globe } from "lucide-react"
import { getTranslations } from "@/lib/i18n"

export default function SocialQR({ lang }: { lang: string }) {
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

    const qrElements = document.querySelectorAll(".qr-card")
    qrElements.forEach((el) => observer.observe(el))

    return () => {
      qrElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.stayConnected}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t.scanQrCodes}</p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
<div className="qr-card opacity-0 translate-y-8 transition-all duration-700 delay-100">
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
    <a
      href="https://www.instagram.com/tivat_rent_a_scooter/"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center mx-auto mb-4">
        <Instagram className="h-6 w-6 text-pink-500" />
      </div>
      <h3 className="text-xl font-bold mb-4">{t.instagram}</h3>
      <div className="bg-white p-2 rounded-lg mx-auto w-48 h-48 relative mb-4">
        <Image
          src="/instagram_placeholder.jpg?height=200&width=200"
          alt="Instagram QR Code"
          fill
          className="object-contain"
        />
      </div>
      <p className="text-gray-600 dark:text-gray-300">@tivat_rent_a_scooter</p>
    </a>
  </div>
</div>


          <div className="qr-card opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4">
                <Facebook className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.facebook}</h3>
              <div className="bg-white p-2 rounded-lg mx-auto w-48 h-48 relative mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Facebook QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300">Tivat Rent-a-Scooter</p>
            </div>
          </div>

          <div className="qr-card opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.website}</h3>
              <div className="bg-white p-2 rounded-lg mx-auto w-48 h-48 relative mb-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Website QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300">tivatscooters.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
