import React from 'react';
import { motion } from 'framer-motion';
import { MiracleCard } from './MiracleCard';

const miracles = [
  {
    image: "https://images.unsplash.com/photo-1545608444-f045a6db6133?auto=format&fit=crop&q=80",
    title: "Divine Healing",
    verse: "He heals the brokenhearted and binds up their wounds. - Psalm 147:3",
    description: "Experience miraculous healing through the power of prayer"
  },
  {
    image: "https://images.unsplash.com/photo-1501003878151-d3cb87799705?auto=format&fit=crop&q=80",
    title: "Spiritual Restoration",
    verse: "I will restore you to health and heal your wounds. - Jeremiah 30:17",
    description: "Find renewal and restoration in His presence"
  },
  {
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80",
    title: "Miracle of Faith",
    verse: "With God all things are possible. - Matthew 19:26",
    description: "Witness the power of unwavering faith"
  }
];

export function MiracleStories() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-10 md:mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Divine Miracles
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {miracles.map((miracle, index) => (
            <MiracleCard key={index} {...miracle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}