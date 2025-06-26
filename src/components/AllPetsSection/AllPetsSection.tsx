"use client";

import { useState, useEffect, useCallback } from "react";
import { PawPrint } from "lucide-react";
import { SearchAndFilters } from "../SearchAndFilters/SearchAndFilters";
import { PetCard } from "../PetCard/PetCard";
import {
  fetchAllPets,
  fetchAvailablePets,
  fetchPetByName,
} from "@/components/utils/fetchPets";

type Pet = {
  nome: string;
  raca: string;
  idade: string;
  porte: string;
  sexo: string;
  status: string;
  vacinado: boolean;
};

export const AllPetsSection = () => {
  const [allPets, setAllPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [availablePets, setAvailablePets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const loadPets = async () => {
      try {
        setLoading(true);
        setError(null);

        const [all, available] = await Promise.all([
          fetchAllPets(),
          fetchAvailablePets(),
        ]);

        setAllPets(all || []);
        setAvailablePets(available || []);
        setFilteredPets(all || []);
      } catch {
        setError("Erro ao carregar pets. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  const handleSearch = useCallback(async () => {
    if (searchTerm.trim()) {
      const pet = await fetchPetByName(searchTerm.trim());
      if (pet) {
        setFilteredPets([pet]);
      } else {
        const result = allPets.filter((p) =>
          p.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPets(result);
      }
    } else {
      let petsToShow = allPets;
      if (statusFilter === "disponivel") {
        petsToShow = availablePets;
      } else if (statusFilter) {
        petsToShow = allPets.filter(
          (p) => p.status.toLowerCase() === statusFilter.toLowerCase()
        );
      }
      setFilteredPets(petsToShow);
    }
  }, [searchTerm, statusFilter, allPets, availablePets]);

  useEffect(() => {
    if (!searchTerm && statusFilter) {
      handleSearch();
    } else if (!searchTerm && !statusFilter) {
      setFilteredPets(allPets);
    }
  }, [statusFilter, allPets, availablePets, handleSearch, searchTerm]);

  if (loading) {
    return (
      <section id="pets" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Pets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Conheça todos os nossos amigos que estão esperando por uma nova
            família
          </p>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="pets" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Pets
          </h2>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="pets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Pets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça todos os nossos amigos que estão esperando por uma nova
            família
          </p>
        </div>

        <SearchAndFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          onSearch={handleSearch}
        />

        {!searchTerm && !statusFilter && availablePets.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              ⭐ Pets Disponíveis para Adoção
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availablePets.slice(0, 6).map((pet, i) => (
                <PetCard key={`available-${i}`} pet={pet} />
              ))}
            </div>
          </div>
        )}

        <div>
          {(searchTerm || statusFilter) && (
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {searchTerm
                ? filteredPets.length > 0
                  ? `Resultados para "${searchTerm}" (${filteredPets.length})`
                  : `Nenhum pet encontrado para "${searchTerm}"`
                : `Pets com status: ${
                    statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)
                  } (${filteredPets.length})`}
            </h3>
          )}

          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPets.map((pet, i) => (
                <PetCard key={`filtered-${i}`} pet={pet} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <PawPrint className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">
                Nenhum pet encontrado com os critérios de busca.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("");
                  setFilteredPets(allPets);
                }}
                className="mt-4 text-purple-600 hover:text-purple-800 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
