import { useState, memo } from 'react';
import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';
import fabricDetail from '@assets/generated_images/close_up_neoprene_fabric_neon_pink.png';
import { cn } from '@/lib/utils';
import { PRODUCTS } from '@shared/constants';
import type { Product } from '@shared/types';

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t-4 border-l-4 border-black">
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/product/${product.id}`}>
      <div
        className="group relative cursor-pointer border-r-4 border-b-4 border-black overflow-hidden bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={fabricDetail}
            alt={product.name}
            loading="lazy"
            className={cn(
              'w-full h-full object-cover transition-all duration-1000',
              isHovered ? 'scale-110 blur-[2px]' : 'scale-100'
            )}
          />

          {/* Price Overlay */}
          <div className="absolute top-6 right-6 z-10 bg-black text-white px-3 py-1 text-sm font-black">
            €{product.price}
          </div>

          {/* Hover State */}
          <div
            className={cn(
              'absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-8 text-center transition-all duration-500',
              isHovered
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-full'
            )}
          >
            <span className="text-[9px] font-black tracking-[0.4em] text-white/40 mb-2 uppercase">
              Investment Piece
            </span>
            <h3 className="text-2xl font-black text-white mb-6 leading-tight">
              {product.name}
            </h3>
            <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest leading-loose mb-8">
              Engineered for longevity. <br />
              Crafted to your anatomical data.
            </p>
            <div className="w-full bg-white text-black py-4 text-[10px] font-black uppercase tracking-[0.3em] group-hover:bg-accent group-hover:text-white transition-colors">
              VIEW SPECIFICATIONS
            </div>
          </div>
        </div>

        <div className="p-6 flex justify-between items-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
          <div className="flex flex-col">
            <span className="text-[11px] font-black tracking-widest uppercase">
              {product.name}
            </span>
            <span className="text-[9px] font-bold opacity-40 uppercase tracking-widest">
              {product.type}
            </span>
          </div>
          <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  );
});
