"use client";

import Link from "next/link";
import { Heart, PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <PawPrint className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors" />
              <Heart className="h-4 w-4 text-pink-500 absolute -top-1 -right-1 group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
              AdotePet
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Início
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/#pets"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Pets Disponíveis
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Como Adotar
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-200"></span>
            </Link>
            <Link
              href="/"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors relative group"
            >
              Sobre Nós
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-200"></span>
            </Link>

            <Link
              href="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Quero Adotar
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/pets"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pets Disponíveis
            </Link>
            <Link
              href="/como-adotar"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Adotar
            </Link>
            <Link
              href="/sobre"
              className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/adotar"
              className="block mx-4 mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Quero Adotar
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
