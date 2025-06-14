// components/Testimonials.tsx
"use client";

import { useEffect, useRef } from "react";
import { getTranslations } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

// Mock data for testimonials with names from Serbia, Tel Aviv, and Moscow
const testimonials = [
  {
    name: "Иван Петровић",
    role: "Tourist from Serbia",
    content: "Renting a scooter was a breeze! The service was excellent and the scooter was in perfect condition.",
  },
  {
    name: "דוד לוי",
    role: "Tourist from Israel",
    content: "Exploring Tivat on a scooter was an amazing experience. Highly recommend their services!",
  },
  {
    name: "Алексей Смирнов",
    role: "Vacationer from Moscow",
    content: "The team was very helpful and the scooter rental process was smooth and hassle-free.",
  },
  {
    name: "Милена Јовановић",
    role: "Adventure Seeker from Serbia",
    content: "Great prices and excellent customer service. Will definitely rent again!",
  },
  {
    name: "Роман Кузнецов",
    role: "Backpacker from Moscow",
    content: "The scooter made my trip around Montenegro unforgettable. Easy to rent and great support.",
  },
  {
    name: "Sara Koen",
    role: "Backpacker from Tel Aviv",
    content: "Perfect way to get around and capture the beauty of Montenegro. The scooter was reliable and fun!",
  },
];

export default function Testimonials({ lang }: { lang: string }) {
  const { dir } = useLanguage();
  const t = getTranslations(lang);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialElements = document.querySelectorAll(".testimonial-card");
    testimonialElements.forEach((el) => observer.observe(el));

    return () => {
      testimonialElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.testimonialsTitle || "What Our Customers Say"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t.testimonialsDescription || "Read what our customers have to say about their experience with us."}
          </p>
        </div>

        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
