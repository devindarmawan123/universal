import {
  HeroSlide,
  WhyUsPoint,
  StatItem,
  Benefit,
  Teacher,
  StartStep,
  Testimonial,
  FaqItem,
  NavLink,
  SocialLink,
} from "./types";

export const navLinks: NavLink[] = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Manfaat", href: "#manfaat" },
  { label: "Pengajar", href: "#pengajar" },
  { label: "Cara Mulai", href: "#cara-mulai" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Lokasi & Daftar", href: "#daftar" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    image: "https://picsum.photos/id/1076/1600/900",
    eyebrow: "Angkatan baru dibuka setiap bulan",
    headline: "Mandarin adalah jembatan Anda menuju China",
    description:
      "Kurikulum terstruktur dari nol hingga mahir, dipandu pengajar bersertifikat HSK yang pernah tinggal dan belajar di Tiongkok.",
  },
  {
    id: "slide-2",
    image: "https://picsum.photos/id/1005/1600/900",
    eyebrow: "Kelas kecil, maksimal 8 orang",
    headline: "Belajar bicara, bukan sekadar hafal kosakata",
    description:
      "70% waktu kelas dipakai untuk latihan percakapan langsung, roleplay, dan simulasi situasi nyata di Tiongkok.",
  },
  {
    id: "slide-3",
    image: "https://picsum.photos/id/1074/1600/900",
    eyebrow: "Tingkat kelulusan HSK 96%",
    headline: "Siap ujian HSK, siap daftar beasiswa",
    description:
      "Kelas persiapan HSK 1–6 dengan simulasi ujian rutin dan bimbingan berkas beasiswa ke universitas mitra kami.",
  },
];

export const whyUsPoints: WhyUsPoint[] = [
  {
    id: "why-1",
    title: "Kurikulum bertingkat yang jelas",
    description:
      "Setiap level punya target kompetensi yang terukur, dari HSK 1 sampai HSK 6, jadi Anda selalu tahu posisi dan langkah berikutnya.",
  },
  {
    id: "why-2",
    title: "Pengajar dwibahasa berpengalaman",
    description:
      "Semua pengajar kami fasih Mandarin dan Indonesia, sehingga penjelasan tata bahasa yang rumit tetap mudah dicerna.",
  },
  {
    id: "why-3",
    title: "Kelas kecil, perhatian penuh",
    description:
      "Satu kelas maksimal 8 murid, jadi setiap orang mendapat kesempatan berbicara dan koreksi pelafalan langsung.",
  },
  {
    id: "why-4",
    title: "Koneksi ke kampus dan mitra di Tiongkok",
    description:
      "Kami bekerja sama dengan lembaga bahasa di Beijing, Shanghai, dan Taipei untuk program pertukaran dan beasiswa.",
  },
  {
    id: "why-5",
    title: "Jadwal fleksibel",
    description:
      "Pilih kelas pagi, sore, atau akhir pekan. Ada juga kelas daring untuk yang berdomisili di luar kota.",
  },
  {
    id: "why-6",
    title: "Pendampingan sampai tujuan tercapai",
    description:
      "Bukan cuma mengajar di kelas — kami membantu persiapan wawancara beasiswa, CV, dan simulasi tes sampai Anda siap.",
  },
];

export const stats: StatItem[] = [
  { id: "stat-1", value: "1.200+", label: "alumni sejak 2014" },
  { id: "stat-2", value: "96%", label: "tingkat kelulusan HSK" },
  { id: "stat-3", value: "18", label: "pengajar bersertifikat" },
  { id: "stat-4", value: "40+", label: "alumni kuliah di Tiongkok" },
];

export const benefits: Benefit[] = [
  {
    id: "benefit-1",
    tag: "Pendidikan",
    title: "Kuliah S1–S2 di Tiongkok, Taiwan, atau Singapura",
    description:
      "Sertifikat HSK dari kelas persiapan kami memenuhi syarat minimum sebagian besar beasiswa CSC, Taiwan ICDF, dan universitas mitra.",
  },
  {
    id: "benefit-2",
    tag: "Karier",
    title: "Akses ke perusahaan yang berhubungan dengan Tiongkok",
    description:
      "Alumni kami bekerja sebagai penerjemah, staf ekspor-impor, dan liaison officer di perusahaan manufaktur dan e-commerce lintas negara.",
  },
  {
    id: "benefit-3",
    tag: "Sertifikasi",
    title: "Nilai HSK yang diakui secara internasional",
    description:
      "Kelas simulasi ujian rutin membantu Anda memetakan kelemahan sebelum hari-H, bukan baru tahu saat nilai keluar.",
  },
  {
    id: "benefit-4",
    tag: "Jaringan",
    title: "Komunitas alumni aktif di Tiongkok",
    description:
      "Grup alumni kami tersebar di Beijing, Shanghai, dan Guangzhou — tempat bertanya soal visa, tempat tinggal, sampai budaya kerja.",
  },
];

export const teachers: Teacher[] = [
  {
    id: "teacher-1",
    name: "Lie Mei Hua, M.Pd.",
    role: "Kepala Pengajar",
    background:
      "S2 Pendidikan Bahasa Tionghoa, Beijing Language and Culture University. Penguji HSK bersertifikat sejak 2016.",
    photo: "https://picsum.photos/id/1027/400/400",
  },
  {
    id: "teacher-2",
    name: "Chandra Wijaya, B.A.",
    role: "Pengajar Percakapan",
    background:
      "Alumnus program pertukaran 2 tahun di Shanghai International Studies University. Fokus pada Mandarin untuk dunia kerja.",
    photo: "https://picsum.photos/id/1012/400/400",
  },
  {
    id: "teacher-3",
    name: "Grace Tanuwijaya, M.A.",
    role: "Pengajar Persiapan HSK",
    background:
      "S2 Linguistik Terapan, National Taiwan Normal University. Sudah membimbing lebih dari 300 murid lulus HSK 4–6.",
    photo: "https://picsum.photos/id/1011/400/400",
  },
  {
    id: "teacher-4",
    name: "Steven Halim, S.S.",
    role: "Pengajar Kelas Anak & Remaja",
    background:
      "S1 Sastra Tionghoa, Universitas Kristen Maranatha. Spesialis metode belajar interaktif untuk usia 8–15 tahun.",
    photo: "https://picsum.photos/id/1013/400/400",
  },
];

