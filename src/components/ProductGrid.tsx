import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import img1 from '../assets/1.jpg';
import img3 from '../assets/3.jpg';
import img6 from '../assets/6.jpg';
import img8 from '../assets/8.jpg';

const PRODUCTS = [
  {
    id: 1,
    name: "淡黃色透膚針織外套",
    price: "NT$ 890",
    condition: "古著 (狀況極佳)",
    size: "Free Size",
    image: img1, 
    tag: "本週新品"
  },
  {
    id: 2,
    name: "日系碎花百褶長裙",
    price: "NT$ 1,280",
    condition: "近全新",
    size: "M",
    image: img6, 
    tag: "店長推薦"
  },
  {
    id: 3,
    name: "溫柔系寬鬆針織毛衣",
    price: "NT$ 1,580",
    condition: "古著 (良品)",
    size: "L",
    image: img3, 
    tag: "稀有款"
  },
  {
    id: 4,
    name: "蕾絲花邊翻領襯衫",
    price: "NT$ 790",
    condition: "未使用",
    size: "S",
    image: img8, 
    tag: "特價中"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-soft-pink/10 rounded-full blur-2xl -z-10"></div>
        <span className="text-soft-pink font-bold tracking-widest text-sm uppercase bg-white/80 px-4 py-1 rounded-full border border-soft-pink/20 shadow-sm inline-block mb-3">
          Weekly Selection
        </span>
        <h2 className="text-4xl font-sans font-bold text-text-main mb-4 tracking-tight">
          本週精選新品
        </h2>
        <div className="w-16 h-1.5 bg-soft-pink/40 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-gray-50 shadow-sm group-hover:shadow-[8px_8px_0px_0px_rgba(255,209,220,0.5)] transition-all duration-300 border border-white">
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-text-main z-20 border border-gray-100 shadow-sm">
                {product.tag}
              </span>
              
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[1px]">
                <button className="p-3 bg-white text-text-main rounded-full shadow-lg hover:bg-soft-pink hover:text-white transition-all transform hover:scale-110 hover:-rotate-12">
                  <ShoppingBag size={18} />
                </button>
                <button className="p-3 bg-white text-text-main rounded-full shadow-lg hover:bg-soft-pink hover:text-white transition-all transform hover:scale-110 hover:rotate-12">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-5 space-y-2 px-2">
              <h3 className="font-sans font-bold text-lg text-text-main group-hover:text-soft-pink transition-colors cursor-pointer tracking-tight">
                {product.name}
              </h3>
              <div className="flex justify-between items-center text-sm border-t border-dashed border-gray-200 pt-2">
                <span className="text-dusty-rose font-bold text-base">{product.price}</span>
                <span className="text-gray-400 bg-gray-50 px-2 py-0.5 rounded-md text-xs">{product.size}</span>
              </div>
              <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
                {product.condition}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-20">
        <button 
          onClick={() => alert("更多可愛的衣服即將上架！\nMore cuteness coming soon! ♡")}
          className="px-10 py-3 bg-white border-2 border-text-main rounded-full text-text-main font-bold hover:bg-text-main hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(75,85,99,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          查看所有商品
        </button>
      </div>
    </section>
  );
}
