import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, User, MessageSquare } from 'lucide-react';

export function PrayerRequestForm() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
          
          {/* Form Container */}
          <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-6 md:p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Share Your Prayer Request
            </motion.h2>
            
            <form className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-blue-200 mb-1.5 font-medium text-sm">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/50" />
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-purple-500/20 rounded-lg py-2.5 px-10 text-white placeholder-purple-300/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                  {/* Form Fields */}
                  <div className="relative">
                    <label className="block text-blue-200 mb-1.5 font-medium text-sm">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/50" />
                      <input
                        type="tel"
                        className="w-full bg-black/30 border border-purple-500/20 rounded-lg py-2.5 px-10 text-white placeholder-purple-300/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>

                  {/* Prayer Request Textarea - Full Width on Mobile */}
                  <div className="relative col-span-1 md:col-span-2">
                    <label className="block text-blue-200 mb-1.5 font-medium text-sm">
                      Prayer Request
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-purple-400/50" />
                      <textarea
                        rows={3}
                        className="w-full bg-black/30 border border-purple-500/20 rounded-lg py-2.5 px-10 text-white placeholder-purple-300/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="Share your prayer request with us..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-2.5 px-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-500 hover:to-blue-500"
              >
                <div className="relative flex items-center justify-center gap-2">
                  <span className="text-sm">Submit Prayer Request</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-blue-600 to-purple-600" style={{ transformOrigin: 'left' }} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 