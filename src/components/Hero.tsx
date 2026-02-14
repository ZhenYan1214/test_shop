import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../assets/2.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-soft-pink/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-soft-lavender/30 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
      {/* Decorative Text Texture */}
      <div className="absolute top-20 left-10 text-9xl font-serif text-soft-pink/5 select-none pointer-events-none rotate-[-10deg]">
        Kawaii
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-soft-pink/30 text-sm text-text-main/80 font-medium shadow-sm">
            <Sparkles size={14} className="text-soft-pink" />
            <span className="tracking-wide">日系少女・精選古著</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-sans font-bold leading-[1.2] text-text-main tracking-tight">
            遇見你的<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-soft-pink to-dusty-rose relative inline-block">
              命定穿搭<span className="text-soft-pink text-6xl absolute -top-4 -right-8 animate-bounce">♡</span>
            </span>
          </h1>
          
          <p className="text-lg text-text-main/70 max-w-md leading-relaxed font-sans">
            每一件古著都有屬於它的故事。
            <br/>
            在 Second Love 尋找那份獨一無二的怦然心動，
            <br/>
            延續這份溫柔與美好。
          </p>
          
          <div className="flex gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-soft-pink text-white rounded-full font-bold tracking-wide flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(255,209,220,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-transparent"
            >
              開始逛逛 <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-text-main rounded-full font-bold tracking-wide border-2 border-soft-pink/30 hover:border-soft-pink hover:text-soft-pink transition-all"
            >
              品牌故事
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
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/5] bg-white ring-4 ring-soft-pink/20"
            >
                <img 
                    src={heroImg} 
                    alt="Cute Japanese Fashion" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
            </motion.div>

            {/* Floating Elements (Stickers) */}
            <motion.div
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-30 border-4 border-soft-pink/20 rotate-[-12deg]"
            >
               <span className="font-sans font-bold text-soft-pink text-xl">New!</span>
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-4 w-auto px-6 py-3 bg-white rounded-2xl shadow-xl flex items-center justify-center z-30 opacity-90 hidden md:flex border-2 border-soft-pink/20"
            >
                <div className="text-center">
                  <p className="font-bold text-lg text-text-main">100% 正品保證</p>
                  <p className="text-xs text-dusty-rose">日本直送・嚴選品質</p>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
