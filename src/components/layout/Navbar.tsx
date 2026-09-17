"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-hairline">
      <div className="section-shell flex items-center justify-between h-[76px]">
        <a href="#" className="flex items-center gap-2 shrink-0 max-w-[67px]">
          <img src="images/logo_universal.png" alt="logo universal" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-charcoal/80 hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button as="a" href="#daftar" variant="primary">
            Daftar Sekarang
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          className="lg:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-hairline bg-paper">
          <nav className="section-shell flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-charcoal/85"
              >
                {link.label}
              </a>
            ))}
            <Button as="a" href="#daftar" variant="primary" className="w-full mt-2">
              Daftar Sekarang
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
