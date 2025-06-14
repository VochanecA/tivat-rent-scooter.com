"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { getTranslations } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"

export default function Hero({ lang }: { lang: string }) {
  const { language, dir } = useLanguage()
  const router = useRouter()
  const t = getTranslations(lang)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // List of images in the public directory
  const slides = [
    "/scooters/scooter4.jpg",
    "/tivat11.jpg",
    "/scooters/scooter2.jpg",
    "/tivat3.jpg",
    "/scooters/scooter3.jpg",
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Parallax effect for each slide
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      parallaxRefs.current.forEach((ref, index) => {
        if (ref) {
          const scrollY = window.scrollY
          ref.style.transform = `translateY(${scrollY * (0.3 + index * 0.1)}px)`
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine the text color for the "Learn More" button based on the theme
  const learnMoreTextColor = mounted && theme === "dark" ? "text-white" : "text-black"

  // Handle phone call
  const handlePhoneCall = () => {
    window.location.href = "tel:+38268775468"
  }

  // Handle Learn More click with smooth scroll
const handleLearnMore = () => {
  const currentPath = window.location.pathname;
  const targetPath = `/${language}`;

  console.log('Current Path:', currentPath);
  console.log('Target Path:', targetPath);

  if (currentPath === targetPath || currentPath === `/${language}/`) {
    const element = document.getElementById('scootersPricing');
    console.log('Element found:', element);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  } else {
    router.push(`/${language}#scootersPricing`);

    setTimeout(() => {
      const element = document.getElementById('scootersPricing');
      console.log('Element found after navigation:', element);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
};


  // Handle Rent Now click
  const handleRentNow = () => {
    // Navigate to pricing section
    handleLearnMore()
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Parallax Background with Image Slider */}
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => { parallaxRefs.current[index] = el }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${slide}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s ease-out",
            filter: "brightness(0.85) contrast(1.1)",
          }}
        />
      ))}

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/80 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className={`max-w-3xl ${dir === "rtl" ? "mr-auto" : "ml-0 md:ml-12"}`}>
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
            Premium Scooter & Motorbike Rental
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 mb-6 leading-tight tracking-tight">
            {t.heroTitle}
          </h1>

          {/* Subtitle with Better Typography */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light leading-relaxed max-w-2xl">
            {t.heroSubtitle}
          </p>

          {/* Modern Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* <Button
              size="lg"
              onClick={handleRentNow}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-2xl shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40"
            >
              {t.rentNow}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button> */}
<Button
  size="lg"
  variant="outline"
  onClick={handleLearnMore}
  className={`bg-yellow-400 ${learnMoreTextColor} border-2 border-yellow-500 hover:bg-yellow-500 text-black hover:text-white backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-yellow-300`}
>
  {t.viewScooters}
</Button>


          </div>

          {/* Phone Number - Blinking Rounded Button */}
<button
  onClick={handlePhoneCall}
  className="w-full md:w-auto inline-flex justify-center items-center px-8 py-4 mb-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-3xl md:text-4xl rounded-full shadow-2xl shadow-red-500/30 transition-all duration-300 hover:scale-105 hover:shadow-red-500/50 animate-pulse"
  style={{
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  }}
>
  <svg
    className="w-8 h-8 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
  068 775 468
</button>


          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-6 text-white/80 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2" />
              Free Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#4FC3F7', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#29B6F6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  )
}