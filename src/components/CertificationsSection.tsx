import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, Variants, useInView } from 'framer-motion';
import { ShieldCheck, Award, Sprout, Leaf, ChevronDown } from 'lucide-react';

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

// --- Data for Section ---
const certificationsData = [
    {
      id: 'trade',
      icon: ShieldCheck,
      name: 'Trade Licence',
      title: 'Official Business Registration',
      subtitle: 'Fully licensed and authorized to operate within the UAE.',
      details: 'Our trade license, issued by the relevant economic department, certifies that our company is legally registered and compliant with all local business laws and regulations. This ensures we operate with the highest standards of accountability and transparency.'
    },
    {
      id: 'import',
      icon: Award,
      name: 'Food Import Licence',
      title: 'Authorized Food Importer',
      subtitle: 'Compliant with all national standards for food importation.',
      details: 'This license validates that we meet all the stringent requirements set by UAE authorities for importing food products. It covers everything from sourcing verification to handling and storage, guaranteeing that all imported goods are safe, traceable, and of high quality.'
    },
    {
      id: 'halal',
      icon: Sprout,
      name: 'Halal Certificate',
      title: 'Adherence to Islamic Principles',
      subtitle: 'We respect and cater to diverse global markets by ensuring our products meet stringent Halal requirements.',
      details: 'Our Halal certification guarantees that relevant products are prepared, processed, and handled in strict accordance with Islamic law. This includes verification of sourcing, production lines, and storage, ensuring full compliance for consumption by Muslim communities worldwide.'
    },
    {
      id: 'dm',
      icon: Leaf,
      name: 'Dubai Municipality',
      title: 'Dubai Municipality Approved',
      subtitle: 'Meeting the rigorous health and safety standards of Dubai.',
      details: 'Our operations and products are regularly inspected and approved by the Dubai Municipality, ensuring we comply with all local health, safety, and hygiene regulations. This approval is a testament to our commitment to excellence and consumer safety within the emirate.'
    },
];

type Certification = typeof certificationsData[0];

// --- DESKTOP VIEW COMPONENT ---
const CertificationPanelDesktop = ({ certification, setActiveId }: { certification: Certification, setActiveId: (id: string) => void }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveId(certification.id);
        }
    }, [isInView, setActiveId, certification.id]);

    return (
        <div ref={ref} className="min-h-screen flex items-center justify-center">
            <motion.div
                className="max-w-xl p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={itemVariants}
            >
                <certification.icon className="h-16 w-16 text-gray-800 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{certification.title}</h3>
                <p className="text-xl text-gray-700 font-semibold mb-4">{certification.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{certification.details}</p>
            </motion.div>
        </div>
    );
};

// --- MOBILE VIEW COMPONENT (Accordion Style) ---
const CertificationAccordionMobile: React.FC<{ certification: Certification; expanded: boolean; onToggle: () => void }> = ({ certification, expanded, onToggle }) => {
    return (
        <motion.div variants={itemVariants} className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center text-left p-6 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
                <div className="flex items-center gap-4">
                    <certification.icon className="h-8 w-8 text-gray-700" />
                    <span className="text-xl font-bold text-gray-800">{certification.name}</span>
                </div>
                <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="h-6 w-6 text-gray-600" />
                </motion.div>
            </button>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-white">
                             <h3 className="text-2xl font-bold text-gray-900 mb-3">{certification.title}</h3>
                             <p className="text-lg text-gray-700 font-semibold mb-4">{certification.subtitle}</p>
                             <p className="text-gray-600 leading-relaxed">{certification.details}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


const CertificationsSection = () => {
    // State for desktop view
    const [activeId, setActiveId] = useState(certificationsData[0].id);
    // State for mobile view accordion
    const [expandedId, setExpandedId] = useState<string | null>(certificationsData[0].id);

    const handleToggle = (id: string) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <motion.section
            className="py-20 bg-gray-50"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Licences & Certifications</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tangible proof of our unwavering commitment to regulatory compliance and quality assurance.</p>
                </motion.div>

                {/* --- DESKTOP VIEW --- */}
                <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="lg:sticky top-0 lg:h-screen flex items-center justify-center">
                        <ul className="space-y-8">
                            {certificationsData.map((cert) => (
                                <li key={cert.id} className="flex items-center gap-4">
                                    <motion.div
                                        animate={{
                                            scale: activeId === cert.id ? 1.1 : 1,
                                            opacity: activeId === cert.id ? 1 : 0.7
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                      <cert.icon className={`h-10 w-10 transition-colors ${activeId === cert.id ? 'text-gray-800' : 'text-gray-400'}`} />
                                    </motion.div>
                                    <motion.span
                                        className="text-2xl font-bold transition-colors"
                                        animate={{ opacity: activeId === cert.id ? 1 : 0.5 }}
                                    >
                                        {cert.name}
                                    </motion.span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {certificationsData.map((cert) => (
                            <CertificationPanelDesktop key={cert.id} certification={cert} setActiveId={setActiveId} />
                        ))}
                    </div>
                </div>
                
                {/* --- MOBILE VIEW --- */}
                <div className="lg:hidden">
                     <motion.div
                        className="rounded-lg overflow-hidden shadow-lg border border-gray-200"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                     >
                        {certificationsData.map((cert) => (
                            <CertificationAccordionMobile 
                                key={cert.id}
                                certification={cert}
                                expanded={expandedId === cert.id}
                                onToggle={() => handleToggle(cert.id)}
                            />
                        ))}
                     </motion.div>
                </div>
            </div>
        </motion.section>
    );
}

export default CertificationsSection;