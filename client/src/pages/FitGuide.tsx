import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InlineMeasurementWizard } from "@/components/shop/InlineMeasurementWizard";
import { motion } from "framer-motion";

export default function FitGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24">
        {/* Full Screen High Impact Header */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center bg-black text-white relative overflow-hidden border-b-8 border-black">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000')] bg-cover bg-center grayscale contrast-150" />
          <div className="container mx-auto px-6 relative z-10 text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black tracking-[0.6em] uppercase mb-8 block text-accent">Anatomical Atelier</span>
              <h1 className="text-8xl md:text-[12vw] font-black leading-[0.8] tracking-tighter mb-12">
                THE <br/>PROTOCOL.
              </h1>
              <p className="text-sm md:text-xl font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl mx-auto opacity-60">
                Data is the foundation of perfect fit. Initialize your anatomical profile to unlock bespoke production.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Detail Grid - Moved up to follow hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 border-b-8 border-black">
          <div className="p-16 border-r-8 border-black flex flex-col justify-center">
            <h2 className="text-6xl font-black mb-10 tracking-tighter">01 / WHY DATA?</h2>
            <p className="text-sm font-bold uppercase tracking-widest leading-loose opacity-60">
              Standardized sizing labels (S/M/L) are arbitrary and ignore the complexity of the human form. Isolae uses 4 key anatomical data points to build a unique pattern for your specific body architecture.
            </p>
          </div>
          <div className="p-16 flex flex-col justify-center bg-accent text-white">
             <h2 className="text-6xl font-black mb-10 tracking-tighter">02 / THE METHOD</h2>
             <p className="text-sm font-bold uppercase tracking-widest leading-loose opacity-80">
               Every measurement is validated against our library of 2,400+ pattern variations. If your data falls outside the curve, we trigger a bespoke pattern creation at no additional cost.
             </p>
          </div>
        </section>

        {/* Preparation Guide */}
        <section className="py-40 container mx-auto px-6 text-center border-b-8 border-black">
           <h3 className="text-xs font-black tracking-[0.4em] uppercase mb-20 opacity-40">Preparation Guide</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              <div className="space-y-8">
                 <div className="text-5xl font-black border-8 border-black w-24 h-24 flex items-center justify-center mx-auto shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">1</div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter">Soft Tape</h4>
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40 leading-relaxed max-w-[200px] mx-auto">Ensure your measuring tape is flexible and accurate to the centimeter.</p>
              </div>
              <div className="space-y-8">
                 <div className="text-5xl font-black border-8 border-black w-24 h-24 flex items-center justify-center mx-auto shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">2</div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter">Natural State</h4>
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40 leading-relaxed max-w-[200px] mx-auto">Measure without a bra or heavy clothing to capture pure anatomical data.</p>
              </div>
              <div className="space-y-8">
                 <div className="text-5xl font-black border-8 border-black w-24 h-24 flex items-center justify-center mx-auto shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">3</div>
                 <h4 className="text-2xl font-black uppercase tracking-tighter">Neutral Stance</h4>
                 <p className="text-[10px] font-black uppercase tracking-widest opacity-40 leading-relaxed max-w-[200px] mx-auto">Stand upright with natural posture. Do not pull the tape too tight.</p>
              </div>
           </div>
        </section>

        {/* Inline Process Section - Now at the end */}
        <section className="py-32 bg-[#F0F0F0] border-b-8 border-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">DATA ENTRY.</h2>
               <p className="text-xs font-black tracking-[0.4em] uppercase opacity-40 italic">Calibration required for Atelier access</p>
            </div>
            <InlineMeasurementWizard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
