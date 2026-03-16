"use client";
import SectionReveal from "./SectionReveal";
import { PHYSICAL_SPECS } from "@/lib/data";

export default function PhysicalSpecs() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Параметры</h2>
            <div className="flex-1 h-px bg-red-700/30" />
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
          {PHYSICAL_SPECS.map((spec, i) => (
            <SectionReveal key={spec.label} delay={i * 0.1} className="h-full">
              <div className="h-full bg-neutral-900 border border-red-700/20 rounded-lg p-6 text-center flex flex-col justify-center group hover:border-red-700/50 transition-colors duration-300">
                <p className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:text-red-400 transition-colors duration-300 break-words hyphens-auto">
                  {spec.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-neutral-500">
                  {spec.label}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
