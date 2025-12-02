export const projectSlides = [
    {
      title: "Setup HTML Dasar",
      subtitle: "Struktur dasar + Tailwind CDN",
      code: `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kopi CC - Cita Rasa Kopi Nusantara Asli</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <style>
        body { font-family: 'Inter', sans-serif; }
        h1,h2,h3,h4,h5,h6 { font-family: 'Playfair Display', serif; }
        .gradient-text { background: linear-gradient(90deg, #78350f, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    </style>
</head>
<body class="bg-stone-50 text-gray-800">
    <!-- Konten akan ditambahkan di langkah selanjutnya -->
</body>
</html>`,
    },
    {
      title: "Navbar Responsif",
      subtitle: "Navbar fixed + mobile menu",
      code: `<nav class="fixed top-0 w-full z-50 bg-stone-900/95 backdrop-blur-xl border-b border-amber-800/30">
    <div class="container mx-auto px-6 py-5">
        <div class="flex items-center justify-between">
            <a href="#" class="flex items-center space-x-3 group">
                <img src="assets/images/logo.png" alt="Logo" class="h-14 group-hover:scale-110 transition">
                <span class="text-2xl font-bold text-white">Kopi CC</span>
            </a>

            <div class="hidden lg:flex items-center space-x-10">
                <a href="#home" class="text-white hover:text-amber-400 transition font-medium">Beranda</a>
                <a href="#menu" class="text-white hover:text-amber-400 transition font-medium">Menu</a>
                <a href="#about" class="text-white hover:text-amber-400 transition font-medium">Tentang</a>
                <a href="#gallery" class="text-white hover:text-amber-400 transition font-medium">Galeri</a>
                <a href="#testimoni" class="text-white hover:text-amber-400 transition font-medium">Testimoni</a>
                <a href="#contact" class="text-white hover:text-amber-400 transition font-medium">Kontak</a>
            </div>

            <button id="mobileBtn" class="lg:hidden text-white">
                <i class="fas fa-bars text-2xl"></i>
            </button>
        </div>
    </div>

    <div id="mobileMenu" class="hidden lg:hidden bg-stone-900/98 border-t border-amber-800/30">
        <div class="container mx-auto px-6 py-8 space-y-5 text-center">
            <a href="#home" class="block text-xl text-white hover:text-amber-400">Beranda</a>
            <a href="#menu" class="block text-xl text-white hover:text-amber-400">Menu</a>
            <a href="#about" class="block text-xl text-white hover:text-amber-400">Tentang</a>
            <a href="#gallery" class="block text-xl text-white hover:text-amber-400">Galeri</a>
            <a href="#testimoni" class="block text-xl text-white hover:text-amber-400">Testimoni</a>
            <a href="#contact" class="block text-xl text-white hover:text-amber-400">Kontak</a>
        </div>
    </div>
</nav>`,
    },
    {
      title: "Hero Section",
      subtitle: "Headline besar + tombol CTA",
      code: `<section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <img src="assets/images/hero.webp" alt="Hero" class="absolute inset-0 w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
    
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
            Kopi <span class="gradient-text">CC</span>
        </h1>
        <p class="text-2xl md:text-4xl text-amber-200 mt-4 mb-10">
            Cita Rasa Asli Indonesia
        </p>
        <p class="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-14">
            Dari biji terbaik Aceh hingga Papua — kami sajikan kehangatan nusantara dalam setiap cangkir.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#menu" class="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 px-10 py-5 rounded-full text-lg font-bold transition whitespace-nowrap">
                <i class="fas fa-coffee"></i> Lihat Menu
            </a>

            <a href="https://wa.me/6281234567890?text=Halo%20Kopi%20CC%2C%20saya%20mau%20pesan%20Take%20Away%20%F0%9F%98%8A" 
            target="_blank"
            class="bg-amber-600 hover:bg-amber-700 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:shadow-amber-600/50 transition flex items-center justify-center gap-3 whitespace-nowrap">
                <i class="fas fa-shopping-bag"></i> Pesan Take Away
            </a>

            <a href="#contact" class="border-2 border-amber-500 text-amber-400 hover:bg-amber-500/10 px-10 py-5 rounded-full text-lg font-bold transition whitespace-nowrap">
                Reservasi Meja
            </a>
        </div>
    </div>

    <!-- Panah ke bawah -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <i class="fas fa-chevron-down text-4xl text-amber-400"></i>
    </div>
</section>`,
    },
    {
      title: "Menu Section",
      subtitle: "Card produk kopi",
      code: `<section id="menu" class="py-24 bg-gradient-to-b from-stone-100 to-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-5xl md:text-6xl font-black text-stone-800">Menu Spesial</h2>
            <p class="text-xl text-stone-600 mt-4">Dipilih & disangrai dengan penuh cinta</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div class="relative h-80 overflow-hidden">
                    <img src="assets/images/menus/espresso.png" alt="Espresso" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-3xl font-bold">Espresso</h3>
                        <p class="text-2xl text-amber-400">Rp 22.000</p>
                    </div>
                </div>
                <div class="p-8">
                    <p class="text-gray-600 leading-relaxed">Ekstraksi kopi murni dengan rasa kuat, pekat, dan aromatik.</p>
                </div>
            </div>

            <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div class="relative h-80 overflow-hidden">
                    <img src="assets/images/menus/cappuccino.png" alt="Cappuccino" class="w-full h-full object-cover group-hover:scale-110 transition">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-3xl font-bold">Cappuccino</h3>
                        <p class="text-2xl text-amber-400">Rp 32.000</p>
                    </div>
                </div>
                <div class="p-8">
                    <p class="text-gray-600 leading-relaxed">Espresso, susu steamed, dan foam tebal yang lembut.</p>
                </div>
            </div>

            <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div class="relative h-80 overflow-hidden">
                    <img src="assets/images/menus/caffe late.png" alt="Caffe Latte" class="w-full h-full object-cover group-hover:scale-110 transition">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-3xl font-bold">Caffè Latte</h3>
                        <p class="text-2xl text-amber-400">Rp 34.000</p>
                    </div>
                </div>
                <div class="p-8">
                    <p class="text-gray-600 leading-relaxed">Espresso dengan susu steamed creamy dan sedikit foam.</p>
                </div>
            </div>

            <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div class="relative h-80 overflow-hidden">
                    <img src="assets/images/menus/mocha.png" alt="Mocha" class="w-full h-full object-cover group-hover:scale-110 transition">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-3xl font-bold">Mocha</h3>
                        <p class="text-2xl text-amber-400">Rp 36.000</p>
                    </div>
                </div>
                <div class="p-8">
                    <p class="text-gray-600 leading-relaxed">Espresso, cokelat premium, dan susu creamy yang manis.</p>
                </div>
            </div>

            <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div class="relative h-80 overflow-hidden">
                    <img src="assets/images/menus/cortado.png" alt="Cortado" class="w-full h-full object-cover group-hover:scale-110 transition">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-3xl font-bold">Cortado</h3>
                        <p class="text-2xl text-amber-400">Rp 30.000</p>
                    </div>
                </div>
                <div class="p-8">
                    <p class="text-gray-600 leading-relaxed">Espresso dengan sedikit susu steamed, rasa kopi tetap kuat.</p>
                </div>
            </div>

            <div class="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                <div class="relative h-80 overflow-hidden">
                    <img src="assets/images/menus/affogato.png" alt="Affogato" class="w-full h-full object-cover group-hover:scale-110 transition">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-3xl font-bold">Affogato</h3>
                        <p class="text-2xl text-amber-400">Rp 28.000</p>
                    </div>
                </div>
                <div class="p-8">
                    <p class="text-gray-600 leading-relaxed">Espresso panas disiram es krim vanilla premium.</p>
                </div>
            </div>
        </div>
    </div>
</section>`,
    },
    {
      title: "Tentang Kami",
      subtitle: "Cerita brand & komitmen",
      code: `<section id="about" class="py-24 bg-amber-50">
    <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 class="text-5xl md:text-6xl font-black text-stone-800 mb-8">Cerita Kami</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Kopi CC lahir dari kecintaan mendalam terhadap kopi Indonesia. Sejak 2020, kami berkomitmen menghadirkan kopi berkualitas tinggi yang terjangkau.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">
                    Setiap biji kami pilih langsung dari petani lokal terbaik di Aceh, Toraja, Kintamani, hingga Papua.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Kami tidak hanya menjual kopi — kami membangun komunitas dan mendukung kesejahteraan petani nusantara.
                </p>
            </div>
            <div class="rounded-3xl overflow-hidden shadow-2xl">
                <img src="assets/images/coffee shop.png" alt="Coffee Shop" class="w-full h-full object-cover">
            </div>
        </div>
    </div>
</section>`,
    },
    {
      title: "Galeri",
      subtitle: "Visual produk & suasana",
      code: `<section id="gallery" class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-5xl md:text-6xl font-black text-stone-800 mb-4">Galeri Kami</h2>
        <p class="text-xl text-stone-600 mb-16">Dari biji hingga cangkir</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <img src="assets/images/galleries/gallery1.png" alt="" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <img src="assets/images/galleries/gallery2.png" alt="" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <img src="assets/images/galleries/gallery3.png" alt="" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <img src="assets/images/galleries/gallery4.png" alt="" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <img src="assets/images/galleries/gallery5.png" alt="" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
            <img src="assets/images/galleries/gallery6.png" alt="" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
        </div>
    </div>
</section>`,
    },
    {
      title: "Testimoni",
      subtitle: "Ulasan pelanggan",
      code: `<section id="testimoni" class="py-24 bg-amber-50">
    <div class="container mx-auto px-6">
        <h2 class="text-5xl md:text-6xl font-black text-center text-stone-800 mb-4">Apa Kata Mereka</h2>
        <p class="text-xl text-center text-stone-600 mb-16">Pelanggan setia kami</p>
        <div class="grid md:grid-cols-3 gap-10">
            <div class="bg-white p-8 rounded-3xl shadow-xl">
                <div class="text-4xl text-amber-500 mb-4">★★★★★</div>
                <p class="italic text-gray-700 mb-6">"Kopi terbaik yang pernah saya coba! Sudah jadi pelanggan setia selama 2 tahun."</p>
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center text-2xl">M</div>
                    <div>
                        <p class="font-bold text-stone-800">Budi Santoso</p>
                        <p class="text-sm text-gray-600">Pengusaha</p>
                    </div>
                </div>
            </div>

            <div class="bg-white p-8 rounded-3xl shadow-xl">
                <div class="text-4xl text-amber-500 mb-4">★★★★★</div>
                <p class="italic text-gray-700 mb-6">"Tempat nyaman, kopi enak, pelayanan ramah. Highly recommended!"</p>
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center text-2xl">F</div>
                    <div>
                        <p class="font-bold text-stone-800">Siti Nurhaliza</p>
                        <p class="text-sm text-gray-600">Content Creator</p>
                    </div>
                </div>
            </div>

            <div class="bg-white p-8 rounded-3xl shadow-xl">
                <div class="text-4xl text-amber-500 mb-4">★★★★★</div>
                <p class="italic text-gray-700 mb-6">"Setiap varian punya karakter unik. Worth it!"</p>
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center text-2xl">M</div>
                    <div>
                        <p class="font-bold text-stone-800">Ahmad Fauzi</p>
                        <p class="text-sm text-gray-600">Mahasiswa</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    },
    {
      title: "Form Kontak",
      subtitle: "Form interaktif",
      code: `<section id="contact" class="py-20 bg-white">
<div class="container mx-auto px-4 max-w-3xl">
    <h2 class="text-4xl font-bold text-center text-amber-900 mb-4">Hubungi Kami</h2>
    <p class="text-center text-gray-600 mb-12">Ada pertanyaan? Jangan ragu untuk menghubungi kami!</p>
    
    <form class="bg-amber-50 p-8 rounded-lg shadow-lg">
        <div class="mb-6">
            <label class="block text-amber-900 font-bold mb-2">Nama Lengkap</label>
            <input 
                type="text" 
                class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Masukkan nama Anda"
            >
        </div>
        
        <div class="mb-6">
            <label class="block text-amber-900 font-bold mb-2">Email</label>
            <input 
                type="email" 
                class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="email@contoh.com"
            >
        </div>
        
        <div class="mb-6">
            <label class="block text-amber-900 font-bold mb-2">Nomor Telepon</label>
            <input 
                type="tel" 
                class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="08xx xxxx xxxx"
            >
        </div>
        
        <div class="mb-6">
            <label class="block text-amber-900 font-bold mb-2">Pesan</label>
            <textarea 
                rows="5" 
                class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Tulis pesan Anda di sini..."
            ></textarea>
        </div>
        
        <button 
            type="submit" 
            class="w-full bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition"
        >
            Kirim Pesan
        </button>
    </form>
</div>
</section>`,
    },
    {
      title: "Footer",
      subtitle: "Informasi lengkap & copyright",
      code: `<footer class="bg-stone-900 text-white py-16">
    <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-10 mb-12">
            <div>
                <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
                    <img src="assets/images/logo.png" alt="" class="h-12"> Kopi CC
                </h3>
                <p class="text-amber-100">Menyajikan kopi nusantara terbaik sejak 2020.</p>
            </div>
            <div>
                <h4 class="text-xl font-bold mb-4">Menu</h4>
                <ul class="space-y-2 text-amber-100"><li><a href="#home" class="hover:text-amber-400">Beranda</a></li><li><a href="#menu" class="hover:text-amber-400">Menu</a></li><li><a href="#about" class="hover:text-amber-400">Tentang</a></li></ul>
            </div>
            <div>
                <h4 class="text-xl font-bold mb-4">Kontak</h4>
                <ul class="space-y-2 text-amber-100">
                    <li>Jl. Kopi No. 123, Semarang</li>
                    <li>(021) 1234-5678</li>
                    <li>info@kopi-cc.com</li>
                </ul>
            </div>
            <div>
                <h4 class="text-xl font-bold mb-4">Jam Buka</h4>
                <ul class="space-y-2 text-amber-100">
                    <li>Senin–Jumat: 07:00–22:00</li>
                    <li>Sabtu–Minggu: 08:00–23:00</li>
                </ul>
            </div>
        </div>
        <div class="border-t border-amber-800/30 pt-8 text-center text-amber-100">
            © 2025 Kopi CC. Untuk pecinta kopi Indonesia.
        </div>
    </div>
</footer>`,
    },
    {
      title: "JavaScript Mobile Menu",
      subtitle: "Toggle menu di perangkat mobile",
      code: `<script>
    document.getElementById('mobileBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });
</script>`,
    },
  ];