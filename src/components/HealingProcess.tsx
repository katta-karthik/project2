import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Join our divine prayer circle through WhatsApp"
  },
  {
    number: "02",
    title: "Share",
    description: "Submit your prayer request with faith"
  },
  {
    number: "03",
    title: "Unite",
    description: "Experience the power of collective prayer"
  },
  {
    number: "04",
    title: "Receive",
    description: "Witness divine intervention and healing"
  }
];

export function HealingProcess() {
  return (
    <section className="py-32 bg-gradient-to-b from-purple-900/20 via-black to-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
        >
          Your Journey to Divine Healing
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Number positioned above card */}
              <div className="text-7xl font-bold text-purple-900/40 mb-4">
                {step.number}
              </div>
              
              {/* Card container */}
              <div className="relative rounded-xl bg-navy-900/30 p-6 backdrop-blur-sm border border-purple-500/10">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-blue-200/80">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-purple-500/40" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 