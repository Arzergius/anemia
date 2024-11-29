import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Droplets } from 'lucide-react';

export const WhatIsAnemia = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-white py-20 relative overflow-hidden">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center justify-center mb-12">
          <Droplets className="w-12 h-12 text-red-500 mr-4" />
          <h2 className="text-4xl font-bold text-gray-800">¿Qué es la Anemia?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              La anemia es una condición en la que el cuerpo no tiene suficientes glóbulos rojos sanos para llevar oxígeno adecuado a los tejidos del cuerpo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Los glóbulos rojos contienen hemoglobina, una proteína rica en hierro que le da a la sangre su color rojo y permite que los glóbulos rojos transporten oxígeno de los pulmones al resto del cuerpo.
            </p>
          </div>
          
          <div className="relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80" 
              alt="Microscopio y análisis de sangre"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};