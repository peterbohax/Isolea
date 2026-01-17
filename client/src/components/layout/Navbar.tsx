import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left Links */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-black uppercase tracking-[0.2em]">
          <Link href="/shop" className="hover:opacity-50 transition-opacity">Shop All</Link>
          <Link href="/about" className="hover:opacity-50 transition-opacity">Sizing</Link>
          <Link href="/fit-guide" className="hover:opacity-50 transition-opacity">Atelier</Link>
        </div>

        {/* Logo */}
        <Link href="/">
          <a className="text-3xl font-black uppercase tracking-[-0.05em] absolute left-1/2 -translate-x-1/2">
            isolae
          </a>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center space-x-6">
          <Search className="h-5 w-5 cursor-pointer hover:opacity-50" strokeWidth={2} />
          <User className="h-5 w-5 cursor-pointer hover:opacity-50" strokeWidth={2} />
          <div className="relative cursor-pointer group">
            <ShoppingBag className="h-5 w-5 group-hover:opacity-50" strokeWidth={2} />
            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center font-black">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
