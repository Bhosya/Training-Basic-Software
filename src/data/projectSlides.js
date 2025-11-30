export const projectSlides = [
    {
      title: "Setup HTML Dasar",
      subtitle: "Struktur dasar + Tailwind CDN",
      code: `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kopi Nusantara - Cita Rasa Asli Indonesia</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>html{scroll-behavior:smooth;}</style>
</head>
<body class="bg-amber-50">
    <!-- Konten akan ditambahkan di langkah selanjutnya -->
</body>
</html>`,
    },
    {
      title: "Navbar Responsif",
      subtitle: "Navbar fixed + mobile menu",
      code: `<!-- Navbar -->
<nav class="fixed top-0 z-40 w-full bg-amber-900 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <span class="text-2xl">Coffee</span>
                <span class="text-xl font-bold">Kopi Nusantara</span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#home" class="hover:text-amber-200 transition">Beranda</a> 
                <a href="#menu" class="hover:text-amber-200 transition">Menu</a>
                <a href="#about" class="hover:text-amber-200 transition">Tentang</a>
                <a href="#contact" class="hover:text-amber-200 transition">Kontak</a>
            </div>
            <button id="mobileMenuBtn" class="md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
    </div>
    <div id="mobileMenu" class="hidden md:hidden bg-amber-900">
        <a href="#home" class="block py-2 px-4 text-sm hover:bg-amber-800 transition">Beranda</a>
        <a href="#menu" class="block py-2 px-4 text-sm hover:bg-amber-800 transition">Menu</a>
        <a href="#about" class="block py-2 px-4 text-sm hover:bg-amber-800 transition">Tentang</a>
        <a href="#contact" class="block py-2 px-4 text-sm hover:bg-amber-800 transition">Kontak</a>
    </div>
</nav>`,
    },
    {
      title: "Hero Section",
      subtitle: "Headline besar + tombol CTA",
      code: `<!-- Hero Section -->
<section id="home" class="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-900 to-amber-700">
    <div class="absolute inset-0 opacity-80">
        <div class="absolute inset-0 bg-[url('assets/kopi.webp')]"></div>
    </div>
    <div class="container mx-auto px-4 text-center text-white relative z-10">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Nikmati Kopi Terbaik Nusantara
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-amber-100">
            Dari biji pilihan hingga segelas kehangatan untuk Kamu
        </p>
        <button class="bg-white text-amber-900 px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-100 transition transform hover:scale-105">
            Pesan Sekarang
        </button>
    </div>
</section>`,
    },
    {
      title: "Menu Section",
      subtitle: "Card produk kopi",
      code: `<section id="menu" class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-amber-900 mb-4">Menu Spesial Kami</h2>
        <p class="text-center text-gray-600 mb-12">Dipilih dengan cermat untuk kepuasan Kamu</p>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <div class="h-48 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                    <span class="text-6xl">☕</span>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-amber-900 mb-2">Espresso</h3>
                    <p class="text-gray-600 mb-4">Kopi hitam pekat dengan rasa yang kuat dan aroma menggoda</p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-amber-700">Rp 25.000</span>
                        <button class="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition">
                            Pesan
                        </button>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <div class="h-48 bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                    <span class="text-6xl">☕</span>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-amber-900 mb-2">Cappuccino</h3>
                    <p class="text-gray-600 mb-4">Perpaduan sempurna espresso, susu, dan foam lembut</p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-amber-700">Rp 35.000</span>
                        <button class="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition">
                            Pesan
                        </button>
                    </div>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-amber-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <div class="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span class="text-6xl">☕</span>
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-bold text-amber-900 mb-2">Latte</h3>
                    <p class="text-gray-600 mb-4">Kopi susu creamy dengan sentuhan vanilla yang manis</p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-amber-700">Rp 38.000</span>
                        <button class="bg-amber-900 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition">
                            Pesan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    },
    {
      title: "Tentang Kami",
      subtitle: "Cerita brand & komitmen",
      code: `<section id="about" class="py-20 bg-amber-50">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-amber-900 mb-4">Tentang Kami</h2>
        <p class="text-center text-gray-600 mb-12">Perjalanan kami dalam dunia kopi</p>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 class="text-2xl font-bold text-amber-900 mb-4">Cerita Kami</h3>
                <p class="text-gray-700 mb-4">
                    Kopi Nusantara dimulai dari kecintaan kami terhadap kopi Indonesia. 
                    Sejak 2020, kami berkomitmen menghadirkan kopi berkualitas tinggi yang 
                    terjangkau untuk semua kalangan.
                </p>
                <p class="text-gray-700 mb-4">
                    Setiap biji kopi kami pilih langsung dari petani lokal terbaik di berbagai 
                    daerah Indonesia. Dari Aceh hingga Papua, kami menjelajahi setiap sudut nusantara 
                    untuk menemukan cita rasa terbaik.
                </p>
                <p class="text-gray-700">
                    Kami tidak hanya menjual kopi, tapi juga membangun komunitas dan mendukung 
                    kesejahteraan petani kopi lokal.
                </p>
            </div>
            <div class="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg h-96 flex items-center justify-center">
                <span class="text-9xl">☕</span>
            </div>
        </div>
    </div>
</section>`,
    },
    {
      title: "Galeri",
      subtitle: "Visual produk & suasana",
      code: `<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-amber-900 mb-4">Galeri Kami</h2>
        <p class="text-center text-gray-600 mb-12">Lihat proses kami dari biji hingga cangkir</p>
        
        <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-amber-300 to-amber-500 rounded-lg h-64 flex items-center justify-center hover:scale-105 transition transform">
                <span class="text-8xl">🌱</span>
            </div>
            <div class="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg h-64 flex items-center justify-center hover:scale-105 transition transform">
                <span class="text-8xl">☕</span>
            </div>
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg h-64 flex items-center justify-center hover:scale-105 transition transform">
                <span class="text-8xl">🍰</span>
            </div>
            <div class="bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg h-64 flex items-center justify-center hover:scale-105 transition transform">
                <span class="text-8xl">🥐</span>
            </div>
            <div class="bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg h-64 flex items-center justify-center hover:scale-105 transition transform">
                <span class="text-8xl">🧁</span>
            </div>
            <div class="bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg h-64 flex items-center justify-center hover:scale-105 transition transform">
                <span class="text-8xl">🍪</span>
            </div>
        </div>
    </div>
</section>`,
    },
    {
      title: "Testimoni",
      subtitle: "Ulasan pelanggan",
      code: `<section class="py-20 bg-amber-50">
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-amber-900 mb-4">Apa Kata Mereka</h2>
        <p class="text-center text-gray-600 mb-12">Testimoni dari pelanggan setia kami</p>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Testimoni 1 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p class="text-gray-700 mb-4 italic">
                    "Kopi terbaik yang pernah saya coba! Rasanya luar biasa dan harganya sangat terjangkau. 
                    Saya sudah jadi pelanggan setia selama 2 tahun."
                </p>
                <div class="flex items-center">
                    <div class="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-3">
                        👨
                    </div>
                    <div>
                        <p class="font-bold text-amber-900">Budi Santoso</p>
                        <p class="text-sm text-gray-600">Pengusaha</p>
                    </div>
                </div>
            </div>

            <!-- Testimoni 2 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p class="text-gray-700 mb-4 italic">
                    "Tempatnya nyaman, kopinya enak, pelayanannya ramah. Cocok banget buat kerja atau 
                    sekedar ngobrol santai. Highly recommended!"
                </p>
                <div class="flex items-center">
                    <div class="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-3">
                        👩
                    </div>
                    <div>
                        <p class="font-bold text-amber-900">Siti Nurhaliza</p>
                        <p class="text-sm text-gray-600">Content Creator</p>
                    </div>
                </div>
            </div>

            <!-- Testimoni 3 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p class="text-gray-700 mb-4 italic">
                    "Sebagai pecinta kopi, saya sangat puas dengan kualitas produk mereka. 
                    Setiap varian punya karakteristik unik. Worth it!"
                </p>
                <div class="flex items-center">
                    <div class="bg-amber-200 w-12 h-12 rounded-full flex items-center justify-center text-2xl mr-3">
                        👨
                    </div>
                    <div>
                        <p class="font-bold text-amber-900">Ahmad Fauzi</p>
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
      code: `<footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
            <!-- Tentang -->
            <div>
                <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                    <span class="text-2xl">☕</span> Kopi Nusantara
                </h3>
                <p class="text-gray-400">
                    Menyajikan kopi berkualitas tinggi dengan cinta dan dedikasi sejak 2020.
                </p>
            </div>
            
            <!-- Menu -->
            <div>
                <h3 class="text-xl font-bold mb-4">Menu</h3>
                <ul class="space-y-2">
                    <li><a href="#home" class="text-gray-400 hover:text-amber-400 transition">Beranda</a></li>
                    <li><a href="#menu" class="text-gray-400 hover:text-amber-400 transition">Menu Kami</a></li>
                    <li><a href="#about" class="text-gray-400 hover:text-amber-400 transition">Tentang</a></li>
                    <li><a href="#contact" class="text-gray-400 hover:text-amber-400 transition">Kontak</a></li>
                </ul>
            </div>
            
            <!-- Kontak -->
            <div>
                <h3 class="text-xl font-bold mb-4">Kontak</h3>
                <ul class="space-y-2 text-gray-400">
                    <li>📍 Jl. Kopi No. 123, Jakarta</li>
                    <li>📞 (021) 1234-5678</li>
                    <li>✉️ info@kopinusantara.com</li>
                </ul>
            </div>
            
            <!-- Jam Buka -->
            <div>
                <h3 class="text-xl font-bold mb-4">Jam Buka</h3>
                <ul class="space-y-2 text-gray-400">
                    <li>Senin - Jumat: 07:00 - 22:00</li>
                    <li>Sabtu - Minggu: 08:00 - 23:00</li>
                    <li>Tanggal Merah: 09:00 - 21:00</li>
                </ul>
            </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 text-center">
            <p class="text-gray-400">
                &copy; 2024 Kopi Nusantara. Semua hak dilindungi. Dibuat dengan ❤️ untuk pecinta kopi.
            </p>
        </div>
    </div>
</footer>`,
    },
    {
      title: "JavaScript Mobile Menu",
      subtitle: "Toggle menu di perangkat mobile",
      code: `<script>
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });
  document.querySelectorAll('#mobileMenu a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobileMenu').classList.add('hidden'));
  });
</script>`,
    },
  ];