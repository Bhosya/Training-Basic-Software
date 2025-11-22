import React, { useState, useEffect, useRef } from "react";
import {
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

// --- HELPER FUNCTION UNTUK ICON ---
const getSlideIcon = (chapter) => {
  if (chapter.includes("HTML")) {
    return (
      <img
        src="/Materi/html.png"
        alt="HTML"
        className="w-10 h-10 object-contain"
      />
    );
  }
  if (chapter.includes("CSS")) {
    return (
      <img
        src="/Materi/css.png"
        alt="CSS"
        className="w-10 h-10 object-contain"
      />
    );
  }
  if (chapter.includes("Tailwind")) {
    return (
      <img
        src="/Materi/tailwind.png"
        alt="Tailwind"
        className="w-10 h-10 object-contain"
      />
    );
  }
  return null;
};

// --- DATA MATERI (DIPERLUAS) ---
const slidesData = [
  {
    id: 1,
    type: "cover",
    title: "Web Development Mastery",
    subtitle: "HTML5, CSS3 & Tailwind CSS",
    icon: <Monitor size={72} className="text-white drop-shadow-lg" />,
    chapter: "Intro",
    content:
      "Jelajahi dunia pengembangan web modern dengan panduan interaktif dan visual.",
  },
  {
    id: 2,
    type: "content",
    title: "Konsep HTML",
    subtitle: "Struktur Dasar Website",
    icon: <LayoutTemplate size={40} />,
    chapter: "HTML - Konsep",
    content: (
      <div className="space-y-8">
        {/* Apa itu HTML */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
              <LayoutTemplate size={24} className="text-white" />
            </div>
            <div className="flex-1">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-700/30">
              <div className="text-blue-400 font-bold text-sm mb-1">
                HyperText
              </div>
              <div className="text-xs text-slate-400">
                Teks yang saling terhubung melalui hyperlink
              </div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-700/30">
              <div className="text-blue-400 font-bold text-sm mb-1">Markup</div>
              <div className="text-xs text-slate-400">
                Sistem untuk menandai struktur dokumen
              </div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-blue-700/30">
              <div className="text-blue-400 font-bold text-sm mb-1">
                Language
              </div>
              <div className="text-xs text-slate-400">
                Bahasa standar untuk struktur web
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
                <img src="/pcc.png" alt="Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Form Elements */}
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Form Elements</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Layers size={24} className="text-white" />
            </div>
            <div className="flex-1">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-700/30">
              <div className="text-purple-400 font-bold text-sm mb-1">
                Separation
              </div>
              <div className="text-xs text-slate-400">
                Memisahkan struktur (HTML) dari presentasi (CSS)
              </div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-700/30">
              <div className="text-purple-400 font-bold text-sm mb-1">
                Responsive
              </div>
              <div className="text-xs text-slate-400">
                Membuat layout yang adaptif di berbagai ukuran layar
              </div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded-lg border border-purple-700/30">
              <div className="text-purple-400 font-bold text-sm mb-1">
                Maintainable
              </div>
              <div className="text-xs text-slate-400">
                Lebih mudah dirawat dan diubah
              </div>
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
      <div className="space-y-8">
        <p className="text-slate-300 text-lg">
          Ada tiga cara untuk menambahkan CSS ke dokumen HTML. Mari kita
          pelajari masing-masing.
        </p>

        {/* Inline CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                1. Inline CSS
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                CSS langsung ditulis dalam atribut{" "}
                <code className="text-purple-400">style</code> pada tag HTML.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-700/30">
                <h4 className="text-sm font-bold text-purple-300 mb-2">
                  Kode HTML:
                </h4>
                <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-3 rounded border border-slate-700 overflow-x-auto">
                  {`<h1 style="color: blue; font-size: 24px;">
    Judul Biru
</h1>
<p style="background-color: yellow; padding: 10px;">
    Paragraf dengan background kuning
</p>`}
                </pre>
                <div className="mt-4 pt-4 border-t border-purple-700/30">
                  <h4 className="text-sm font-bold text-purple-300 mb-2">
                    Hasil:
                  </h4>
                  <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
                    <h1 style={{ color: "blue", fontSize: "24px" }}>
                      Judul Biru
                    </h1>
                    <p
                      style={{
                        backgroundColor: "yellow",
                        padding: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Paragraf dengan background kuning
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 bg-red-900/20 p-3 rounded-lg border border-red-700/30">
                <p className="text-xs text-red-300">
                  ⚠️ <strong>Kelemahan:</strong> Tidak dapat digunakan ulang,
                  sulit dirawat, dan tidak efisien untuk banyak elemen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Internal CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                2. Internal CSS
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                CSS ditulis di dalam tag{" "}
                <code className="text-purple-400">&lt;style&gt;</code> di bagian{" "}
                <code className="text-purple-400">&lt;head&gt;</code> HTML.
              </p>
              <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-700/30">
                <h4 className="text-sm font-bold text-purple-300 mb-2">
                  Kode HTML:
                </h4>
                <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-3 rounded border border-slate-700 overflow-x-auto">
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
              <div className="mt-4 bg-yellow-900/20 p-3 rounded-lg border border-yellow-700/30">
                <p className="text-xs text-yellow-300">
                  💡 <strong>Kelebihan:</strong> Lebih terorganisir, dapat
                  digunakan untuk semua elemen dalam satu halaman.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* External CSS */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-400 mb-3">
                3. External CSS
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                CSS ditulis dalam file terpisah (eksternal) dan dihubungkan
                dengan tag <code className="text-purple-400">&lt;link&gt;</code>{" "}
                di bagian <code className="text-purple-400">&lt;head&gt;</code>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="text-sm font-bold text-purple-300 mb-2">
                    File: style.css
                  </h4>
                  <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-3 rounded border border-slate-700 overflow-x-auto">
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
                <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-700/30">
                  <h4 className="text-sm font-bold text-purple-300 mb-2">
                    File: index.html
                  </h4>
                  <pre className="text-xs text-slate-300 font-mono bg-slate-900/50 p-3 rounded border border-slate-700 overflow-x-auto">
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
              <div className="mt-4 bg-emerald-900/20 p-3 rounded-lg border border-emerald-700/30">
                <p className="text-xs text-emerald-300">
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
          <div className="relative group cursor-default transition-transform hover:scale-105 duration-500">
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
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center shrink-0">
              <Layout size={24} className="text-white" />
            </div>
            <div className="flex-1">
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

          <div className="grid grid-cols-2 gap-3">
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
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shrink-0">
              <Grid size={24} className="text-white" />
            </div>
            <div className="flex-1">
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
            <div className="grid grid-cols-3 gap-2 h-24">
              <div className="bg-teal-500 rounded flex items-center justify-center text-white font-bold text-xs">
                1
              </div>
              <div className="bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs">
                2
              </div>
              <div className="bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">
                3
              </div>
              <div className="bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-xs">
                4
              </div>
              <div className="bg-purple-500 rounded col-span-2 flex items-center justify-center text-white font-bold text-xs">
                5 (2 cols)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
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
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shrink-0">
              <Type size={24} className="text-white" />
            </div>
            <div className="flex-1">
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

        {/* Konsep Utility-First */}
        <div className="bg-violet-900/20 border border-violet-700/50 rounded-2xl p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center shrink-0">
              <Code size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-violet-400 mb-3">
                Konsep Utility-First
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Tailwind menggunakan pendekatan{" "}
                <strong className="text-white">utility-first</strong>, di mana
                setiap class memiliki fungsi spesifik dan dapat dikombinasikan
                untuk membuat desain kompleks.
              </p>
            </div>
          </div>

          {/* Visual Example */}
          <div className="bg-slate-800/50 p-4 rounded-lg border border-violet-700/30 mb-4">
            <div className="flex items-center justify-center gap-4 p-4 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition">
              <span className="font-bold">Button</span>
            </div>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-lg border border-white/10">
            <p className="text-xs text-slate-400 mb-2">
              Kode HTML dengan Tailwind:
            </p>
            <code className="text-xs text-violet-400 block mb-4">
              &lt;div class="flex items-center justify-center p-4 bg-blue-500
              text-white rounded-lg hover:bg-blue-600 transition"&gt;
            </code>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <code className="text-violet-400">flex</code>
                <span className="text-slate-500">→ display: flex</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-violet-400">items-center</code>
                <span className="text-slate-500">→ align-items: center</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-violet-400">justify-center</code>
                <span className="text-slate-500">
                  → justify-content: center
                </span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-violet-400">p-4</code>
                <span className="text-slate-500">→ padding: 1rem</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-violet-400">bg-blue-500</code>
                <span className="text-slate-500">→ background-color</span>
              </div>
              <div className="flex items-center gap-2">
                <code className="text-violet-400">rounded-lg</code>
                <span className="text-slate-500">→ border-radius</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    type: "content",
    title: "Tailwind CSS Intro",
    subtitle: "Utility-First",
    icon: <Type size={40} />,
    chapter: "Tailwind - Praktik",
    content: (
      <div className="space-y-5">
        <p className="text-slate-300">
          Bangun desain modern tanpa meninggalkan HTML. Cukup panggil class yang
          Anda butuhkan.
        </p>
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 bg-slate-800/70 rounded-lg border border-white/10 flex items-center justify-between">
            <code className="text-sky-400 font-bold text-sm">text-center</code>
            <span className="text-slate-400 text-xs">text-align: center;</span>
          </div>
          <div className="p-3 bg-slate-800/70 rounded-lg border border-white/10 flex items-center justify-between">
            <code className="text-sky-400 font-bold text-sm">
              bg-gradient-to-r from-blue-500 to-purple-500
            </code>
            <span className="text-slate-400 text-xs">
              background-image: linear-gradient(...)
            </span>
          </div>
          <div className="p-3 bg-slate-800/70 rounded-lg border border-white/10 flex items-center justify-between">
            <code className="text-sky-400 font-bold text-sm">
              hover:scale-110
            </code>
            <span className="text-slate-400 text-xs">
              transform: scale(1.1) on hover
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    type: "interactive-tailwind",
    title: "Tailwind Playground",
    subtitle: "Interactive Builder",
    icon: <MousePointer size={40} />,
    chapter: "Tailwind - Praktik",
    content:
      "Eksperimen dengan class Tailwind untuk melihat betapa cepatnya membangun UI.",
  },
  {
    id: 13,
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

const MenuBar = ({ activeApp }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTitle = () => {
    if (activeApp === "learning") return "Learning";
    if (activeApp === "members") return "Members";
    if (activeApp === "info") return "About";
    return "PCC";
  };

  return (
    <div className="h-9 bg-slate-900/60 backdrop-blur-xl text-white flex items-center justify-between px-4 text-xs font-medium select-none fixed top-0 w-full z-50 border-b border-white/10 shadow-sm transition-all">
      <div className="flex items-center gap-4">
        <span className="text-base font-bold hover:text-white cursor-default opacity-90 hover:opacity-100 flex items-center">
          <img src="/pcc.png" alt="PCC Logo" className="w-5 h-5" />
        </span>
        <span className="font-bold tracking-wide">{getTitle()}</span>
        <div className="hidden md:flex gap-4 opacity-80">
          <span className="hover:opacity-100 cursor-default">File</span>
          <span className="hover:opacity-100 cursor-default">Edit</span>
          <span className="hover:opacity-100 cursor-default">View</span>
          <span className="hover:opacity-100 cursor-default">Window</span>
          <span className="hover:opacity-100 cursor-default">Help</span>
        </div>
      </div>
      <div className="flex items-center gap-4 opacity-90">
        <Battery size={16} />
        <Wifi size={16} />
        <Search size={16} />
        <span className="tabular-nums">
          {time.toLocaleDateString("id-ID", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
          &nbsp;
          {time
            .toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(".", ":")}
        </span>
      </div>
    </div>
  );
};

const Dock = ({ activeApp, setActiveApp }) => {
  const dockItems = [
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
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 py-3 flex items-end gap-3 shadow-2xl ring-1 ring-black/20">
        {dockItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveApp(item.id)}
            className="group relative flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2"
          >
            <div
              className={`
              w-14 h-14 rounded-2xl bg-gradient-to-b ${item.color} 
              shadow-lg flex items-center justify-center text-white relative overflow-hidden
              border border-white/10 transition-all duration-300
              ${
                activeApp === item.id
                  ? "ring-2 ring-white/50 ring-offset-2 ring-offset-transparent"
                  : ""
              }
            `}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 drop-shadow-md">{item.icon}</div>
            </div>
            {activeApp === item.id && (
              <div className="absolute -bottom-2 w-1 h-1 bg-white/80 rounded-full"></div>
            )}
            <span className="absolute -top-12 px-3 py-1 bg-slate-900/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md border border-white/10 pointer-events-none">
              {item.label}
            </span>
          </button>
        ))}
        <div className="w-px h-10 bg-white/20 mx-1 self-center"></div>
        <button
          onClick={() => setActiveApp(null)}
          className="group relative hover:-translate-y-2 transition-all"
        >
          <div className="w-12 h-12 rounded-full bg-slate-700/50 backdrop-blur flex items-center justify-center border border-white/10 text-slate-300 hover:bg-red-900/50 hover:text-red-400 transition-colors">
            <Trash2 size={20} />
          </div>
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1 bg-slate-900/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all backdrop-blur-md">
            Close All
          </span>
        </button>
      </div>
    </div>
  );
};

const WindowFrame = ({ title, children, onClose }) => (
  <div className="bg-slate-900/90 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-xl overflow-hidden w-full max-w-6xl max-h-[90vh] my-auto flex flex-col animate-in zoom-in-95 duration-300 relative">
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
);

// --- APP MODULES ---

const MembersApp = () => (
  <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header Section */}
      <div className="text-center mb-8 space-y-4">
        <h2 className="text-5xl font-black text-white tracking-tight">
          Tim Departemen Software
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Tim terbaik yang berdedikasi untuk mengedukasi mahasiswa Polines
        </p>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {membersData.map((member, idx) => (
          <div
            key={idx}
            className="group relative"
            style={{
              animationDelay: `${idx * 100}ms`,
            }}
          >
            {/* Glass Card */}
            <div className="h-full bg-slate-800/70 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1 flex flex-col">
              {/* Member Image - Full Width */}
              <div className="flex-1 overflow-hidden">
                <img
                  src={member.img}
                  alt={`Member ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 p-5 bg-slate-900/80 backdrop-blur-sm border-t border-white/10">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-600/50 hover:scale-110 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-900/30 hover:border-blue-500/30 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-pink-900/30 hover:border-pink-500/30 hover:scale-110 transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InfoApp = () => (
  <div className="min-h-full flex items-center justify-center bg-slate-900 py-8">
    <div className="max-w-2xl w-full p-8 text-center">
      <div className="w-24 h-24 bg-white py-3 pe-3 ps-2 from-blue-500 to-purple-600 rounded-[2rem] shadow-2xl mx-auto mb-8 flex items-center justify-center overflow-hidden animate-bounce-slow">
        <img
          src="/software.webp"
          alt="Software Icon"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
        Departemen Software
      </h1>
      <p className="text-xl text-slate-400 leading-relaxed mb-8">
        Departemen Software merupakan Departemen di bawah naungan workshop yang
        bertanggung jawab membangun hardskill, memberikan pelatihan, dan
        menghasilkan produk di bidang software
      </p>
      <div className="grid grid-cols-3 gap-4 text-left">
        <div className="p-4 bg-slate-800/50 rounded-xl border border-white/10">
          <div className="font-bold text-white mb-1">Versi</div>
          <div className="text-sm text-slate-400">33.0.0 (Stable)</div>
        </div>
        <div className="p-4 bg-slate-800/50 rounded-xl border border-white/10">
          <div className="font-bold text-white mb-1">Lisensi</div>
          <div className="text-sm text-slate-400">UKM PCC</div>
        </div>
        <div className="p-4 bg-slate-800/50 rounded-xl border border-white/10">
          <div className="font-bold text-white mb-1">Dibuat Oleh</div>
          <div className="text-sm text-slate-400">anak sopwer</div>
        </div>
      </div>
    </div>
  </div>
);

// --- LEARNING COMPONENTS ---

const CssPropertiesPlayground = () => {
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

  const updateProperty = (key, value) => {
    setProperties((prev) => ({ ...prev, [key]: value }));
  };

  const style = {
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
    minHeight: properties.height !== "auto" ? `${properties.height}px` : "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0 flex-1">
        {/* Controls */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
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
          <div className="flex-1 bg-slate-800 rounded-xl border border-white/10 shadow-inner p-8 flex items-center justify-center overflow-auto min-h-[400px]">
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
};

const GridPlayground = () => {
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
          <div className="flex-1 bg-slate-800 rounded-xl border-2 border-dashed border-slate-600 p-4 transition-all duration-500 min-h-[300px]">
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
};

const FlexboxPlayground = () => {
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
            className={`flex-1 bg-slate-800 rounded-xl border-2 border-dashed border-slate-600 flex ${justify} ${align} p-4 gap-4 transition-all duration-500 min-h-[300px]`}
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
};

const TailwindBuilder = () => {
  const [state, setState] = useState({
    rounded: true,
    shadow: true,
    gradient: false,
    dark: false,
  });

  return (
    <div className="h-full flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/3 space-y-3">
        {Object.keys(state).map((key) => (
          <button
            key={key}
            onClick={() => setState((p) => ({ ...p, [key]: !p[key] }))}
            className={`w-full flex items-center justify-between p-3 rounded-lg border transition-all ${
              state[key]
                ? "bg-blue-900/50 border-blue-600 text-blue-300"
                : "bg-slate-800/50 border-white/10 text-slate-400"
            }`}
          >
            <span className="capitalize font-medium">{key}</span>
            <div
              className={`w-10 h-5 rounded-full relative transition-colors ${
                state[key] ? "bg-blue-500" : "bg-slate-600"
              }`}
            >
              <div
                className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                  state[key] ? "left-6" : "left-1"
                }`}
              ></div>
            </div>
          </button>
        ))}
      </div>
      <div
        className={`flex-1 aspect-video flex items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-500 ${
          state.dark
            ? "bg-slate-900 border-slate-700"
            : "bg-slate-800 border-slate-600"
        }`}
      >
        <div
          className={`
                w-64 h-40 flex flex-col items-center justify-center gap-2 transition-all duration-500
                ${state.rounded ? "rounded-2xl" : "rounded-none"}
                ${state.shadow ? "shadow-2xl shadow-black/20" : "shadow-none"}
                ${
                  state.gradient
                    ? "bg-gradient-to-br from-sky-400 to-indigo-600 text-white"
                    : "bg-white text-slate-800"
                }
                ${
                  !state.gradient && state.dark ? "bg-slate-800 text-white" : ""
                }
            `}
        >
          <div className="font-bold text-xl">Card Component</div>
          <div className="text-xs opacity-80">Generated with Tailwind</div>
        </div>
      </div>
    </div>
  );
};

const CodePlayground = () => {
  const [html, setHtml] = useState(
    '<button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Button</button>'
  );

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Code size={12} /> HTML & Tailwind Classes
          </label>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="flex-1 w-full p-4 bg-slate-900 text-blue-300 font-mono text-sm rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 border border-white/10"
            spellCheck="false"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold text-slate-400 uppercase flex items-center gap-2">
            <Monitor size={12} /> Live Preview
          </label>
          <div className="flex-1 bg-slate-800 rounded-xl border border-white/10 shadow-inner p-8 flex items-center justify-center overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
      <p className="text-xs text-slate-500 text-center">
        Tips: Gunakan class Tailwind seperti{" "}
        <code className="text-blue-400">text-red-500</code>,{" "}
        <code className="text-blue-400">p-4</code>,{" "}
        <code className="text-blue-400">shadow-lg</code>.
      </p>
    </div>
  );
};

const LearningApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slidesData[currentSlide];

  const nextSlide = () =>
    currentSlide < slidesData.length - 1 && setCurrentSlide((c) => c + 1);
  const prevSlide = () => currentSlide > 0 && setCurrentSlide((c) => c - 1);

  const renderInteractive = (type) => {
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
  };

  return (
    <div className="flex bg-slate-900 h-[74vh]">
      {/* Sidebar TOC */}
      <div className="w-64 bg-slate-800 border-r border-white/10 p-4 hidden md:flex flex-col gap-1 overflow-y-auto">
        <h3 className="text-xs font-bold text-slate-500 uppercase mb-2 px-2">
          Table of Contents
        </h3>
        {slidesData.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
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
        <div className="flex-1 overflow-y-auto p-8 md:p-12 pb-32">
          {slide.type === "cover" ? (
            <div className="min-h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] flex items-center justify-center shadow-2xl mb-8 ring-4 ring-slate-800">
                {slide.icon}
              </div>
              <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-2xl text-slate-400 font-light">
                {slide.subtitle}
              </p>
              <button
                onClick={nextSlide}
                className="mt-12 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition flex items-center gap-2 shadow-xl"
              >
                Mulai Belajar <ChevronRight size={20} />
              </button>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto w-full flex flex-col mb-8">
              <div className="flex items-center gap-3 text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">
                <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 border border-white/10">
                  {slide.chapter}
                </span>
                <span>/</span>
                <span>Part {currentSlide}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-xl text-slate-300 border border-white/10 flex items-center justify-center">
                  {getSlideIcon(slide.chapter) || slide.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {slide.title}
                  </h2>
                  <p className="text-slate-400 text-lg">{slide.subtitle}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-1 shadow-sm flex flex-col">
                {slide.type.startsWith("interactive") ||
                slide.type === "code-editor" ? (
                  <div className="rounded-xl p-6 flex-1">
                    <div className="mb-4 text-slate-400">{slide.content}</div>
                    <div className="min-h-[400px]">
                      {renderInteractive(slide.type)}
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-slate-300 leading-relaxed">
                    {slide.content}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Control Bar - Fixed */}
        <div className="fixed bottom-0 left-0 md:left-64 right-0 h-16 border-t border-white/10 bg-slate-800/90 backdrop-blur-xl px-8 flex items-center justify-between z-40 shadow-lg">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-slate-700/50 disabled:opacity-30 transition flex items-center gap-2 text-sm font-semibold text-slate-300"
          >
            <ChevronLeft size={20} /> Sebelumnya
          </button>

          <div className="flex gap-1">
            {slidesData.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-slate-600"
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slidesData.length - 1}
            className="p-2 rounded-full hover:bg-slate-700/50 disabled:opacity-30 transition flex items-center gap-2 text-sm font-semibold text-slate-300"
          >
            Selanjutnya <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  const [activeApp, setActiveApp] = useState(null);

  return (
    <div
      className="w-full h-screen overflow-hidden bg-cover bg-center relative font-sans antialiased"
      style={{
        backgroundImage: 'url("/wallpaper.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <MenuBar activeApp={activeApp} />

      <main className="relative z-10 min-h-[calc(100vh-3rem)] pt-12 pb-24 px-4 flex items-start justify-center overflow-y-auto">
        {activeApp && (
          <WindowFrame
            title={
              activeApp === "learning"
                ? "Interactive Module"
                : activeApp === "members"
                ? "Departemen Software"
                : "Info"
            }
            onClose={() => setActiveApp(null)}
          >
            {activeApp === "learning" && <LearningApp />}
            {activeApp === "members" && <MembersApp />}
            {activeApp === "info" && <InfoApp />}
          </WindowFrame>
        )}
      </main>

      <Dock activeApp={activeApp} setActiveApp={setActiveApp} />
    </div>
  );
};

export default App;
