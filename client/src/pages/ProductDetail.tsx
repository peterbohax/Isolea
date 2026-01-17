import { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useParams } from 'wouter';
import { ShieldCheck, Ruler, Droplets, Factory, ArrowRight } from 'lucide-react';
import fabricDetail from '@assets/generated_images/close_up_neoprene_fabric_neon_pink.png';
import { PRODUCTS } from '@shared/constants';
import type { Product, Feature } from '@shared/types';

const FEATURES: Feature[] = [
  {
    icon: Ruler,
    title: 'DATA-DRIVEN FIT',
    desc: 'Measured to your anatomical architecture. Standardized sizing is obsolete.',
  },
  {
    icon: Droplets,
    title: 'CHLORINE RESIST',
    desc: 'Engineered to withstand harsh environments without losing tensile strength.',
  },
  {
    icon: Factory,
    title: 'PORTUGUESE ATELIER',
    desc: 'Expert craft meets technical precision. 100% EU production.',
  },
];

type TabType = 'description' | 'specifications' | 'production';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<TabType>('description');

  const product = useMemo<Product>(() => {
    const found = PRODUCTS.find((p) => p.id === Number(id));
    return found ?? PRODUCTS[0];
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">
        {/* Split Hero Section */}
        <section className="flex flex-col lg:flex-row border-b-8 border-black">
          {/* Left: Product Imagery */}
          <div className="flex-1 bg-neutral-100 relative min-h-[70vh] lg:h-[90vh] border-b-8 lg:border-b-0 lg:border-r-8 border-black overflow-hidden">
            <img
              src={fabricDetail}
              alt={product.name}
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />

            {/* Floating Info Labels */}
            <div className="absolute top-12 left-12 flex flex-col gap-4">
              <div className="bg-black text-white px-6 py-2 text-[10px] font-black tracking-[0.4em] uppercase">
                EDITION 01
              </div>
              <div className="bg-accent text-white px-6 py-2 text-[10px] font-black tracking-[0.4em] uppercase">
                EU ATELIER CRAFTED
              </div>
            </div>

            <div className="absolute bottom-12 right-12 text-right">
              <span className="text-[10vw] font-black leading-none tracking-tighter opacity-10 uppercase block">
                ISOLAE
              </span>
              <span className="text-4xl font-black uppercase tracking-tighter">
                €{product.price}
              </span>
            </div>
          </div>

          {/* Right: Technical Specs & Action */}
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-between bg-white">
            <div className="space-y-12">
              <div>
                <span className="text-xs font-black tracking-[0.6em] text-accent uppercase mb-4 block">
                  {product.category}
                </span>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8">
                  {product.name}
                </h1>
                <p className="text-sm font-bold uppercase tracking-widest opacity-40 italic">
                  {product.type}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-8 border-b-4 border-black pb-4">
                  {(['description', 'specifications', 'production'] as const).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${
                          activeTab === tab
                            ? 'text-black border-b-4 border-black -mb-[20px]'
                            : 'text-neutral-300 hover:text-black'
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>

                <div className="min-h-[150px] py-6">
                  {activeTab === 'description' && (
                    <p className="text-sm font-bold uppercase tracking-widest leading-loose opacity-60">
                      {product.description}
                    </p>
                  )}
                  {activeTab === 'specifications' && product.specs && (
                    <ul className="grid grid-cols-1 gap-4">
                      {product.specs.map((spec, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest"
                        >
                          <div className="w-2 h-2 bg-accent" /> {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                  {activeTab === 'production' && (
                    <p className="text-sm font-bold uppercase tracking-widest leading-loose opacity-60">
                      Hand-crafted in our Porto Atelier. Every piece is cut from
                      high-performance ECONYL® and validated against your unique
                      anatomical profile. 100% waste-free protocol.
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="border-4 border-black p-6 space-y-2">
                  <span className="text-[9px] font-black tracking-widest uppercase opacity-40">
                    Fabric Weight
                  </span>
                  <span className="text-xl font-black uppercase block">
                    190 GSM
                  </span>
                </div>
                <div className="border-4 border-black p-6 space-y-2">
                  <span className="text-[9px] font-black tracking-widest uppercase opacity-40">
                    UV Protection
                  </span>
                  <span className="text-xl font-black uppercase block">
                    UPF 50+
                  </span>
                </div>
              </div>

              <Button className="w-full h-24 bg-black text-white text-xl font-black tracking-[0.4em] uppercase rounded-none border-4 border-black hover:bg-accent hover:border-accent transition-all group">
                <span className="flex items-center gap-4">
                  INITIALIZE FIT PROTOCOL{' '}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>

              <p className="text-center text-[9px] font-black tracking-[0.2em] opacity-30 uppercase">
                * INVESTMENT PIECE. CRAFTED UPON DATA VALIDATION.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b-8 border-black">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className="p-16 border-r-8 border-black last:border-r-0 flex flex-col gap-8 hover:bg-black hover:text-white transition-all group"
            >
              <item.icon
                className="w-16 h-16 group-hover:text-accent transition-colors"
                strokeWidth={3}
              />
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                {item.title}
              </h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-loose opacity-60 group-hover:opacity-100">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Full Width Lifestyle Image */}
        <section className="min-h-[80vh] border-b-8 border-black relative overflow-hidden flex items-center justify-center bg-black">
          <img
            src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?q=80&w=2000"
            alt="Product Atmosphere"
            loading="lazy"
            className="w-full h-full object-cover grayscale contrast-150 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-20 left-12 md:left-24 max-w-4xl">
            <span className="text-xs font-black tracking-[0.5em] text-accent uppercase mb-6 block">
              Anatomical Context
            </span>
            <h2 className="text-6xl md:text-[10vw] font-black text-white leading-[0.8] tracking-tighter uppercase">
              SCULPTED <br />
              FOR MOVEMENT.
            </h2>
          </div>
        </section>

        {/* Commitment Banner */}
        <section className="bg-black text-white py-24 px-12 border-b-8 border-black overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="flex animate-marquee">
              <span className="text-[15vw] font-black tracking-tighter whitespace-nowrap px-10">
                BUY ONCE BUY RIGHT BUY ONCE BUY RIGHT
              </span>
            </div>
          </div>
          <div className="container mx-auto relative z-10 text-center">
            <ShieldCheck className="w-16 h-16 mx-auto mb-8 text-accent" />
            <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase italic">
              THE INVESTMENT PROTOCOL.
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto opacity-60 leading-loose">
              We do not believe in disposable fashion. Every Isolae piece is a
              technical asset, built to endure seasons of exposure and movement.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
