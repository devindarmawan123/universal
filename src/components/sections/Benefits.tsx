import { benefits } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Benefits() {
  return (
    <section id="manfaat" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Ke mana Mandarin bisa membawa Anda"
          title="Bukan cuma bisa bicara — ini yang alumni kami capai"
          align="left"
        />

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="border-t border-hairline pt-6">
              <p className="text-sm text-seal font-medium">{benefit.tag}</p>
              <h3 className="mt-2 font-display text-2xl text-ink leading-snug">
                {benefit.title}
              </h3>
              <p className="mt-3 text-charcoal/75 leading-relaxed max-w-md">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
