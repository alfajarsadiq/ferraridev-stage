import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import {
  Target, Eye, Heart, Users, HardHat, Droplets, Wheat,
  Package, FlaskConical, Globe, Linkedin, ChevronDown,
} from 'lucide-react';
import TimelineSection from '../components/TimelineSection';
import CertificationsSection from '../components/CertificationsSection'; // IMPORT THE NEW COMPONENT

// --- IMPORT ASSETS ---
import heroVideo from '../assets/aboutp.webm';
import factoryImage from '../assets/export.webp';
import aboutImage from '../assets/contact.webp';
import sortingImage from '../assets/farmer.webp';
import packagingImage from '../assets/quality.webp';
import qaImage from '../assets/package.webp';
import farmerImage from '../assets/portrait.webp';
import dripImage from '../assets/drip.webp';
import wheatHoldImage from '../assets/wheathold.webp';

// Placeholder images for team members
const team_ceo_jpg = 'https://placehold.co/400x400/222/FFF?text=AF';
const team_coo_jpg = 'https://placehold.co/400x400/222/FFF?text=LR';
const team_qa_jpg = 'https://placehold.co/400x400/222/FFF?text=SK';

// --- Animation Variants ---
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const panelContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const panelItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
};

// --- Data for Sections ---
const facilitiesData = [
  {
    id: 'sorting',
    image: sortingImage,
    icon: Wheat,
    title: 'Trusted Sourcing',
    description: 'We partner directly with reliable farmers and suppliers to source only the finest grains, ensuring farm-fresh quality right from the origin.',
    stat: '100%',
    statLabel: 'Verified Suppliers',
  },
  {
    id: 'packaging',
    image: packagingImage,
    icon: FlaskConical,
    title: 'Quality Control & Processing',
    description: 'Every grain undergoes strict quality checks and advanced processing to meet our premium standards—delivering purity, consistency, and excellence.',
    stat: '99.9%',
    statLabel: 'Purity Rate',
  },
  {
    id: 'qa',
    image: qaImage,
    icon: Package,
    title: 'Premium Packaging',
    description: 'Our grains are packed with care in hygienic, durable, and branded packaging that locks in freshness and builds lasting customer trust.',
    stat: '25+',
    statLabel: 'Freshness Sealed Guarantee',
  },
  {
    id: 'milling',
    image: factoryImage,
    icon: Globe,
    title: 'Global Export',
    description: 'With a strong logistics network and international partnerships, we export premium grains worldwide on time, every time.',
    stat: '7+',
    statLabel: 'Countries Served',
  },
];

const leadershipData = [
    {
      id: 'ceo',
      image: team_ceo_jpg,
      name: 'XXXXXXX',
      title: 'Founder & CEO',
      bio: '20+ years in agri-commodity trading and international supply chain management. Drives global expansion and partner-first sourcing model.',
      linkedin: '#',
    },
    {
      id: 'coo',
      image: team_coo_jpg,
      name: 'XXXXXXXX',
      title: 'Chief Operating Officer',
      bio: 'Expert in process engineering and large-scale milling operations. Oversees facilities, capacity planning and continuous improvement initiatives.',
      linkedin: '#',
    },
    {
      id: 'qa_head',
      image: team_qa_jpg,
      name: 'XXXXXXX',
      title: 'Head of Quality & Compliance',
      bio: 'PhD in Food Science with 15 years in QA. Leads our laboratory testing program and certification strategy.',
      linkedin: '#',
    },
];


