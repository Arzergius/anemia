import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Contacto y Recursos
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Ponte en contacto</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-500" />
                <span>Mercedes@school.org</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-red-500" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-red-500" />
                <span>123 Villa del Mar, Mercedes Cabello de C.</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Recursos útiles</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-red-500 hover:underline">
                    Guía de alimentación saludable
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-500 hover:underline">
                    Organizaciones de apoyo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-500 hover:underline">
                    Últimas investigaciones
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};