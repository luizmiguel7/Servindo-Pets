"use client";
import { Heart, Shield, Users } from "lucide-react";

const STATS = [
  {
    icon: Heart,
    number: "1,200+",
    label: "Pets Adotados",
    bgColor: "from-purple-100 to-pink-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Users,
    number: "800+",
    label: "Famílias Felizes",
    bgColor: "from-blue-100 to-purple-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    number: "95%",
    label: "Taxa de Sucesso",
    bgColor: "from-pink-100 to-purple-100",
    iconColor: "text-pink-600",
  },
];

export const StatsSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      {STATS.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i}>
            <div
              className={`bg-gradient-to-r ${stat.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <Icon className={`h-8 w-8 ${stat.iconColor}`} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        );
      })}
    </div>
  </section>
);
