import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// Import the logo image
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();
  
  // State for the pill hover effect, inspired by the reference code
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Partners', href: '/partners' },
    { name: 'Global Presence', href: '/globalpresence' },
    { name: 'Contact', href: '/contact' },
  ];

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to update the active path for the pill animation
  useEffect(() => {
    setHoveredPath(location.pathname);
  }, [location.pathname]);


  const mobileMenuVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24, duration: 0.5 },
    },
    closed: {
      opacity: 0,
      y: '-20%',
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className={`w-[95%] max-w-7xl backdrop-blur-lg border shadow-md rounded-full px-4 sm:px-6 py-2 flex justify-between items-center transition-colors duration-300 ${
            hasScrolled
              ? 'bg-[#1f1f1f]/80 border-white/20'
              : 'bg-black/20 border-white/10'
          }`}
        >
          {/* --- Logo / Company Name --- */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <img src={logo} alt="Ferrari Foods LLC Logo" className="h-10 w-auto hidden md:block" />
            <div>
                <span className="font-mourich text-xl md:text-2xl text-white block leading-tight tracking-wide">Ferrari Foods LLC</span>
                <span className="text-xs text-white/70 block leading-tight">فيراري فودز ذ.م.م</span>
            </div>
          </Link>

          {/* Desktop Navigation with Pill Animation */}
          <div 
            className="hidden md:flex items-center h-full"
            onMouseLeave={() => setHoveredPath(location.pathname)}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 z-10 ${
                    hoveredPath === item.href
                    ? 'text-black'
                    : 'text-white/80 hover:text-white'
                }`}
                onMouseOver={() => setHoveredPath(item.href)}
              >
                {item.name}
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-[#cfb652] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-24 left-0 w-full md:hidden z-40"
          >
            <div className="mx-4 bg-black/50 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/20">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 text-white rounded-lg transition-colors duration-200 ${
                      location.pathname === item.href ? 'bg-[#cfb652] text-black font-semibold' : 'hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;