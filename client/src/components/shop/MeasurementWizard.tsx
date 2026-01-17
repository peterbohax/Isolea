import { useState, useCallback } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Check,
  ChevronRight,
  ChevronLeft,
  PlayCircle,
  Fingerprint,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MEASUREMENT_STEPS } from '@shared/constants';

const TOTAL_STEPS = MEASUREMENT_STEPS.length;

export function MeasurementWizard() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const nextStep = useCallback(
    () => setStep((s) => Math.min(s + 1, TOTAL_STEPS)),
    []
  );
  const prevStep = useCallback(() => setStep((s) => Math.max(s - 1, 1)), []);

  const currentStepData = MEASUREMENT_STEPS[step - 1];
  const progressPercent = Math.round(((step - 1) / TOTAL_STEPS) * 100);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="group relative overflow-hidden bg-black text-white px-12 py-8 text-xl font-black uppercase tracking-[0.3em] transition-all hover:bg-accent border-4 border-black">
          <span className="relative z-10 flex items-center gap-4">
            <Fingerprint className="w-8 h-8" />
            INITIALIZE ATELIER DATA
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <span className="absolute inset-0 flex items-center justify-center text-black font-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
            START DATA INPUT
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-none w-screen h-screen m-0 p-0 bg-white border-0 flex flex-col">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Visual Guide */}
          <div className="flex-1 bg-black text-white p-12 md:p-24 flex flex-col justify-between relative overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black">
            <div className="absolute inset-0 opacity-40 grayscale contrast-150">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000"
                className="w-full h-full object-cover"
                alt="Landmark"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 border-2 border-white flex items-center justify-center font-black">
                  {step}
                </div>
                <span className="text-xs font-black tracking-[0.5em] uppercase opacity-60">
                  LANDMARK / {currentStepData.landmark}
                </span>
              </div>
              <h3 className="text-7xl md:text-[10vw] font-black mt-4 mb-8 leading-[0.8] tracking-tighter">
                {currentStepData.title}
              </h3>
              <p className="text-sm font-bold leading-loose opacity-80 uppercase tracking-[0.2em] max-w-md">
                {currentStepData.description}
              </p>
            </div>

            <div className="relative z-10 flex items-end justify-between">
              <button className="flex items-center gap-6 group text-xs font-black tracking-[0.4em] uppercase hover:text-accent transition-colors">
                <PlayCircle className="w-20 h-20 group-hover:scale-110 transition-transform" />
                <span>
                  WATCH <br />
                  TECHNICAL <br />
                  DEMO
                </span>
              </button>
              <div className="text-vertical text-[10px] font-black tracking-widest opacity-20 uppercase">
                ISOLAE ATELIER // PROTOCOL 01
              </div>
            </div>
          </div>

          {/* Right: Input Form */}
          <div className="flex-1 p-12 md:p-24 flex flex-col bg-white">
            <div className="flex justify-between items-start mb-20">
              <div className="flex flex-col">
                <span className="text-[10px] font-black tracking-[0.5em] opacity-40 uppercase mb-2">
                  Progress Monitor
                </span>
                <span className="text-4xl font-black uppercase tracking-tighter">
                  {progressPercent}% COMPLETE
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs font-black tracking-widest uppercase hover:text-accent transition-colors border-b-4 border-black"
              >
                ABORT
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-12"
                >
                  <div className="space-y-6">
                    <Label className="text-xs font-black tracking-[0.5em] uppercase text-accent underline underline-offset-8 decoration-2">
                      REQUIRED DATA POINT (CM)
                    </Label>
                    <div className="relative">
                      <Input
                        autoFocus
                        type="number"
                        placeholder={currentStepData.placeholder}
                        className="text-[15vw] md:text-[12vw] font-black h-auto border-0 border-b-8 border-black rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-all placeholder:opacity-5 leading-none"
                      />
                      <span className="absolute right-0 bottom-8 text-4xl font-black opacity-10">
                        CM
                      </span>
                    </div>
                  </div>

                  <div className="bg-black text-white p-10 border-l-[1.5rem] border-accent flex gap-8 items-center">
                    <div className="text-4xl font-black opacity-20">!</div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] leading-loose">
                      CRITICAL ERROR PREVENTION: INACCURATE{' '}
                      {currentStepData.title} DATA WILL RESULT IN A
                      NON-CONFORMING SCULPT. CUSTOM PIECES ARE EXEMPT FROM
                      RETURN PROTOCOLS.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between items-center mt-20 gap-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
                className="flex-1 h-20 text-xs font-black tracking-[0.3em] uppercase border-4 border-black hover:bg-black hover:text-white rounded-none transition-all disabled:opacity-10"
              >
                <ChevronLeft className="w-5 h-5 mr-2" /> REVERSE
              </Button>

              {step < TOTAL_STEPS ? (
                <Button
                  onClick={nextStep}
                  className="flex-[2] h-20 bg-black text-white text-xs font-black tracking-[0.3em] uppercase border-4 border-black hover:bg-accent hover:border-accent rounded-none transition-all"
                >
                  COMMIT DATA <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={() => setIsOpen(false)}
                  className="flex-[2] h-20 bg-accent text-white text-xs font-black tracking-[0.3em] uppercase border-4 border-accent hover:bg-black hover:border-black rounded-none transition-all"
                >
                  FINALIZE ATELIER PROFILE <Check className="w-5 h-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
