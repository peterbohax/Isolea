import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="text-4xl font-black tracking-tighter uppercase">isolae</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest leading-loose opacity-40">
              Premium anatomical swimwear. <br/>Crafted in Europe. <br/>Made to your data.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase mb-8 opacity-40">COLLECTIONS</h4>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em]">
              <li><Link href="/shop" className="hover:text-accent transition-colors">Edition 01</Link></li>
              <li><Link href="/shop" className="hover:text-accent transition-colors">One-Pieces</Link></li>
              <li><Link href="/shop" className="hover:text-accent transition-colors">Separates</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase mb-8 opacity-40">ATELIER</h4>
            <ul className="space-y-4 text-[10px] font-black uppercase tracking-[0.2em]">
              <li><Link href="/fit-guide" className="hover:text-accent transition-colors">Measurement Guide</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Production</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">EU Shipping</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black tracking-[0.3em] uppercase mb-8 opacity-40">JOIN THE ATELIER</h4>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-widest leading-relaxed opacity-40">
              Early access to new drops and sizing updates.
            </p>
            <form className="flex border-b-2 border-white/20 focus-within:border-white transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest p-4 w-full focus:ring-0"
              />
              <button className="px-4 hover:text-accent transition-colors">
                GO
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[9px] font-black tracking-[0.3em] uppercase opacity-30">
          <p>© 2026 isolae atelier. all rights reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">TikTok</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
