'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Heart,
  PawPrint,
  Users,
  Shield,
  Search,
  Filter
} from 'lucide-react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

const STATS = [
  {
    icon: Heart,
    number: "1,200+",
    label: "Pets Adotados",
    bgColor: "from-purple-100 to-pink-100",
    iconColor: "text-purple-600"
  },
  {
    icon: Users,
    number: "800+",
    label: "Famílias Felizes",
    bgColor: "from-blue-100 to-purple-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Shield,
    number: "95%",
    label: "Taxa de Sucesso",
    bgColor: "from-pink-100 to-purple-100",
    iconColor: "text-pink-600"
  }
];

const ADOPTION_STEPS = [
  {
    step: "1",
    title: "Encontre seu Pet",
    description: "Navegue pelos perfis e encontre o pet que combina com você",
    icon: PawPrint
  },
  {
    step: "2",
    title: "Preencha o Formulário",
    description: "Complete nosso formulário de adoção responsável",
    icon: Shield
  },
  {
    step: "3",
    title: "Leve para Casa",
    description: "Após aprovação, receba seu novo melhor amigo",
    icon: Heart
  }
];

type Pet = {
  nome: string;
  raca: string;
  idade: string;
  porte: string;
  sexo: string;
  status: string;
  vacinado: boolean;
};

// Funções de busca de dados
const fetchAllPets = async () => {
  try {
    const response = await fetch('https://mini-projeto-m4-am8g.onrender.com/pets');
    if (!response.ok) throw new Error('Erro ao buscar pets');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    return [];
  }
};

const fetchAvailablePets = async () => {
  try {
    const response = await fetch('https://mini-projeto-m4-am8g.onrender.com/pets/listAvailable');
    if (!response.ok) throw new Error('Erro ao buscar pets disponíveis');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar pets disponíveis:', error);
    return [];
  }
};

const fetchPetByName = async (nome: string) => {
  try {
    const response = await fetch(`https://mini-projeto-m4-am8g.onrender.com/pets/listOne/${encodeURIComponent(nome)}`);
    if (!response.ok) throw new Error('Erro ao buscar pet');
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar pet:', error);
    return null;
  }
};

// Estilização baseada em raça/status
const getPetCardColor = (raca = '') => {
  const colors = [
    'from-purple-400 to-pink-400',
    'from-blue-400 to-purple-400',
    'from-pink-400 to-red-400',
    'from-green-400 to-blue-400',
    'from-yellow-400 to-orange-400',
    'from-indigo-400 to-purple-400'
  ];
  const hash = raca ? raca.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : 0;
  return colors[hash % colors.length];
};

const getStatusBadge = (status = '') => {
  const statusMap: Record<string, { text: string; color: string }> = {
    'disponivel': { text: 'Disponível', color: 'bg-green-100 text-green-800' },
    'disponível': { text: 'Disponível', color: 'bg-green-100 text-green-800' },
    'adotado': { text: 'Adotado', color: 'bg-gray-100 text-gray-800' },
    'reservado': { text: 'Reservado', color: 'bg-yellow-100 text-yellow-800' }
  };

  return statusMap[status.toLowerCase()] || { text: status || 'N/A', color: 'bg-gray-100 text-gray-800' };
};

// Componentes visuais
const FloatingElements = () => (
  <>
    <div className="absolute top-20 left-10 animate-bounce">
      <PawPrint className="h-8 w-8 text-purple-300" />
    </div>
    <div className="absolute top-40 right-20 animate-bounce delay-200">
      <Heart className="h-6 w-6 text-pink-300" />
    </div>
    <div className="absolute bottom-20 left-1/4 animate-bounce delay-500">
      <PawPrint className="h-6 w-6 text-blue-300" />
    </div>
  </>
);

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Encontre seu novo
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          {" "}melhor amigo
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Conectamos corações e transformamos vidas através da adoção responsável.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="#pets" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg">
          Ver Pets Disponíveis
        </Link>
        <Link href="#como-funciona" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200">
          Como Funciona
        </Link>
      </div>
    </div>
    <FloatingElements />
  </section>
);

const StatsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {STATS.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i}>
            <div className={`bg-gradient-to-r ${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon className={`h-8 w-8 ${stat.iconColor}`} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const PetCard = ({ pet }: { pet: Pet }) => {
  const cardColor = getPetCardColor(pet.raca);
  const statusBadge = getStatusBadge(pet.status);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden group">
      <div className={`h-48 bg-gradient-to-br ${cardColor} flex items-center justify-center group-hover:scale-105 transition-transform relative`}>
        <PawPrint className="h-16 w-16 text-white/80" />
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}>
          {statusBadge.text}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{pet.nome || 'Nome não informado'}</h3>
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <p><span className="font-medium">Raça:</span> {pet.raca}</p>
          <p><span className="font-medium">Idade:</span> {pet.idade}</p>
          <p><span className="font-medium">Porte:</span> {pet.porte}</p>
          <p><span className="font-medium">Sexo:</span> {pet.sexo}</p>
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
// Componente da barra de pesquisa e filtros
const SearchAndFilters = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  onSearch
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  onSearch: () => void;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
    <div className="flex flex-col md:flex-row gap-4 items-center">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Buscar pet por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
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

// Componente da seção de todos os pets
const AllPetsSection = () => {
  const [allPets, setAllPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [availablePets, setAvailablePets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [searchedPet, setSearchedPet] = useState<Pet | null>(null);

  // Carregar pets ao montar
  useEffect(() => {
    const loadPets = async () => {
      try {
        setLoading(true);
        setError(null);

        const [allPetsData, availablePetsData] = await Promise.all([
          fetchAllPets(),
          fetchAvailablePets()
        ]);

        setAllPets(allPetsData || []);
        setAvailablePets(availablePetsData || []);
        setFilteredPets(allPetsData || []);
      } catch (err) {
        setError('Erro ao carregar pets. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  // Função de busca e filtro
  const handleSearch = async () => {
    if (searchTerm.trim()) {
      const petData = await fetchPetByName(searchTerm.trim());
      if (petData) {
        setSearchedPet(petData);
        setFilteredPets([petData]);
      } else {
        const filtered = allPets.filter(pet =>
          pet.nome.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPets(filtered);
        setSearchedPet(null);
      }
    } else {
      let petsToFilter = allPets;

      if (statusFilter === 'disponivel') {
        petsToFilter = availablePets;
      } else if (statusFilter) {
        petsToFilter = allPets.filter(pet =>
          pet.status.toLowerCase() === statusFilter.toLowerCase()
        );
      }

      setFilteredPets(petsToFilter);
      setSearchedPet(null);
    }
  };

  // Aplicar filtros automaticamente
  useEffect(() => {
    if (!searchTerm && statusFilter) {
      handleSearch();
    } else if (!searchTerm && !statusFilter) {
      setFilteredPets(allPets);
      setSearchedPet(null);
    }
  }, [statusFilter, allPets, availablePets]);

  if (loading) {
    return (
      <section id="pets" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Pets</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Conheça todos os nossos amigos que estão esperando por uma nova família
          </p>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="pets" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Pets</h2>
          <p className="text-lg text-red-600 max-w-2xl mx-auto">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="pets" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Pets</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça todos os nossos amigos que estão esperando por uma nova família
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
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">⭐ Pets Disponíveis para Adoção</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availablePets.slice(0, 6).map((pet, index) => (
                <PetCard key={`available-${index}`} pet={pet} />
              ))}
            </div>
          </div>
        )}

        <div>
          {searchTerm && (
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              {filteredPets.length > 0
                ? `Resultados para "${searchTerm}" (${filteredPets.length} ${filteredPets.length === 1 ? 'pet encontrado' : 'pets encontrados'})`
                : `Nenhum pet encontrado para "${searchTerm}"`
              }
            </h3>
          )}

          {statusFilter && !searchTerm && (
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Pets com status: {statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} ({filteredPets.length})
            </h3>
          )}

          {filteredPets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPets.map((pet, index) => (
                <PetCard key={`filtered-${index}`} pet={pet} />
              ))}
            </div>
          ) : (
            !loading && (
              <div className="text-center py-12">
                <PawPrint className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 text-lg">
                  {searchTerm || statusFilter
                    ? 'Nenhum pet encontrado com os critérios de busca.'
                    : 'Nenhum pet disponível no momento.'
                  }
                </p>
                {(searchTerm || statusFilter) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setStatusFilter('');
                      setFilteredPets(allPets);
                    }}
                    className="mt-4 text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => (
  <section id="como-funciona" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona a Adoção</h2>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para Mudar uma Vida?</h2>
      <p className="text-xl text-purple-100 mb-8">
        Milhares de pets estão esperando por uma família. Seja parte dessa história de amor.
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <HeroSection />
        <StatsSection />
        <AllPetsSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
