import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "Through our prayer circle, I witnessed a miracle in my life. My terminal illness vanished, and doctors couldn't explain it.",
    author: "Sarah Mitchell",
    title: "Miracle Recipient"
  },
  {
    quote: "The power of collective prayer in this group brought healing to my marriage and restored my faith in divine intervention.",
    author: "John Davidson",
    title: "Grateful Soul"
  },
  {
    quote: "When doctors gave up hope, this prayer community stood with me. Today, I'm completely healed through faith.",
    author: "Maria Rodriguez",
    title: "Walking Miracle"
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-12 sm:py-16 md:py-32 bg-gradient-to-b from-purple-900 to-black relative">
      <div className="absolute inset-0 bg-[url('/testimonial-pattern.png')] opacity-10" />
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Miraculous Testimonies
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl border border-purple-500/20"
            >
              <div className="flex items-start mb-4 sm:mb-6">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 mr-2" />
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
              </div>
              <p className="text-blue-100 italic mb-6 text-base sm:text-lg leading-relaxed">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">{testimonial.author}</p>
                <p className="text-blue-300 text-xs sm:text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}