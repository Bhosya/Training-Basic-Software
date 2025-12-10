import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  memo,
  lazy,
  Suspense,
} from "react";
import {
  Sparkles,
  Copy,
  Laptop,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Minimize2,
  BookOpen,
  Monitor,
  Code,
  Layers,
  LayoutTemplate,
  Type,
  Play,
  Image as ImageIcon,
  MousePointer,
  Palette,
  Search,
  Wifi,
  Battery,
  Info,
  Users,
  X,
  Trash2,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Grid,
  Zap,
  Moon,
  Sun,
  Layout,
} from "lucide-react";

import ProjectApp from "./components/projectApp";

// --- HELPER FUNCTION UNTUK ICON ---
const getSlideIcon = (chapter) => {
  if (chapter.includes("HTML")) {
    return (
      <img
        src="/Materi/html.png"
        alt="HTML"
        className="w-10 h-10 object-contain"
        loading="lazy"
      />
    );
  }
  if (chapter.includes("CSS")) {
    return (
      <img
        src="/Materi/css.png"
        alt="CSS"
        className="w-10 h-10 object-contain"
        loading="lazy"
      />
    );
  }
  if (chapter.includes("Tailwind")) {
    return (
      <img
        src="/Materi/tailwind.png"
        alt="Tailwind"
        className="w-10 h-10 object-contain"
        loading="lazy"
      />
    );
  }
  return null;
};

