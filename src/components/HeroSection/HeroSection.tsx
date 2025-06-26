"use client";
import Link from "next/link";
import { FloatingElements } from "../FloatingElements/FloatingElements";

export const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Encontre seu novo
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          {" "}
          melhor amigo
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Conectamos corações e transformamos vidas através da adoção responsável.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="#pets"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg"
        >
          Ver Pets Disponíveis
        </Link>
        <Link
          href="#como-funciona"
          className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
        >
          Como Funciona
        </Link>
      </div>
    </div>
    <FloatingElements />
  </section>
);
