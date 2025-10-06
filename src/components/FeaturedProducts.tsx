import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Heart, Gem, Leaf, Globe } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal'; // Import the new modal component

// --- Type definition for a product ---
interface Product {
    name: string;
    description: string;
    images: string[];
    rating: number;
    features: string[];
}

interface FeaturedProductsProps {
    products: Product[];
    brandColors: {
        gold: string;
        black: string;
    };
}

// --- Reusable Product Card Component ---
const ProductCard: React.FC<{ product: Product; brandColors: { gold: string }, onCardClick: () => void }> = ({ product, brandColors, onCardClick }) => {
    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };
    
    const overlayVariants: Variants = {
        rest: { opacity: 0 },
        hovered: { opacity: 1, transition: { duration: 0.3 } },
    };

    const featureIcons = [<Gem size={16} />, <Leaf size={16} />, <Globe size={16} />];

    return (
        <motion.div
            variants={cardVariants}
            className="group relative flex flex-col rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl cursor-pointer"
            initial="rest"
            whileHover="hovered"
            onClick={onCardClick} // Added onClick handler
            layoutId={`product-card-${product.name}`} // For potential shared layout animations
        >
            <div className="relative overflow-hidden rounded-t-2xl">
                <motion.img
                    src={product.images[0]}
                    alt={product.name}
                    className="aspect-[4/3] w-full object-cover"
                    variants={{ rest: { scale: 1 }, hovered: { scale: 1.05 } }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    variants={overlayVariants}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-6 text-center text-white backdrop-blur-md"
                >
                    <h4 className="text-lg font-bold" style={{color: brandColors.gold}}>Premium Specifications</h4>
                    
                    {product.features && product.features.length > 0 ? (
                        <ul className="mt-3 space-y-2">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <span style={{color: brandColors.gold}}>
                                        {featureIcons[index % featureIcons.length]}
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-3 text-sm text-white/70">Details available upon request.</p>
                    )}
                </motion.div>
                <button className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-black/60 transition hover:bg-white hover:text-red-500" onClick={(e) => e.stopPropagation()}>
                    <Heart className="h-5 w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                    {product.images.map((_, i) => (
                        <div key={i} className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between p-4">
                <div>
                    <h3 className="text-lg font-bold font-trusted tracking-tight text-neutral-900">{product.name}</h3>
                </div>
                <motion.div 
                    className="h-12 w-12 flex-shrink-0 rounded-full border border-gray-300 flex items-center justify-center text-neutral-500 transition-colors duration-300 group-hover:bg-black group-hover:text-white"
                    variants={{ rest: { rotate: 0 }, hovered: { rotate: 45 } }}
                    transition={{ duration: 0.3 }}
                >
                    <ArrowUpRight className="h-6 w-6" />
                </motion.div>
            </div>
        </motion.div>
    );
};

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, brandColors }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const sectionVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section className="relative bg-[#f5f3f0] py-20 text-neutral-900">
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold lg:text-5xl">
                        Our <span style={{ color: brandColors.gold }}>Premium Selection</span>
                    </h2>
                    <p className="text-lg text-neutral-600">
                        Explore our handpicked collection of the finest grains, each with its unique character and culinary purpose.
                    </p>
                </motion.div>

                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {products.map((product) => (
                        <ProductCard 
                            key={product.name} 
                            product={product} 
                            brandColors={brandColors}
                            onCardClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </motion.div>
            </div>
            
            <AnimatePresence>
                {selectedProduct && (
                    <ProductDetailModal 
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        brandColors={brandColors}
                    />
                )}
            </AnimatePresence>

        </section>
    );
};

export default FeaturedProducts;