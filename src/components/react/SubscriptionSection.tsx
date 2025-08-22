"use client";

export default function SubscriptionSection() {
  return (
    <section className="w-full bg-gradient-to-r from-amber-900 to-amber-800 py-20 px-4 flex flex-col items-center justify-center text-center">
      <p className="subscribe-text text-2xl md:text-3xl font-semibold text-white max-w-xl mb-6 opacity-0 translate-y-10">
        Suscríbete para recibir novedades y ofertas exclusivas
      </p>

      <form
        className="subscribe-form flex flex-col sm:flex-row items-center gap-4 w-full max-w-md opacity-0 translate-y-10"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        aria-label="Formulario de suscripción"
      >
        <label htmlFor="email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          placeholder="Tu correo electrónico"
          required
          className="w-full flex-1 px-4 py-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <button
          type="submit"
          className="bg-yellow-500 text-black font-semibold px-4 py-1 rounded-md hover:bg-yellow-600 hover:text-white transition-colors shadow"
        >
          Suscribirse
        </button>
      </form>
    </section>
  );
}
