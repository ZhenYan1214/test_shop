import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-soft-pink/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-soft-lavender/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 text-sm text-text-main/80 font-medium">
            <Sparkles size={14} className="text-soft-pink" />
            <span>Curated Vintage Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-text-main">
            Second Love,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-pink to-dusty-rose">
              First Style.
            </span>
          </h1>
          
          <p className="text-lg text-text-main/70 max-w-md leading-relaxed">
            Discover unique, hand-picked Japanese vintage pieces that tell a story. 
            Sustainable fashion designed to be loved again.
          </p>
          
          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-soft-pink text-white rounded-full font-medium tracking-wide flex items-center gap-2 shadow-lg shadow-soft-pink/30 hover:shadow-soft-pink/40 transition-all"
            >
              Shop Now <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/50 text-text-main rounded-full font-medium tracking-wide border border-white/60 hover:border-soft-pink/50 transition-all"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>

        {/* Hero Image / Visual */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
        >
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100"
            >
                {/* Placeholder for Hero Image - Using a soft gradient/color block for now if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/30 to-soft-lavender/30 flex items-center justify-center text-dusty-rose/50 font-serif italic text-2xl">
                    (Place Hero Image Here)
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop" 
                    alt="Cute Japanese Fashion" 
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x1000/ffccd5/ffffff?text=Second+Love";
                    }}
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center z-30 opacity-90 hidden md:flex"
            >
                <div className="text-center">
                  <p className="font-serif text-2xl text-soft-pink font-bold">100%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Authentic</p>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
