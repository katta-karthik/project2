import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function ScriptureQuote() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-8"
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Large Quotation Marks */}
            <span className="absolute -top-8 -left-4 text-8xl text-purple-500/20 font-serif">"</span>
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-200 to-purple-300 leading-relaxed mb-8 px-8">
              Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.
            </p>
            <span className="absolute -bottom-16 -right-4 text-8xl text-purple-500/20 font-serif rotate-180">"</span>
          </motion.blockquote>

          {/* Reference */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <cite className="inline-flex items-center gap-2 text-xl text-blue-300/80">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              Matthew 7:7
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 