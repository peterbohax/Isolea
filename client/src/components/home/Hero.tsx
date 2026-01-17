import { motion } from "framer-motion";
import { Link } from "wouter";
import heroMain from "@assets/generated_images/full_body_swimwear_campaign_beach_rocky.png";
import heroDetail from "@assets/generated_images/extreme_close_up_swimsuit_model_cinematic.png";

export function Hero() {
  return (
    <section className="relative w-full bg-white pt-20">
      <div className="flex flex-col">
        {/* Massive Headline Marquee */}
        <div className="marquee border-y-4 border-black py-4 overflow-hidden">
          <div className="marquee-content whitespace-nowrap">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[12vw] font-black tracking-tighter leading-none">
                ISOLAE ISOLAE ISOLAE
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-screen lg:h-[120vh]">
          {/* Main Large Image */}
          <div className="relative flex-[2] overflow-hidden border-r-4 border-black min-h-[500px]">
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={heroMain} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-white text-[25vw] font-black leading-none mix-blend-difference">ISOLAE.</h2>
            </div>
          </div>

          {/* Right Column: Text & Detail Shot */}
          <div className="flex-1 flex flex-col border-b-4 border-black lg:border-b-0">
             <div className="p-10 md:p-16 flex-1 flex flex-col justify-center bg-white">
                <span className="text-xs font-black tracking-[0.5em] uppercase mb-8 block underline decoration-4 underline-offset-8 text-accent">Anatomical Sculpt</span>
                <h1 className="text-7xl md:text-9xl font-black mb-10 tracking-tighter">DATA <br/>DRIVEN <br/>CUT.</h1>
                <p className="text-sm font-bold uppercase tracking-widest leading-loose mb-12 max-w-sm">
                  Risk taking silhouettes. Zero compromise. Studio engineered for the fearless.
                </p>
                <div className="flex flex-col gap-4">
                  <Link href="/shop" className="btn-primary text-center">Shop Campaign</Link>
                  <Link href="/fit-guide" className="text-xs font-black tracking-[0.3em] uppercase hover:text-accent transition-colors">Enter Your Atelier Profile →</Link>
                </div>
             </div>
             
             <div className="flex-1 border-t-4 border-black overflow-hidden relative min-h-[300px]">
                <img 
                  src={heroDetail} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-black text-white px-4 py-2 text-[10px] font-black tracking-widest uppercase">
                  ARCHIVE / 01
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