const QuizSection = memo(({ slideTitle }) => {
  const quizList = quizBank[slideTitle];
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});

  useEffect(() => {
    setAnswers({});
    setChecked({});
  }, [slideTitle]);

  if (!quizList) return null;

  const total = quizList ? quizList.length : 0;
  const score = quizList.reduce((acc, q, idx) => {
    if (!checked[idx]) return acc;
    return acc + (answers[idx] === q.answer ? 1 : 0);
  }, 0);
  const checkedCount = Object.keys(checked).length;

  const handleSelect = useCallback((qIdx, optIdx) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  }, []);

  const handleCheck = useCallback(
    (qIdx) => {
      if (answers[qIdx] === undefined) return;
      setChecked((prev) => ({ ...prev, [qIdx]: true }));
    },
    [answers]
  );

  const handleReset = useCallback(() => {
    setAnswers({});
    setChecked({});
  }, []);

  return (
    <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 mt-4 space-y-3">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
          <Sparkles size={14} /> Quiz Cepat
        </div>
        <div className="text-xs text-slate-400">
          {checkedCount > 0
            ? `Benar ${score}/${checkedCount} (dari ${total} soal)`
            : "Pilih opsi, lalu cek per soal"}
        </div>
      </div>

      <div className="space-y-3">
        {quizList.map((q, qIdx) => {
          const selected = answers[qIdx];
          const isChecked = checked[qIdx];
          return (
            <div
              key={`${slideTitle}-${qIdx}`}
              className="rounded-xl border border-white/10 bg-slate-800/50 p-3 space-y-2"
            >
              <div className="flex items-start gap-2">
                <div className="text-[10px] font-bold text-emerald-200 px-2 py-1 bg-emerald-900/40 rounded">
                  Q{qIdx + 1}
                </div>
                <div className="text-sm text-white leading-relaxed flex-1">
                  {q.question}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selected === optIdx;
                  const isCorrect = isChecked && q.answer === optIdx;
                  const isWrong = isChecked && isSelected && !isCorrect;
                  return (
                    <button
                      key={`${slideTitle}-${qIdx}-${optIdx}`}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={`text-left rounded-lg border px-3 py-2 text-sm transition-colors ${
                        isCorrect
                          ? "border-emerald-400/80 bg-emerald-900/20 text-emerald-100"
                          : isWrong
                          ? "border-rose-400/80 bg-rose-900/20 text-rose-100"
                          : isSelected
                          ? "border-blue-400/70 bg-blue-900/20 text-blue-100"
                          : "border-white/10 bg-slate-900/40 text-slate-200 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span>{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {isChecked && q.explanation && (
                <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                  {q.explanation}
                </p>
              )}

              <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
                <span>
                  {selected === undefined
                    ? "Pilih jawaban dulu."
                    : isChecked
                    ? "Sudah dicek."
                    : "Klik cek untuk soal ini."}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCheck(qIdx)}
                    disabled={selected === undefined}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold disabled:opacity-40 transition"
                  >
                    Cek
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-2 text-xs text-slate-400">
        <div>
          Progress cek: {checkedCount}/{total} soal
        </div>
        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:border-white/30 transition"
        >
          Reset semua
        </button>
      </div>
    </div>
  );
});

const WhyWebsitePlayground = memo(() => {
  const personas = useMemo(
    () => [
      {
        key: "personal",
        label: "Personal / Portofolio",
        gradient: "from-blue-500 to-cyan-500",
        headline: "Punya 'rumah digital' untuk nunjukkin diri atau karya.",
        points: [
          "Bagikan CV, portofolio, atau link sosmed dalam 1 alamat rapi.",
          "Tampil profesional tanpa harus ngerti semua istilah teknis dulu.",
          "Bisa jadi tempat latihan sebelum masuk ke proyek nyata.",
        ],
      },
      {
        key: "umkm",
        label: "UMKM / Bisnis",
        gradient: "from-amber-500 to-orange-500",
        headline: "Toko yang buka 24 jam tanpa bayar sewa ruko.",
        points: [
          "Calon pelanggan langsung lihat produk, harga, dan kontak.",
          "Naikkan trust: terlihat resmi, bukan sekadar chat dadakan.",
          "Bisa dihubungkan ke WhatsApp, katalog, atau media sosial.",
        ],
      },
      {
        key: "komunitas",
        label: "Komunitas / Organisasi",
        gradient: "from-purple-500 to-pink-500",
        headline:
          "Satu pusat informasi untuk acara, dokumentasi, dan rekrutmen.",
        points: [
          "Jadwal kegiatan, galeri, dan form pendaftaran di satu tempat.",
          "Mempermudah anggota baru memahami tujuan komunitas.",
          "Link pendek yang mudah dibagikan di poster atau pesan singkat.",
        ],
      },
    ],
    []
  );

  const mythList = useMemo(
    () => [
      {
        key: "mahal",
        title: "Website itu selalu mahal",
        fact: "Ada opsi gratis/low-budget: GitHub Pages, Netlify, atau domain .my.id murah. Mulai sederhana dulu, upgrade belakangan.",
      },
      {
        key: "rumit",
        title: "Bikin website pasti rumit",
        fact: "Mulai dari template + sedikit edit teks & gambar. Materi di modul ini dirancang step-by-step, tinggal ikuti.",
      },
      {
        key: "buat-it",
        title: "Hanya orang IT yang butuh",
        fact: "Pebisnis, kreator, guru, sampai komunitas juga terbantu. Website = kartu nama digital yang gampang ditemukan orang.",
      },
    ],
    []
  );

  const quickSteps = useMemo(
    () => [
      {
        key: "tujuan",
        title: "Tentukan tujuan utama",
        tip: "Pamer karya, jualan, atau sekadar info? Ini memengaruhi isi halaman.",
      },
      {
        key: "pesan",
        title: "Tulis pesan utama",
        tip: "Satu kalimat jelas: siapa kamu, apa yang ditawarkan, apa langkah lanjutnya.",
      },
      {
        key: "konten",
        title: "Siapkan bahan",
        tip: "Foto/logo, 3 testimoni, kontak yang aktif, dan 3 produk/jasa unggulan.",
      },
      {
        key: "aksi",
        title: "Pilih call-to-action",
        tip: "Contoh: tombol 'Hubungi WhatsApp' atau 'Lihat portofolio'.",
      },
    ],
    []
  );

  const [activePersona, setActivePersona] = useState(personas[0].key);
  const [openMyth, setOpenMyth] = useState(mythList[0].key);
  const [doneSteps, setDoneSteps] = useState([]);

  const active = personas.find((p) => p.key === activePersona) ?? personas[0];
  const completion = Math.round((doneSteps.length / quickSteps.length) * 100);

  const toggleStep = useCallback((key) => {
    setDoneSteps((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  }, []);

  const toggleMyth = useCallback((key) => {
    setOpenMyth((prev) => (prev === key ? null : key));
  }, []);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {personas.map((persona) => {
          const isActive = persona.key === activePersona;
          return (
            <button
              key={persona.key}
              onClick={() => setActivePersona(persona.key)}
              className={`text-left rounded-2xl border transition-all duration-200 p-4 bg-slate-900/50 hover:border-white/20 ${
                isActive
                  ? "border-blue-400/80 shadow-lg shadow-blue-500/10"
                  : "border-white/10"
              }`}
            >
              <div
                className={`inline-flex items-center gap-2 text-xs font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${persona.gradient}`}
              >
                <Sparkles size={14} /> {persona.label}
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {persona.headline}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
});

// --- DATA MATERI (DIPERLUAS) ---
const quizBank = {
  "Kenapa Website?": [
    {
      question:
        "Apa manfaat utama punya website dibanding hanya mengandalkan media sosial?",
      options: [
        "Website selalu otomatis viral tanpa effort",
        "Website jadi alamat resmi yang bisa kamu kontrol tampilannya",
        "Website hanya berguna kalau kamu sudah mahir coding",
        "Website wajib berisi ratusan halaman supaya dianggap profesional",
      ],
      answer: 1,
      explanation:
        "Website memberimu ruang yang bisa dikontrol penuh: konten, warna, call-to-action, dan struktur sesuai tujuanmu.",
    },
    {
      question: "Siapa saja yang bisa terbantu dengan punya website sederhana?",
      options: [
        "Hanya developer profesional",
        "Hanya brand besar dengan budget tinggi",
        "Personal, UMKM, komunitas—asal punya pesan jelas",
        "Hanya bisnis yang tidak memakai media sosial",
      ],
      answer: 2,
      explanation:
        "Website itu kartu nama digital: personal, UMKM, atau komunitas bisa mulai dari 1 halaman jelas lalu berkembang.",
    },
  ],
  "Mengenal Dunia Website": [
    {
      question: "Analogi apa yang dipakai untuk menjelaskan website?",
      options: [
        "Gudang kosong tanpa pintu",
        "Rumah di internet dengan banyak ruangan/halaman",
        "Buku yang tidak bisa dibuka",
        "Mesin tanpa listrik",
      ],
      answer: 1,
      explanation:
        "Website dianalogikan seperti rumah: ada halaman depan, tentang, produk, blog, dan kontak yang saling terhubung.",
    },
    {
      question: "Alur sederhana cara kerja website adalah...",
      options: [
        "Browser menyimpan semua file lalu menebak tampilannya",
        "Server meminta file ke browser",
        "Browser meminta ke server, server kirim file, browser menampilkan",
        "Pengguna mengirim file ke server setiap kali membuka",
      ],
      answer: 2,
      explanation:
        "Browser meminta resource ke server, server merespons dengan file HTML/CSS/JS/media, lalu browser merender ke layar.",
    },
  ],
  "Konsep HTML": [
    {
      question: "Peran HTML dalam sebuah halaman web adalah...",
      options: [
        "Mengatur animasi dan interaksi",
        "Mengatur struktur dan konten halaman",
        "Mengelola database",
        "Menyediakan server untuk file",
      ],
      answer: 1,
      explanation:
        "HTML adalah kerangka: judul, teks, gambar, link, dan elemen lain ditempatkan dengan tag HTML.",
    },
    {
      question: "Tag apa yang menjadi 'akar' dokumen HTML?",
      options: ["<body>", "<head>", "<html>", "<title>"],
      answer: 2,
      explanation:
        "<html> adalah root element yang membungkus seluruh konten halaman.",
    },
  ],
  "Struktur Kode HTML": [
    {
      question: "Untuk menyatakan dokumen menggunakan HTML5, kita memakai...",
      options: [
        "<doctype html>",
        "<!DOCTYPE html>",
        "<html doctype>",
        "<meta doctype>",
      ],
      answer: 1,
      explanation:
        "<!DOCTYPE html> memberi tahu browser bahwa dokumen ini mengikuti standar HTML5.",
    },
    {
      question: "Di mana sebaiknya meta viewport ditempatkan?",
      options: [
        "Di dalam <body>",
        "Di luar dokumen",
        "Di dalam <head>",
        "Tidak perlu dipakai",
      ],
      answer: 2,
      explanation:
        "Meta viewport ditaruh di <head> agar layout responsif di berbagai perangkat.",
    },
  ],
  "Visualisasi Tag HTML": [
    {
      question: "Tag mana yang sesuai untuk membuat tautan?",
      options: ["<p>", "<a>", "<img>", "<strong>"],
      answer: 1,
      explanation: "<a> digunakan untuk hyperlink ke halaman atau sumber lain.",
    },
    {
      question: "Tag mana yang semantik untuk teks ditebalkan?",
      options: ["<b>", "<strong>", "<em>", "<h1>"],
      answer: 1,
      explanation:
        "<strong> memberi penekanan semantik (penting) selain efek visual tebal.",
    },
  ],
  "Konsep CSS": [
    {
      question: "CSS berfungsi untuk...",
      options: [
        "Membuat struktur dokumen",
        "Mengatur tampilan: warna, layout, ukuran, tipografi",
        "Mengelola data ke database",
        "Menjalankan logika server",
      ],
      answer: 1,
      explanation:
        "CSS mengatur presentasi: warna, posisi, ukuran, font, dan responsivitas tampilan.",
    },
    {
      question: "File CSS biasanya dihubungkan ke HTML dengan...",
      options: [
        "<script src='style.css'>",
        "<link rel='stylesheet' href='style.css'>",
        "<style href='style.css'>",
        "<css src='style.css'>",
      ],
      answer: 1,
      explanation:
        "<link rel='stylesheet' ...> dipakai di <head> untuk memuat file CSS eksternal.",
    },
  ],
  "Cara Penggunaan CSS": [
    {
      question: "Selector CSS dipakai untuk...",
      options: [
        "Memuat gambar",
        "Menentukan elemen mana yang akan diberi gaya",
        "Menjalankan fungsi JavaScript",
        "Membuat server",
      ],
      answer: 1,
      explanation:
        "Selector memilih elemen target (tag, class, id) untuk diberi deklarasi CSS.",
    },
    {
      question: "Sintaks CSS yang benar adalah...",
      options: ["color = red;", "color: red;", "color - red;", "color => red;"],
      answer: 1,
      explanation: "Deklarasi CSS memakai format property: value;",
    },
  ],
  "CSS Box Model": [
    {
      question: "Empat komponen utama box model adalah...",
      options: [
        "Margin, border, padding, content",
        "Header, body, footer, aside",
        "Flex, grid, gap, align",
        "Top, right, bottom, left",
      ],
      answer: 0,
      explanation:
        "Box model terdiri dari content di tengah, lalu padding, border, dan margin sebagai jarak luar.",
    },
    {
      question: "Property untuk menambah jarak di dalam batas elemen adalah...",
      options: ["margin", "padding", "border", "gap"],
      answer: 1,
      explanation:
        "Padding memberi ruang di dalam border, antara konten dan tepi elemen.",
    },
  ],
  "Konsep Flexbox & Grid": [
    {
      question: "Flexbox cocok untuk...",
      options: [
        "Layout dua dimensi kompleks",
        "Mengatur sebaran item satu dimensi (baris/kolom)",
        "Membuat animasi",
        "Membuat query API",
      ],
      answer: 1,
      explanation:
        "Flexbox unggul untuk distribusi item dalam satu axis, seperti navbar atau card row.",
    },
    {
      question: "Grid cocok dipakai saat...",
      options: [
        "Layout multi-kolom/baris yang terstruktur",
        "Butuh sticky navbar",
        "Hanya ada satu tombol",
        "Menangani event click",
      ],
      answer: 0,
      explanation:
        "CSS Grid memudahkan layout 2D terencana dengan kolom dan baris.",
    },
  ],
  "Konsep Tailwind CSS": [
    {
      question: "Ciri khas Tailwind dibanding CSS biasa adalah...",
      options: [
        "Tidak butuh kelas sama sekali",
        "Utility-first: pakai class kecil yang siap dipakai",
        "Hanya bisa dipakai di backend",
        "Harus menulis file CSS panjang",
      ],
      answer: 1,
      explanation:
        "Tailwind menyediakan utility class siap pakai sehingga styling bisa langsung di markup.",
    },
    {
      question: "Class Tailwind untuk membuat teks tebal adalah...",
      options: ["text-bold", "font-semibold", "bold-600", "txt-strong"],
      answer: 1,
      explanation:
        "Tailwind memakai skala font-weight seperti font-semibold, font-bold, dll.",
    },
  ],
};

// Gabungkan quiz per section agar tidak muncul di setiap slide
quizBank["Quiz HTML"] = [
  ...(quizBank["Konsep HTML"] ?? []),
  ...(quizBank["Struktur Kode HTML"] ?? []),
  ...(quizBank["Visualisasi Tag HTML"] ?? []),
];

quizBank["Quiz CSS"] = [
  ...(quizBank["Konsep CSS"] ?? []),
  ...(quizBank["Cara Penggunaan CSS"] ?? []),
  ...(quizBank["CSS Box Model"] ?? []),
  ...(quizBank["Konsep Flexbox & Grid"] ?? []),
];

quizBank["Quiz Tailwind CSS"] = [...(quizBank["Konsep Tailwind CSS"] ?? [])];

const slidesData = [
  {
    id: 1,
    type: "cover",
    title: "Web Development",
    subtitle: "HTML5, CSS3 & Tailwind CSS",
    icon: <Monitor size={72} className="text-white drop-shadow-lg" />,
    chapter: "Intro",
    content:
      "Jelajahi dunia pengembangan web modern dengan panduan interaktif dan visual.",
  },
  {
    id: "intro-why",
    type: "content",
    title: "Kenapa Website?",
    subtitle: "Manfaat yang terasa bahkan kalau baru mulai",
    icon: <Info size={40} />,
    chapter: "Intro - Kenapa Perlu Website",
    content: (
      <div className="space-y-6">
        <div className="bg-slate-900/50 border border-slate-700/60 rounded-2xl p-5 space-y-3">
          <h3 className="text-lg font-bold text-white">
            Website = alamat resmi di internet
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Kalau media sosial itu seperti lapak di pusat keramaian, website
            adalah rumah yang bisa kamu atur sesuka hati. Orang bisa mampir
            kapan saja tanpa tenggelam di algoritma. Modul ini bantu kamu bikin
            versi sederhana dulu, lalu pelan-pelan ditingkatkan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-800/50 rounded-xl border border-white/10 p-3 text-sm text-slate-200 space-y-1">
              <div className="text-xs font-semibold text-blue-300 uppercase">
                Cepat ditemukan
              </div>
              <p>Link rapi untuk portofolio, katalog, atau profil usaha.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl border border-white/10 p-3 text-sm text-slate-200 space-y-1">
              <div className="text-xs font-semibold text-emerald-300 uppercase">
                Nambah trust
              </div>
              <p>
                Terlihat lebih resmi dibanding hanya kirim chat atau poster.
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl border border-white/10 p-3 text-sm text-slate-200 space-y-1">
              <div className="text-xs font-semibold text-amber-300 uppercase">
                Bisa diatur
              </div>
              <p>Konten, warna, dan ajakan yang muncul bisa kamu kendalikan.</p>
            </div>
          </div>
        </div>

        <WhyWebsitePlayground />
      </div>
    ),
  },
  {
    id: 2,
    type: "content",
    title: "Mengenal Dunia Website",
    subtitle: "Bahasa Santai untuk Pemula Banget",
    icon: <Monitor size={40} />,
    chapter: "Intro - Konsep Website",
    content: (
      <div className="space-y-6">
        {/* Apa itu website */}
        <div className="bg-slate-900/50 border border-slate-700/60 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-blue-400">Apa itu Website?</h3>
          <p className="text-slate-300 leading-relaxed">
            Website itu ibarat{" "}
            <span className="font-semibold text-white">rumah di internet</span>.
            Orang lain bisa berkunjung lewat HP atau laptop dengan membuka
            alamat{" "}
            <span className="font-mono text-sm bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">
              www.namasitekamu.com
            </span>
            .
          </p>
          <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950/40">
            <img
              src="/Materi/analogi web.png"
              alt="Analogi website seperti rumah dengan banyak ruangan"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-slate-300 leading-relaxed text-sm">
            Di gambar ini, rumah punya banyak ruangan:{" "}
            <span className="font-semibold">halaman depan (home)</span>,{" "}
            <span className="font-semibold">tentang kami (about)</span>,{" "}
            <span className="font-semibold">produk (products)</span>,{" "}
            <span className="font-semibold">blog/artikel</span>, sampai{" "}
            <span className="font-semibold">kontak</span>. Website juga sama,
            isinya kumpulan halaman yang terhubung dan bisa dibuka dari satu
            alamat di internet.
          </p>
          <p className="text-slate-400 text-xs">
            Nanti kita akan belajar bagaimana cara membangun “rumah” ini mulai
            dari kerangkanya, catnya, sampai bisa dikunjungi orang lain.
          </p>
        </div>

        {/* Kenapa perlu website */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-900/20 border border-blue-700/60 rounded-xl p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-blue-300 mb-1">
              Untuk Individu
            </div>
            <p className="text-sm text-slate-200">
              Portofolio online, blog pribadi, dan tempat menunjukkan karya
              kepada dunia.
            </p>
          </div>
          <div className="bg-emerald-900/20 border border-emerald-700/60 rounded-xl p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-300 mb-1">
              Untuk Bisnis
            </div>
            <p className="text-sm text-slate-200">
              Toko yang buka 24 jam, meningkatkan kepercayaan, dan memudahkan
              calon pelanggan menemukan informasi.
            </p>
          </div>
          <div className="bg-purple-900/20 border border-purple-700/60 rounded-xl p-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-purple-300 mb-1">
              Untuk Karier
            </div>
            <p className="text-sm text-slate-200">
              Langkah awal untuk belajar jadi pembuat website dan kerja di dunia
              IT.
            </p>
          </div>
        </div>

        {/* Cara kerja website sederhana */}
        <div className="bg-slate-900/50 border border-slate-700/60 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-300 mb-4">
            Cara Kerja Website (Versi Sederhana)
          </h3>
          <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
            <li>
              Pengguna mengetik alamat website di browser (misalnya{" "}
              <span className="font-mono text-xs bg-slate-800 px-1 rounded border border-slate-700">
                www.contoh.com
              </span>
              ).
            </li>
            <li>
              Browser mengirim permintaan ke{" "}
              <span className="font-semibold text-white">server</span> (komputer
              khusus di internet yang tugasnya menyimpan website).
            </li>
            <li>
              Server mengirimkan kembali file-file website (tulisan, gambar, dan
              kode-kode di belakang layar).
            </li>
            <li>
              Browser membaca file tersebut dan menampilkan halaman yang bisa
              dilihat dan diklik pengguna.
            </li>
          </ol>
        </div>

        {/* Analogi HTML, CSS, dan JavaScript */}
        <div className="bg-slate-900/60 border border-blue-800/60 rounded-2xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-blue-400">
            HTML, CSS, dan JavaScript Itu Apa Sih?
          </h3>
          <p className="text-slate-300 text-sm">
            Lihat gambar ini. Kita pakai contoh rumah untuk menjelaskan 3 hal
            penting di dunia website:{" "}
            <span className="font-semibold">HTML</span>,{" "}
            <span className="font-semibold">CSS</span>, dan{" "}
            <span className="font-semibold">JavaScript</span>.
          </p>
          <div className="rounded-xl overflow-hidden border border-slate-700">
            <img
              src="/Materi/analogi.png"
              alt="Analogi HTML, CSS, dan JavaScript dengan rumah dan ruangan"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-slate-300 text-sm">
            Singkatnya: HTML itu rangka rumahnya, CSS itu cat dan dekorasi biar
            kelihatan cantik, dan JavaScript itu listrik/mesin yang bikin
            rumahnya bisa “hidup” dan merespon kita.
          </p>
        </div>

        {/* Roadmap singkat - diagram langkah belajar */}
        <div className="bg-slate-900/50 border border-emerald-700/60 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-emerald-300">
            Gambaran Alur Belajar Kita
          </h3>
          <p className="text-slate-300 text-sm">
            Anggap ini seperti{" "}
            <span className="font-semibold">peta perjalanan</span> dari nol
            sampai punya website sendiri:
          </p>

          <div className="relative">
            {/* garis vertikal */}
            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-emerald-700/60" />

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-start gap-3">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    1
                  </div>
                </div>
                <div className="bg-slate-800/70 border border-emerald-700/60 rounded-xl p-3 flex-1">
                  <div className="font-semibold text-white text-sm">
                    Dasar-dasar website &amp; browser
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Materi yang sedang kamu lihat sekarang: paham dulu dunia
                    website sebelum mulai nulis kode.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    2
                  </div>
                </div>
                <div className="bg-slate-800/70 border border-emerald-700/60 rounded-xl p-3 flex-1">
                  <div className="font-semibold text-white text-sm">HTML</div>
                  <p className="text-xs text-slate-300 mt-1">
                    Belajar bikin kerangka halaman: judul, teks, gambar, link,
                    sampai form. Ini ibarat rangka rumahnya.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    3
                  </div>
                </div>
                <div className="bg-slate-800/70 border border-emerald-700/60 rounded-xl p-3 flex-1">
                  <div className="font-semibold text-white text-sm">CSS</div>
                  <p className="text-xs text-slate-300 mt-1">
                    Bikin halaman jadi rapi dan menarik: warna, posisi, layout,
                    dan tampilan yang enak dilihat di HP maupun laptop.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    4
                  </div>
                </div>
                <div className="bg-slate-800/70 border border-emerald-700/60 rounded-xl p-3 flex-1">
                  <div className="font-semibold text-white text-sm">
                    JavaScript dasar
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Membuat website bisa interaktif: tombol kalau diklik ada
                    reaksinya, form bisa dicek, dan berbagai efek sederhana.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-3">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    5
                  </div>
                </div>
                <div className="bg-slate-800/70 border border-emerald-700/60 rounded-xl p-3 flex-1">
                  <div className="font-semibold text-white text-sm">
                    Publish (opsional)
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Cara meng-online-kan website sederhana supaya bisa dilihat
                    orang lain di internet, bukan cuma di laptop sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    type: "content",
    title: "Konsep HTML",
    subtitle: "Struktur Dasar Website",
    icon: <LayoutTemplate size={40} />,
    chapter: "HTML - Konsep",
    content: (
      <div className="space-y-8">
        {/* Apa itu HTML */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
              <LayoutTemplate size={24} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-blue-400 mb-3">
                Apa itu HTML?
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">
                  HTML (HyperText Markup Language)
                </strong>{" "}
                adalah bahasa markup yang digunakan untuk membuat struktur dan
                konten dari sebuah halaman web. HTML bertindak sebagai kerangka
                untuk sebuah situs web, menentukan di mana judul, paragraf,
                gambar, tautan, dan elemen lainnya akan ditempatkan, sehingga
                browser web dapat menampilkannya kepada pengguna.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    type: "content",
    title: "Struktur Kode HTML",
    subtitle: "Anatomi Dokumen HTML",
    icon: <LayoutTemplate size={40} />,
    chapter: "HTML",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-300">
          Setiap dokumen HTML memiliki struktur dasar yang terdiri dari beberapa
          elemen penting. Mari kita pelajari struktur kode HTML dari awal.
        </p>

        {/* Struktur Dasar */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-blue-400 mb-4">
            Struktur Dasar HTML
          </h3>
          <pre className="text-xs text-slate-300 font-mono bg-slate-800 p-4 rounded-lg border border-blue-700/50 overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Judul Halaman</title>
  </head>
  <body>
    <!-- Konten halaman di sini -->
  </body>
</html>`}
          </pre>
        </div>

        {/* Penjelasan Elemen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
            <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <Code size={16} /> &lt;!DOCTYPE html&gt;
            </h4>
            <p className="text-sm text-slate-300">
              Deklarasi tipe dokumen. Memberitahu browser bahwa ini adalah
              dokumen HTML5.
            </p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
            <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <Code size={16} /> &lt;html&gt;
            </h4>
            <p className="text-sm text-slate-300">
              Elemen root yang membungkus seluruh konten HTML. Atribut{" "}
              <code className="text-blue-400">lang</code> menentukan bahasa.
            </p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
            <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <Code size={16} /> &lt;head&gt;
            </h4>
            <p className="text-sm text-slate-300">
              Berisi metadata dokumen seperti title, charset, viewport, dan link
              ke file eksternal (CSS, JS).
            </p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
            <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <Code size={16} /> &lt;body&gt;
            </h4>
            <p className="text-sm text-slate-300">
              Berisi semua konten yang ditampilkan di halaman web seperti teks,
              gambar, link, dan elemen lainnya.
            </p>
          </div>
        </div>

        {/* Contoh Lengkap */}
        <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-4">
            Contoh Struktur Lengkap
          </h3>
          <pre className="text-xs text-slate-300 font-mono bg-slate-800 p-4 rounded-lg border border-emerald-700/50 overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Pertamaku</title>
  </head>
  <body>
    <header>
      <h1>Selamat Datang</h1>
    </header>
    <main>
      <p>Ini adalah paragraf pertama saya.</p>
    </main>
    <footer>
      <p>&copy; 2025 Departemen Software</p>
    </footer>
  </body>
</html>`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    type: "content",
    title: "Visualisasi Tag HTML",
    subtitle: "Berbagai Elemen HTML",
    icon: <Code size={40} />,
    chapter: "HTML - Praktik",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300">
          Berikut adalah berbagai tag HTML yang umum digunakan dan bagaimana
          mereka terlihat di browser.
        </p>

        {/* Heading Tags */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Heading Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;h1&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<h1>Heading 1</h1>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <h1 className="text-3xl font-bold text-white">Heading 1</h1>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;h2&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<h2>Heading 2</h2>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <h2 className="text-2xl font-bold text-white">Heading 2</h2>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;h3&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<h3>Heading 3</h3>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <h3 className="text-xl font-bold text-white">Heading 3</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Text Tags */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Text Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;p&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<p>Ini adalah paragraf</p>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <p className="text-slate-300">Ini adalah paragraf</p>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;strong&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<strong>Teks Tebal</strong>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <strong className="text-white">Teks Tebal</strong>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;em&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<em>Teks Miring</em>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <em className="text-slate-300">Teks Miring</em>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;code&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<code>code</code>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <code className="text-blue-400 bg-slate-800 px-2 py-1 rounded">
                  code
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Link & Media */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Link & Media</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;a&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<a href="#">Link ke Halaman</a>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <a href="#" className="text-blue-400 hover:underline">
                  Link ke Halaman
                </a>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;img&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<img src="/logo.png" alt="Logo" />`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[80px]">
                <img
                  src="/pcc.png"
                  alt="Logo"
                  className="h-12 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Form Elements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;input type="text"&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<input type="text" placeholder="Masukkan teks" />`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <input
                  type="text"
                  placeholder="Masukkan teks"
                  className="border border-slate-600 bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-[200px]"
                />
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;input type="email"&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<input type="email" placeholder="email@example.com" />`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border border-slate-600 bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-[200px]"
                />
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;input type="password"&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<input type="password" placeholder="Password" />`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-slate-600 bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-[200px]"
                />
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;input type="date"&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<input type="date" />`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <input
                  type="date"
                  className="border border-slate-600 bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm"
                />
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;input type="checkbox"&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<label>
    <input type="checkbox" />
    Checkbox
</label>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Checkbox</span>
                </label>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;input type="radio"&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<label>
    <input type="radio" name="radio" />
    Radio
</label>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="radio" name="radio-demo" className="w-4 h-4" />
                  <span>Radio</span>
                </label>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;select&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<select>
    <option>Pilih opsi</option>
    <option>Opsi 1</option>
    <option>Opsi 2</option>
</select>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <select className="border border-slate-600 bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm">
                  <option>Pilih opsi</option>
                  <option>Opsi 1</option>
                  <option>Opsi 2</option>
                </select>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;textarea&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<textarea placeholder="Tulis pesan..."></textarea>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[80px]">
                <textarea
                  placeholder="Tulis pesan..."
                  className="border border-slate-600 bg-slate-800 text-slate-300 px-3 py-1.5 rounded text-sm w-full max-w-[200px] h-16 resize-none"
                />
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;button&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<button>Submit</button>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[50px]">
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md shadow hover:bg-blue-700 transition text-sm">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* List Tags */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">List Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;ul&gt; &lt;li&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[80px]">
                <ul className="list-disc list-inside text-slate-300 text-sm">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;ol&gt; &lt;li&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<ol>
    <li>Pertama</li>
    <li>Kedua</li>
    <li>Ketiga</li>
</ol>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[80px]">
                <ol className="list-decimal list-inside text-slate-300 text-sm">
                  <li>Pertama</li>
                  <li>Kedua</li>
                  <li>Ketiga</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Tags */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Semantic Tags</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;header&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<header>
    Header
</header>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">Header</div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;nav&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<nav>
    Navigation
</nav>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">
                  Navigation
                </div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;main&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<main>
    Main
</main>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">Main</div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;footer&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<footer>
    Footer
</footer>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">Footer</div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;article&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<article>
    Article
</article>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">
                  Article
                </div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;section&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<section>
    Section
</section>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">
                  Section
                </div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;aside&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<aside>
    Aside
</aside>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">Aside</div>
              </div>
            </div>
            <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
                &lt;div&gt;
              </span>
              <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-2 rounded border border-slate-700 overflow-x-auto">
                {`<div>
    Div
</div>`}
              </pre>
              <div className="flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border min-h-[60px]">
                <div className="text-slate-300 text-sm text-center">Div</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    type: "content",
    title: "Konsep CSS",
    subtitle: "Styling dan Layout",
    icon: <Layers size={40} />,
    chapter: "CSS - Konsep",
    content: (
      <div className="space-y-8">
        {/* Apa itu CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Layers size={24} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                Apa itu CSS?
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">
                  CSS (Cascading Style Sheets)
                </strong>{" "}
                adalah sebuah bahasa stylesheet yang digunakan untuk mengatur
                tampilan dan gaya dokumen web yang ditulis dalam bahasa markup
                seperti HTML. CSS memungkinkan pengembang web untuk mengontrol
                elemen visual seperti warna, font, tata letak, dan ukuran,
                sehingga memisahkan konten dari presentasi visualnya. Tujuannya
                adalah membuat website lebih menarik, konsisten, dan responsif
                di berbagai perangkat.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    type: "content",
    title: "Cara Penggunaan CSS",
    subtitle: "Inline, Internal, dan External CSS",
    icon: <Code size={40} />,
    chapter: "CSS",
    content: (
      <div className="space-y-6 md:space-y-8">
        <p className="text-slate-300 text-sm md:text-lg break-words">
          Ada tiga cara untuk menambahkan CSS ke dokumen HTML. Mari kita
          pelajari masing-masing.
        </p>

        {/* Inline CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-xl md:rounded-2xl p-3 md:p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={20} className="md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0 w-full">
              <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2 md:mb-3">
                1. Inline CSS
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4 break-words">
                CSS langsung ditulis dalam atribut{" "}
                <code className="text-purple-400">style</code> pada tag HTML.
              </p>
              <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-purple-700/30 w-full overflow-hidden">
                <h4 className="text-xs md:text-sm font-bold text-purple-300 mb-2">
                  Kode HTML:
                </h4>
                <div className="overflow-x-auto w-full">
                  <pre className="text-[10px] md:text-xs text-slate-300 font-mono bg-slate-900/50 p-2 md:p-3 rounded border border-slate-700 whitespace-pre">
                    {`<h1 style="color: blue; font-size: 24px;">
    Judul Biru
</h1>
<p style="background-color: yellow; padding: 10px; color: black;">
    Paragraf dengan background kuning
</p>`}
                  </pre>
                </div>
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-purple-700/30">
                  <h4 className="text-xs md:text-sm font-bold text-purple-300 mb-2">
                    Hasil:
                  </h4>
                  <div className="bg-slate-700/50 p-3 md:p-4 rounded border border-slate-600 w-full overflow-hidden">
                    <h1
                      style={{ color: "blue", fontSize: "20px" }}
                      className="text-lg md:text-2xl break-words"
                    >
                      Judul Biru
                    </h1>
                    <p
                      style={{
                        backgroundColor: "yellow",
                        padding: "8px",
                        marginTop: "8px",
                        color: "black",
                      }}
                      className="text-xs md:text-sm break-words"
                    >
                      Paragraf dengan background kuning
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 md:mt-4 bg-red-900/20 p-2 md:p-3 rounded-lg border border-red-700/30">
                <p className="text-[11px] md:text-xs text-red-300 break-words">
                  ⚠️ <strong>Kelemahan:</strong> Tidak dapat digunakan ulang,
                  sulit dirawat, dan tidak efisien untuk banyak elemen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Internal CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-xl md:rounded-2xl p-3 md:p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={20} className="md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2 md:mb-3">
                2. Internal CSS
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4 break-words">
                CSS ditulis di dalam tag{" "}
                <code className="text-purple-400">&lt;style&gt;</code> di bagian{" "}
                <code className="text-purple-400">&lt;head&gt;</code> HTML.
              </p>
              <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-purple-700/30 w-full">
                <h4 className="text-xs md:text-sm font-bold text-purple-300 mb-2">
                  Kode HTML:
                </h4>
                <div className="overflow-x-auto -mx-3 md:mx-0">
                  <pre className="text-[10px] md:text-xs text-slate-300 font-mono bg-slate-900/50 p-2 md:p-3 rounded border border-slate-700 whitespace-pre min-w-fit">
                    {`<!DOCTYPE html>
<html>
<head>
    <style>
        h1 {
            color: blue;
            font-size: 24px;
        }
        p {
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h1>Judul Biru</h1>
    <p>Paragraf dengan background kuning</p>
</body>
</html>`}
                  </pre>
                </div>
              </div>
              <div className="mt-3 md:mt-4 bg-yellow-900/20 p-2 md:p-3 rounded-lg border border-yellow-700/30">
                <p className="text-[11px] md:text-xs text-yellow-300 break-words">
                  💡 <strong>Kelebihan:</strong> Lebih terorganisir, dapat
                  digunakan untuk semua elemen dalam satu halaman.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* External CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-xl md:rounded-2xl p-3 md:p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={20} className="md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left min-w-0">
              <h3 className="text-lg md:text-xl font-bold text-purple-400 mb-2 md:mb-3">
                3. External CSS
              </h3>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4 break-words">
                CSS ditulis dalam file terpisah (eksternal) dan dihubungkan
                dengan tag <code className="text-purple-400">&lt;link&gt;</code>{" "}
                di bagian <code className="text-purple-400">&lt;head&gt;</code>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-purple-700/30 w-full">
                  <h4 className="text-xs md:text-sm font-bold text-purple-300 mb-2">
                    File: style.css
                  </h4>
                  <div className="overflow-x-auto -mx-3 md:mx-0">
                    <pre className="text-[10px] md:text-xs text-slate-300 font-mono bg-slate-900/50 p-2 md:p-3 rounded border border-slate-700 whitespace-pre min-w-fit">
                      {`h1 {
    color: blue;
    font-size: 24px;
}

p {
    background-color: yellow;
    padding: 10px;
}`}
                    </pre>
                  </div>
                </div>
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-lg border border-purple-700/30 w-full">
                  <h4 className="text-xs md:text-sm font-bold text-purple-300 mb-2">
                    File: index.html
                  </h4>
                  <div className="overflow-x-auto -mx-3 md:mx-0">
                    <pre className="text-[10px] md:text-xs text-slate-300 font-mono bg-slate-900/50 p-2 md:p-3 rounded border border-slate-700 whitespace-pre min-w-fit">
                      {`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Judul Biru</h1>
    <p>Paragraf dengan background kuning</p>
</body>
</html>`}
                    </pre>
                  </div>
                </div>
              </div>
              <div className="mt-3 md:mt-4 bg-emerald-900/20 p-2 md:p-3 rounded-lg border border-emerald-700/30">
                <p className="text-[11px] md:text-xs text-emerald-300 break-words">
                  ✅ <strong>Kelebihan:</strong> Paling direkomendasikan! Dapat
                  digunakan ulang untuk banyak halaman, mudah dirawat, dan
                  performa lebih baik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    type: "interactive-css",
    title: "Dasar-dasar CSS Interaktif",
    subtitle: "Color, Background, Font, Spacing, dan Border",
    icon: <Layers size={40} />,
    chapter: "CSS - Praktik",
    content:
      "Eksplorasi properti-properti CSS dasar secara interaktif. Ubah nilai dan lihat hasilnya secara langsung.",
  },
  {
    id: 8,
    type: "content",
    title: "CSS Box Model",
    subtitle: "Fondasi Layout",
    icon: <Layers size={40} />,
    chapter: "CSS - Praktik",
    content: (
      <div className="space-y-4">
        <p className="text-slate-300">
          Semua elemen HTML adalah kotak. Box model terdiri dari 4 lapisan.
        </p>
        <div className="flex justify-center py-4">
          <div className="relative group cursor-default transition-transform md:hover:scale-105 duration-200 gpu-accelerate">
            {/* Margin */}
            <div className="bg-orange-200/80 p-8 rounded-xl border-2 border-orange-400 border-dashed relative shadow-xl">
              <span className="absolute top-2 left-2 text-[10px] font-bold text-orange-800 uppercase tracking-widest">
                Margin (Jarak Luar)
              </span>
              {/* Border */}
              <div className="bg-yellow-200/90 p-1 rounded-lg border-4 border-slate-800 relative">
                <span className="absolute -top-3 right-2 text-[9px] bg-slate-800 text-white px-1.5 py-0.5 rounded">
                  Border
                </span>
                {/* Padding */}
                <div className="bg-green-200/90 p-6 rounded relative">
                  <span className="absolute top-1 left-2 text-[10px] font-bold text-green-800 uppercase tracking-widest">
                    Padding (Jarak Dalam)
                  </span>
                  {/* Content */}
                  <div className="bg-blue-500 h-16 w-40 flex items-center justify-center rounded text-white text-sm font-bold shadow-inner">
                    Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    type: "content",
    title: "Konsep Flexbox & Grid",
    subtitle: "Sistem Layout Modern",
    icon: <Layout size={40} />,
    chapter: "CSS - Konsep",
    content: (
      <div className="space-y-8">
        {/* Visual Comparison */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl mb-2">
              <Layout size={48} className="text-white" />
            </div>
            <div className="text-xs text-slate-400 font-semibold">
              1 Dimensi
            </div>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl mb-2">
              <Grid size={48} className="text-white" />
            </div>
            <div className="text-xs text-slate-400 font-semibold">
              2 Dimensi
            </div>
          </div>
        </div>

        {/* Flexbox Section */}
        <div className="bg-indigo-900/20 border border-indigo-700/50 rounded-2xl p-6">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shrink-0">
              <Layout size={24} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-indigo-400 mb-3">
                Flexbox
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Flexbox</strong> adalah sistem
                layout 1 dimensi yang memudahkan distribusi ruang dan perataan
                item dalam sebuah container.
              </p>
            </div>
          </div>

          {/* Visual Example */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-indigo-700/30 mb-4">
            <div className="flex justify-between items-center gap-2 mb-2">
              <div className="text-xs text-indigo-400 font-semibold">
                Main Axis (X)
              </div>
              <div className="text-xs text-slate-500">Cross Axis (Y) →</div>
            </div>
            <div className="flex justify-center items-center gap-2 h-16 bg-indigo-500/10 rounded border border-indigo-500/30">
              <div className="w-12 h-12 bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/50 p-3 rounded-lg border border-white/10">
              <strong className="text-indigo-400 block mb-2 text-sm">
                ✓ Gunakan Untuk:
              </strong>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Satu baris/kolom</li>
                <li>• Navigation bar</li>
                <li>• Centering content</li>
                <li>• Distribusi fleksibel</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-white/10">
              <code className="text-xs text-indigo-400">
                display: flex;
                <br />
                justify-content: center;
                <br />
                align-items: center;
              </code>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="bg-teal-900/20 border border-teal-700/50 rounded-2xl p-6">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shrink-0">
              <Grid size={24} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-teal-400 mb-3">CSS Grid</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">CSS Grid</strong> adalah sistem
                layout 2 dimensi yang memungkinkan kontrol penuh atas baris dan
                kolom secara bersamaan.
              </p>
            </div>
          </div>

          {/* Visual Example */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-teal-700/30 mb-4">
            <div className="text-xs text-teal-400 font-semibold mb-2 text-center">
              Rows & Columns (2D)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-auto md:h-24">
              <div className="bg-teal-500 rounded flex items-center justify-center text-white font-bold text-xs min-h-[60px] md:min-h-0">
                1
              </div>
              <div className="bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs min-h-[60px] md:min-h-0">
                2
              </div>
              <div className="bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs min-h-[60px] md:min-h-0">
                3
              </div>
              <div className="bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-xs min-h-[60px] md:min-h-0">
                4
              </div>
              <div className="bg-purple-500 rounded md:col-span-2 flex items-center justify-center text-white font-bold text-xs min-h-[60px] md:min-h-0">
                5 (2 cols)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-800/50 p-3 rounded-lg border border-white/10">
              <strong className="text-teal-400 block mb-2 text-sm">
                ✓ Gunakan Untuk:
              </strong>
              <ul className="text-xs text-slate-400 space-y-1">
                <li>• Layout kompleks 2D</li>
                <li>• Halaman struktur jelas</li>
                <li>• Overlapping items</li>
                <li>• Grid responsif</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-white/10">
              <code className="text-xs text-teal-400">
                display: grid;
                <br />
                grid-template-columns:
                <br />
                &nbsp;&nbsp;repeat(3, 1fr);
              </code>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 14,
    type: "interactive-flex",
    title: "CSS Flexbox",
    subtitle: "Layout 1 Dimensi",
    icon: <Layout size={40} />,
    chapter: "CSS - Praktik",
    content:
      "Flexbox sangat powerful untuk mengatur elemen dalam satu baris atau satu kolom.",
  },
  {
    id: 10,
    type: "interactive-grid",
    title: "CSS Grid",
    subtitle: "Layout 2 Dimensi",
    icon: <Grid size={40} />,
    chapter: "CSS - Praktik",
    content:
      "Eksplorasi CSS Grid secara interaktif. Atur kolom, baris, gap, dan alignment untuk memahami layout 2 dimensi.",
  },
  {
    id: 11,
    type: "content",
    title: "Konsep Tailwind CSS",
    subtitle: "Utility-First Framework",
    icon: <Type size={40} />,
    chapter: "Tailwind - Konsep",
    content: (
      <div className="space-y-8">
        {/* Apa itu Tailwind */}
        <div className="bg-sky-900/20 border border-sky-700/50 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shrink-0">
              <Type size={24} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-sky-400 mb-3">
                Apa itu Tailwind CSS?
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong className="text-white">Tailwind CSS</strong> adalah
                framework CSS utility-first yang menyediakan class-class siap
                pakai untuk membangun desain custom dengan cepat tanpa perlu
                menulis CSS custom.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-sky-700/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-white" />
                </div>
                <strong className="text-sky-400">Kelebihan</strong>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Development lebih cepat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Konsistensi desain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Bundle size kecil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Highly customizable</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-orange-700/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Info size={16} className="text-white" />
                </div>
                <strong className="text-orange-400">Pertimbangan</strong>
              </div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Learning curve awal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>HTML bisa jadi panjang</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Perlu konfigurasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Utility-first mindset</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    type: "content",
    title: "Tailwind CSS Intro",
    subtitle: "Utility-First",
    icon: <Type size={40} />,
    chapter: "Tailwind - Praktik",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300">
          Lihat perbandingan langsung antara CSS biasa (harus bikin selector +
          file terpisah) vs Tailwind (cukup pakai class di HTML).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Tanpa Tailwind */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-orange-500/80 flex items-center justify-center text-white font-bold text-sm">
                CSS
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Tanpa Tailwind (CSS biasa)
                </div>
                <div className="text-xs text-slate-400">
                  Harus tulis selector dan file terpisah.
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl border border-white/10 p-3 space-y-2">
              <div className="text-[11px] text-slate-400">button.css</div>
              <pre className="text-[11px] md:text-xs text-slate-200 font-mono bg-slate-900/70 p-3 rounded-lg border border-slate-700 overflow-x-auto">
                {` .btn-primary {
   background: linear-gradient(90deg,#3b82f6,#8b5cf6);
   color: white;
   padding: 12px 20px;
   border-radius: 12px;
   font-weight: 700;
   box-shadow: 0 10px 30px rgba(59,130,246,0.25);
   transition: transform .2s, box-shadow .2s;
 }
 .btn-primary:hover {
   transform: translateY(-2px) scale(1.02);
   box-shadow: 0 14px 40px rgba(59,130,246,0.35);
 }`}
              </pre>
              <pre className="text-[11px] md:text-xs text-slate-200 font-mono bg-slate-900/70 p-3 rounded-lg border border-slate-700 overflow-x-auto">
                {`<link rel="stylesheet" href="button.css" />
<button class="btn-primary">Ayo Mulai</button>`}
              </pre>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="px-2 py-1 rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                Langkah: tulis CSS + import file
              </span>
              <span className="px-2 py-1 rounded-full bg-slate-800 border border-white/10">
                HTML lebih bersih
              </span>
            </div>
          </div>

          {/* Dengan Tailwind */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-sky-500/80 flex items-center justify-center text-white font-bold text-sm">
                TW
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Dengan Tailwind
                </div>
                <div className="text-xs text-slate-400">
                  Utility-first: class langsung di HTML.
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl border border-white/10 p-3 space-y-2">
              <div className="text-[11px] text-slate-400">
                Tanpa file CSS terpisah
              </div>
              <pre className="text-[11px] md:text-xs text-slate-200 font-mono bg-slate-900/70 p-3 rounded-lg border border-slate-700 overflow-x-auto">
                {`<button
  class="bg-gradient-to-r from-blue-500 to-purple-500
         text-white px-5 py-3 rounded-xl font-bold
         shadow-lg hover:-translate-y-0.5 hover:scale-105
         hover:shadow-xl transition"
>
  Ayo Mulai
</button>`}
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="rounded-lg bg-slate-800/60 border border-sky-500/30 p-2">
                <div className="font-semibold text-sky-200 mb-1">Kelebihan</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Ubah styling langsung di markup.</li>
                  <li>Desain konsisten, cepat prototyping.</li>
                  <li>Tidak pindah-pindah file.</li>
                </ul>
              </div>
              <div className="rounded-lg bg-slate-800/60 border border-orange-500/30 p-2">
                <div className="font-semibold text-orange-200 mb-1">
                  Catatan
                </div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Class bisa panjang (pakai extract/component).</li>
                  <li>Perlu hafal utility dasar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-xl p-4">
          <div className="text-xs font-semibold text-sky-300 mb-2 uppercase tracking-wide">
            Mapping cepat
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-slate-300">
            <div className="flex items-center justify-between bg-slate-800/60 rounded-lg border border-white/10 px-3 py-2">
              <code className="text-sky-400">text-center</code>
              <span className="text-slate-400">text-align: center;</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/60 rounded-lg border border-white/10 px-3 py-2">
              <code className="text-sky-400">rounded-xl</code>
              <span className="text-slate-400">border-radius: 12px;</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/60 rounded-lg border border-white/10 px-3 py-2">
              <code className="text-sky-400">shadow-xl</code>
              <span className="text-slate-400">box-shadow: ...;</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/60 rounded-lg border border-white/10 px-3 py-2">
              <code className="text-sky-400">px-5 py-3</code>
              <span className="text-slate-400">padding: 12px 20px;</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/60 rounded-lg border border-white/10 px-3 py-2">
              <code className="text-sky-400">bg-gradient-to-r ...</code>
              <span className="text-slate-400">linear-gradient(...)</span>
            </div>
            <div className="flex items-center justify-between bg-slate-800/60 rounded-lg border border-white/10 px-3 py-2">
              <code className="text-sky-400">hover:scale-105</code>
              <span className="text-slate-400">transform: scale(1.05)</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 16,
    type: "interactive-tailwind",
    title: "Tailwind Playground",
    subtitle: "Interactive Builder",
    icon: <MousePointer size={40} />,
    chapter: "Tailwind - Praktik",
    content:
      "Eksperimen dengan class Tailwind untuk melihat betapa cepatnya membangun UI.",
  },
  {
    id: 17,
    type: "content",
    title: "Tailwind Showcase",
    subtitle: "10 Komponen Animasi (Tanpa Lib Tambahan)",
    icon: <Zap size={40} />,
    chapter: "Tailwind - Showcase",
    content: (
      <div className="space-y-5">
        <p className="text-slate-300">
          Satu section, 10 contoh komponen animasi. Semua murni Tailwind
          (utility + animasi bawaan) tanpa library tambahan.
        </p>

        <div className="grid grid-cols-1 gap-3">
          {[
            {
              title: "Hero Glow Banner",
              desc: "Gradient glow + blur orb dan CTA.",
              preview: `<div class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-sky-600/30 via-purple-600/20 to-indigo-600/30 p-6 shadow-2xl">
  <div class="absolute -top-12 -left-10 w-40 h-40 bg-sky-400/30 blur-3xl rounded-full"></div>
  <div class="absolute -bottom-10 -right-6 w-36 h-36 bg-purple-500/25 blur-3xl rounded-full"></div>
  <div class="relative space-y-3">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-slate-100 backdrop-blur">
      <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
      Launch-ready
    </div>
    <div class="text-white text-xl font-bold">Bangun landing page cepat</div>
    <p class="text-slate-200 text-sm max-w-xl">Pakai utility Tailwind buat layout, warna, dan animasi tanpa nulis CSS terpisah.</p>
    <div class="flex flex-wrap gap-2">
      <button class="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">Coba sekarang</button>
      <button class="px-4 py-2 rounded-xl border border-white/20 text-slate-100 hover:border-white/40 transition">Lihat demo</button>
    </div>
  </div>
</div>`,
            },
            {
              title: "Neumorphic Toggle",
              desc: "Switch empuk dengan inner shadow.",
              preview: `<div class="inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-800/70 border border-white/10 shadow-inner">
  <span class="text-slate-300 text-sm">Gelap</span>
  <label class="relative w-12 h-6 rounded-full bg-slate-900 shadow-inner border border-slate-700 cursor-pointer inline-flex items-center">
    <input type="checkbox" class="peer sr-only" />
    <span class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 shadow-md transition peer-checked:translate-x-6 peer-checked:from-white peer-checked:to-slate-200"></span>
    <span class="absolute inset-0 rounded-full transition peer-checked:bg-emerald-500/30"></span>
  </label>
  <span class="text-slate-100 text-sm font-semibold peer-checked:text-emerald-100">Terang</span>
</div>`,
            },
            {
              title: "Glass Stats Card",
              desc: "Glassmorphism dengan ring gradient.",
              preview: `<div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow-xl">
  <div class="absolute -top-10 -right-6 w-24 h-24 bg-purple-500/30 blur-3xl rounded-full"></div>
  <div class="relative flex items-center gap-4">
    <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-sky-500 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-white/30">92</div>
    <div>
      <div class="text-white font-semibold">Skor UX</div>
      <div class="text-xs text-slate-200">+12% dibanding minggu lalu</div>
    </div>
  </div>
</div>`,
            },
            {
              title: "Animated Tabs",
              desc: "Underline glide dengan transition.",
              preview: `<div class="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-900/80 border border-white/10">
  <input type="radio" name="tabs-demo" id="tab-ov" class="peer/tab-ov hidden" checked />
  <label for="tab-ov" class="relative px-3 py-2 text-xs font-semibold text-slate-300 peer-checked/tab-ov:text-white transition cursor-pointer">
    Overview
    <span class="absolute left-2 right-2 -bottom-1 h-0.5 rounded-full bg-sky-400 transition-all opacity-0 peer-checked/tab-ov:opacity-100"></span>
  </label>
  <input type="radio" name="tabs-demo" id="tab-metric" class="peer/tab-metric hidden" />
  <label for="tab-metric" class="relative px-3 py-2 text-xs font-semibold text-slate-300 peer-checked/tab-metric:text-white transition cursor-pointer">
    Metrics
    <span class="absolute left-2 right-2 -bottom-1 h-0.5 rounded-full bg-sky-400 transition-all opacity-0 peer-checked/tab-metric:opacity-100"></span>
  </label>
  <input type="radio" name="tabs-demo" id="tab-activity" class="peer/tab-activity hidden" />
  <label for="tab-activity" class="relative px-3 py-2 text-xs font-semibold text-slate-300 peer-checked/tab-activity:text-white transition cursor-pointer">
    Activity
    <span class="absolute left-2 right-2 -bottom-1 h-0.5 rounded-full bg-sky-400 transition-all opacity-0 peer-checked/tab-activity:opacity-100"></span>
  </label>
</div>`,
            },
            {
              title: "Skeleton Loader",
              desc: "Placeholder shimmer untuk konten.",
              preview: `<div class="space-y-3 p-4 rounded-2xl bg-slate-900/70 border border-white/10">
  <div class="h-4 w-32 bg-slate-700/70 rounded animate-pulse"></div>
  <div class="h-3 w-full bg-slate-700/60 rounded animate-pulse"></div>
  <div class="h-3 w-5/6 bg-slate-700/60 rounded animate-pulse"></div>
  <div class="h-3 w-4/6 bg-slate-700/60 rounded animate-pulse"></div>
</div>`,
            },
            {
              title: "Timeline Steps",
              desc: "Stepper vertikal dengan accent.",
              preview: `<div class="relative pl-6 space-y-4">
  <div class="absolute left-2 top-2 bottom-2 w-px bg-slate-700"></div>
  <div class="relative">
    <div class="w-3 h-3 rounded-full bg-emerald-400 absolute left-2 top-1 -translate-x-1/2"></div>
    <div class="text-white font-semibold text-sm">Riset</div>
    <div class="text-xs text-slate-400">Kumpulkan kebutuhan pengguna</div>
  </div>
  <div class="relative">
    <div class="w-3 h-3 rounded-full bg-sky-400 absolute left-2 top-1 -translate-x-1/2"></div>
    <div class="text-white font-semibold text-sm">Desain</div>
    <div class="text-xs text-slate-400">Wireframe & prototipe interaktif</div>
  </div>
  <div class="relative">
    <div class="w-3 h-3 rounded-full bg-purple-400 absolute left-2 top-1 -translate-x-1/2"></div>
    <div class="text-white font-semibold text-sm">Build</div>
    <div class="text-xs text-slate-400">Implementasi dengan Tailwind</div>
  </div>
</div>`,
            },
            {
              title: "Testimonial Glow",
              desc: "Card dengan glow & accent border.",
              preview: `<div class="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-xl">
  <div class="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-tr from-emerald-500/10 via-sky-500/5 to-transparent"></div>
  <div class="relative space-y-3">
    <p class="text-slate-200 text-sm leading-relaxed">“Tailwind bikin tim kami shipping komponen 2x lebih cepat.”</p>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-emerald-500/30 border border-emerald-300/40 flex items-center justify-center text-white font-bold">AR</div>
      <div>
        <div class="text-white font-semibold text-sm">Ariana R.</div>
        <div class="text-[11px] text-slate-400">Product Lead</div>
      </div>
    </div>
  </div>
</div>`,
            },
            {
              title: "Feature Icons Row",
              desc: "Grid badge dengan hover pop.",
              preview: `<div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
  ${["API Ready", "Dark Mode", "Responsive", "Accessible"]
    .map(
      (t) =>
        `<div class="group rounded-xl border border-white/10 bg-slate-800/70 p-3 text-center text-xs text-slate-200 hover:-translate-y-0.5 hover:border-sky-400/60 transition">
  <div class="text-lg mb-1">✨</div>
  <div>${t}</div>
</div>`
    )
    .join("")}
</div>`,
            },
            {
              title: "CTA Banner",
              desc: "CTA dengan gradient & hover tilt ringan.",
              preview: `<div class="relative overflow-hidden rounded-2xl border border-white/10 p-5 bg-gradient-to-r from-indigo-500/30 via-blue-500/20 to-sky-500/10 transition hover:-translate-y-1 hover:shadow-2xl">
  <div class="flex items-center justify-between gap-3 flex-wrap">
    <div>
      <div class="text-white font-bold text-lg">Upgrade ke Pro</div>
      <div class="text-sm text-slate-200">Dapatkan komponen premium & support.</div>
    </div>
    <button class="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">Coba 14 hari</button>
  </div>
</div>`,
            },
            {
              title: "Pricing Toggle",
              desc: "Switch gradien + bayangan lembut.",
              preview: `<div class="flex items-center gap-3 text-sm text-slate-300">
  Bulanan
  <label class="relative w-12 h-6 rounded-full bg-slate-700 border border-white/10 cursor-pointer inline-flex items-center">
    <input type="checkbox" class="peer sr-only" />
    <span class="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 shadow transition peer-checked:translate-x-6"></span>
    <span class="absolute inset-0 rounded-full peer-checked:bg-purple-500/30 transition"></span>
  </label>
  Tahunan
</div>`,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {idx + 1}. {item.title}
                  </div>
                  <div className="text-xs text-slate-400">{item.desc}</div>
                </div>
              </div>
              <div className="bg-slate-800/60 border border-white/10 rounded-xl p-3">
                <div
                  className="bg-slate-900/60 rounded-lg p-4"
                  dangerouslySetInnerHTML={{
                    __html: item.preview || item.code,
                  }}
                />
              </div>
              <pre className="text-[11px] md:text-xs text-slate-200 font-mono bg-slate-900/70 p-3 rounded-lg border border-slate-700 overflow-x-auto">
                {item.preview || item.code}
              </pre>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 15,
    type: "code-editor",
    title: "Live Coding",
    subtitle: "Coba Sendiri",
    icon: <Code size={40} />,
    chapter: "Praktik Final",
    content: "Area coding langsung.",
  },
];

// --- DATA PEMATERI (ELEGANT) ---
const membersData = [
  {
    img: "/Members/Alfin.png",
    github: "https://github.com/Algaray02",
    linkedin: "https://linkedin.com/in/alfin-rozzaq-nirwana-00176a329/",
    instagram: "https://instagram.com/algaray_02",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    img: "/Members/Atha.png",
    github: "https://github.com/AthaRenata",
    linkedin: "https://linkedin.com/in/atha-renata-986757281/",
    instagram: "https://instagram.com/atharenn._",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    img: "/Members/Abi.png",
    github: "https://github.com/AbimanyuGilar",
    linkedin: "https://linkedin.com/in/abimanyu-gilar-waluyo-0a3b1532a/",
    instagram: "https://instagram.com/gilar_wly",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    img: "/Members/Sausan.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/sausan-fadiya-rizqiya-7b9044246/",
    instagram: "https://instagram.com/rifnyss_me",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    img: "/Members/Bowok.png",
    github: "https://github.com/Bhosya",
    linkedin: "https://linkedin.com/in/wahyu-prasetyo-wibowo-649343363/",
    instagram: "https://instagram.com/bowoksae",
    gradient: "from-orange-500 to-amber-500",
  },
];

// --- KOMPONEN UI PENDUKUNG ---

const MenuBar = memo(({ activeApp }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const title = useMemo(() => {
    if (activeApp === "learning") return "Learning";
    if (activeApp === "members") return "Members";
    if (activeApp === "info") return "About";
    if (activeApp === "project") return "Project";
    return "PCC";
  }, [activeApp]);

  const timeString = useMemo(() => {
    return (
      time.toLocaleDateString("id-ID", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }) +
      " " +
      time
        .toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .replace(".", ":")
    );
  }, [time]);

  return (
    <div className="h-9 bg-slate-900/60 text-white flex items-center justify-between px-3 md:px-4 text-xs font-medium select-none fixed top-0 w-full z-50 border-b border-white/10 shadow-sm">
      <div className="flex items-center gap-2 md:gap-4 min-w-0">
        <span className="text-base font-bold hover:text-white cursor-default opacity-90 hover:opacity-100 flex items-center shrink-0">
          <img
            src="/pcc.png"
            alt="PCC Logo"
            className="w-5 h-5"
            loading="lazy"
          />
        </span>
        <span className="font-bold tracking-wide truncate">{title}</span>
        <div className="hidden md:flex gap-4 opacity-80">
          <span className="hover:opacity-100 cursor-default">File</span>
          <span className="hover:opacity-100 cursor-default">Edit</span>
          <span className="hover:opacity-100 cursor-default">View</span>
          <span className="hover:opacity-100 cursor-default">Window</span>
          <span className="hover:opacity-100 cursor-default">Help</span>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4 opacity-90 shrink-0">
        <Battery size={16} className="hidden sm:block" />
        <Wifi size={16} className="hidden sm:block" />
        <Search size={16} className="hidden sm:block" />
        <span className="tabular-nums text-xs">{timeString}</span>
      </div>
    </div>
  );
});

const Dock = memo(({ activeApp, setActiveApp }) => {
  const dockItems = useMemo(
    () => [
      {
        id: "info",
        icon: <Info size={28} />,
        label: "Info",
        color: "from-sky-400 to-blue-600",
      },
      {
        id: "members",
        icon: <Users size={28} />,
        label: "Members",
        color: "from-emerald-400 to-teal-600",
      },
      {
        id: "learning",
        icon: <BookOpen size={28} />,
        label: "Materi",
        color: "from-violet-500 to-fuchsia-600",
      },
      {
        id: "project",
        icon: <Laptop size={28} />,
        label: "project",
        color: "from-red-400 to-red-600",
      },
    ],
    []
  );

  const handleAppClick = useCallback(
    (id) => {
      setActiveApp(id);
    },
    [setActiveApp]
  );

  const handleCloseAll = useCallback(() => {
    setActiveApp(null);
  }, [setActiveApp]);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-3 flex items-end gap-3 shadow-2xl ring-1 ring-black/20">
        {dockItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleAppClick(item.id)}
            className="group relative flex flex-col items-center transition-transform duration-300 ease-out hover:-translate-y-2 gpu-accelerate"
          >
            <div
              className={`
              w-14 h-14 rounded-2xl bg-gradient-to-b ${item.color} 
              shadow-lg flex items-center justify-center text-white relative overflow-hidden
              border border-white/10 transition-shadow duration-300
              ${
                activeApp === item.id
                  ? "ring-2 ring-white/50 ring-offset-2 ring-offset-transparent"
                  : ""
              }
            `}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-200"></div>
              <div className="relative z-10 drop-shadow-md">{item.icon}</div>
            </div>
            {activeApp === item.id && (
              <div className="absolute -bottom-2 w-1 h-1 bg-white/80 rounded-full"></div>
            )}
            <span className="absolute -top-12 px-3 py-1 bg-slate-900/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/10 pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
        <div className="w-px h-10 bg-white/20 mx-1 self-center"></div>
        <button
          onClick={handleCloseAll}
          className="group relative hover:-translate-y-2 transition-transform duration-300 gpu-accelerate"
        >
          <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center border border-white/10 text-slate-300 hover:bg-red-900/50 hover:text-red-400 transition-colors">
            <Trash2 size={20} />
          </div>
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1 bg-slate-900/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Close All
          </span>
        </button>
      </div>
    </div>
  );
});

const WindowFrame = memo(({ title, children, onClose }) => (
  <div className="bg-slate-900/90 border border-white/10 shadow-2xl rounded-xl overflow-hidden w-full max-w-6xl max-h-[90vh] my-auto flex flex-col animate-in zoom-in-95 duration-300 relative gpu-accelerate m-2 md:m-0">
    <div className="h-10 bg-gradient-to-b from-slate-800/90 to-slate-900/90 border-b border-white/10 flex items-center justify-between px-4 select-none shrink-0">
      <div className="flex items-center gap-2 group w-20">
        <button
          onClick={onClose}
          className="w-3 h-3 rounded-full bg-[#FF5F57] border border-[#E0443E] flex items-center justify-center text-[8px] hover:brightness-90"
        >
          <X className="opacity-0 group-hover:opacity-60" size={6} />
        </button>
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]"></div>
      </div>
      <div className="text-xs font-semibold text-slate-200 tracking-wide">
        {title}
      </div>
      <div className="w-20"></div>
    </div>
    <div className="flex-1 overflow-y-auto relative bg-slate-900/50 min-h-0">
      {children}
    </div>
  </div>
));

// --- APP MODULES ---

const MembersApp = memo(() => (
  <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
      {/* Header Section */}
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Tim Departemen Software
        </h2>
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
          Tim terbaik yang berdedikasi untuk mengedukasi mahasiswa Polines
        </p>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-3">
        {membersData.map((member, idx) => (
          <div
            key={idx}
            className="group relative"
            style={{
              animationDelay: `${idx * 100}ms`,
            }}
          >
            {/* Glass Card */}
            <div className="member-card h-full bg-slate-800/70 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden hover:-translate-y-2 flex flex-col gpu-accelerate relative">
              {/* Member Image - Full Width */}
              <div className="flex-1 overflow-hidden relative">
                <img
                  src={member.img}
                  alt={`Member ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110 gpu-accelerate"
                  loading="lazy"
                />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 p-5 bg-slate-900/80 border-t border-white/10 relative z-10">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600/50 hover:scale-110 transition-all duration-300 ease-out gpu-accelerate"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/30 hover:scale-110 transition-all duration-300 ease-out gpu-accelerate"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-900/30 hover:border-pink-500/30 hover:scale-110 transition-all duration-300 ease-out gpu-accelerate"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Shine Effect on Hover - Elegant Moving Light */}
              <div className="member-card-shine rounded-2xl">
                {/* Single Long Shine Beam - Diagonal Sweep */}
                <div className="member-card-shine-beam"></div>
              </div>

              {/* Border Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/0 hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const InfoApp = memo(() => (
  <div className="min-h-full flex items-center justify-center bg-slate-900 py-6 md:py-8 px-4">
    <div className="max-w-2xl w-full p-4 md:p-8 text-center">
      <div className="w-24 h-24 bg-white py-3 pe-3 ps-2 from-blue-500 to-purple-600 rounded-[2rem] shadow-2xl mx-auto mb-8 flex items-center justify-center overflow-hidden animate-bounce-slow">
        <img
          src="/software.webp"
          alt="Software Icon"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
        Departemen Software
      </h1>
      <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-6 md:mb-8">
        Departemen Software merupakan Departemen di bawah naungan workshop yang
        bertanggung jawab membangun hardskill, memberikan pelatihan, dan
        menghasilkan produk di bidang software
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
        <div className="p-4 bg-slate-800/50 rounded-xl border border-white/10">
          <div className="font-bold text-white mb-1 text-sm md:text-base">
            Versi
          </div>
          <div className="text-sm text-slate-400">33.0.0 (Stable)</div>
        </div>
        <div className="p-4 bg-slate-800/50 rounded-xl border border-white/10">
          <div className="font-bold text-white mb-1 text-sm md:text-base">
            Lisensi
          </div>
          <div className="text-sm text-slate-400">UKM PCC</div>
        </div>
        <div className="p-4 bg-slate-800/50 rounded-xl border border-white/10">
          <div className="font-bold text-white mb-1 text-sm md:text-base">
            Dibuat Oleh
          </div>
          <div className="text-sm text-slate-400">anak sopwer</div>
        </div>
      </div>
    </div>
  </div>
));

// --- LEARNING COMPONENTS ---

const CssPropertiesPlayground = memo(() => {
  const [properties, setProperties] = useState({
    color: "#ffffff",
    backgroundColor: "#3b82f6",
    fontSize: "16",
    padding: "12",
    margin: "10",
    borderWidth: "2",
    borderColor: "#1e40af",
    borderRadius: "8",
    fontWeight: "400",
    width: "200",
    height: "auto",
  });

  const updateProperty = useCallback((key, value) => {
    setProperties((prev) => ({ ...prev, [key]: value }));
  }, []);

  const style = useMemo(
    () => ({
      color: properties.color,
      backgroundColor: properties.backgroundColor,
      fontSize: `${properties.fontSize}px`,
      padding: `${properties.padding}px`,
      margin: `${properties.margin}px`,
      borderWidth: `${properties.borderWidth}px`,
      borderColor: properties.borderColor,
      borderStyle: "solid",
      borderRadius: `${properties.borderRadius}px`,
      fontWeight: properties.fontWeight,
      width: properties.height === "auto" ? `${properties.width}px` : "auto",
      minHeight:
        properties.height !== "auto" ? `${properties.height}px` : "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition:
        "transform 0.2s ease, opacity 0.2s ease, color 0.2s ease, background-color 0.2s ease",
    }),
    [properties]
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Controls */}
        <div className="flex flex-col gap-4 pr-2">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-white/10">
            <h4 className="text-sm font-bold text-purple-400 mb-4 flex items-center gap-2">
              <Layers size={16} /> Properti CSS
            </h4>

            {/* Color */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">color:</code>{" "}
                <span className="text-slate-300">{properties.color}</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={properties.color}
                  onChange={(e) => updateProperty("color", e.target.value)}
                  className="w-12 h-8 rounded border border-slate-600 cursor-pointer"
                />
                <input
                  type="text"
                  value={properties.color}
                  onChange={(e) => updateProperty("color", e.target.value)}
                  className="flex-1 px-2 py-1 bg-slate-900 text-slate-300 rounded text-xs border border-slate-700 font-mono"
                />
              </div>
            </div>

            {/* Background Color */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">background-color:</code>{" "}
                <span className="text-slate-300">
                  {properties.backgroundColor}
                </span>
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={properties.backgroundColor}
                  onChange={(e) =>
                    updateProperty("backgroundColor", e.target.value)
                  }
                  className="w-12 h-8 rounded border border-slate-600 cursor-pointer"
                />
                <input
                  type="text"
                  value={properties.backgroundColor}
                  onChange={(e) =>
                    updateProperty("backgroundColor", e.target.value)
                  }
                  className="flex-1 px-2 py-1 bg-slate-900 text-slate-300 rounded text-xs border border-slate-700 font-mono"
                />
              </div>
            </div>

            {/* Font Size */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">font-size:</code>{" "}
                <span className="text-slate-300">{properties.fontSize}px</span>
              </label>
              <input
                type="range"
                min="10"
                max="48"
                value={properties.fontSize}
                onChange={(e) => updateProperty("fontSize", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Padding */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">padding:</code>{" "}
                <span className="text-slate-300">{properties.padding}px</span>
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={properties.padding}
                onChange={(e) => updateProperty("padding", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Margin */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">margin:</code>{" "}
                <span className="text-slate-300">{properties.margin}px</span>
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={properties.margin}
                onChange={(e) => updateProperty("margin", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Border Width */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">border-width:</code>{" "}
                <span className="text-slate-300">
                  {properties.borderWidth}px
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={properties.borderWidth}
                onChange={(e) => updateProperty("borderWidth", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Border Color */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">border-color:</code>{" "}
                <span className="text-slate-300">{properties.borderColor}</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={properties.borderColor}
                  onChange={(e) =>
                    updateProperty("borderColor", e.target.value)
                  }
                  className="w-12 h-8 rounded border border-slate-600 cursor-pointer"
                />
                <input
                  type="text"
                  value={properties.borderColor}
                  onChange={(e) =>
                    updateProperty("borderColor", e.target.value)
                  }
                  className="flex-1 px-2 py-1 bg-slate-900 text-slate-300 rounded text-xs border border-slate-700 font-mono"
                />
              </div>
            </div>

            {/* Border Radius */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">border-radius:</code>{" "}
                <span className="text-slate-300">
                  {properties.borderRadius}px
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="50"
                value={properties.borderRadius}
                onChange={(e) => updateProperty("borderRadius", e.target.value)}
                className="w-full"
              />
            </div>

            {/* Font Weight */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">font-weight:</code>{" "}
                <span className="text-slate-300">{properties.fontWeight}</span>
              </label>
              <select
                value={properties.fontWeight}
                onChange={(e) => updateProperty("fontWeight", e.target.value)}
                className="w-full px-2 py-1 bg-slate-900 text-slate-300 rounded text-xs border border-slate-700 font-mono"
              >
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>
              </select>
            </div>

            {/* Width */}
            <div className="mb-4">
              <label className="text-xs text-slate-400 mb-1 block font-mono">
                <code className="text-purple-400">width:</code>{" "}
                <span className="text-slate-300">{properties.width}px</span>
              </label>
              <input
                type="range"
                min="100"
                max="400"
                value={properties.width}
                onChange={(e) => updateProperty("width", e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Monitor size={12} /> Live Preview
          </label>
          <div className="bg-slate-800 rounded-xl border border-white/10 shadow-inner p-8 flex items-center justify-center min-h-[400px]">
            <div style={style}>Hello, CSS!</div>
          </div>

          {/* Generated CSS */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-white/10">
            <label className="text-xs font-bold text-slate-400 mb-2 block">
              Generated CSS:
            </label>
            <pre className="text-xs text-purple-300 font-mono bg-slate-900/50 p-3 rounded border border-slate-700 overflow-x-auto">
              {`.box {
    color: ${properties.color};
    background-color: ${properties.backgroundColor};
    font-size: ${properties.fontSize}px;
    padding: ${properties.padding}px;
    margin: ${properties.margin}px;
    border: ${properties.borderWidth}px solid ${properties.borderColor};
    border-radius: ${properties.borderRadius}px;
    font-weight: ${properties.fontWeight};
    width: ${properties.width}px;
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
});

const GridPlayground = memo(() => {
  const [columns, setColumns] = useState("3");
  const [rows, setRows] = useState("3");
  const [gap, setGap] = useState("16");
  const [justifyItems, setJustifyItems] = useState("stretch");
  const [alignItems, setAlignItems] = useState("stretch");

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gap: `${gap}px`,
    justifyItems: justifyItems,
    alignItems: alignItems,
  };

  const totalItems = parseInt(columns) * parseInt(rows);
  const items = Array.from(
    { length: Math.min(totalItems, 9) },
    (_, i) => i + 1
  );

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/10 shadow-sm">
        <div className="space-y-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-teal-400">grid-template-columns:</code>{" "}
            <span className="text-slate-300">repeat({columns}, 1fr)</span>
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-teal-400">grid-template-rows:</code>{" "}
            <span className="text-slate-300">repeat({rows}, 1fr)</span>
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-teal-400">gap:</code>{" "}
            <span className="text-slate-300">{gap}px</span>
          </label>
          <input
            type="range"
            min="0"
            max="40"
            value={gap}
            onChange={(e) => setGap(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-teal-400">justify-items:</code>{" "}
            <span className="text-slate-300">{justifyItems}</span>
          </label>
          <select
            value={justifyItems}
            onChange={(e) => setJustifyItems(e.target.value)}
            className="block w-full text-sm p-2 rounded bg-slate-700 border border-white/10 text-slate-300 font-mono"
          >
            <option value="start">start</option>
            <option value="center">center</option>
            <option value="end">end</option>
            <option value="stretch">stretch</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-teal-400">align-items:</code>{" "}
            <span className="text-slate-300">{alignItems}</span>
          </label>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
            className="block w-full text-sm p-2 rounded bg-slate-700 border border-white/10 text-slate-300 font-mono"
          >
            <option value="start">start</option>
            <option value="center">center</option>
            <option value="end">end</option>
            <option value="stretch">stretch</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Preview */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Monitor size={12} /> Live Preview
          </label>
          <div className="flex-1 bg-slate-800 rounded-xl border-2 border-dashed border-slate-600 p-4 transition-colors duration-200 min-h-[300px]">
            <div style={gridStyle} className="h-full">
              {items.map((item) => (
                <div
                  key={item}
                  className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Generated CSS */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Code size={12} /> Generated CSS
          </label>
          <div className="flex-1 bg-slate-800/50 rounded-xl p-4 border border-white/10 min-h-[300px]">
            <pre className="text-xs text-teal-300 font-mono bg-slate-900/50 p-4 rounded border border-slate-700 overflow-x-auto h-full">
              {`.container {
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${rows}, 1fr);
    gap: ${gap}px;
    justify-items: ${justifyItems};
    align-items: ${alignItems};
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
});

const FlexboxPlayground = memo(() => {
  const [justify, setJustify] = useState("justify-center");
  const [align, setAlign] = useState("items-center");

  // Mapping Tailwind classes to CSS properties
  const getJustifyContent = (value) => {
    const map = {
      "justify-start": "start",
      "justify-center": "center",
      "justify-end": "end",
      "justify-between": "space-between",
      "justify-around": "space-around",
    };
    return map[value] || "center";
  };

  const getAlignItems = (value) => {
    const map = {
      "items-start": "start",
      "items-center": "center",
      "items-end": "end",
    };
    return map[value] || "center";
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/10 shadow-sm">
        <div className="space-y-1 flex-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-indigo-400">justify-content:</code>{" "}
            <span className="text-slate-300">{getJustifyContent(justify)}</span>
          </label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            className="block w-full text-sm p-2 rounded bg-slate-700 border border-white/10 text-slate-300 font-mono"
          >
            <option value="justify-start">start</option>
            <option value="justify-center">center</option>
            <option value="justify-end">end</option>
            <option value="justify-between">space-between</option>
            <option value="justify-around">space-around</option>
          </select>
        </div>
        <div className="space-y-1 flex-1">
          <label className="text-xs text-slate-400 mb-1 block font-mono">
            <code className="text-indigo-400">align-items:</code>{" "}
            <span className="text-slate-300">{getAlignItems(align)}</span>
          </label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            className="block w-full text-sm p-2 rounded bg-slate-700 border border-white/10 text-slate-300 font-mono"
          >
            <option value="items-start">start</option>
            <option value="items-center">center</option>
            <option value="items-end">end</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Preview */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Monitor size={12} /> Live Preview
          </label>
          <div
            className={`flex-1 bg-slate-800 rounded-xl border-2 border-dashed border-slate-600 flex ${justify} ${align} p-4 gap-4 transition-colors duration-200 min-h-[300px]`}
          >
            <div className="w-16 h-16 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="w-16 h-16 bg-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="w-16 h-16 bg-orange-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
              3
            </div>
          </div>
        </div>

        {/* Generated CSS */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Code size={12} /> Generated CSS
          </label>
          <div className="flex-1 bg-slate-800/50 rounded-xl p-4 border border-white/10 min-h-[300px]">
            <pre className="text-xs text-indigo-300 font-mono bg-slate-900/50 p-4 rounded border border-slate-700 overflow-x-auto h-full">
              {`.container {
    display: flex;
    justify-content: ${getJustifyContent(justify)};
    align-items: ${getAlignItems(align)};
    gap: 1rem;
    padding: 1rem;
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
});

const TailwindBuilder = memo(() => {
  const [state, setState] = useState({
    rounded: true,
    shadow: true,
    border: false,
    scale: false,
  });

  // Generate Tailwind classes
  const getTailwindClasses = () => {
    const classes = [
      "w-64",
      "h-40",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "gap-2",
      "transition-shadow",
      "duration-200",
      "bg-blue-500",
      "text-white",
      state.rounded ? "rounded-2xl" : "rounded-none",
      state.shadow ? "shadow-2xl shadow-black/20" : "shadow-none",
      state.border ? "border-4 border-white" : "border-0",
      state.scale ? "scale-110" : "scale-100",
    ];
    return classes.filter(Boolean).join(" ");
  };

  // Get code label for each control
  const getControlLabel = (key) => {
    const labels = {
      rounded: state.rounded ? "rounded-2xl" : "rounded-none",
      shadow: state.shadow ? "shadow-2xl" : "shadow-none",
      border: state.border ? "border-4" : "border-0",
      scale: state.scale ? "scale-110" : "scale-100",
    };
    return labels[key] || key;
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 min-h-0">
        {/* Left Side: Controls & Generated Code */}
        <div className="flex flex-col gap-4">
          {/* Controls */}
          <div className="bg-slate-800/50 rounded-xl p-4 border border-white/10">
            <label className="text-xs font-bold text-slate-400 uppercase mb-3 block">
              Controls
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.keys(state).map((key) => (
                <button
                  key={key}
                  onClick={() => setState((p) => ({ ...p, [key]: !p[key] }))}
                  className={`flex items-center justify-between p-2.5 rounded-lg border transition-[background-color,border-color,color] duration-200 ${
                    state[key]
                      ? "bg-sky-900/50 border-sky-600 text-sky-300"
                      : "bg-slate-800/50 border-white/10 text-slate-400"
                  }`}
                >
                  <code className="text-xs font-mono font-medium">
                    {getControlLabel(key)}
                  </code>
                  <div
                    className={`w-8 h-4 rounded-full relative transition-colors shrink-0 ${
                      state[key] ? "bg-sky-500" : "bg-slate-600"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-200 gpu-accelerate ${
                        state[key] ? "left-4.5" : "left-0.5"
                      }`}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Generated Code */}
          <div className="flex flex-col gap-2 flex-1 min-h-0">
            <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
              <Code size={12} /> Generated Code
            </label>
            <div className="flex-1 bg-slate-800/50 rounded-xl p-4 border border-white/10 flex flex-col min-h-0">
              <label className="text-xs font-bold text-slate-400 mb-2 block">
                Tailwind Classes:
              </label>
              <pre className="text-xs text-sky-300 font-mono bg-slate-900/50 p-4 rounded border border-slate-700 overflow-auto flex-1">
                {`<div class="${getTailwindClasses()}">
    <div class="font-bold text-xl">Card Component</div>
    <div class="text-xs opacity-80">Generated with Tailwind</div>
</div>`}
              </pre>
            </div>
          </div>
        </div>

        {/* Right Side: Live Preview */}
        <div className="flex flex-col gap-2 flex-1 min-h-0">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Monitor size={12} /> Live Preview
          </label>
          <div
            className={`flex-1 flex items-center justify-center rounded-xl border-2 border-dashed transition-colors duration-200 ${
              state.dark
                ? "bg-slate-900 border-slate-700"
                : "bg-slate-800 border-slate-600"
            }`}
          >
            <div className={getTailwindClasses()}>
              <div className="font-bold text-xl">Card Component</div>
              <div className="text-xs opacity-80">Generated with Tailwind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const CodePlayground = memo(() => {
  const [html, setHtml] = useState(
    '<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Button</button>'
  );

  const tailwindExamples = [
    {
      category: "Colors",
      examples: [
        "bg-blue-500 bg-red-500 bg-green-500 bg-yellow-500 bg-purple-500 bg-pink-500",
        "text-white text-black text-gray-500 text-slate-700",
        "border-blue-500 border-red-500 border-2 border-4",
      ],
    },
    {
      category: "Spacing",
      examples: [
        "p-2 p-4 p-6 p-8 (padding)",
        "px-4 py-2 (padding x/y)",
        "m-2 m-4 m-6 (margin)",
        "mx-auto my-4 (margin x/y)",
        "gap-2 gap-4 gap-6 (gap)",
      ],
    },
    {
      category: "Sizing",
      examples: [
        "w-full w-1/2 w-64 w-auto",
        "h-full h-12 h-24 h-auto",
        "min-w-0 max-w-md max-w-lg",
        "min-h-screen min-h-0",
      ],
    },
    {
      category: "Typography",
      examples: [
        "text-xs text-sm text-base text-lg text-xl text-2xl text-3xl text-4xl",
        "font-thin font-normal font-medium font-bold font-extrabold",
        "text-center text-left text-right",
        "uppercase lowercase capitalize",
        "leading-tight leading-normal leading-relaxed",
        "tracking-tight tracking-normal tracking-wide",
      ],
    },
    {
      category: "Borders & Rounded",
      examples: [
        "rounded rounded-sm rounded-md rounded-lg rounded-xl rounded-2xl rounded-full",
        "border border-2 border-4 border-8",
        "border-solid border-dashed border-dotted",
        "border-t border-r border-b border-l",
      ],
    },
    {
      category: "Shadows",
      examples: [
        "shadow shadow-sm shadow-md shadow-lg shadow-xl shadow-2xl",
        "shadow-inner shadow-none",
        "drop-shadow drop-shadow-lg drop-shadow-xl",
      ],
    },
    {
      category: "Display & Flexbox",
      examples: [
        "flex flex-col flex-row flex-wrap flex-nowrap",
        "items-start items-center items-end items-stretch",
        "justify-start justify-center justify-end justify-between justify-around",
        "grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4",
        "hidden block inline inline-block",
      ],
    },
    {
      category: "Effects",
      examples: [
        "opacity-50 opacity-75 opacity-100",
        "blur-sm blur-md blur-lg blur-xl",
        "brightness-50 brightness-75 brightness-100 brightness-150",
        "contrast-50 contrast-100 contrast-125 contrast-200",
        "grayscale sepia saturate-50",
      ],
    },
    {
      category: "Transforms",
      examples: [
        "scale-50 scale-75 scale-100 scale-105 scale-110 scale-125 scale-150",
        "rotate-0 rotate-45 rotate-90 rotate-180",
        "translate-x-0 translate-x-4 translate-y-0 translate-y-4",
        "skew-x-0 skew-x-12 skew-y-0 skew-y-12",
      ],
    },
    {
      category: "Transitions",
      examples: [
        "transition transition-all transition-colors transition-opacity",
        "duration-75 duration-100 duration-150 duration-200 duration-300 duration-500 duration-700 duration-1000",
        "ease-linear ease-in ease-out ease-in-out",
        "delay-75 delay-100 delay-150 delay-200 delay-300 delay-500 delay-700 delay-1000",
      ],
    },
    {
      category: "Hover & Focus",
      examples: [
        "hover:bg-blue-600 hover:text-white hover:scale-105",
        "hover:shadow-lg hover:opacity-75",
        "focus:outline-none focus:ring-2 focus:ring-blue-500",
        "active:scale-95 active:bg-blue-700",
        "disabled:opacity-50 disabled:cursor-not-allowed",
      ],
    },
    {
      category: "Gradients",
      examples: [
        "bg-gradient-to-r bg-gradient-to-l bg-gradient-to-t bg-gradient-to-b",
        "bg-gradient-to-br bg-gradient-to-bl bg-gradient-to-tr bg-gradient-to-tl",
        "from-blue-500 via-purple-500 to-pink-500",
        "from-red-500 to-yellow-500",
      ],
    },
    {
      category: "Button Examples",
      examples: [
        '<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Primary</button>',
        '<button class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition">Gradient</button>',
        '<button class="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">Outline</button>',
        '<button class="bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 hover:scale-110 transition">Rounded</button>',
        '<button class="bg-gray-800 text-white px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition">Dark</button>',
        '<button class="bg-white text-gray-800 px-4 py-2 rounded shadow hover:shadow-md hover:bg-gray-50 transition">Light</button>',
        '<button class="bg-blue-500 text-white px-4 py-2 rounded opacity-75 hover:opacity-100 transition">Faded</button>',
        '<button class="bg-green-500 text-white px-4 py-2 rounded transform hover:rotate-2 hover:scale-105 transition">Animated</button>',
      ],
    },
  ];

  return (
    <div className="h-full flex flex-col gap-4">
      {/* Code Editor - Top */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
          <Code size={12} /> HTML & Tailwind Classes
        </label>
        <textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="h-48 w-full p-4 bg-slate-900 text-blue-300 font-mono text-sm rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
          spellCheck="false"
          placeholder='Contoh: <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Button</button>'
        />
      </div>

      {/* Live Preview - Bottom */}
      <div className="flex flex-col gap-2 flex-1 min-h-0">
        <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
          <Monitor size={12} /> Live Preview
        </label>
        <div className="flex-1 bg-slate-800 rounded-xl border border-white/10 shadow-inner p-8 flex items-center justify-center overflow-auto">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>

      {/* Tailwind Reference */}
      <div className="bg-slate-800/50 rounded-xl p-4 border border-white/10 max-h-64 overflow-y-auto">
        <h4 className="text-xs font-bold text-purple-400 mb-3 flex items-center gap-2">
          <Zap size={12} /> Tailwind Classes Reference
        </h4>
        <div className="space-y-3">
          {tailwindExamples.map((category, idx) => (
            <div key={idx}>
              <div className="text-xs font-semibold text-slate-300 mb-1">
                {category.category}:
              </div>
              <div className="text-xs text-slate-400 font-mono space-y-1">
                {category.examples.map((example, exIdx) => (
                  <div key={exIdx} className="pl-2">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-slate-500 text-center">
        <span className="font-bold text-purple-400">Tips:</span> Gunakan class
        Tailwind di atas untuk styling button. Copy contoh button dan edit
        sesuai kebutuhan!
      </p>
    </div>
  );
});

const LearningApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef(null);

  const slide = useMemo(() => slidesData[currentSlide], [currentSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((c) => (c < slidesData.length - 1 ? c + 1 : c));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((c) => (c > 0 ? c - 1 : c));
  }, []);

  const handleSlideClick = useCallback((idx) => {
    setCurrentSlide(idx);
  }, []);

  const renderInteractive = useCallback((type) => {
    switch (type) {
      case "interactive-css":
        return <CssPropertiesPlayground />;
      case "interactive-flex":
        return <FlexboxPlayground />;
      case "interactive-grid":
        return <GridPlayground />;
      case "interactive-tailwind":
        return <TailwindBuilder />;
      case "code-editor":
        return <CodePlayground />;
      default:
        return null;
    }
  }, []);

  const quizKeyByTitle = useMemo(
    () => ({
      "Visualisasi Tag HTML": "Quiz HTML",
      "Konsep Flexbox & Grid": "Quiz CSS",
      "Tailwind CSS Intro": "Quiz Tailwind CSS",
    }),
    []
  );

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentSlide]);

  return (
    <div className="flex bg-slate-900 h-screen sm:h-[74vh]">
      {/* Sidebar TOC */}
      <div className="w-64 bg-slate-800 border-r border-white/10 p-4 hidden md:flex flex-col gap-1 overflow-y-auto">
        <h3 className="text-xs font-bold text-slate-500 uppercase mb-2 px-2">
          Table of Contents
        </h3>
        {slidesData.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => handleSlideClick(idx)}
            className={`text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
              idx === currentSlide
                ? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
                : "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
            }`}
          >
            {idx === currentSlide && (
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            )}
            <span className="truncate">{s.title}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto overflow-x-visible md:overflow-x-auto p-2 md:p-8 lg:p-12 pb-32"
        >
          {slide.type === "cover" ? (
            <div className="min-h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 py-12">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] flex items-center justify-center shadow-2xl mb-8 ring-4 ring-slate-800">
                {slide.icon}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight px-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-400 font-light px-4">
                {slide.subtitle}
              </p>
              <button
                onClick={nextSlide}
                className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold md:hover:scale-105 transition-[background-color,transform] duration-200 flex items-center gap-2 shadow-xl gpu-accelerate"
              >
                Mulai Belajar <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto w-full flex flex-col mb-8 px-0 md:px-0">
              <div className="flex items-center gap-2 md:gap-3 text-slate-500 text-xs md:text-sm font-bold uppercase tracking-wider mb-4 flex-wrap">
                <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 border border-white/10">
                  {slide.chapter}
                </span>
                <span>/</span>
                <span>Part {currentSlide}</span>
              </div>

              {(() => {
                // Judul yang tetap horizontal (logo di samping) bahkan di mobile
                const horizontalTitles = [
                  "Konsep HTML",
                  "Struktur Kode HTML",
                  "Visualisasi Tag HTML",
                  "Konsep CSS",
                  "Cara Penggunaan CSS",
                  "Dasar-dasar CSS Interaktif",
                  "CSS Box Model",
                  "Konsep Flexbox & Grid",
                  "CSS Flexbox",
                  "CSS Grid",
                  "Konsep Tailwind CSS",
                  "Tailwind CSS Intro",
                  "Tailwind Playground",
                  "Live Coding",
                ];
                const isHorizontal = horizontalTitles.includes(slide.title);

                return (
                  <div
                    className={`flex ${
                      isHorizontal ? "flex-row" : "flex-col md:flex-row"
                    } items-${
                      isHorizontal ? "start" : "center md:items-start"
                    } gap-4 mb-6`}
                  >
                    <div className="p-3 bg-slate-800 rounded-xl text-slate-300 border border-white/10 flex items-center justify-center shrink-0">
                      {getSlideIcon(slide.chapter) || slide.icon}
                    </div>
                    <div
                      className={`flex-1 ${
                        isHorizontal ? "text-left" : "text-center md:text-left"
                      }`}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {slide.title}
                      </h2>
                      <p className="text-slate-400 text-base md:text-lg">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })()}

              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-1 shadow-sm flex flex-col overflow-visible md:overflow-auto">
                {slide.type.startsWith("interactive") ||
                slide.type === "code-editor" ? (
                  <div className="rounded-xl p-4 md:p-6 overflow-visible">
                    <div className="mb-4 text-sm md:text-base text-slate-400">
                      {slide.content}
                    </div>
                    <div className="overflow-visible">
                      {renderInteractive(slide.type)}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 md:p-6 text-sm md:text-base text-slate-300 leading-relaxed overflow-visible md:overflow-auto">
                    {slide.content}
                  </div>
                )}
              </div>
              {quizKeyByTitle[slide.title] && (
                <QuizSection
                  key={quizKeyByTitle[slide.title]}
                  slideTitle={quizKeyByTitle[slide.title]}
                />
              )}
            </div>
          )}
        </div>

        {/* Control Bar - Fixed */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 h-16 border-t border-white/10 bg-slate-800/90 px-4 md:px-8 flex items-center justify-between z-[60] shadow-lg gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-slate-700/50 disabled:opacity-30 transition flex items-center gap-2 text-sm font-semibold text-slate-300 relative z-10"
          >
            <ChevronLeft size={20} />{" "}
            <span className="hidden md:inline">Sebelumnya</span>
          </button>

          <div className="flex gap-1">
            {slidesData.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                  idx === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-slate-600"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            disabled={currentSlide === slidesData.length - 1}
            className="p-2 rounded-full hover:bg-slate-700/50 disabled:opacity-30 transition flex items-center gap-2 text-sm font-semibold text-slate-300 relative z-10"
          >
            <span className="hidden md:inline">Selanjutnya</span>{" "}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [activeApp, setActiveApp] = useState(null);

  const handleSetActiveApp = useCallback((app) => {
    setActiveApp(app);
  }, []);

  const handleCloseApp = useCallback(() => {
    setActiveApp(null);
  }, []);

  const windowTitle = useMemo(() => {
    if (activeApp === "learning") return "Interactive Module";
    if (activeApp === "info") return "Info";
    if (activeApp === "members") return "Departemen Software";
    if (activeApp === "project") return "Project - Landing Page Bisnis Kopi";
    return "Info";
  }, [activeApp]);

  return (
    <div
      className="w-full h-screen overflow-hidden bg-cover bg-center relative font-sans antialiased"
      style={{
        backgroundImage: 'url("/wallpaper.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <MenuBar activeApp={activeApp} />

      <main className="relative z-10 min-h-[calc(100vh-3rem)] pt-12 pb-24 px-3 md:px-4 flex items-start justify-center overflow-y-auto">
        {activeApp && (
          <WindowFrame title={windowTitle} onClose={handleCloseApp}>
            {activeApp === "learning" && <LearningApp />}
            {activeApp === "members" && <MembersApp />}
            {activeApp === "info" && <InfoApp />}
            {activeApp === "project" && <ProjectApp />}
          </WindowFrame>
        )}
      </main>

      <div className={activeApp ? "hidden md:block" : ""}>
        <Dock activeApp={activeApp} setActiveApp={handleSetActiveApp} />
      </div>
    </div>
  );
};

export default App;
