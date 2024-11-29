import React from 'react';
import { useInView } from 'react-intersection-observer';
import { PieChart, Users, Globe } from 'lucide-react';

const stats = [
  {
    icon: Globe,
    number: '1.62B',
    description: 'Personas afectadas globalmente',
  },
  {
    icon: Users,
    number: '40%',
    description: 'De embarazadas son anémicas',
  },
  {
    icon: PieChart,
    number: '50%',
    description: 'Casos por deficiencia de hierro',
  },
];

export const Statistics = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Estadísticas Globales
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                <stat.icon className="w-16 h-16 text-red-500" />
              </div>
              <div className="text-5xl font-bold mb-4">{stat.number}</div>
              <p className="text-xl text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};