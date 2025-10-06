import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

// --- Type definition for a testimonial ---
export interface Testimonial {
  quote: string;
  author: string;
  authorTitle: string;
  color: string;
}

// --- Reusable Testimonial Card with new centered design ---
const TestimonialCard: React.FC<{ testimonial: Testimonial; isFeatured?: boolean }> = ({ testimonial, isFeatured = false }) => {
    const { quote, author, authorTitle, color } = testimonial;

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        }
    };

    const featureClasses = isFeatured ? 'lg:scale-105 lg:rotate-[-1deg] z-10' : '';

    // Helper to get initials from the author's name
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    }

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -8,
                boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1)',
                transition: { type: 'spring', stiffness: 300, damping: 20 }
            }}
            className={`group relative mb-8 flex h-fit flex-col break-inside-avoid-column rounded-2xl p-8 shadow-lg transition-all duration-300 ${color} ${featureClasses}`}
        >
            <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gray-200 shadow-md">
                    <span className="text-xl font-bold text-gray-500">{getInitials(author)}</span>
                </div>
                <div className="mt-4">
                    <p className="font-bold text-neutral-900">{author}</p>
                    <p className="text-sm text-neutral-500">{authorTitle}</p>
                </div>
                <p className="mt-6 leading-relaxed text-neutral-700">"{quote}"</p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/60">
                    <Quote className="h-6 w-6 text-neutral-400" />
                </div>
            </div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    const testimonials: Testimonial[] = [
        {
            quote: 'The consistency and quality of their flour have been a game-changer for our business. This company is a partner we can truly rely on.',
            author: 'A Leading Local Bakery',
            authorTitle: 'Baking Partner',
            color: 'bg-green-50',
        },
        {
            quote: "Switching to their Sella Basmati rice has elevated our signature dishes. The grain quality and aroma are consistently excellent.",
            author: 'A High-End Restaurant',
            authorTitle: 'Culinary Client',
            color: 'bg-white',
        },
        {
            quote: "Their reliable supply of premium wheat has been crucial for our operations. A professional and trustworthy B2B partner.",
            author: "A Major Flour Mill",
            authorTitle: "Milling Associate",
            color: 'bg-yellow-50',
        },
        {
            quote: 'For my personal trading business, this supplier provides the best quality grains with exceptional service and on-time delivery.',
            author: 'An Independent Trader',
            authorTitle: 'Private Trader',
            color: 'bg-blue-50',
        },
        {
            quote: "We cater large events and demand the best. Their Palakkadan Matta rice has been a crowd-pleaser every single time.",
            author: 'A Premium Catering Service',
            authorTitle: 'Catering Partner',
            color: 'bg-purple-50',
        },
         {
            quote: "As a fellow trading company, we appreciate their streamlined logistics and commitment to quality. A truly dependable supplier.",
            author: 'A General Trading Partner',
            authorTitle: 'Trading Partner',
            color: 'bg-red-50',
        },
    ];

    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.section
            className="relative overflow-hidden bg-white py-20 text-neutral-900"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,235,255,0.7),rgba(255,255,255,0))] -z-1" />
            <div className="relative z-20 mx-auto max-w-7xl px-6">
                <motion.div
                    className="mx-auto mb-16 max-w-3xl text-center"
                     variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                >
                    <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
                        Success <span style={{ color: '#cfb652' }}>Stories</span>
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Discover how leading businesses have elevated their offerings and streamlined operations with our premium grains.
                    </p>
                </motion.div>

                <motion.div className="columns-1 gap-8 md:columns-2 lg:columns-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.author}
                            testimonial={testimonial}
                            isFeatured={index === 1}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;