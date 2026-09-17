# Qiao Mandarin Institute — Website

Landing page untuk lembaga kursus bahasa Mandarin, dibuat dengan Next.js 14
(App Router) + TypeScript + Tailwind CSS.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur folder

```
src/app/
  layout.tsx        Root layout, setup font, navbar & footer global
  page.tsx           Merangkai semua section jadi satu halaman
  loading.tsx         Skeleton loading otomatis (konvensi Next.js App Router)
  globals.css        Style global & utility class kecil (hairline, seal-mark, dll)

src/components/
  layout/            Navbar, Footer, tombol WhatsApp mengambang
  sections/          Satu file per section halaman (Hero, WhyChooseUs, Benefits, dst)
  ui/                Komponen kecil yang dipakai berulang (Button, SectionHeading, ikon medsos)
  skeletons/         Blok skeleton untuk loading state

src/lib/
  data.ts            Semua konten teks (isi ini untuk ganti copy, testimoni, guru, dll)
  types.ts           Tipe TypeScript untuk data di atas
```

## Yang WAJIB diganti sebelum go-live

1. **Foto** — semua gambar sekarang pakai placeholder dari `picsum.photos`.
   Ganti URL di `src/lib/data.ts` (`heroSlides`, `teachers`, `testimonials`) dengan
   foto asli. Simpan di `public/images/` lalu pakai path lokal (`/images/nama-file.jpg`),
   atau host di layanan lain dan tambahkan domainnya di `next.config.mjs` →
   `images.remotePatterns`.

2. **Peta lokasi** — `locationInfo.mapEmbedUrl` di `src/lib/data.ts` masih pakai
   query generik "Jakarta Barat". Ganti dengan link embed Google Maps lokasi
   asli lembaga (Google Maps → Bagikan → Sematkan peta → salin URL di
   `src` iframe).

3. **Form pendaftaran** — `src/components/sections/RegistrationForm.tsx` saat ini
   hanya mensimulasikan pengiriman (belum terhubung ke backend apa pun).
   Sambungkan `handleSubmit` ke:
   - endpoint API sendiri, atau
   - layanan seperti Formspree/Resend/Google Sheets API, atau
   - Server Action Next.js yang mengirim email/menyimpan ke database.

4. **Nomor WhatsApp & medsos** — ganti `socialLinks` di `lib/data.ts`
   dengan akun Instagram, WhatsApp, TikTok, dan YouTube yang asli.

5. **Semua teks lain** (statistik, nama guru, testimoni, FAQ) ada di satu
   tempat: `src/lib/data.ts`. Tidak perlu menyentuh file komponen untuk ganti
   konten.

## Catatan desain

- Palet warna terinspirasi dari nuansa tinta & keramik seladon (bukan
  merah-emas klise "China"), didefinisikan sebagai token di
  `tailwind.config.ts` (`ink`, `celadon`, `paper`, `seal`, `brass`).
- Font: **Fraunces** untuk judul, **Plus Jakarta Sans** untuk teks — dimuat
   lewat `next/font/google` di `src/app/layout.tsx`, jadi butuh koneksi internet
  saat `npm run build` pertama kali (Next.js mengunduh file font).
