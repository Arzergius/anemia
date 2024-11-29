import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Apple, Egg, Fish, Carrot, Beef, Leaf } from 'lucide-react';

const foods = [
  { icon: Beef, name: 'Carnes rojas', description: 'Rica fuente de hierro hem' },
  { icon: Fish, name: 'Pescado', description: 'Omega-3 y hierro' },
  { icon: Egg, name: 'Huevos', description: 'Proteínas y hierro' },
  { icon: Apple, name: 'Frutas', description: 'Vitamina C para absorción' },
  { icon: Carrot, name: 'Vegetales', description: 'Minerales esenciales' },
  { icon: Leaf, name: 'Espinacas', description: 'Hierro y ácido fólico' },
];

export const Treatment = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-white py-20">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Tratamiento y Alimentación
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foods.map((food, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <food.icon className="w-12 h-12 text-red-500" />
                <h3 className="text-xl font-semibold text-gray-800">{food.name}</h3>
                <p className="text-gray-600">{food.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Consulta con tu médico para un plan de tratamiento personalizado que puede incluir suplementos de hierro y cambios en la dieta.
          </p>
        </div>
      </div>
    </div>
  );
};