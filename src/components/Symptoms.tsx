import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AlertCircle, Brain, Heart, Wind, Coffee, Moon } from 'lucide-react';

const symptoms = [
  { icon: Brain, text: 'Dificultad para concentrarse', color: 'bg-red-100' },
  { icon: Heart, text: 'Fatiga y debilidad', color: 'bg-orange-100' },
  { icon: Wind, text: 'Dificultad para respirar', color: 'bg-yellow-100' },
  { icon: Coffee, text: 'Falta de energía', color: 'bg-green-100' },
  { icon: Moon, text: 'Problemas para dormir', color: 'bg-blue-100' },
  { icon: AlertCircle, text: 'Mareos frecuentes', color: 'bg-purple-100' },
];

export const Symptoms = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto px-4 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Síntomas Comunes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className={`${symptom.color} rounded-xl p-6 transform transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-4">
                <symptom.icon className="w-8 h-8 text-gray-700" />
                <p className="text-lg font-medium text-gray-800">{symptom.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};