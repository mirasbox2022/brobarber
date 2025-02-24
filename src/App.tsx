import React from 'react';
import { Phone, Clock, Scissors, MapPin, MapIcon as WhatsappIcon } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold hover:text-green-500 transition-colors duration-300">BROBARBER</h1>
          <a
            href="https://wa.me/+77784785630"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            <WhatsappIcon size={20} className="animate-bounce" />
            <span>Записаться</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 animate-fadeIn"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-slideDown">BROBARBER</h2>
          <p className="text-xl md:text-2xl mb-8 animate-slideUp">Мужские стрижки в Алматы</p>
          <a
            href="#services"
            className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 animate-fadeIn"
          >
            Наши услуги
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-slideDown">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animate-slideUp">
              <h3 className="text-xl font-semibold mb-4">Мужская стрижка</h3>
              <p className="mb-4">От 8000₸</p>
              <p className="text-gray-400">Профессиональная стрижка любой сложности</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animate-slideUp delay-100">
              <h3 className="text-xl font-semibold mb-4">Стрижка бороды</h3>
              <p className="mb-4">От 5000₸</p>
              <p className="text-gray-400">Моделирование и уход за бородой</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 animate-slideUp delay-200">
              <h3 className="text-xl font-semibold mb-4">Комплекс</h3>
              <p className="mb-4">От 12000₸</p>
              <p className="text-gray-400">Стрижка + борода</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 transform hover:scale-105 transition-all duration-300 animate-slideUp">
              <Clock className="w-8 h-8 text-white animate-pulse" />
              <div>
                <h3 className="font-semibold">Режим работы</h3>
                <p className="text-gray-400">10:00 - 22:00</p>
              </div>
            </div>
            <div className="flex items-center gap-4 transform hover:scale-105 transition-all duration-300 animate-slideUp delay-100">
              <Phone className="w-8 h-8 text-white animate-pulse" />
              <div>
                <h3 className="font-semibold">Телефон</h3>
                <p className="text-gray-400">+7 (778) 478-56-30</p>
              </div>
            </div>
            <div className="flex items-center gap-4 transform hover:scale-105 transition-all duration-300 animate-slideUp delay-200">
              <MapPin className="w-8 h-8 text-white animate-pulse" />
              <div>
                <h3 className="font-semibold">Адрес</h3>
                <p className="text-gray-400">Алматы, ул. Абая, 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center animate-fadeIn">
          <p className="text-gray-400">© 2025 BROBARBER. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App
