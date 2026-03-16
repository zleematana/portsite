"use client";
import Image from "next/image";
import { useEffect, useRef, useMemo, useState } from "react";
import { GALLERY_IMAGES } from "@/lib/data";
import SectionReveal from "./SectionReveal";

const SHUFFLE_ORDER = [14, 2, 9, 4, 11, 0, 7, 13, 3, 8, 1, 12, 6, 10, 5];
const CELL_W   = 300; // px
const GAP      = 6;   // px
const AUTO_SPD = 0.7; // px per frame (~42px/s at 60fps)

function SprocketBar() {
  return (
    <div className="h-7 bg-[#080808] flex items-center px-2 gap-3 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div key={i} className="flex-shrink-0 w-5 h-3.5 rounded-sm bg-neutral-800 border border-neutral-700" />
      ))}
    </div>
  );
}

export default function GalleryStrip() {
  const [erroredImages, setErroredImages] = useState<Set<string>>(new Set());

  const trackRef  = useRef<HTMLDivElement>(null);
  const posRef    = useRef(0);
  const dragRef   = useRef({ active: false, lastX: 0 });
  const rafRef    = useRef<number>(0);

  // Shuffle once then double for seamless infinite loop
  const images = useMemo(() => {
    const shuffled = SHUFFLE_ORDER.map(
      (i) => GALLERY_IMAGES[i] ?? GALLERY_IMAGES[i % GALLERY_IMAGES.length]
    );
    return [...shuffled, ...shuffled];
  }, []);

  // Width of ONE full set (half the track)
  const halfWidth = GALLERY_IMAGES.length * (CELL_W + GAP);

  useEffect(() => {
    const tick = () => {
      if (!dragRef.current.active) {
        posRef.current -= AUTO_SPD;
      }
      // Seamless loop: once we've scrolled one full set, jump back
      if (posRef.current <= -halfWidth) posRef.current += halfWidth;
      if (posRef.current >  0)          posRef.current -= halfWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [halfWidth]);

  // ── Mouse drag ──────────────────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    dragRef.current = { active: true, lastX: e.clientX };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current.active) return;
    posRef.current += e.clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.clientX;
  };
  const stopDrag = () => { dragRef.current.active = false; };

  // ── Touch drag ──────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    dragRef.current = { active: true, lastX: e.touches[0].clientX };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragRef.current.active) return;
    posRef.current += e.touches[0].clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.touches[0].clientX;
  };

  return (
    <section className="py-20 bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <SectionReveal>
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl md:text-4xl text-white">Галерея</h2>
            <div className="flex-1 h-px bg-red-700/30" />
          </div>
          <p className="mt-3 text-neutral-500 text-sm">Листайте пальцем или мышью</p>
        </SectionReveal>
      </div>

      <SectionReveal>
        <div className="border-y border-neutral-800">
          <SprocketBar />

          {/* Drag wrapper — overflow hidden clips the track */}
          <div
            className="overflow-hidden bg-[#060606] py-1 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={stopDrag}
            onTouchCancel={stopDrag}
          >
            {/* Animated track */}
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                gap: `${GAP}px`,
                width: `${halfWidth * 2}px`,
              }}
            >
              {images.map((img, i) => {
                const hasError = erroredImages.has(img.src);
                return (
                  <div
                    key={`${img.src}-${i}`}
                    className="relative flex-shrink-0 overflow-hidden rounded-sm group"
                    style={{ width: `${CELL_W}px`, height: "clamp(330px, 38vw, 460px)" }}
                  >
                    {/* Placeholder */}
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-end p-4">
                      <span className="text-neutral-600 text-xs font-mono">{img.alt}</span>
                    </div>

                    {/* Image */}
                    {!hasError && (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover z-10 relative transition-[filter] duration-500 group-hover:brightness-110"
                        onError={() =>
                          setErroredImages((prev) => new Set([...prev, img.src]))
                        }
                        draggable={false}
                      />
                    )}

                    {/* Hover vignette */}
                    <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

          <SprocketBar />
        </div>
      </SectionReveal>
    </section>
  );
}
