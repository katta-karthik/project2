import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "10,000+",
    label: "Community Members",
  },
  {
    icon: Heart,
    number: "3,000+",
    label: "Prayers Answered",
  },
  {
    icon: MapPin,
    number: "3",
    label: "States Reached",
  },
];

export function PrayerStats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 mb-4 md:mb-6">
                <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 text-blue-400" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-sm sm:text-base text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 