"use client";

import { useEffect, useState } from "react";
import logo from "../../assets/logo_web.svg";

const links = [
  { name: "INICIO", href: import.meta.env.BASE_URL },
  { name: "DESTINOS", href: `${import.meta.env.BASE_URL}destinos` },
  { name: "SOBRE NOSOTROS", href: `${import.meta.env.BASE_URL}sobre-nosotros` },
  { name: "CONTACTO", href: `${import.meta.env.BASE_URL}contacto` },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-lg bg-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="relative flex items-center justify-between h-[80px] px-4 md:px-10">
        <a href="/" className="flex-shrink-0">
          <img
            src={logo.src}
            alt="Logo"
            className="h-24 w-auto transition-all duration-300"
          />
        </a>

        <ul className="hidden lg:flex gap-10 text-white font-extrabold absolute left-1/2 transform -translate-x-1/2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:underline hover:text-amber-500 transition duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          <span
            className={`block w-8 h-1 bg-white rounded mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white rounded mb-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen z-40 backdrop-blur-2xl bg-black/70 transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-6"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col justify-center items-center h-full gap-8 text-lg text-white font-extrabold">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:underline hover:text-amber-500 transition duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
