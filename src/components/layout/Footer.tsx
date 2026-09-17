import { navLinks, socialLinks, locationInfo } from "@/lib/data";
import SocialIcon from "@/components/ui/SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="section-shell py-16 grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl">Universal</span>
            <span className="font-display italic text-xl text-brass-light">ETC</span>
          </div>
          <p className="mt-4 text-sm text-paper/70 leading-relaxed max-w-xs">
            Kursus bahasa Mandarin dengan kurikulum bertingkat, pengajar
            bersertifikat, dan pendampingan sampai ke ruang kuliah atau kantor
            di Tiongkok.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center border border-paper/20 hover:border-paper/60 hover:bg-paper/5 transition-colors"
              >
                <SocialIcon id={social.id} className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper/90 mb-4">Jelajahi</p>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-paper/65 hover:text-paper transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper/90 mb-4">Hubungi Kami</p>
          <ul className="space-y-3 text-sm text-paper/65">
            <li>{locationInfo.address}</li>
            <li>{locationInfo.phone}</li>
            <li>{locationInfo.hours}</li>
          </ul>
          <div className="mt-4 space-y-1.5 text-sm">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-paper/70 hover:text-paper transition-colors"
              >
                {social.label} — {social.handle}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="section-shell py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} Qiao Mandarin Institute. Seluruh hak cipta dilindungi.</p>
          <p>Jakarta Barat, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
