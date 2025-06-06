import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { getTranslations } from "@/lib/i18n"

export default function Footer() {
  // Default to English for the footer
  const t = getTranslations("en")

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
             Tivat Rent-a-Scooter
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">{t.footerDescription}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link href="#scooters" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.scooters}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.features}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t.contact}</h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Porto Montenegro</p>
              <p className="mb-2">Tivat, Montenegro</p>
              <p className="mb-2">+382 123 456 789</p>
              <p>info@tivatscooters.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()}  Tivat Rent-a-Scooter. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
