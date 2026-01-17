import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { MeasurementWizard } from '@/components/shop/MeasurementWizard';
import { motion } from 'framer-motion';
import { SHOP_STATS, PRODUCTS } from '@shared/constants';

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24">
        {/* Header */}
        <section className="border-b-4 border-black py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black opacity-10 pointer-events-none tracking-tighter whitespace-nowrap">
            EDITION 01
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="text-xs font-black tracking-[0.5em] uppercase mb-6 block text-accent">
                Collection Catalogue
              </span>
              <h1 className="text-8xl md:text-[12rem] font-black leading-[0.85] tracking-tighter mb-10">
                SCULPT <br />
                YOUR DATA.
              </h1>
              <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                <p className="text-sm font-bold uppercase tracking-widest leading-loose max-w-sm opacity-60">
                  Four launch styles engineered to match your anatomical data
                  points. Standardized patterns meet bespoke adjustments.
                </p>
                <MeasurementWizard />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b-4 border-black grid grid-cols-2 md:grid-cols-4">
          {SHOP_STATS.map((stat, i) => (
            <div
              key={i}
              className="p-8 border-r-4 border-black last:border-r-0 flex flex-col justify-center"
            >
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 mb-2">
                {stat.label}
              </span>
              <span className="text-2xl font-black uppercase tracking-tighter">
                {stat.value}
              </span>
            </div>
          ))}
        </section>

        {/* Product Grid */}
        <section>
          <div className="container mx-auto px-0">
            <div className="flex justify-between items-center p-6 border-b-4 border-black">
              <div className="flex gap-10 text-[10px] font-black tracking-[0.4em] uppercase">
                <button className="border-b-4 border-black pb-2">
                  All Editions
                </button>
                <button className="opacity-30 hover:opacity-100 transition-opacity">
                  One Pieces
                </button>
                <button className="opacity-30 hover:opacity-100 transition-opacity">
                  Separates
                </button>
              </div>
              <div className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 hidden md:block">
                {PRODUCTS.length} Items Identified
              </div>
            </div>
            <ProductGrid />
          </div>
        </section>

        {/* Bespoke Section */}
        <section className="bg-accent text-white py-40 text-center border-t-4 border-black relative overflow-hidden group cursor-pointer">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 whitespace-nowrap text-[20vh] font-black opacity-10 pointer-events-none"
          >
            BESPOKE PRODUCTION BESPOKE PRODUCTION
          </motion.div>
          <div className="relative z-10">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 group-hover:scale-110 transition-transform duration-700">
              NEED CUSTOM?
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest max-w-xl mx-auto mb-12 leading-loose">
              If your measurements fall outside our standard library, we trigger
              a custom pattern creation at no extra cost.
            </p>
            <button className="btn-primary !bg-white !text-black hover:!bg-black hover:!text-white">
              TALK TO OUR DESIGNER
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
