import React from 'react';
import { Church } from 'lucide-react';
import { motion } from 'framer-motion';
import { ParticleBackground } from './ParticleBackground';

interface HeroProps {
  whatsappLink: string;
}

export function Hero({ whatsappLink }: HeroProps) {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-black/70 to-black" />
        <img
          src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&q=80"
          alt="Jesus"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow-2xl">
            Divine Healing
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-200 mb-8 md:mb-12 drop-shadow-lg">
            Experience the miraculous power of collective prayer
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={whatsappLink}
              className="group relative inline-flex items-center px-6 sm:px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-pink-600 group-hover:to-purple-600" />
              <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform scale-[1.03] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:-translate-x-96" />
              <span className="relative text-white flex items-center">
                <Church className="mr-3 h-6 w-6" />
                Join Our Prayer Circle
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}