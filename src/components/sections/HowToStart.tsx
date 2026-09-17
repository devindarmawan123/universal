import { startSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function HowToStart() {
  return (
    <section id="cara-mulai" className="bg-paper py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Cara mulai belajar"
          title="Empat langkah dari daftar sampai kelas pertama"
          align="center"
        />

        <div className="mt-16 grid md:grid-cols-4 gap-10 md:gap-6">
          {startSteps.map((step, i) => (
            <div key={step.id} className="relative">
              <p className="font-display text-4xl text-ink/15">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-xl text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">
                {step.description}
              </p>
              {i < startSteps.length - 1 && (
                <span
                  aria-hidden
                  className="hidden md:block absolute top-5 -right-3 w-6 border-t border-ink/20"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button as="a" href="#daftar" variant="primary">
            Isi Formulir Pendaftaran
          </Button>
        </div>
      </div>
    </section>
  );
}
