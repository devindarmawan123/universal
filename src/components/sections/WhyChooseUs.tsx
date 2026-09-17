import { whyUsPoints } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhyChooseUs() {
  return (
    <section id="tentang" className="bg-celadon py-20 md:py-28">
      <div className="section-shell grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16">
        <div className="md:sticky md:top-28 self-start">
          <SectionHeading
            kicker="Kenapa Qiao Mandarin"
            title="Belajar Mandarin dengan arah yang jelas, bukan sekadar hafalan"
            description="Kami membangun setiap kelas di sekitar satu pertanyaan: apa yang harus Anda kuasai untuk sampai ke tujuan Anda — kuliah, kerja, atau ujian HSK?"
          />
        </div>

        <ul>
          {whyUsPoints.map((point) => (
            <li
              key={point.id}
              className="hr-hairline first:border-t-0 py-6 flex gap-5"
            >
              <span
                aria-hidden
                className="mt-2.5 w-2 h-2 rounded-full bg-seal shrink-0"
              />
              <div>
                <h3 className="font-display text-xl text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-charcoal/75 leading-relaxed max-w-lg">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
