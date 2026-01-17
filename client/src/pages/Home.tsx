import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { MeasurementWizard } from '@/components/shop/MeasurementWizard';
import { Shield, Leaf, Ruler } from 'lucide-react';
import type { Feature } from '@shared/types';

const HOME_FEATURES: Feature[] = [
  {
    icon: Shield,
    title: 'EU ATELIER',
    desc: 'Hand-sewn in Portugal and Spain. Fair wages, master craftsmanship.',
  },
  {
    icon: Leaf,
    title: 'ECONYL® FABRIC',
    desc: 'Regenerated nylon from ocean waste. Premium feel, sustainable core.',
  },
  {
    icon: Ruler,
    title: 'DATA DRIVEN',
    desc: 'Our patterns evolve with every body we measure. Precision as standard.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        {/* The Philosophy: Buy Once, Buy Right */}
        <section className="py-40 bg-white text-black overflow-hidden border-b-4 border-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <span className="text-xs font-black tracking-[0.5em] uppercase mb-8 block text-accent">
                  THE MANIFESTO
                </span>
                <h2 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-12">
                  BUY ONCE. <br />
                  BUY RIGHT.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <p className="text-lg font-bold uppercase tracking-widest leading-relaxed">
                    Standard sizing is a relic of the past. 49% of women wear
                    different sizes on top and bottom. We don't believe in
                    labels; we believe in data.
                  </p>
                  <p className="text-lg font-bold uppercase tracking-widest leading-relaxed opacity-40">
                    Our hybrid model matches your four key measurements to our
                    extensive pattern library or triggers a bespoke creation. No
                    extra cost. No compromise.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 lg:pt-20">
                <div className="border-l-4 border-black pl-8 space-y-12">
                  <div>
                    <h3 className="text-xl font-black mb-2 uppercase italic">
                      Zero Returns.
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest leading-loose opacity-60">
                      Custom pieces are made for you. We aim for 100% first-fit
                      accuracy through our measurement system.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-black mb-2 uppercase italic">
                      Eternal Fabric.
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest leading-loose opacity-60">
                      High-grade ECONYL® regenerated nylon. Designed to last
                      seasons, not weeks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sizing Section */}
        <section className="bg-black text-white py-40 overflow-hidden relative border-b-4 border-white">
          <div className="absolute top-0 right-0 text-[30vw] font-black opacity-10 pointer-events-none leading-none -translate-y-1/2 translate-x-1/4">
            DATA
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-8xl md:text-[12rem] font-black mb-12 leading-[0.8] tracking-tighter">
                  ANATOMICAL <br />
                  ATELIER.
                </h2>
                <div className="space-y-10 max-w-xl">
                  {[
                    {
                      num: '01',
                      title: 'TORSO LENGTH',
                      desc: 'The missing link in one-piece fit. We measure from shoulder to shoulder via the stride.',
                    },
                    {
                      num: '02',
                      title: 'DUAL BUST DATA',
                      desc: 'Bust vs. Underbreast circumference. The key to true support without the bulk.',
                    },
                    {
                      num: '03',
                      title: 'LOWER HIP SIZE',
                      desc: 'Precision placement for the widest point, ensuring no-slip architecture.',
                    },
                  ].map((item) => (
                    <div key={item.num} className="group">
                      <h3 className="text-3xl font-black mb-4 flex items-center gap-4 group-hover:text-accent transition-colors">
                        <span className="text-xs border-2 border-white px-2 py-1">
                          {item.num}
                        </span>
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-widest leading-relaxed opacity-60">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-8 border-4 border-accent animate-pulse opacity-20 pointer-events-none" />
                <div className="flex flex-col items-center justify-center p-16 border-8 border-white bg-black hover:bg-white hover:text-black transition-all group duration-700">
                  <span className="text-[10px] font-black tracking-[0.5em] uppercase mb-10 opacity-60 text-center">
                    Mandatory for Checkout
                  </span>
                  <div className="scale-150 py-10">
                    <MeasurementWizard />
                  </div>
                  <p className="mt-12 text-[10px] font-black tracking-[0.2em] text-center opacity-40">
                    VIDEO GUIDES INCLUDED IN PROFILE SETUP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listing */}
        <section className="py-40 bg-white">
          <div className="container mx-auto px-0 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 px-6 md:px-0">
              <h2 className="text-9xl font-black leading-none tracking-tighter mb-4">
                EDITION 01.
              </h2>
              <div className="text-xs font-black tracking-[0.4em] uppercase opacity-40">
                4 STYLES / INFINITE FITS
              </div>
            </div>
            <ProductGrid />
          </div>
        </section>

        {/* Feature Grid */}
        <section className="border-y-4 border-black grid grid-cols-1 md:grid-cols-3">
          {HOME_FEATURES.map((feature, i) => (
            <div
              key={i}
              className={`p-16 border-b-4 md:border-b-0 md:border-r-4 border-black last:border-r-0 hover:bg-black hover:text-white transition-colors group ${
                i === 0 ? 'hover:bg-accent' : ''
              }`}
            >
              <feature.icon className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-black mb-4 uppercase">
                {feature.title}
              </h4>
              <p className="text-xs font-bold uppercase tracking-widest leading-loose opacity-60 group-hover:opacity-100">
                {feature.desc}
              </p>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="h-[60vh] bg-black flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000')] bg-cover bg-center opacity-30 mix-blend-overlay" />
          <div className="relative z-10 text-center">
            <h2 className="text-white text-9xl font-black leading-none tracking-tighter mb-12">
              ATELIER OPEN.
            </h2>
            <button className="btn-primary !bg-white !text-black hover:!bg-accent hover:!text-white">
              EXPLORE THE COLLECTION
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
