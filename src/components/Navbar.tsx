import { Search, Heart, ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items translate
  const menuItems = [
    { name: '首頁', href: '#' },
    { name: '商店', href: '#' },
    { name: '本週新品', href: '#' },
    { name: '關於我們', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-lg rounded-[2rem] px-6 py-4 shadow-sm border border-white/50 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="font-serif text-2xl text-text-main tracking-wider font-bold group-hover:text-soft-pink transition-colors">
              Second Love<span className="text-soft-pink group-hover:text-text-main">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-text-main font-bold text-sm tracking-wide">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2, color: '#ffccd5' }}
                className="transition-colors relative group font-serif"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-soft-pink transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 text-text-main/80">
            <motion.button whileHover={{ scale: 1.1, color: '#ffccd5' }} className="p-2.5 hover:bg-white rounded-full transition-colors">
              <Search size={20} strokeWidth={2.5} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1, color: '#ffccd5' }} className="p-2.5 hover:bg-white rounded-full transition-colors">
              <Heart size={20} strokeWidth={2.5} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1, color: '#ffccd5' }} className="p-2.5 hover:bg-white rounded-full transition-colors relative">
              <ShoppingBag size={20} strokeWidth={2.5} />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-soft-pink rounded-full ring-2 ring-white animate-pulse"></span>
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
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/50 md:hidden z-40"
        >
          <div className="flex flex-col gap-4 text-center">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-text-main font-bold py-3 hover:text-soft-pink hover:bg-soft-pink/5 rounded-xl transition-all no-underline text-lg font-serif">
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
