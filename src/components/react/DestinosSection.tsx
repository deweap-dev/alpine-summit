"use client";
import Link from "next/link";

const destinations = [
  {
    name: "Everest",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/everest.png",
    slug: "everest",
  },
  {
    name: "K 2",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/k2.png",
    slug: "k2",
  },
  {
    name: "Pico Triglav",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/triglav.png",
    slug: "pico-triglav",
  },
  {
    name: "Mulhacén",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/mulhacen.png",
    slug: "mulhacen",
  },
];

export default function DestinosSection() {
  return (
    <section
      className="destinos-hero w-full bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage:
          "url('https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/puesta_sol.png')",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="destinos-title text-3xl md:text-4xl font-extrabold mb-10 text-center text-white drop-shadow">
          Destinos populares
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`${import.meta.env.BASE_URL}/destinos`}
            >
              <div className="destino-card block group rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-amber-300">
                <div className="relative w-full h-56 md:h-64">
                  <img
                    src={destination.img}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-black/10">
                    <span className="w-full py-3 text-lg font-bold text-white text-center bg-black/40 rounded-b-2xl">
                      {destination.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
