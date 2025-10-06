import React from 'react';
import { motion } from 'framer-motion';
import { Building, Globe, Package, ShieldCheck, Users, ArrowRight } from 'lucide-react';

// --- Data for Section ---
const successStories = [
    { icon: Building, partner: "Grand Mills, UAE", story: "Streamlined regional supply with a dedicated logistics framework, boosting their premium flour line.", cta: "View Case Study" },
    { icon: Globe, partner: "Safari Foods, Africa", story: "Enabled expansion into three new territories by providing a consistent supply of high-quality wheat.", cta: "View Case Study" },
    { icon: Package, partner: "Euro Foods Inc., Europe", story: "Established a fully certified organic supply chain to meet the growing demand for sustainable products.", cta: "View Case Study" },
    { icon: ShieldCheck, partner: "Agro Exports Ltd., India", story: "Enhanced quality assurance protocols, leading to a 30% increase in their export market share.", cta: "View Case Study" },
];

const partnerTestimonials = [
    { icon: Users, partner: "Al Ghurair Foods", review: "The quality is consistently excellent, which is why we trust them with our core product lines." },
    { icon: Users, partner: "IFFCO", review: "Their global logistics network and reliable sourcing have made them our go-to supplier for essential commodities." },
    { icon: Users, partner: "A Regional Distributor", review: "A partnership built on trust and mutual respect. Highly recommended for their professionalism." },
    { icon: Users, partner: "Global Spice Inc.", review: "Ferrari Foods streamlined our supply chain, boosting efficiency by 40%. A reliable partner in every sense." },
];


// --- Reusable Card for Marquee ---
const MarqueeCard = ({ item, isStory }: { item: any, isStory: boolean }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg p-6 border flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gray-100 rounded-lg">
                <item.icon className="w-6 h-6 text-gray-700" />
            </div>
            <h4 className="font-bold text-gray-900">{item.partner}</h4>
        </div>
        <p className="text-gray-600 flex-grow">{isStory ? item.story : item.review}</p>
        {isStory && (
            <button className="mt-4 inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                {item.cta} <ArrowRight className="w-4 h-4" />
            </button>
        )}
    </div>
);


const SuccessStoriesSection = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                    Discover how our partnerships create value and drive growth across different markets.
                </p>
            </div>
            
            {/* Top Marquee (Success Stories) */}
            <div className="relative">
                 <motion.div 
                    className="flex gap-8 py-4"
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
                 >
                     {[...successStories, ...successStories].map((item, index) => <MarqueeCard key={`story-${index}`} item={item} isStory={true} />)}
                 </motion.div>
            </div>

            {/* Bottom Marquee (Testimonials) */}
             <div className="relative mt-8">
                 <motion.div 
                    className="flex gap-8 py-4"
                    animate={{ x: ['-100%', '0%'] }}
                    transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
                 >
                     {[...partnerTestimonials, ...partnerTestimonials].map((item, index) => <MarqueeCard key={`testimonial-${index}`} item={item} isStory={false} />)}
                 </motion.div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;