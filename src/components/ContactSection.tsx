"use client";
import { Send, MessageCircle, Instagram, LucideProps } from "lucide-react";
import SectionReveal from "./SectionReveal";
import { CONTACT_LINKS } from "@/lib/data";
import { ElementType } from "react";

const ICON_MAP: Record<string, ElementType<LucideProps>> = {
  Send,
  MessageCircle,
  Instagram,
};

export default function ContactSection() {
  return (
    <section className="py-12 px-6 bg-[#070707] border-t border-neutral-900">
      <div className="max-w-3xl mx-auto text-center">
        <SectionReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-red-700 mb-4 font-sans">
            Контакты
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Свяжитесь со мной
          </h2>
          <div className="w-16 h-px bg-red-700 mx-auto mb-6" />
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-12">
            Доступен для съёмок, театра, бани, сауны,
            <br />
            да и просто пьянки. За любой движ.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="flex flex-wrap gap-4 justify-center">
            {CONTACT_LINKS.map((link) => {
              const Icon = ICON_MAP[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border border-red-700/40 hover:border-red-700 hover:bg-red-700/15 text-white px-8 py-4 rounded-full transition-all duration-300"
                >
                  {Icon && (
                    <Icon className="w-4 h-4 text-red-700 group-hover:text-red-500 transition-colors" />
                  )}
                  <span className="text-sm tracking-wide">{link.label}</span>
                </a>
              );
            })}
          </div>
        </SectionReveal>

        {/* Footer */}
        <SectionReveal delay={0.4}>
          <p className="mt-10 text-neutral-700 text-xs font-mono tracking-widest">
            © {new Date().getFullYear()} Алексей Ефремов
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
