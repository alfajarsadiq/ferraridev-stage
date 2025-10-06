import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Placeholder images for team members ---
const teamMember1 = 'https://i.pravatar.cc/150?img=1';
const teamMember2 = 'https://i.pravatar.cc/150?img=2';
const teamMember3 = 'https://i.pravatar.cc/150?img=3';
const teamMember4 = 'https://i.pravatar.cc/150?img=4';


const AboutUsSection = ({ brandColors }: { brandColors: { gold: string } }) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* --- Left Column: Team Info --- */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">( ABOUT US )</p>
              
              <div className="flex justify-center lg:justify-start -space-x-4 mb-6">
                <img className="w-16 h-16 rounded-full border-4 border-gray-50 object-cover" src={teamMember1} alt="Team Member 1" />
                <img className="w-16 h-16 rounded-full border-4 border-gray-50 object-cover" src={teamMember2} alt="Team Member 2" />
                <img className="w-16 h-16 rounded-full border-4 border-gray-50 object-cover" src={teamMember3} alt="Team Member 3" />
                <img className="w-16 h-16 rounded-full border-4 border-gray-50 object-cover" src={teamMember4} alt="Team Member 4" />
              </div>
              
              <h3 className="text-2xl font-bold text-neutral-900">
                25+ Team Members
              </h3>
              <p className="text-gray-600">
                Are ready to assist you
              </p>
            </motion.div>

            {/* --- Right Column: Content --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                We are a dedicated team of food grain experts passionate about{' '}
                <span className="text-gray-400">
                  global trade
                </span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                With a shared commitment to excellence, we help businesses source the finest grains through smart, reliable, and affordable solutions designed for lasting impact and partnership.
              </p>
              <motion.button 
                className="mt-8 group flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 bg-black text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;