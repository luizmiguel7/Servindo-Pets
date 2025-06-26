"use client";
import { PawPrint, Shield, Heart } from "lucide-react";

const ADOPTION_STEPS = [
  {
    step: "1",
    title: "Encontre seu Pet",
    description: "Navegue pelos perfis e encontre o pet que combina com você",
    icon: PawPrint,
  },
  {
    step: "2",
    title: "Preencha o Formulário",
    description: "Complete nosso formulário de adoção responsável",
    icon: Shield,
  },
  {
    step: "3",
    title: "Leve para Casa",
    description: "Após aprovação, receba seu novo melhor amigo",
    icon: Heart,
  },
];

export const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Como Funciona a Adoção
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Um processo simples e seguro para encontrar seu novo companheiro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ADOPTION_STEPS.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                <IconComponent className="h-8 w-8 text-purple-600" />
              </div>
              <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
