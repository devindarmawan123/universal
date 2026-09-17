"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="bg-celadon py-20 md:py-28">
      <div className="section-shell grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16">
        <SectionHeading
          kicker="Pertanyaan yang sering ditanyakan"
          title="Masih ragu? Ini yang biasanya orang tanyakan dulu"
        />

        <div>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="border-t border-hairline last:border-b">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg text-ink">
                    {faq.question}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-seal transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-5 text-charcoal/75 leading-relaxed max-w-lg">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
