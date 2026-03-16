"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [clapOpen, setClapOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setClapOpen(true), 800);
    const t2 = setTimeout(() => setVisible(false), 1600);
    const t3 = setTimeout(() => onComplete(), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9998] bg-black flex flex-col items-center justify-center"
        >
          {/* Clapperboard */}
          <div className="relative w-48 h-40" style={{ perspective: "600px" }}>
            {/* Body */}
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-neutral-900 border-2 border-neutral-700 rounded-sm flex flex-col justify-center items-center gap-2 px-3">
              {/* Stripes on body */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-full h-1 bg-neutral-700 rounded-full" />
              ))}
              <p className="text-white font-mono text-xs tracking-widest mt-1 opacity-60">А. ЕФРЕМОВ</p>
            </div>

            {/* Clapper (top strip) */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: clapOpen ? -70 : 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ transformOrigin: "top center" }}
              className="absolute top-0 left-0 right-0 h-14 bg-neutral-800 border-2 border-neutral-600 rounded-sm overflow-hidden origin-top"
            >
              {/* Diagonal stripes */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #991b1b 0px, #991b1b 12px, #1a1a1a 12px, #1a1a1a 24px)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-mono text-xs tracking-widest font-bold bg-black/60 px-2 py-0.5 rounded">
                  CLAP
                </span>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 text-neutral-500 font-mono text-xs tracking-[0.3em] uppercase"
          >
            Загрузка...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
