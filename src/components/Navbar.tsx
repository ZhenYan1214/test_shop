import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl px-6 py-3 shadow-sm border border-white/50 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl text-text-main tracking-wider font-medium">
              Second Love<span className="text-soft-pink">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-text-main/80 font-medium text-sm tracking-wide">
            {['Home', 'Shop', 'New Arrivals', 'About'].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2, color: '#ffccd5' }}
                className="transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-text-main/70">
            <motion.button whileHover={{ scale: 1.1, color: '#ffccd5' }} className="p-2 hover:bg-white rounded-full transition-colors">
              <Search size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1, color: '#ffccd5' }} className="p-2 hover:bg-white rounded-full transition-colors">
              <Heart size={20} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1, color: '#ffccd5' }} className="p-2 hover:bg-white rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-soft-pink rounded-full ring-2 ring-white"></span>
            </motion.button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-white rounded-full transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-6 right-6 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-white/50 md:hidden"
        >
          <div className="flex flex-col gap-4 text-center">
            {['Home', 'Shop', 'New Arrivals', 'About'].map((item) => (
              <a key={item} href="#" className="text-text-main font-medium py-2 hover:text-soft-pink no-underline">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
