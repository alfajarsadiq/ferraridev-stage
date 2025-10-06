import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, LucideProps } from 'lucide-react';

// --- Type definition for props ---
interface ContactSectionProps {
  brandColors: {
    gold: string;
  };
}

// --- Reusable Floating Label Input Component ---
const FloatingLabelInput = ({ id, name, type, value, onChange, placeholder }: {
    id: string, name: string, type: string, value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
}) => (
    <div className="relative group">
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="peer w-full px-6 py-4 pt-7 font-light bg-black bg-opacity-40 border-2 border-neutral-700 rounded-full outline-none transition-all duration-300
                       focus:border-yellow-500 text-white placeholder-transparent"
            placeholder={placeholder}
            required
        />
        <label
            htmlFor={id}
            className="absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-6
                       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                       peer-focus:scale-75 peer-focus:-translate-y-4 text-neutral-400
                       group-focus-within:text-yellow-500"
        >
            {placeholder}
        </label>
    </div>
);

// --- Reusable Contact Info Item ---
const ContactInfoItem = ({ icon: Icon, text, href }: {
    icon: React.FC<LucideProps>, text: string, href: string
}) => {
    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };

    return (
        <motion.a
            href={href}
            variants={itemVariants}
            className="flex items-center gap-4 group"
        >
            <motion.div
                className="relative w-12 h-12 flex-shrink-0 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-700"
                whileHover={{ scale: 1.1, boxShadow: `0 0 20px rgba(207, 182, 82, 0.4)` }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <Icon className="w-6 h-6 text-yellow-500" />
            </motion.div>
            <span className="text-neutral-300 transition-colors duration-300 group-hover:text-white">{text}</span>
        </motion.a>
    );
};


const ContactSection: React.FC<ContactSectionProps> = ({ brandColors }) => {
    const [contactForm, setContactForm] = useState({ name: '', email: '', quantity: '' });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactForm({ ...contactForm, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Inquiry Submitted:", contactForm);
        alert("Thank you for your inquiry!");
        setContactForm({ name: '', email: '', quantity: '' });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 }}
    };
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' }}
    };

    return (
        <section className="bg-black text-white py-20 overflow-hidden">
            <motion.div
                className="container mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-neutral-900/50 rounded-3xl p-8 lg:p-12 border border-neutral-800 shadow-2xl">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10 opacity-0 animate-[shimmer_4s_infinite]" />

                    <motion.div variants={itemVariants} className="z-10">
                        <h2 className="text-4xl font-bold text-white">
                            Connect With Our <span style={{ color: brandColors.gold }}>Experts</span>
                        </h2>
                        <p className="mt-4 text-gray-400">
                            We're ready to assist with your inquiries, from custom orders to logistics. Reach out and let's build a partnership.
                        </p>
                        <motion.div
                            className="mt-8 space-y-6"
                            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            <ContactInfoItem icon={Mail} text="info@ferrarifoods.com" href="mailto:info@ferrarifoods.com" />
                            <ContactInfoItem icon={Phone} text="+971 58 563 9040" href="tel:+971585639040" />
                            <ContactInfoItem icon={MapPin} text="Ferrari Foods LLC, Dubai, UAE" href="#map" />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="z-10">
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <FloatingLabelInput id="name" name="name" type="text" value={contactForm.name} onChange={handleFormChange} placeholder="Your Name" />
                            <FloatingLabelInput id="email" name="email" type="email" value={contactForm.email} onChange={handleFormChange} placeholder="Business Email" />
                            <FloatingLabelInput id="quantity" name="quantity" type="text" value={contactForm.quantity} onChange={handleFormChange} placeholder="Required Quantity (e.g., 1 Container)" />
                            <motion.button type="submit" className="w-full mt-4 p-4 text-lg font-semibold text-black rounded-full shadow-lg flex items-center justify-center gap-3" style={{ backgroundColor: brandColors.gold, boxShadow: `0 0 25px rgba(207, 182, 82, 0.4)`}} whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <span>Send Inquiry</span>
                                <motion.div animate={{ x: ['0%', '30%', '0%'] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    id="map"
                    variants={itemVariants}
                    className="mt-16 h-[450px] rounded-3xl overflow-hidden relative border-2 border-neutral-800 bg-black"
                >
                    <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' }} />
                    
                    {/* UPDATED: Replaced API map with a reliable iframe embed */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.806515477017!2d55.38776038557714!3d25.295674031885007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5de7d4a9d9ef%3A0x1d1d16ba4897049e!2sFERRARI%20FOODS%20LLC%20DUBAI%20BRANCH!5e0!3m2!1sen!2sae!4v1759384197885!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map of Ferrari Foods LLC Location in Dubai"
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;