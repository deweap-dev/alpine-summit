"use client";

import { useEffect } from "react";
import runPageAnimations from "../../scripts/page-animations";
import Link from "next/link";

const destinos = [
  {
    name: "Everest",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/everest.png",
    resumen: "La cima más alta del mundo, un mito de la aventura.",
    descripcion:
      "Descubre el Himalaya y la experiencia de alcanzar el techo del planeta con seguridad, cultura sherpa y paisajes impresionantes.",
    servicios: [
      "Trekking al Campo Base con guías certificados",
      "Expedición a la cumbre con logística completa",
      "Fotografía profesional durante la ruta",
      "Entrenamiento previo personalizado",
    ],
  },
  {
    name: "K2",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/k2.png",
    resumen: "La montaña más desafiante del Karakórum.",
    descripcion:
      "Ideal para montañistas experimentados. Ofrecemos expediciones técnicas, equipo experto y preparación avanzada para afrontar uno de los retos más duros del mundo.",
    servicios: [
      "Expedición guiada al Campo Base y cumbre",
      "Asesoría y preparación técnica",
      "Soporte de porteadores y equipo local",
      "Permisos y seguros de montaña",
    ],
  },
  {
    name: "Pico Triglav",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/triglav.png",
    resumen: "El símbolo alpino de Eslovenia.",
    descripcion:
      "Sube al pico más emblemático de los Alpes Julianos. Rutas para todos los niveles, paisajes verdes y cultura eslovena en cada paso.",
    servicios: [
      "Ascenso guiado al Triglav (2 y 3 días)",
      "Alojamiento en refugios de montaña",
      "Tour fotográfico de los Alpes Julianos",
      "Programas para familias y grupos",
    ],
  },
  {
    name: "Mulhacén",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/mulhacen.png",
    resumen: "El techo de la península ibérica.",
    descripcion:
      "La montaña más alta de España continental. Rutas accesibles para todos, guías expertos y vistas increíbles de Sierra Nevada.",
    servicios: [
      "Excursiones de 1 o 2 días al Mulhacén",
      "Pack multiaventura (trekking + bicicleta + noche en refugio)",
      "Rutas guiadas de amanecer y atardecer",
      "Alquiler de material técnico",
    ],
  },
  {
    name: "Matterhorn",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/matterhorn.png",
    resumen: "La montaña más fotogénica de los Alpes.",
    descripcion:
      "Vive la experiencia suiza definitiva: ascensión técnica, vistas de postal y todo el encanto de Zermatt.",
    servicios: [
      "Expedición técnica con guías UIAGM",
      "Fotografía y reportaje profesional",
      "Alojamiento de lujo en Zermatt",
      "Entrenamiento y aclimatación previa",
    ],
  },
  {
    name: "Fitz Roy",
    img: "https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/fitz-roy.png",
    resumen: "Un icono de la Patagonia argentina.",
    descripcion:
      "Senderismo y escalada en uno de los paisajes más espectaculares del planeta. Aventuras para todos los niveles y pasión por la naturaleza.",
    servicios: [
      "Trekking guiado a Laguna de los Tres",
      "Rutas de escalada clásica",
      "Tours fotográficos de la Patagonia",
      "Excursiones personalizadas a El Chaltén",
    ],
  },
];

export default function DestinationsSection() {
  useEffect(() => {
    runPageAnimations();
  }, []);

  return (
    <section className="w-full py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-amber-700 mb-16 opacity-0 translate-y-10 destinos-section-title">
          Nuestros Destinos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {destinos.map((destino, index) => (
            <article
              key={index}
              className="opacity-0 translate-y-10 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4 destino-card"
            >
              <img
                src={destino.img}
                alt={`Imagen de ${destino.name}`}
                className="w-full h-60 object-cover rounded-lg shadow-md"
                loading="lazy"
              />

              <h3 className="text-2xl font-bold text-amber-700 text-center">
                {destino.name}
              </h3>

              <p className="text-black font-medium text-center">
                {destino.resumen}
              </p>

              <p className="text-gray-700 text-sm text-center">
                {destino.descripcion}
              </p>

              <h4 className="text-black font-semibold mt-4 text-center">
                Servicios destacados
              </h4>

              <ul className="text-gray-800 text-sm space-y-1 list-disc list-inside">
                {destino.servicios.map((servicio, i) => (
                  <li key={i}>{servicio}</li>
                ))}
              </ul>

              <div className="flex justify-center">
                <Link
                  href={`${import.meta.env.BASE_URL}contacto`}
                  className="mt-4 bg-amber-700 hover:bg-amber-800 text-white font-semibold px-4 py-1 rounded-md shadow hover:scale-105 transition-all duration-200"
                >
                  Más información
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
