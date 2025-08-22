"use client";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-cover bg-center relative overflow-hidden">
      <video
        src="https://deweap.ams3.cdn.digitaloceanspaces.com/alpine-summit.deweap.com/media/video-alpine.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-label="Vídeo de montañas y aventura de Alpine Summit"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 px-6">
        <h1
          id="hero-title"
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 opacity-0 translate-y-10"
        >
          Vive la Aventura en las Cumbres Más Altas
        </h1>

        <p
          id="hero-text"
          className="text-white text-sm lg:text-md max-w-4xl mb-6 opacity-0 translate-y-10"
        >
          Explora expediciones únicas, rutas inolvidables y experiencias de
          montañismo pensadas para todos los niveles.{" "}
          <br className="hidden sm:block" />
          ¡Descubre el verdadero espíritu alpino y supera tus límites con
          nosotros!
        </p>

        <a
          id="hero-button"
          href={`${import.meta.env.BASE_URL}destinos`}
          className="inline-block bg-white/20 border border-white text-white text-lg font-semibold px-4 py-1 rounded-md backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 opacity-0 scale-50"
        >
          Descubrir más
        </a>
      </div>
    </section>
  );
}
