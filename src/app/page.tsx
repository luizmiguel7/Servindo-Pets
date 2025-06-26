import Link from 'next/link';
// import { useState } from 'react';
import { 
  Heart, 
  PawPrint, 
  Users,
  Shield, 
  ArrowRight 
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

// Função para buscar pets da API
const fetchPets = async () => {
  try {
    const response = await fetch('/api/pets');
    if (!response.ok) {
      throw new Error('Erro ao buscar pets');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar pets:', error);
    return [];
  }
};

// Função para mapear cor baseada na raça/tipo
// const getPetCardColor = (raca) => {
//   const colors = [
//     'from-purple-400 to-pink-400',
//     'from-blue-400 to-purple-400',
//     'from-pink-400 to-red-400',
//     'from-green-400 to-blue-400',
//     'from-yellow-400 to-orange-400',
//     'from-indigo-400 to-purple-400'
//   ];
  
  // Usar hash simples da raça para escolher cor consistente
  // const hash = raca.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  // return colors[hash % colors.length];
// };

// Função para mapear status para badge
// const getStatusBadge = (status) => {
//   const statusMap = {
//     'disponivel': { text: 'Disponível', color: 'bg-green-100 text-green-800' },
//     'adotado': { text: 'Adotado', color: 'bg-gray-100 text-gray-800' },
//     'reservado': { text: 'Reservado', color: 'bg-yellow-100 text-yellow-800' }
//   };
  
  // return statusMap[status.toLowerCase()] || { text: status, color: 'bg-gray-100 text-gray-800' };
// };

// Componente para elementos flutuantes animados
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

// Componente da seção Hero
const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Encontre seu novo
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            {" "}melhor amigo
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Conectamos corações e transformamos vidas através da adoção responsável. 
          Cada pet merece uma família e cada família merece um amor incondicional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/pets"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ver Pets Disponíveis
          </Link>
          <Link 
            href="/como-adotar"
            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
          >
            Como Funciona
          </Link>
        </div>
      </div>
    </div>
    <FloatingElements />
  </section>
);

// Componente da seção de estatísticas
const StatsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="text-center">
              <div className={`bg-gradient-to-r ${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <IconComponent className={`h-8 w-8 ${stat.iconColor}`} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Componente do card do pet atualizado para API
// const PetCard = ({ pet }) => {
//   const cardColor = getPetCardColor(pet.raca);
//   const statusBadge = getStatusBadge(pet.status);
  
//   return (
//     <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
//       <div className={`h-48 bg-gradient-to-br ${cardColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative`}>
//         <PawPrint className="h-16 w-16 text-white/80" />
//         <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${statusBadge.color}`}>
//           {statusBadge.text}
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{pet.nome}</h3>
//         <div className="space-y-1 mb-4">
//           <p className="text-gray-600 text-sm">
//             <span className="font-medium">Raça:</span> {pet.raca}
//           </p>
//           <p className="text-gray-600 text-sm">
//             <span className="font-medium">Idade:</span> {pet.idade}
//           </p>
//           <p className="text-gray-600 text-sm">
//             <span className="font-medium">Porte:</span> {pet.porte}
//           </p>
//           <p className="text-gray-600 text-sm">
//             <span className="font-medium">Sexo:</span> {pet.sexo}
//           </p>
//           {pet.vacinado && (
//             <div className="flex items-center gap-1 text-green-600 text-sm">
//               <Shield className="h-3 w-3" />
//               <span>Vacinado</span>
//             </div>
//           )}
//         </div>
//         <button 
//           className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
//           disabled={pet.status.toLowerCase() !== 'disponivel'}
//         >
//           {pet.status.toLowerCase() === 'disponivel' ? `Conhecer ${pet.nome}` : 'Indisponível'}
//         </button>
//       </div>
//     </div>
//   );
// };

// Componente da seção de pets em destaque com API
const FeaturedPetsSection = () => {
  // const [pets, setPets] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const loadPets = async () => {
  //     try {
  //       setLoading(true);
  //       const fetchedPets = await fetchPets();
  //       // Mostrar apenas os primeiros 3 pets disponíveis
  //       const availablePets = fetchedPets
  //         // .filter(pet => pet.status.toLowerCase() === 'disponivel')
  //         .slice(0, 3);
  //       setPets(availablePets);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadPets();
  // }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pets em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos amigos que estão esperando por uma nova família
          </p>
        </div>
        
        
      </div>
    </section>
  );
};

const HowItWorksSection = () => (
  <section className="py-20 bg-white">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Componente da seção de Call-to-Action
const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Pronto para Mudar uma Vida?
      </h2>
      <p className="text-xl text-purple-100 mb-8">
        Milhares de pets estão esperando por uma família. Seja parte dessa história de amor.
      </p>
      <Link 
        href="/pets"
        className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Começar Agora
      </Link>
    </div>
  </section>
);

// Componente principal
export default function Home() {
  return (
    <>
      <Header />
      <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="min-h-screen bg-gray-50">
          <HeroSection />
          <StatsSection />
          <FeaturedPetsSection />
          <HowItWorksSection />
          <CTASection />
        </main>
      </div>
      <Footer />
    </>
  );
}