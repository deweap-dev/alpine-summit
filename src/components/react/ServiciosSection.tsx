const services = [
  {
    title: "Expediciones Guiadas a Cumbres",
    desc: "Vive la experiencia de ascender montañas emblemáticas.",
  },
  {
    title: "Organización de Viajes y Rutas a Medida",
    desc: "Creamos experiencias personalizadas para grupos.",
  },
  {
    title: "Escapadas Familiares y Multiaventura",
    desc: "Disfruta de la montaña en familia: circuitos de aventura, tirolinas, escalada y talleres para niños.",
  },
];

export default function ServiciosSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex flex-col items-center justify-center">
      <h2 className="services-title text-3xl sm:text-4xl font-extrabold text-black mb-12 drop-shadow">
        Nuestros Servicios
      </h2>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl items-center justify-center gap-12 px-4">
        <div className="service-main-image relative w-full lg:w-1/2 flex justify-center items-center min-h-[220px] sm:min-h-[320px]">
          <img
            src="https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/montana3.png"
            alt="Montaña principal"
            className="w-full rounded-2xl shadow-xl border border-gray-200 object-cover aspect-[16/10]"
          />
          <img
            src="https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/img/montana2.png"
            alt="Montaña secundaria"
            className="service-overlay-image hidden xl:block absolute w-[180px] right-6 bottom-[-36px] rounded-xl shadow-xl border-4 border-white bg-white object-cover z-10"
          />
        </div>

        <div className="flex flex-col w-full lg:w-1/2 gap-8">
          {services.map((item, index) => (
            <div key={index} className="service-block text-center space-y-2">
              <h3 className="text-xl font-bold text-amber-600">{item.title}</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