export const startSteps: StartStep[] = [
  {
    id: "step-1",
    number: "01",
    title: "Isi formulir pendaftaran",
    description:
      "Ceritakan tujuan belajar Anda — kuliah, kerja, atau persiapan HSK — supaya kami bisa menyarankan kelas yang paling pas.",
  },
  {
    id: "step-2",
    number: "02",
    title: "Ikuti tes penempatan gratis",
    description:
      "Tes tertulis dan wawancara singkat sekitar 30 menit untuk mengukur level Anda saat ini, walau belum pernah belajar Mandarin sama sekali.",
  },
  {
    id: "step-3",
    number: "03",
    title: "Konsultasi jadwal dan kelas",
    description:
      "Tim akademik menghubungi Anda untuk menentukan kelas, jadwal, dan target belajar bersama.",
  },
  {
    id: "step-4",
    number: "04",
    title: "Mulai belajar di kelas pertama",
    description:
      "Hadir di kelas percobaan pertama tanpa komitmen jangka panjang — rasakan dulu cara mengajar kami sebelum melanjutkan.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "testi-1",
    name: "Angelina Putri",
    context: "Mahasiswa, kini kuliah di Beijing Normal University",
    quote:
      "Saya mulai dari nol dan sempat ragu bisa lolos beasiswa CSC. Simulasi wawancara di kelas persiapan benar-benar mirip aslinya.",
    result: "HSK naik dari 0 ke level 5 dalam 14 bulan",
    photo: "https://picsum.photos/id/1025/300/300",
  },
  {
    id: "testi-2",
    name: "Reza Firmansyah",
    context: "Staf ekspor-impor, PT Sinar Abadi Logistics",
    quote:
      "Kelas malam sangat membantu karena saya masih kerja kantoran. Materinya juga langsung relevan dengan istilah bisnis sehari-hari.",
    result: "HSK 4 dalam 8 bulan sambil bekerja penuh waktu",
    photo: "https://picsum.photos/id/1006/300/300",
  },
  {
    id: "testi-3",
    name: "Keluarga Wijaya",
    context: "Orang tua murid kelas anak, usia 10 tahun",
    quote:
      "Anak saya tadinya menganggap Mandarin sulit dan membosankan. Sekarang dia yang minta ikut kelas tambahan setiap minggu.",
    result: "Lulus HSK 2 di usia 11 tahun",
    photo: "https://picsum.photos/id/1062/300/300",
  },
  {
    id: "testi-4",
    name: "Dimas Prasetyo",
    context: "Penerjemah lepas untuk klien Tiongkok",
    quote:
      "Latihan pelafalan nada yang intensif di awal itu terasa berat, tapi justru itu yang bikin klien saya bilang Mandarin saya jelas didengar.",
    result: "HSK 6 dan sertifikat penerjemah tersumpah",
    photo: "https://picsum.photos/id/1084/300/300",
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "Saya belum pernah belajar Mandarin sama sekali, boleh daftar?",
    answer:
      "Boleh. Sebagian besar murid kami memang mulai dari nol. Tes penempatan akan menempatkan Anda di kelas pemula yang membahas pelafalan dan aksara dasar dari awal.",
  },
  {
    id: "faq-2",
    question: "Berapa lama waktu yang dibutuhkan sampai bisa ikut ujian HSK?",
    answer:
      "Rata-rata murid butuh 6–8 bulan untuk siap HSK 1–2, dan 12–18 bulan untuk HSK 4, tergantung intensitas belajar dan latihan mandiri di luar kelas.",
  },
  {
    id: "faq-3",
    question: "Apakah ada kelas daring untuk yang di luar kota?",
    answer:
      "Ada. Kelas daring memakai materi dan jadwal yang sama dengan kelas tatap muka, dengan sesi live interaktif, bukan rekaman video satu arah.",
  },
  {
    id: "faq-4",
    question: "Apakah lembaga ini membantu proses pendaftaran beasiswa?",
    answer:
      "Ya, untuk murid yang sudah mencapai HSK 4 ke atas, tim akademik kami membantu mempersiapkan berkas dan simulasi wawancara beasiswa ke universitas mitra.",
  },
  {
    id: "faq-5",
    question: "Bagaimana kalau saya harus mengulang atau ganti jadwal kelas?",
    answer:
      "Anda bisa pindah kelas atau mengejar materi tertinggal dengan kelas pengganti, selama tempat di jadwal tujuan masih tersedia.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/qiaomandarin",
    handle: "@qiaomandarin",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    handle: "+62 812-3456-7890",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://tiktok.com/@qiaomandarin",
    handle: "@qiaomandarin",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: "https://youtube.com/@qiaomandarin",
    handle: "Qiao Mandarin Institute",
  },
];

export const locationInfo = {
  address: "Jl. Kebon Jeruk Raya No. 88, Jakarta Barat, DKI Jakarta 11530",
  hours: "Senin–Sabtu, 09.00–20.00 WIB",
  phone: "+62 812-3456-7890",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Jakarta+Barat&output=embed",
};
