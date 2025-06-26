import Link from "next/link";
import {
  Heart,
  PawPrint,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 sm:mt-20 md:mt-24 lg:mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <PawPrint className="h-8 w-8 text-purple-400" />
                <Heart className="h-4 w-4 text-pink-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold text-white">AdotePet</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Conectamos corações e transformamos vidas através da adoção
              responsável. Cada pet merece uma família amorosa.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/pets"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Pets Disponíveis
                </Link>
              </li>
              <li>
                <Link
                  href="/como-adotar"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Como Adotar
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/voluntarios"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Seja Voluntário
                </Link>
              </li>
              <li>
                <Link
                  href="/doacao"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Faça uma Doação
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidade"
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Rua dos Pets, 123
                    <br />
                    Salvador, BA - 40000-000
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">(71) 9999-9999</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">contato@adotepet.com.br</p>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-md font-semibold mb-3 text-white">
                Newsletter
              </h4>
              <p className="text-sm text-gray-300 mb-3">
                Receba novidades sobre pets disponíveis
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-r-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="h-4 w-4 text-pink-400" />
              <p className="text-gray-400 text-sm">
                © 2025 AdotePet. Feito com amor para nossos amigos de quatro
                patas.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/termos"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Termos de Uso
              </Link>
              <Link
                href="/politica-privacidade"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Privacidade
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
