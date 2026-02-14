import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-soft-pink/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <span className="font-serif text-2xl text-text-main tracking-wider font-medium">
            Second Love<span className="text-soft-pink">.</span>
          </span>
          <p className="text-gray-500 text-sm leading-relaxed">
            Curated with love. We bring you the softest, cutest, and most unique vintage pieces from Japan.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-cream rounded-full text-dusty-rose hover:bg-soft-pink hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 bg-cream rounded-full text-dusty-rose hover:bg-soft-pink hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 bg-cream rounded-full text-dusty-rose hover:bg-soft-pink hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-serif text-lg text-text-main mb-6">Shop</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-soft-pink transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">Tops</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">Bottoms</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">Dresses</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">Accessories</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-text-main mb-6">Help</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><a href="#" className="hover:text-soft-pink transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-serif text-lg text-text-main mb-6">Stay Cute</h3>
          <p className="text-gray-500 text-sm mb-4">
            Join our newsletter for 10% off your first order!
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email..." 
              className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-soft-pink text-sm"
            />
            <button className="px-4 py-2 bg-soft-pink text-white rounded-full hover:bg-opacity-90 transition-opacity">
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8 text-center">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
          © 2026 Second Love. Made with <Heart size={10} className="text-soft-pink fill-current" /> in Tokyo.
        </p>
      </div>
    </footer>
  );
}
