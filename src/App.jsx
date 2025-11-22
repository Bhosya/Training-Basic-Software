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
    title: "HTML: Semantic Structure",
    subtitle: "Lebih dari sekadar <div>",
    icon: <LayoutTemplate size={40} />,
    chapter: "HTML",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-300">
          HTML Semantik membuat kode lebih mudah dibaca manusia dan mesin (SEO).
          Jangan gunakan <code className="text-blue-400">div</code> untuk
          segalanya.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-900/30 p-5 rounded-xl border border-red-800/50">
            <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
              <X size={16} /> Cara Lama (Buruk)
            </h4>
            <pre className="text-xs text-slate-300 font-mono bg-slate-800 p-3 rounded border border-red-800/50">
              {`<div id="header">...</div>
<div id="nav">...</div>
<div class="article">
  <div class="title">...</div>
</div>
<div id="footer">...</div>`}
            </pre>
          </div>
          <div className="bg-emerald-900/30 p-5 rounded-xl border border-emerald-800/50">
            <h4 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <Zap size={16} /> Semantic HTML (Baik)
            </h4>
            <pre className="text-xs text-slate-300 font-mono bg-slate-800 p-3 rounded border border-emerald-800/50">
              {`<header>...</header>
<nav>...</nav>
<article>
  <h1>...</h1>
</article>
<footer>...</footer>`}
            </pre>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    type: "content",
    title: "Visualisasi Tag HTML",
    subtitle: "Elemen Interaktif",
    icon: <Code size={40} />,
    chapter: "HTML",
    content: (
      <div className="space-y-4">
        <p className="text-slate-300">
          Elemen umum yang membentuk interaksi user.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-2">
            <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
              &lt;button&gt;
            </span>
            <div className="flex-1 flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border">
              <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md shadow hover:bg-blue-700 transition text-sm">
                Submit
              </button>
            </div>
          </div>
          <div className="bg-slate-800/60 p-4 rounded-xl border border-white/10 flex flex-col gap-2">
            <span className="font-mono text-pink-400 text-xs bg-pink-900/30 px-2 py-1 rounded w-fit border border-pink-800/50">
              &lt;input type="date"&gt;
            </span>
            <div className="flex-1 flex items-center justify-center bg-slate-700/50 rounded border-dashed border-slate-600 border">
              <input
                type="date"
                className="border border-slate-600 bg-slate-800 text-slate-300 p-1 rounded text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    type: "content",
    title: "CSS Box Model",
    subtitle: "Fondasi Layout",
    icon: <Layers size={40} />,
    chapter: "CSS",
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
    id: 5,
    type: "interactive-flex",
    title: "CSS Flexbox",
    subtitle: "Layout 1 Dimensi",
    icon: <Layout size={40} />,
    chapter: "CSS",
    content:
      "Flexbox sangat powerful untuk mengatur elemen dalam satu baris atau satu kolom.",
  },
  {
    id: 6,
    type: "content",
    title: "CSS Grid",
    subtitle: "Layout 2 Dimensi",
    icon: <Grid size={40} />,
    chapter: "CSS",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300">
          Berbeda dengan Flexbox, <b>Grid</b> bekerja dua arah (baris & kolom)
          sekaligus. Ideal untuk struktur halaman utama.
        </p>
        <div className="grid grid-cols-3 gap-4 h-48 w-full p-4 bg-slate-100 rounded-xl border border-slate-200">
          <div className="bg-rose-400 rounded-lg text-white flex items-center justify-center font-bold col-span-3">
            Header
          </div>
          <div className="bg-indigo-400 rounded-lg text-white flex items-center justify-center font-bold col-span-2 row-span-2">
            Main Content
          </div>
          <div className="bg-teal-400 rounded-lg text-white flex items-center justify-center font-bold">
            Sidebar
          </div>
          <div className="bg-teal-400 rounded-lg text-white flex items-center justify-center font-bold">
            Ads
          </div>
          <div className="bg-slate-600 rounded-lg text-white flex items-center justify-center font-bold col-span-3">
            Footer
          </div>
        </div>
        <p className="text-xs text-slate-500 text-center font-mono">
          Contoh layout 'Holy Grail' yang mudah dibuat dengan CSS Grid.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    type: "content",
    title: "Tailwind CSS Intro",
    subtitle: "Utility-First",
    icon: <Type size={40} />,
    chapter: "Tailwind",
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
    id: 8,
    type: "interactive-tailwind",
    title: "Tailwind Playground",
    subtitle: "Interactive Builder",
    icon: <MousePointer size={40} />,
    chapter: "Tailwind",
    content:
      "Eksperimen dengan class Tailwind untuk melihat betapa cepatnya membangun UI.",
  },
  {
    id: 9,
    type: "code-editor",
    title: "Live Coding",
    subtitle: "Coba Sendiri",
    icon: <Code size={40} />,
    chapter: "Praktik",
    content: "Area coding langsung.",
  },
];

