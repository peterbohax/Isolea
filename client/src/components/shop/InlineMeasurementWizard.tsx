import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Check, ChevronRight, ChevronLeft, Fingerprint, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export function InlineMeasurementWizard() {
  const [step, setStep] = useState(1); // Start directly with the first measurement
  const totalSteps = 4;

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const steps = [
    {
      id: 1,
      title: "TORSO LENGTH",
      description: "THE CRITICAL DIMENSION. MEASURE STANDING, FROM SHOULDER DOWN FRONT, UNDER STRIDE, AND BACK TO START.",
      placeholder: "000",
      landmark: "SHOULDER TO SHOULDER / VERTICAL",
      video: "https://player.vimeo.com/external/371433846.hd.mp4?s=231da643f79ef62ef902374b5c77e21b7904325c&profile_id=175&oauth2_token_id=57447761" // Placeholder stock video
    },
    {
      id: 2,
      title: "FULL BUST",
      description: "MAXIMUM CIRCUMFERENCE AT THE HIGHEST POINT. MEASURE WITHOUT BRA FOR PURE ANATOMICAL DATA.",
      placeholder: "000",
      landmark: "APEX CIRCUMFERENCE",
      video: "https://player.vimeo.com/external/371433846.hd.mp4?s=231da643f79ef62ef902374b5c77e21b7904325c&profile_id=175&oauth2_token_id=57447761"
    },
    {
      id: 3,
      title: "UNDERBREAST",
      description: "THE ARCHITECTURAL BASE. TIGHT MEASUREMENT DIRECTLY BELOW THE BREAST TISSUE.",
      placeholder: "000",
      landmark: "RIB CAGE ANCHOR",
      video: "https://player.vimeo.com/external/371433846.hd.mp4?s=231da643f79ef62ef902374b5c77e21b7904325c&profile_id=175&oauth2_token_id=57447761"
    },
    {
      id: 4,
      title: "LOWER HIPS",
      description: "THE WIDEST ANATOMICAL POINT. ENSURES NON-SLIP SCULPTING ACROSS THE PELVIC ARCH.",
      placeholder: "000",
      landmark: "PELVIC MAXIMUM",
      video: "https://player.vimeo.com/external/371433846.hd.mp4?s=231da643f79ef62ef902374b5c77e21b7904325c&profile_id=175&oauth2_token_id=57447761"
    }
  ];

  if (step === 5) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl mx-auto bg-black text-white p-20 border-8 border-accent text-center"
      >
        <ShieldCheck className="w-24 h-24 mx-auto mb-8 text-accent" />
        <h2 className="text-6xl font-black mb-6 tracking-tighter uppercase leading-none">DATA COMMITTED.</h2>
        <p className="text-sm font-bold uppercase tracking-[0.3em] leading-loose opacity-60 mb-12">
          Your anatomical profile is now active in the Isolae Atelier. <br/>
          Every detail has been logged and matched against our pattern library. <br/>
          You are cleared for bespoke production.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
           <Link href="/shop" className="btn-primary !bg-accent !border-accent">PROCEED TO COLLECTION</Link>
           <button onClick={() => setStep(1)} className="text-xs font-black tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity">REVIEW DATA POINTS</button>
        </div>
      </motion.div>
    );
  }

  const currentStepData = steps[step - 1];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white border-8 border-black overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* Left: Embedded Video Guide */}
        <div className="flex-1 bg-black text-white relative overflow-hidden flex flex-col">
          <div className="relative flex-1 bg-neutral-900 overflow-hidden">
             <video 
               key={currentStepData.video}
               autoPlay 
               loop 
               muted 
               playsInline
               className="w-full h-full object-cover grayscale opacity-70"
             >
               <source src={currentStepData.video} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute top-8 left-8 flex items-center gap-4">
                <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-black text-sm">
                  {step}
                </div>
                <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-60">LANDMARK / {currentStepData.landmark}</span>
             </div>
          </div>
          
          <div className="p-10 border-t-4 border-white/10">
             <h3 className="text-4xl font-black mb-4 tracking-tighter uppercase leading-none">
               {currentStepData.title}
             </h3>
             <p className="text-[10px] font-bold leading-relaxed opacity-60 uppercase tracking-[0.2em]">
               {currentStepData.description}
             </p>
          </div>
        </div>

        {/* Right: Brutalist Input Area */}
        <div className="flex-1 p-12 md:p-16 flex flex-col bg-white">
          <div className="flex justify-between items-start mb-16">
             <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.5em] opacity-40 uppercase mb-2">Protocol Status</span>
                <span className="text-4xl font-black uppercase tracking-tighter text-accent">
                   {Math.round(((step - 1) / totalSteps) * 100)}%
                </span>
             </div>
             <div className="text-[10px] font-black tracking-widest opacity-20 uppercase writing-vertical h-20">
               ISOLAE // DATA_INPUT
             </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  <div className="space-y-6">
                    <Label className="text-xs font-black tracking-[0.4em] uppercase opacity-60">ANATOMICAL DATA (CM)</Label>
                    <div className="relative">
                      <Input 
                        autoFocus
                        type="number" 
                        placeholder={currentStepData.placeholder}
                        className="text-[10vw] lg:text-[8vw] font-black h-auto border-0 border-b-8 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:opacity-5 leading-none"
                      />
                      <span className="absolute right-0 bottom-6 text-2xl font-black opacity-10">CM</span>
                    </div>
                  </div>

                  <div className="bg-black text-white p-8 border-l-[1rem] border-accent flex gap-6 items-center">
                    <div className="text-2xl font-black opacity-20">!</div>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] leading-relaxed">
                      PRECISION IS NON-NEGOTIABLE. DATA OUTSIDE NORMALIZED CURVES TRIGGERS CUSTOM PATTERN ARCHITECTURE.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
          </div>

          <div className="flex justify-between items-center mt-16 gap-4">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={step === 1}
              className="h-16 flex-1 text-[10px] font-black tracking-[0.2em] uppercase border-4 border-black hover:bg-black hover:text-white rounded-none transition-all disabled:opacity-10"
            >
              <ChevronLeft className="w-4 h-4 mr-2" /> BACK
            </Button>
            
            <Button 
              onClick={nextStep} 
              className="h-16 flex-[2] bg-black text-white text-[10px] font-black tracking-[0.2em] uppercase border-4 border-black hover:bg-accent hover:border-accent rounded-none transition-all"
            >
              {step < totalSteps ? "COMMIT DATA" : "VALIDATE ALL DATA"} <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
