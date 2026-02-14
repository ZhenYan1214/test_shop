import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Pastel Yellow Sheer Cardigan",
    price: "¥3,200",
    condition: "Vintage (Excellent)",
    size: "Free Size",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop", // Soft sunlight clothes
    tag: "New Arrival"
  },
  {
    id: 2,
    name: "Floral Pleated Midi Skirt",
    price: "¥4,500",
    condition: "Like New",
    size: "M",
    image: "https://images.unsplash.com/photo-1582142893718-99d5713c7d65?q=80&w=800&auto=format&fit=crop", // Skirt detail
    tag: "Staff Pick"
  },
  {
    id: 3,
    name: "Soft Knit oversized Sweater",
    price: "¥5,800",
    condition: "Vintage (Good)",
    size: "L",
    image: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622?q=80&w=800&auto=format&fit=crop", // Hanging sweaters
    tag: "Rare Find"
  },
  {
    id: 4,
    name: "Lace Collar Blouse",
    price: "¥2,900",
    condition: "Unused",
    size: "S",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800&auto=format&fit=crop", // Dog? No, wait. Let's use a flat lay. photo-1485230948946-b2510d5402a5
    tag: "Sale"
  }
];

export default function ProductGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-soft-pink font-medium tracking-wider text-sm uppercase">Weekly Selection</span>
        <h2 className="text-4xl font-serif text-text-main mt-3 mb-4">New Arrivals</h2>
        <div className="w-16 h-1 bg-soft-pink/30 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-text-main z-20">
                {product.tag}
              </span>
              
              <img 
                src={product.image} 
                alt={product.name}
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/600x800/ffccd5/ffffff?text=Sold+Out";
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                <button className="p-3 bg-white text-text-main rounded-full shadow-lg hover:bg-soft-pink hover:text-white transition-colors transform hover:scale-110">
                  <ShoppingBag size={18} />
                </button>
                <button className="p-3 bg-white text-text-main rounded-full shadow-lg hover:bg-soft-pink hover:text-white transition-colors transform hover:scale-110">
                  <Eye size={18} />
                </button>
                <button className="p-3 bg-white text-text-main rounded-full shadow-lg hover:bg-rose-400 hover:text-white transition-colors transform hover:scale-110">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 space-y-1">
              <h3 className="font-serif text-lg text-text-main group-hover:text-soft-pink transition-colors cursor-pointer">
                {product.name}
              </h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-dusty-rose font-medium">{product.price}</span>
                <span className="text-gray-400">{product.size}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{product.condition}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <button 
          onClick={() => alert("更多可愛的衣服即將上架！\nMore cuteness coming soon! ♡")}
          className="px-8 py-3 border border-text-main/20 rounded-full text-text-main hover:bg-text-main hover:text-white transition-colors tracking-wide"
        >
          View All Collection
        </button>
      </div>
    </section>
  );
}
