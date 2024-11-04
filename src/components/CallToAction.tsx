import React from 'react';
import { Church } from 'lucide-react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  whatsappLink: string;
}

export function CallToAction({ whatsappLink }: CallToActionProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-32 bg-gradient-to-b from-black to-purple-900">
      <div className="absolute inset-0 bg-[url('/cta-pattern.png')] opacity-10" />
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Join Our Divine Prayer Circle Today
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 mb-6 sm:mb-8 md:mb-12">
            Experience the miraculous power of united prayer and witness God's healing grace
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={whatsappLink}
              className="inline-flex items-center px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transform transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Church className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
              Begin Your Miracle Journey
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}