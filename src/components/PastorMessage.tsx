import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PastorMessageProps {
  whatsappLink: string;
}

export function PastorMessage({ whatsappLink }: PastorMessageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="absolute inset-0 bg-[url('/divine-pattern.png')] opacity-10" />
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-6 p-4 md:p-6">
          {/* Pastor Image Container with Name */}
          <div className="relative w-full md:w-1/2 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-2xl overflow-hidden bg-purple-800 max-w-md mx-auto"
            >
              <img
                src="/narendra-anna.png"
                alt="Pastor Narendra Kumar"
                className="w-full h-full object-cover object-center rounded-2xl transition-transform hover:scale-105 duration-300"
                style={{ minHeight: '320px' }}
              />
            </motion.div>
            
            {/* Pastor's Name with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-2"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Bro. Narendra Kumar
              </h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-300 text-lg italic"
              >
                Founder & Senior Pastor
              </motion.p>
            </motion.div>
          </div>

          {/* Message Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#66B9FF]">
              A Divine Message of Hope
            </h2>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              "In the depths of your struggles, remember that Christ's healing power flows
              through our united prayers. Join our blessed community where miracles happen
              daily through faith and divine intervention. Together, we'll witness God's
              transformative power in your life."
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={whatsappLink}
                className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-300"
              >
                Join Our Divine Community →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
