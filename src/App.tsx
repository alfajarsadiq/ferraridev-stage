import react, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download,} from 'lucide-react'; // Changed Mail to MessageCircle for WhatsApp icon

// Page and Component Imports
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Partners from './pages/Partners';
import GlobalPresence from './pages/GlobalPresence';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Placeholder for assets to prevent build errors
const catalogPdf = '#';

// --- SCROLL TO TOP ON ROUTE CHANGE ---
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


// --- MAIN LAYOUT COMPONENT ---
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// --- Custom WhatsApp Icon ---
// A simple SVG component for the WhatsApp icon
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


function App() {
  const whatsappNumber = "971585639040"; // Your number without '+' or spaces
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <Router>
      <ScrollToTop />
      <div>
        <main className="relative isolate min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<MainLayout />}>
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/globalpresence" element={<GlobalPresence />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </main>

        {/* --- FLOATING ACTION BUTTONS --- */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-4">
          
          {/* --- UPDATED WHATSAPP BUTTON --- */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-white bg-black/80 rounded-lg shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-right">
              Chat on WhatsApp
            </span>
            <div className="absolute -inset-1 rounded-full ring-4 ring-[#C6A664]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-[#C6A664] to-[#bfa356] cursor-pointer">
              <WhatsAppIcon />
            </div>
          </motion.a>

          <motion.a
            href={catalogPdf}
            download="Company-Profile.pdf" // Generic name
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 1.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute right-full mr-4 px-3 py-1.5 text-sm font-semibold text-white bg-black/80 rounded-lg shadow-lg opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-right">
              Download Catalog
            </span>
            <div className="absolute -inset-1 rounded-full ring-4 ring-[#C6A664]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-14 h-14 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-[#C6A664] to-[#bfa356] cursor-pointer">
              <Download className="w-6 h-6 text-black" />
            </div>
          </motion.a>
        </div>
      </div>
    </Router>
  );
}

export default App;