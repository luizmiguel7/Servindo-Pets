"use client";
import { Shield, PawPrint } from "lucide-react";
import { getPetCardColor, getStatusBadge } from "@/components/utils/helpers";

type Pet = {
  nome: string;
  raca: string;
  idade: string;
  porte: string;
  sexo: string;
  status: string;
  vacinado: boolean;
};

export const PetCard = ({ pet }: { pet: Pet }) => {
  const cardColor = getPetCardColor(pet.raca);
  const statusBadge = getStatusBadge(pet.status);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden group">
      <div
        className={`h-48 bg-gradient-to-br ${cardColor} flex items-center justify-center group-hover:scale-105 transition-transform relative`}
      >
        <PawPrint className="h-16 w-16 text-white/80" />
        <div
          className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}
        >
          {statusBadge.text}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {pet.nome || "Nome não informado"}
        </h3>
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <p>
            <span className="font-medium">Raça:</span> {pet.raca}
          </p>
          <p>
            <span className="font-medium">Idade:</span> {pet.idade}
          </p>
          <p>
            <span className="font-medium">Porte:</span> {pet.porte}
          </p>
          <p>
            <span className="font-medium">Sexo:</span> {pet.sexo}
          </p>
          {pet.vacinado && (
            <div className="flex items-center gap-1 text-green-600">
              <Shield className="h-3 w-3" />
              <span>Vacinado</span>
            </div>
          )}
        </div>
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
          Conhecer {pet.nome}
        </button>
      </div>
    </div>
  );
};
