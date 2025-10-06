import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- Type Definition for Timeline Data ---
export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  position?: { // Position is now optional as it's only for desktop
    top: string;
    left: string;
  };
};

// --- Data for Section ---
const timelineData: TimelineItem[] = [
    { 
        year: '2010', 
        title: 'Company Founded', 
        description: 'Began with our first commercial export, laying the foundation for a global vision.', 
        position: { top: '18%', left: '1%' }
    },
    { 
        year: '2015', 
        title: 'First Milling Facility', 
        description: 'Opened our own state-of-the-art milling facility to ensure end-to-end quality control.', 
        position: { top: '35%', left: '25%' }
    },
    { 
        year: '2020', 
        title: 'Capacity Milestone', 
        description: 'Reached a processing capacity of 500 metric tons per day, meeting growing international demand.', 
        position: { top: '39%', left: '55%' }
    },
    { 
        year: '2025', 
        title: 'New Ventures', 
        description: 'Launched private-label partnerships supported by a new automated packaging line.', 
        position: { top: '60%', left: '75%' }
    },
];

const TimelineSection = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    
                    {/* --- Left Content Block --- */}
                    <motion.div 
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Building a Legacy of Quality for Over <span className="text-green-500">15 Years</span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Since our inception, we have been driven by a commitment to excellence. Our journey is marked by key milestones that reflect our growth, innovation, and dedication to becoming a trusted global partner in the food industry.
                        </p>
                        <motion.button 
                            className="mt-8 group flex items-center justify-center px-6 py-3 font-semibold rounded-full transition-all duration-300 bg-green-500 text-white shadow-lg"
                            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Request an Appointment
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </motion.div>

                    {/* --- Right Column Container --- */}
                    <div className="lg:col-span-2 w-full">
                        {/* --- DESKTOP TIMELINE (Hidden on mobile) --- */}
                        <div className="hidden lg:block relative h-[500px] w-full">
                            <motion.svg 
                                className="absolute top-0 left-0 w-full h-full" 
                                viewBox="0 0 800 400" 
                                preserveAspectRatio="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                whileInView={{ pathLength: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            >
                                <path 
                                    d="M 20 100 C 150 20, 250 200, 400 150 C 550 100, 650 300, 780 250" 
                                    fill="none" 
                                    stroke="#e0e7ff" 
                                    strokeWidth="3"
                                />
                            </motion.svg>
                            
                            {timelineData.map((item, index) => item.position && (
                                <motion.div 
                                    key={item.year} 
                                    className="absolute"
                                    style={{ top: item.position.top, left: item.position.left }}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.4, ease: 'easeOut' }}
                                >
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-5 h-5 bg-indigo-500 rounded-full border-4 border-white shadow-md z-10"></div>
                                        <div className="w-px h-12 bg-gray-300 mt-[-2px]"></div>
                                        <div className="text-center w-48">
                                            <p className="font-bold text-lg text-indigo-700">{item.year}</p>
                                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* --- MOBILE TIMELINE (Hidden on desktop) --- */}
                        <div className="block lg:hidden">
                            <div className="relative border-l-2 border-green-200 ml-3">
                                {timelineData.map((item, index) => (
                                    <motion.div 
                                        key={item.year}
                                        className="mb-10 ml-8"
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                    >
                                        <div className="absolute -left-[11px] mt-1.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                                        <p className="font-bold text-xl text-green-600">{item.year}</p>
                                        <h3 className="text-lg font-semibold text-gray-800 mt-1">{item.title}</h3>
                                        <p className="text-base text-gray-600 mt-1">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;