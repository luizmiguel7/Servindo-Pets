"use client";
import { Search, Filter } from "lucide-react";

interface SearchAndFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  onSearch: () => void;
}

export const SearchAndFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  onSearch,
}: SearchAndFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Buscar pet por nome..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && onSearch()}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="text-gray-400 h-5 w-5" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
          >
            <option value="">Todos os Status</option>
            <option value="disponivel">Disponível</option>
            <option value="adotado">Adotado</option>
            <option value="reservado">Reservado</option>
          </select>
        </div>

        <button
          onClick={onSearch}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};
