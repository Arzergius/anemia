import React from 'react';
import { Activity } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)',
          transform: 'scale(1.1)',
        }}
      />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Activity className="w-16 h-16 text-red-500 mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold">Control de la Anemia</h1>
        </div>
        <p className="text-xl md:text-2xl mt-6 text-gray-200">
          La anemia afecta a millones en el mundo. Aprende a prevenirla y tratarla.
        </p>
        <a 
  href="https://www.gob.pe/21573-que-es-la-anemia" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="mt-8 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300">
    Descubre Más
  </button>
</a>
<p className="text-xl md:text-2xl mt-6 text-gray-200">
          ⬇⬇ Desliza abajo para saber más en esta página ⬇
  ⬇
        </p>
      </div>
    </div>
  );
};