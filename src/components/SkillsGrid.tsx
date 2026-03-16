"use client";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { SKILLS_TAGS } from "@/lib/data";

const CHAOS = [
  { deg: -2,   size: "text-sm",   px: "px-4",  py: "py-2"   },
  { deg:  1,   size: "text-base", px: "px-5",  py: "py-2"   },
  { deg: -0.5, size: "text-xs",   px: "px-3",  py: "py-1.5" },
  { deg:  2,   size: "text-sm",   px: "px-5",  py: "py-2"   },
  { deg:  0,   size: "text-sm",   px: "px-6",  py: "py-2"   },
  { deg: -1.5, size: "text-base", px: "px-4",  py: "py-2"   },
  { deg:  1.5, size: "text-xs",   px: "px-4",  py: "py-1.5" },
  { deg: -2.5, size: "text-sm",   px: "px-5",  py: "py-2"   },
];

const FLOATS = [
  { yAmp: 4, dur: 2.8, rAmp: 0.7 },
  { yAmp: 3, dur: 3.4, rAmp: 0.4 },
  { yAmp: 5, dur: 2.5, rAmp: 1.0 },
  { yAmp: 3, dur: 3.8, rAmp: 0.5 },
  { yAmp: 4, dur: 3.1, rAmp: 0.8 },
];

export default function SkillsGrid() {
  return (
    <section className="py-20 px-6 bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Навыки</h2>
            <div className="flex-1 h-px bg-red-700/30" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {/* overflow-hidden clips the float animation so it doesn't expand the row height */}
          <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
            {SKILLS_TAGS.map((tag, i) => {
              const c = CHAOS[i % CHAOS.length];
              const f = FLOATS[i % FLOATS.length];
              return (
                <motion.span
                  key={tag}
                  // Entrance: handled by parent SectionReveal; start visible
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    y: [0, -f.yAmp, 0],
                    rotate: [c.deg, c.deg + f.rAmp, c.deg],
                  }}
                  transition={{
                    opacity: { duration: 0.4, delay: i * 0.04 },
                    y: { duration: f.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                    rotate: { duration: f.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                  }}
                  whileHover={{
                    scale: 1.18,
                    rotate: 0,
                    y: 0,
                    backgroundColor: "rgba(153,27,27,0.8)",
                    borderColor: "rgb(185,28,28)",
                    color: "#ffffff",
                    boxShadow: "0 0 20px rgba(153,27,27,0.5)",
                    transition: { duration: 0.15 },
                  }}
                  style={{ display: "inline-block" }}
                  className={`border border-red-700/25 text-neutral-300 ${c.size} ${c.px} ${c.py} rounded-full font-sans cursor-default`}
                >
                  {tag}
                </motion.span>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
