import Image from "next/image";
import { teachers } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Teachers() {
  return (
    <section id="pengajar" className="bg-celadon py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Tim pengajar"
          title="Diajar oleh orang yang benar-benar memakai Mandarin setiap hari"
          description="Bukan sekadar lulusan kursus — para pengajar kami menempuh pendidikan atau bekerja langsung di lingkungan berbahasa Mandarin."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teachers.map((teacher) => (
            <div key={teacher.id}>
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={teacher.photo}
                  alt={`Foto ${teacher.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale-[15%]"
                />
                <span className="absolute top-3 left-3 w-6 h-6 border border-paper/70" aria-hidden />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">
                {teacher.name}
              </h3>
              <p className="text-sm text-seal font-medium">{teacher.role}</p>
              <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                {teacher.background}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