const About = () => {
  const [activePanel, setActivePanel] = useState(facilitiesData[1].id);

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="h-screen w-full p-4">
        <section className="relative h-full w-full flex items-center justify-center text-white overflow-hidden rounded-3xl">
          <video src={heroVideo} autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <motion.div
            className="relative z-20 text-center p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-trusted font-bold mb-4 text-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About Our Company
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              A globally recognized food enterprise built on quality, sustainability, and international partnerships that strengthen food security worldwide.
            </motion.p>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
              <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
          </motion.div>
        </section>
      </div>

      {/* Company Story */}
      <motion.section
        className="py-20 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">Our company began with a simple dream and limited resources, but with determination and hard work, we grew from a small regional supplier into a global food enterprise. Our journey was filled with challenges tough markets, supply chain struggles, and the fight to earn trust but we never compromised on our values of quality, consistency, and integrity.</p>
              <p className="text-lg text-gray-600">Step by step, we built farmer partnerships, modern facilities, and a strong supply chain. Today, we don’t just trade food; we deliver trust and excellence in every grain, serving businesses and communities across the world. Our integrated operations span the entire supply chain from crop cultivation and modern processing facilities to private labeling and large-scale import/export networks.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-lg overflow-hidden shadow-2xl">
              <img src={aboutImage} alt="Modern food processing facility" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Built on strong principles that guide every decision we make.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="bg-gray-50 rounded-lg p-8 shadow-lg text-center border-t-4 border-gray-800" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
              <Target className="h-12 w-12 text-gray-800 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">To deliver premium quality rice and wheat that meet the highest international standards while fostering sustainable agriculture and strengthening global food security.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-lg p-8 shadow-lg text-center border-t-4 border-gray-800" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
              <Eye className="h-12 w-12 text-gray-800 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">To be the world's most trusted and innovative food enterprise, leading the industry in quality, sustainability, and global market reach.</p>
            </motion.div>
            <motion.div className="bg-gray-50 rounded-lg p-8 shadow-lg text-center border-t-4 border-gray-800" variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}>
              <Heart className="h-12 w-12 text-gray-800 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600">Quality excellence, sustainability, transparency, innovation, a customer-first approach, and lasting partnerships built on trust.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Facilities Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our State-of-the-Art Facilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Where precision, technology, and scale converge. Explore our operations.
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="hidden lg:flex w-full h-[70vh] gap-4">
            {facilitiesData.map((facility) => (
              <motion.div
                key={facility.id}
                onHoverStart={() => setActivePanel(facility.id)}
                className="relative h-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${facility.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ width: activePanel === facility.id ? '40%' : '20%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-2xl p-6 flex flex-col justify-end">
                  <AnimatePresence>
                    {activePanel === facility.id && (
                      <motion.div
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="text-white w-full"
                      >
                        <motion.div variants={panelItemVariants}><facility.icon className="w-12 h-12 mb-4 text-white" /></motion.div>
                        <motion.h3 variants={panelItemVariants} className="text-3xl font-bold mb-2">{facility.title}</motion.h3>
                        <motion.p variants={panelItemVariants} className="text-gray-200 mb-6 leading-relaxed max-w-md">{facility.description}</motion.p>
                        <motion.div variants={panelItemVariants} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-white/50 self-start">
                          <p className="text-4xl font-bold text-white">{facility.stat}</p>
                          <p className="text-sm uppercase tracking-widest">{facility.statLabel}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {activePanel !== facility.id && (
                       <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition:{delay: 0.5}}} exit={{opacity: 0}} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <facility.icon className="w-10 h-10 text-white/80" />
                       </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="lg:hidden flex flex-col w-full gap-4">
            {facilitiesData.map((facility) => (
              <motion.div
                key={facility.id}
                layout
                onClick={() => setActivePanel(facility.id)}
                className="w-full rounded-2xl shadow-lg cursor-pointer overflow-hidden"
                style={{ backgroundImage: `url(${facility.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                animate={{ height: activePanel === facility.id ? '28rem' : '6rem' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-full bg-gradient-to-t from-black/80 to-transparent rounded-2xl p-6 flex flex-col justify-end">
                  {activePanel !== facility.id && (
                    <div className="flex items-center gap-4">
                       <facility.icon className="w-8 h-8 text-white/90" />
                       <h3 className="text-xl font-bold text-white">{facility.title}</h3>
                    </div>
                  )}
                  <AnimatePresence>
                    {activePanel === facility.id && (
                       <motion.div
                        variants={panelContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="text-white w-full"
                      >
                        <motion.div variants={panelItemVariants}><facility.icon className="w-10 h-10 mb-3 text-white" /></motion.div>
                        <motion.h3 variants={panelItemVariants} className="text-2xl font-bold mb-2">{facility.title}</motion.h3>
                        <motion.p variants={panelItemVariants} className="text-sm text-gray-200 mb-4 leading-relaxed">{facility.description}</motion.p>
                        <motion.div variants={panelItemVariants} className="bg-white/20 backdrop-blur-sm p-3 rounded-lg border border-white/50 self-start">
                          <p className="text-2xl font-bold text-white">{facility.stat}</p>
                          <p className="text-xs uppercase tracking-widest">{facility.statLabel}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <motion.section className="py-20 bg-white" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commitment to Sustainability</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nurturing the land and empowering communities for a better tomorrow.</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
             <motion.div variants={itemVariants} className="text-center">
               <img src={farmerImage} alt="Farmer Portrait" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-xl border-4 border-white"/>
               <HardHat className="h-10 w-10 text-gray-800 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Farmer Partnerships</h3>
               <p className="text-gray-600">We work directly with local growers, providing training and resources to ensure ethical sourcing and shared prosperity.</p>
             </motion.div>
             <motion.div variants={itemVariants} className="text-center">
               <img src={dripImage} alt="Drip Irrigation" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-xl border-4 border-white"/>
               <Droplets className="h-10 w-10 text-gray-800 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Water Efficiency</h3>
               <p className="text-gray-600">Implementing modern irrigation techniques to conserve precious water resources and maximize crop yield responsibly.</p>
             </motion.div>
             <motion.div variants={itemVariants} className="text-center">
               <img src={wheatHoldImage} alt="Hands holding wheat" className="rounded-full w-48 h-48 mx-auto object-cover mb-6 shadow-xl border-4 border-white"/>
               <Wheat className="h-10 w-10 text-gray-800 mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-gray-800 mb-2">Ethical Sourcing</h3>
               <p className="text-gray-600">Our commitment to quality starts at the source, ensuring every grain is cultivated with care for the environment and community.</p>
             </motion.div>
          </div>
        </div>
      </motion.section>

      <CertificationsSection />

      {/* Meet the Team */}
      <motion.section
        className="py-20 bg-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Meet the Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experienced professionals steering operations, quality and global partnerships.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {leadershipData.map((leader) => (
                    <motion.div
                        key={leader.id}
                        className="bg-gray-50 rounded-lg p-6 text-center shadow-lg group focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-800"
                        variants={itemVariants}
                        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={leader.image}
                            alt={`${leader.name}, ${leader.title}`}
                            className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-md"
                        />
                        <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-sm font-semibold text-gray-700 mb-3">{leader.title}</p>

                        <p className="text-gray-600 text-sm mb-4">{leader.bio}</p>
                        <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-gray-400 hover:text-gray-800 transition-colors duration-300"
                            aria-label={`LinkedIn profile for ${leader.name}`}
                        >
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </motion.div>
                ))}
            </div>
            <motion.div className="text-center mt-16" variants={itemVariants}>
            </motion.div>
        </div>
      </motion.section>

      {/* --- NEWLY IMPORTED TIMELINE COMPONENT --- */}
      <TimelineSection />

      {/* Final CTA Section */}
      <section className="bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
            <Users className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300">Our experienced team and strategic partnerships enable us to serve clients with unmatched reliability across 7+ countries, making us a trusted name in the international food supply chain.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;