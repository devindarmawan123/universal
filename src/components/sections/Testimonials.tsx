import Image from "next/image";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-ink py-20 md:py-28 overflow-hidden">
      <div className="section-shell">
        <SectionHeading
          kicker="Cerita murid"
          title="Bukan janji kami — ini hasil belajar mereka"
          tone="light"
        />
      </div>

      <div className="mt-14 flex gap-6 overflow-x-auto no-scrollbar snap-x-mandatory section-shell pb-4">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="snap-start-item shrink-0 w-[300px] md:w-[340px] bg-paper p-7 flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0 overflow-hidden">
                <Image
                  src={testimonial.photo}
                  alt={`Foto ${testimonial.name}`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-ink text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-charcoal/60">
                  {testimonial.context}
                </p>
              </div>
            </div>

            <p className="mt-5 text-charcoal/85 leading-relaxed text-[15px] flex-1">
              {testimonial.quote}
            </p>

            <p className="mt-5 pt-4 border-t border-hairline text-sm text-seal font-medium">
              {testimonial.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
