import logo from "../../assets/logo_web.svg";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-amber-900/80 text-white">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-10">
        <div className="flex items-center gap-3">
          <img src={logo.src} alt="Logo Alpine Summit" className="w-[220px]" />
        </div>

        <nav className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm font-medium">
          <a
            href={import.meta.env.BASE_URL}
            className="hover:text-amber-500 transition"
          >
            Inicio
          </a>
          <a
            href={`${import.meta.env.BASE_URL}destinos`}
            className="hover:text-amber-500 transition"
          >
            Destinos
          </a>
          <a
            href={`${import.meta.env.BASE_URL}sobre-nosotros`}
            className="hover:text-amber-500 transition"
          >
            Sobre Nosotros
          </a>
          <a
            href={`${import.meta.env.BASE_URL}contacto`}
            className="hover:text-amber-500 transition"
          >
            Contacto
          </a>
        </nav>

        <div className="flex flex-col items-center gap-3 text-sm">
          <a
            href="mailto:info@alpinesummit.com"
            className="underline underline-offset-2 hover:text-amber-500 transition font-semibold"
          >
            info@alpinesummit.com
          </a>

          <div className="flex gap-4">
            <a
              href="https://instagram.com/alpinesummit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-amber-500"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="3.2" />
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="18" cy="6" r="1" />
              </svg>
            </a>

            <a
              href="https://facebook.com/alpinesummit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-amber-500"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 2.5v3h3V8h-3v11h-4V8h-2V5.5h2v-2A3.5 3.5 0 0116.5 0h1V2.5h-1a1 1 0 00-1 1v2h2z" />
              </svg>
            </a>

            <a
              href="https://x.com/alpinesummit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-amber-500"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 20L20 4M4 4l16 16" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-white/70 px-4 pb-6">
        © {year} Alpine Summit · Todos los derechos reservados.
      </div>
    </footer>
  );
}
