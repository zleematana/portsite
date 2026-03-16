"use client";
import SectionReveal from "./SectionReveal";
import { TIMELINE } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Опыт</h2>
            <div className="flex-1 h-px bg-red-700/30" />
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-red-700/20 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((entry, i) => {
              const isEven = i % 2 === 0;
              return (
                <SectionReveal key={entry.title} delay={i * 0.15}>
                  <div className={`relative flex items-start gap-8 md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-red-700 border-2 border-red-900 -translate-x-1.5 md:-translate-x-1.5 z-10 shadow-[0_0_12px_rgba(153,27,27,0.6)]" />

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block md:w-1/2" />

                    {/* Content card */}
                    <div className={`ml-10 md:ml-0 md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}>
                      <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 hover:border-red-700/30 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <span className="text-xs uppercase tracking-widest bg-red-700/20 text-red-400 border border-red-700/30 px-2.5 py-1 rounded-full">
                            {entry.type}
                          </span>
                          <span className="text-xs text-neutral-500 font-mono">{entry.year}</span>
                        </div>
                        <h3 className="font-serif text-xl text-white mb-2">{entry.title}</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">{entry.description}</p>
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