// --- DATA PEMATERI (ELEGANT) ---
const membersData = [
  {
    img: "/Members/Alfin.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    img: "/Members/Atha.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    img: "/Members/Abi.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    img: "/Members/Sausan.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    img: "/Members/Bowok.png",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
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
  <div className="bg-slate-900/90 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-xl overflow-hidden w-full max-w-6xl h-[85vh] flex flex-col animate-in zoom-in-95 duration-300 relative">
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
    <div className="flex-1 overflow-hidden relative bg-slate-900/50">
      {children}
    </div>
  </div>
);

// --- APP MODULES ---

const MembersApp = () => (
  <div className="h-full overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
  <div className="h-full overflow-y-auto flex items-center justify-center bg-slate-900">
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

const FlexboxPlayground = () => {
  const [justify, setJustify] = useState("justify-center");
  const [align, setAlign] = useState("items-center");

  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex gap-4 p-4 bg-slate-800/50 rounded-xl border border-white/10 shadow-sm">
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase text-slate-400">
            Justify (X-Axis)
          </label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            className="block w-full text-sm p-2 rounded bg-slate-700 border border-white/10 text-slate-300"
          >
            <option value="justify-start">Start</option>
            <option value="justify-center">Center</option>
            <option value="justify-end">End</option>
            <option value="justify-between">Space Between</option>
            <option value="justify-around">Space Around</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold uppercase text-slate-400">
            Align (Y-Axis)
          </label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            className="block w-full text-sm p-2 rounded bg-slate-700 border border-white/10 text-slate-300"
          >
            <option value="items-start">Start</option>
            <option value="items-center">Center</option>
            <option value="items-end">End</option>
          </select>
        </div>
      </div>

      <div
        className={`flex-1 bg-slate-800 rounded-xl border-2 border-dashed border-slate-600 flex ${justify} ${align} p-4 gap-4 transition-all duration-500`}
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
      case "interactive-flex":
        return <FlexboxPlayground />;
      case "interactive-tailwind":
        return <TailwindBuilder />;
      case "code-editor":
        return <CodePlayground />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full bg-slate-900">
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
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          {slide.type === "cover" ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
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
            <div className="max-w-4xl mx-auto h-full flex flex-col">
              <div className="flex items-center gap-3 text-slate-500 text-sm font-bold uppercase tracking-wider mb-4">
                <span className="bg-slate-800 px-2 py-1 rounded text-slate-300 border border-white/10">
                  {slide.chapter}
                </span>
                <span>/</span>
                <span>Part {currentSlide}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800 rounded-xl text-slate-300 border border-white/10">
                  {slide.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {slide.title}
                  </h2>
                  <p className="text-slate-400 text-lg">{slide.subtitle}</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-1 shadow-sm flex-1 min-h-0 flex flex-col">
                {slide.type.startsWith("interactive") ||
                slide.type === "code-editor" ? (
                  <div className="bg-slate-900/50 rounded-xl p-6 flex-1 border border-white/10">
                    <div className="mb-4 text-slate-400">{slide.content}</div>
                    <div className="h-[400px]">
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

        {/* Control Bar */}
        <div className="h-16 border-t border-white/10 bg-slate-800/80 backdrop-blur px-8 flex items-center justify-between shrink-0">
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
        backgroundImage: 'url("/wallpaper.JPG")',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <MenuBar activeApp={activeApp} />

      <main className="relative z-10 h-full pt-12 pb-24 px-4 flex items-center justify-center">
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
