"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/data";
import Button from "@/components/ui/Button";

const AUTO_ADVANCE_MS = 6500;

export default function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((i + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <section
      id="beranda"
      aria-label="Sorotan Qiao Mandarin Institute"
      className="relative h-[88vh] min-h-[560px] max-h-[820px] w-full overflow-hidden bg-ink"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
        </div>
      ))}

      <div className="relative h-full section-shell flex flex-col justify-end pb-20 md:pb-24">
        <div className="max-w-xl">
          <p className="text-paper/75 text-sm mb-4">{slide.eyebrow}</p>
          <h1 className="font-display text-paper text-4xl md:text-6xl leading-[1.08]">
            {slide.headline}
          </h1>
          <p className="mt-5 text-paper/80 text-base md:text-lg leading-relaxed max-w-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href="#daftar" variant="primary">
              Daftar Sekarang
            </Button>
            <Button as="a" href="#cara-mulai" variant="ghost">
              Lihat Cara Mulai
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 md:right-10 flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Ke slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-[3px] w-8 bg-paper/30 relative overflow-hidden"
            >
              {i === index && (
                <span className="absolute inset-0 bg-paper" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            aria-label="Slide sebelumnya"
            onClick={() => goTo(index - 1)}
            className="w-9 h-9 flex items-center justify-center border border-paper/30 text-paper hover:bg-paper/10 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            aria-label="Slide berikutnya"
            onClick={() => goTo(index + 1)}
            className="w-9 h-9 flex items-center justify-center border border-paper/30 text-paper hover:bg-paper/10 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
