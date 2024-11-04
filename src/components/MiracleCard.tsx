import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface MiracleCardProps {
  image: string;
  title: string;
  verse: string;
  description: string;
  index: number;
  category?: string;
  date?: string;
}

export function MiracleCard({ 
  image, 
  title, 
  verse, 
  description, 
  index,
  category = "Divine Healing",
  date = "Recent Testimony"
}: MiracleCardProps) {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-2xl h-[300px] sm:h-[350px] md:h-[400px] group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/30 to-purple-950/90">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full z-[-1]"
        />
      </div>

      {/* Card Content */}
      <div className="absolute bottom-0 w-full p-4 sm:p-5 md:p-6 space-y-3 md:space-y-4">
        {/* Title with text shadow for better readability */}
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-pink-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
          {title}
        </h2>
        
        {/* Description with darker background overlay and shadow */}
        <p className="text-sm md:text-base text-pink-50 leading-relaxed font-medium drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          {description}
        </p>

        {/* Quote Section */}
        <div className="pt-2">
          <div className="flex items-start gap-2 bg-black/20 p-2 rounded-lg">
            <Quote className="w-4 h-4 text-pink-200 mt-1 hidden sm:block" />
            <p className="text-xs sm:text-sm text-pink-100 italic drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              {verse} <span className="text-pink-200">- {title}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}