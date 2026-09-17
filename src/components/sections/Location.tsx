import { MapPin, Clock, Phone } from "lucide-react";
import { locationInfo } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import RegistrationForm from "@/components/sections/RegistrationForm";

export default function Location() {
  return (
    <section id="daftar" className="bg-celadon py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Kunjungi atau daftar dari rumah"
          title="Temukan kami, atau langsung isi formulirnya"
          align="left"
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <RegistrationForm />

          <div className="flex flex-col">
            <div className="relative w-full h-[280px] md:h-[340px] border border-hairline">
              <iframe
                title="Lokasi Qiao Mandarin Institute"
                src={locationInfo.mapEmbedUrl}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-6 space-y-4 bg-paper p-7 flex-1">
              <div className="flex gap-3">
                <MapPin size={18} className="text-seal mt-0.5 shrink-0" />
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  {locationInfo.address}
                </p>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="text-seal mt-0.5 shrink-0" />
                <p className="text-sm text-charcoal/80">{locationInfo.hours}</p>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-seal mt-0.5 shrink-0" />
                <p className="text-sm text-charcoal/80">{locationInfo.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
