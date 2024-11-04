import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Sun } from 'lucide-react';

const categories = [
  {
    icon: Heart,
    title: "Healing Prayer",
    description: "Experience divine healing through the power of collective prayer"
  },
  {
    icon: Sparkles,
    title: "Miracle Prayer",
    description: "Witness miracles through unwavering faith and divine intervention"
  },
  {
    icon: Sun,
    title: "Deliverance Prayer",
    description: "Find freedom and restoration through spiritual warfare"
  }
];

export function PrayerCategories() {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Prayer Categories
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="relative group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-shadow duration-300"
                >
                  <category.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                
                <h3 
                  className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 transform group-hover:translate-x-1 transition-transform duration-300"
                >
                  {category.title}
                </h3>
                
                <p 
                  className="text-sm sm:text-base text-blue-200 transform group-hover:translate-x-1 transition-all duration-300 delay-75"
                >
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 