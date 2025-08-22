'use client';

import React, { useState, useEffect } from "react";

type Testimonial = {
  name: string;
  img: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "María Gómez",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "La mejor agencia, todo fue perfecto y fácil. ¡Volveré a viajar con ellos!",
  },
  {
    name: "Carlos Fernández",
    img: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Gran atención personalizada y destinos espectaculares. ¡Recomendado!",
  },
  {
    name: "Lucía Martínez",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Viajé sola por primera vez y todo estuvo organizado al detalle.",
  },
  {
    name: "Pedro Navarro",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Superaron mis expectativas. Equipamiento y guías de 10. Repetiré seguro.",
  },
  {
    name: "Sara Blasco",
    img: "https://randomuser.me/api/portraits/women/80.jpg",
    text: "Paisajes increíbles y un trato muy profesional. Recomiendo la experiencia.",
  },
  {
    name: "Andrés Ortega",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
    text: "Siempre atentos y pendientes de la seguridad del grupo. ¡Un viaje inolvidable!",
  },
];

export default function Testimonials(): React.JSX.Element {
  const [slide, setSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateCards = () =>
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxSlide = Math.ceil(testimonials.length / cardsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % maxSlide);
    }, 8000);
    return () => clearInterval(interval);
  }, [maxSlide]);

  const goTo = (i: number) => setSlide(i);

  return (
    <section className="bg-white w-full py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-black drop-shadow">
          Testimonios de clientes
        </h2>

        <div className="flex justify-center items-center gap-4">
          <button
            className="hidden md:inline-flex px-3 py-2 rounded hover:bg-gray-200 text-xl"
            onClick={() => setSlide((s) => (s - 1 + maxSlide) % maxSlide)}
            aria-label="Anterior"
          >
            ←
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl min-h-[320px] transition-all duration-700 ease-in-out">
            {testimonials
              .slice(slide * cardsPerSlide, slide * cardsPerSlide + cardsPerSlide)
              .map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="bg-gray-100 p-6 rounded-xl shadow text-center h-full flex flex-col items-center justify-between"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  <p className="text-gray-600 italic mb-2 text-sm md:text-base">
                    "{t.text}"
                  </p>
                  <p className="font-bold text-black">{t.name}</p>
                </div>
              ))}
          </div>

          <button
            className="hidden md:inline-flex px-3 py-2 rounded hover:bg-gray-200 text-xl"
            onClick={() => setSlide((s) => (s + 1) % maxSlide)}
            aria-label="Siguiente"
          >
            →
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxSlide }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${i === slide ? "bg-amber-700" : "bg-gray-300"
                } transition`}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
