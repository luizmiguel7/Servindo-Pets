"use client";
export const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Pronto para Mudar uma Vida?
      </h2>
      <p className="text-xl text-purple-100 mb-8">
        Milhares de pets estão esperando por uma família. Seja parte dessa
        história de amor.
      </p>
      <a
        href="#pets"
        className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Começar Agora
      </a>
    </div>
  </section>
);
