"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

const programOptions = [
  "Kelas Pemula (persiapan HSK 1–2)",
  "Kelas Menengah (persiapan HSK 3–4)",
  "Persiapan HSK Lanjut (HSK 5–6)",
  "Kelas Anak & Remaja",
  "Kelas Percakapan Bisnis",
];

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: sambungkan ke endpoint pendaftaran / layanan email sungguhan.
    // Simulasi pengiriman supaya UI form tetap bisa diuji tanpa backend.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="bg-paper p-8">
        <h3 className="font-display text-2xl text-ink">
          Pendaftaran terkirim
        </h3>
        <p className="mt-3 text-charcoal/75 leading-relaxed">
          Terima kasih. Tim akademik kami akan menghubungi Anda lewat
          WhatsApp dalam 1x24 jam kerja untuk menjadwalkan tes penempatan
          gratis.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-seal font-medium"
        >
          Isi formulir lain
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-paper p-8">
      <h3 className="font-display text-2xl text-ink">Daftar sekarang</h3>
      <p className="mt-2 text-sm text-charcoal/70">
        Isi data singkat ini, tim kami akan menghubungi Anda untuk jadwal tes
        penempatan gratis.
      </p>

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-charcoal/80 mb-1.5">
            Nama lengkap
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Nama sesuai KTP"
            className="w-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-charcoal/40 focus:outline-none focus:border-seal"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm text-charcoal/80 mb-1.5">
              Nomor WhatsApp
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="08xx-xxxx-xxxx"
              className="w-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-charcoal/40 focus:outline-none focus:border-seal"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-charcoal/80 mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="nama@email.com"
              className="w-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-charcoal/40 focus:outline-none focus:border-seal"
            />
          </div>
        </div>

        <div>
          <label htmlFor="program" className="block text-sm text-charcoal/80 mb-1.5">
            Program yang diminati
          </label>
          <select
            id="program"
            name="program"
            required
            defaultValue=""
            className="w-full border border-ink/20 bg-transparent px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-seal"
          >
            <option value="" disabled>
              Pilih program
            </option>
            {programOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" variant="primary" disabled={loading} className="w-full mt-1">
          {loading ? "Mengirim..." : "Kirim Pendaftaran"}
        </Button>
      </div>
    </form>
  );
}
