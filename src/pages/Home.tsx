import React, { useEffect, useRef } from 'react';
import { motion, Variants, useInView, animate } from 'framer-motion';
import {
    ArrowRight,
  
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FeaturedProducts from '../components/FeaturedProducts';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutUsSection from '../components/AboutUsSection';

// Asset imports
import heroVideo from '../assets/about.webm';
import jeerakasalaImg from '../assets/jeerakasala.png';
import palakkadanImg from '../assets/palakkadan.png';
import sellabasmatiImg from '../assets/sellabasmati.png';

// --- Animated Counter Component ---
const AnimatedCounter = ({ to, suffix = '' }: { to: number; suffix?: string }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView && nodeRef.current) {
            const node = nodeRef.current;
            const controls = animate(0, to, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = value.toFixed(1).replace('.0', '') + suffix;
                }
            });
            return () => controls.stop();
        }
    }, [isInView, to, suffix]);

    return <span ref={nodeRef}>0</span>;
};

// --- Feature Card Component ---
interface FeatureCardProps {
  label: string;
  title: React.ReactNode;
  description: string;
  stat: number;
  statSuffix: string;
  statLabel: string;
  colors: {
    bg: string;
    text: string;
    arrowBg: string;
    arrowText: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ label, title, description, stat, statSuffix, statLabel, colors }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative p-8 h-[420px] flex flex-col justify-between rounded-3xl overflow-hidden ${colors.bg} ${colors.text}`}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-widest opacity-80">{label}</p>
        <h3 className="mt-6 text-3xl font-bold">{title}</h3>
        <p className="mt-2 text-base opacity-90 leading-relaxed">{description}</p>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest opacity-80">{statLabel}</p>
          <p className="text-5xl font-bold tracking-tighter">
            <AnimatedCounter to={stat} suffix={statSuffix} />
          </p>
        </div>
        <motion.div 
            className={`w-14 h-14 rounded-full flex items-center justify-center ${colors.arrowBg} ${colors.arrowText} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12`}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- New CTA Button Component ---
const CtaButton = ({ text }: { text: string }) => {
    return (
        <motion.button 
            className="group flex items-center justify-between w-full sm:w-auto lg:w-64 bg-black text-white rounded-full pl-6 pr-2 py-2 text-left font-semibold"
            whileHover="hover" initial="rest" animate="rest"
        >
            <span>{text}</span>
            <motion.div 
                className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <div className="w-4 h-4 rounded-full bg-white" />
            </motion.div>
        </motion.button>
    )
}

const Home = () => {
  const brandColors = { gold: '#cfb652', white: '#ffffff', black: '#1f1f1f' };
  
  const featuredProducts = [
    { 
        name: 'Noora 1121 Sella Basmati', 
        description: 'Renowned for its extra-long grains...', 
        images: [sellabasmatiImg, palakkadanImg, jeerakasalaImg],
        rating: 5, 
        features: ["Extra Long Grain", "Aged for Perfection", "Rich Aroma"] 
    },
    { 
        name: 'Noora Palakkadan Matta', 
        description: 'An indigenous variety of rice from Kerala...', 
        images: [palakkadanImg], 
        rating: 4,  
        features: ["Rich in Nutrients", "Authentic Kerala Origin", "Boosts Immunity"] 
    },
    { 
        name: 'Noora Jeerakasala Rice', 
        description: 'A tiny-grained, aromatic rice variant...', 
        images: [jeerakasalaImg], 
        rating: 5, 
        features: ["Highly Aromatic", "Quick Cooking", "Ideal for Biryani"] 
    },
  ];

  const chooseUsReasons = [
    { 
      label: "Assurance", title: <>Unwavering <br/>Quality</>, 
      description: "Our 5-step quality control ensures every grain meets the highest standards.", 
      stat: 99.8, statSuffix: "%", statLabel: "Purity Rate",
      colors: { bg: 'bg-[#44a284]', text: 'text-white', arrowBg: 'bg-white', arrowText: 'text-black' }
    },
    { 
      label: "Flexibility", title: <>Flexible <br/>Supply Chain</>, 
      description: "From retail bags to multi-container shipments, we handle any order size.", 
      stat: 500, statSuffix: "+", statLabel: "Containers Annually",
      colors: { bg: 'bg-black', text: 'text-white', arrowBg: 'bg-white', arrowText: 'text-black' }
    },
    { 
      label: "Certification", title: <>Global <br/>Standards</>, 
      description: "With ISO & HACCP, our products meet all export requirements.", 
      stat: 20, statSuffix: "+", statLabel: "Countries Served",
      colors: { bg: 'bg-[#a284c4]', text: 'text-white', arrowBg: 'bg-white', arrowText: 'text-black' }
    },
    { 
      label: "Logistics", title: <>Reliable <br/>Delivery</>, 
      description: "Strategically located in Dubai, our network ensures rapid delivery.", 
      stat: 24, statSuffix: "hr", statLabel: "Local Delivery",
      colors: { bg: `bg-[${brandColors.gold}]`, text: 'text-black', arrowBg: 'bg-black', arrowText: 'text-white' }
    }
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* --- UPDATED HERO SECTION --- */}
      <section className="relative h-screen overflow-hidden rounded-b-[4rem] shadow-2xl bg-black">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30 z-10" />
        <div className="relative h-full flex items-center justify-start z-20">
            <div className="container mx-auto px-6">
                <motion.div 
                  className="max-w-3xl" 
                  initial={{ opacity: 0, x: -50 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                >
                    <h1 className="text-5xl md:text-7xl  font-bold uppercase tracking-tight text-white">
                        <span style={{ color: brandColors.gold }}>Premium Grains,</span><br />
                        Global Standards
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-gray-200 leading-relaxed">
                        From Dubai, Ferrari Foods is your trusted B2B partner for the world's finest rice and food grains.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                        <motion.button 
                          className="px-7 py-3 text-base font-semibold tracking-wide text-black rounded-full shadow-lg flex items-center gap-2" 
                          style={{ backgroundColor: brandColors.gold }} 
                          whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }} 
                          whileTap={{ scale: 0.95 }} 
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            Get a Wholesale Quote <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button 
                          className="px-7 py-3 text-base font-semibold tracking-wide text-white rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm" 
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.75)' }} 
                          whileTap={{ scale: 0.95 }} 
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                            Explore Products
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      <FeaturedProducts products={featuredProducts} brandColors={brandColors} />
      {/* --- NEW ABOUT US SECTION ADDED HERE --- */}
      <AboutUsSection brandColors={brandColors} />
      
      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <motion.div className="text-center mb-16 max-w-3xl mx-auto" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} >
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-neutral-900">
                    Why <span style={{ color: brandColors.gold }}>Choose Ferrari Foods</span>
                </h2>
                <p className="text-lg text-neutral-600">
                    We're more than a supplier; we're a partner dedicated to your success, providing reliability and excellence in every grain.
                </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.2 }} >
                {chooseUsReasons.map((reason, index) => (
                    <FeatureCard
                        key={index}
                        label={reason.label}
                        title={reason.title}
                        description={reason.description}
                        stat={reason.stat}
                        statSuffix={reason.statSuffix}
                        statLabel={reason.statLabel}
                        colors={reason.colors}
                    />
                ))}
            </motion.div>
        </div>
      </section>

      <TestimonialsSection />

      {/* --- UPDATED CTA SECTION --- */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="relative mx-auto max-w-7xl rounded-3xl bg-orange-500 p-12 md:p-16 lg:p-20 overflow-hidden">
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] pointer-events-none">
                <div className="absolute inset-0 rounded-full bg-white/5" />
                <div className="absolute inset-[60px] rounded-full bg-white/5" />
                <div className="absolute inset-[120px] rounded-full bg-white/5" />
                <div className="absolute inset-[180px] rounded-full bg-white/5" />
                <div className="absolute inset-[240px] rounded-full bg-white/5" />
            </div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Let's Get In Touch.
                    </h2>
                    <p className="mt-4 text-lg text-white/80 max-w-md">
                        Looking for a reliable B2B supplier for premium grains? We're here to help you scale your business with quality products and dependable service.
                    </p>
                </motion.div>
                <motion.div className="flex flex-col sm:flex-row sm:justify-start lg:justify-end gap-4" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <CtaButton text="Request a Quote" />
                    <CtaButton text="Explore Products" />
                </motion.div>
            </div>
        </div>
      </section>

      <ContactSection brandColors={brandColors} />
    </div>
  );
};

export default Home;