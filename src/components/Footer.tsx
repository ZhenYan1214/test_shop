import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-soft-pink/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <span className="font-serif text-2xl text-text-main tracking-wider font-bold">
            Second Love<span className="text-soft-pink">.</span>
          </span>
          <p className="text-gray-500 text-sm leading-relaxed font-sans">
            用心挑選每一件古著。
            <br />
            為你帶來日本直送的溫柔與美好，讓舊愛成為你的新歡。
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 bg-cream rounded-full text-dusty-rose hover:bg-soft-pink hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2.5 bg-cream rounded-full text-dusty-rose hover:bg-soft-pink hover:text-white transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2.5 bg-cream rounded-full text-dusty-rose hover:bg-soft-pink hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-sans font-bold text-lg text-text-main mb-6">購物指南</h3>
          <ul className="space-y-3 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-soft-pink transition-colors">本週新品</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">上身類</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">下身類</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">洋裝/連身裙</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">配件小物</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans font-bold text-lg text-text-main mb-6">顧客服務</h3>
          <ul className="space-y-3 text-sm text-gray-500 font-medium">
            <li><a href="#" className="hover:text-soft-pink transition-colors">運送與退換貨</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">尺寸指南</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">常見問題</a></li>
            <li><a href="#" className="hover:text-soft-pink transition-colors">聯絡我們</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-sans font-bold text-lg text-text-main mb-6">訂閱電子報</h3>
          <p className="text-gray-500 text-sm mb-4">
            訂閱即可獲得首購 9 折優惠碼！
          </p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="輸入您的 Email..." 
              className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:border-soft-pink text-sm bg-gray-50"
            />
            <button className="px-5 py-2.5 bg-soft-pink text-white rounded-full hover:bg-opacity-90 transition-opacity font-bold shadow-md shadow-soft-pink/30">
              <Heart size={18} fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-8 text-center">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-1 font-medium">
          © 2026 Second Love. Made with <Heart size={10} className="text-soft-pink fill-current" /> in Tokyo & Taipei.
        </p>
      </div>
    </footer>
  );
}
