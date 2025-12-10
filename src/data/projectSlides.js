export const projectSlides = [
    {
        title: "Cover", // Judul cover Anda
        step: [
            {
                cover: "/Materi/Modul/modul Software.webp", // Ganti dengan path gambar portrait Anda
            }
        ]
    },
    {
      title: "Setup HTML Dasar",
      subtitle: "Struktur dasar + Tailwind CDN",
      step: [
        {
            text: `Buat folder bernama "training-basic-software" (atau nama lain sesuai kemauanmu), taruh di manapun senyaman kamu.`
        },
        {
            text: "Pindahkan folder assets yang telah disiapkan ke dalam folder project.",
            img: '/Materi/Modul/pindahkan-assets.gif'
        },
        {
            text: `Masuk ke dalam folder tadi, klik kanan > Show more options > Open with code.`,
            img: '/Materi/Modul/open-with-code.gif'
        },
        {
            text: `Buat file HTML baru dan tambahkan struktur dasar HTML5 dengan mengetik "!", kemudian enter.`, 
            img: '/Materi/Modul/new-html-file.gif'
        },
        {
            text: `Ubah value atribut lang pada tag <html> menjadi "id".`,
            code: `<html lang="id">`
        },
        {
            text: "Ubah title menjadi nama brand.",
            code: `<title>Kopi CC - Kopinya PCC</title>`
        },
        {
            text: "Sertakan Tailwind CSS melalui CDN di dalam tag <head>.",
            code: `<script src="https://cdn.tailwindcss.com"></script>`
        },
        {
            text: "Tambahkan link ke Google Fonts untuk 'Playfair Display' dan 'Inter'.",
            code: `<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`
        },
        {
            text: "Tambahkan link ke Font Awesome untuk ikon.",
            code: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">`
        },
        {
            text: "Tambahkan tag <style> di dalam tag <head>.",
            code: `<style></style>`
        },
        {
            text: `Isikan styling untuk body, buat agar memakai font "Inter"`,
            code: `body { font-family: 'Inter' }`
        },
        {
            text: `Masih di dalam tag <style>, buat agar heading h1-h4 memakai font "Playfair Display"`,
            code: `h1,h2,h3,h4 { font-family: 'Playfair Display' }`
        },
        {
            text: `Masih di dalam tag <style>, selector class bernama ".gradient-text" untuk membuat teks dengan efek gradasi.`,
            code: `.gradient-text { 
    background: linear-gradient(90deg,#f59e0b,#f97316); 
    background-clip: text; 
    color: transparent; 
}`
        },
        {
            text: `Jalankan Live Server pada pojok kanan bawah.`,
            img: `/Materi/Modul/start-live-server.gif`
        },
      ],
    },
    {
      title: "Navbar Responsif",
      subtitle: "Navbar fixed + mobile menu",
      step: [
        {
            text: 'Buat tag <nav> untuk navbar di dalam tag <body>',
            code:  `<nav>
</nav>`
        },
        {
            text: 'Tambahkan class tailwind untuk memberi warna elemen pada tag <nav>. (gunakan warna "stone-900" dengan opacity 95%)',
        },
        {
            text: 'Tambahkan class tailwind untuk membuat tag <nav> tadi mempunyai padding horizontal 24px (6 dalam satuan tailwind), dan padding vertikal 20px (5 dalam satuan tailwind).',
        },
        {
            text: 'Tambahkan tag <a> untuk membungkus logo dan nama brand. Beri atribut href menuju ke halaman utama ("/").',
            code:  `<a href="/">
</a>`
        },
        {
            text: `Tambahkan tag <img> di dalam tag <a> tadi untuk menampilkan logo. Arahkan atribut src ke path menuju ke asset logo (nama file logo adalah logo.png).`,
            code:  `<img src="" alt="Logo">`
        },
        {
            text: `Atur ukuran gambar menjadi 56px (14 dalam satuan tailwind).`,
        },
        {
            text: `Tambahkan animasi pada <img> ketika kursor diarahkan ke situ. (buat agar gambar membesar sedikit ketika hover)`,
        },
        {
            text: `Tambahkan tag <span> di dalam tag <a> untuk menampilkan nama brand.`,
            code:  `<span>Kopi CC</span>`
        },
        {
            text: `Gunakan tailwnd untuk membuat teksnya berukuran 2xl, tebal, dan berwarna putih.`,
        },
        {
            text: `Atur agar logo dan nama brand berada dalam satu baris dan sejajar.`,
        },
        {
            text: `Tambahkan tag <div> untuk membungkus link-link navigasi. Letakkan di dalam tag <nav>, setelah tag <a> logo.`,
            code: `<div>
</div>`
        },
        {
            text: `Tambahkan Link-link navigasi di dalam tag <div> tadi. Untuk setiap link navigasi, tambahkan tag <a> dengan atribut href menuju ke section terkait.`,
            code: `<a href="#home" class="text-white hover:text-amber-400 transition font-medium">Beranda</a>
<!-- Link Menu -->
<!-- Link Tentang -->
<!-- Link Galeri -->
<!-- Link Testimoni -->
<!-- Link Kontak -->`
        },
        {
            text: `Beri spasi antar link sebanyak 40px (10 dalam satuan tailwind).`,
        },
        {
            text: `Buat agar link-link navigasi sejajar dnegan logo dan nama brand, dan berada di sebelah kanan.`,
        },
        {
            text: 'Sembunyikan menu desktop di tampilan mobile/smartphone.',
        },
        {
            text: 'Tambahkan tombol menu mobile (baris 3) dengan tag <button>',
            code:  `<button id="mobileBtn" class="md:hidden text-white">
</button>`
        },
        {
            text: 'Di dalam tag <button>, tambahkan kode berikut untuk menampilkan ikon baris 3',
            code:  `<i class="fas fa-bars text-2xl"></i>`
        },
        {
            text: 'Buat tag <nav> baru untuk menu mobile — letakkan di bawah <nav> yang pertama',
            code:  `<nav id="mobileMenu" class="bg-stone-900/98 border-t border-amber-800/30">
    <a href="#home" class="block text-xl text-white hover:text-amber-400">Beranda</a>
    <a href="#menu" class="block text-xl text-white hover:text-amber-400">Menu</a>
    <a href="#about" class="block text-xl text-white hover:text-amber-400">Tentang</a>
    <a href="#gallery" class="block text-xl text-white hover:text-amber-400">Galeri</a>
    <a href="#testimoni" class="block text-xl text-white hover:text-amber-400">Testimoni</a>
    <a href="#contact" class="block text-xl text-white hover:text-amber-400">Kontak</a>
</nav>`
        },
        {
            text: 'Tambahkan script toggle menu — letakkan sebelum tag </body> atau di file JS terpisah',
            code:  `<script>
    document.getElementById('mobileBtn').addEventListener('click', () => {
        document.getElementById('mobileMenu').classList.toggle('hidden');
    });
</script>`
        }]
    },
    {
      title: "Home Section",
      subtitle: "Tempat gambar hero dan header",
      step: [
        {
            text: 'Buat section home dengan tinggi layar penuh.',
            code: `<section id="home" class="h-screen flex items-center">
</section>`
        },
        {
            text: 'Tampilkan gambar sebagai background dengan tag <img> dengan file gambar hero.webp. Buat agar gambar posisinya absolut, menutupi seluruh section, dan berada di belakang konten lainnya.',
        },
        {
            text: 'Buat section layer gradasi hitam hitam untuk menutupi gambar.',
            code: `<div class="bg-gradient-to-b from-black/80 via-black/60 to-black/90></div>`
        },
        {
            text: 'Buat agar layer tersebut menutupi seluruh gambar dengan menambahkan class berikut.',
            code: `absolute inset-0`
        },
        {
            text: 'Tambahkan class "relative" untuk tag <section> agar class absolute bisa dipakai.'
        },
        {
            text: `Tambahkan tag <div> untuk membungkus teks di section <home>.`,
            code: `<div class="px-6"></div>`
        },
        {
            text: `Tambahkan konten teks sebagai berikut.`,
            code: `<h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white">
    Kopi CC
</h1>
<p class="text-2xl md:text-4xl text-amber-200 mt-4 mb-10">
    Cita Rasa Asli Indonesia
</p>
<p class="text-lg md:text-xl text-amber-100 max-w-2xl mb-14">
    Dari biji terbaik Aceh hingga Papua — kami sajikan kehangatan nusantara dalam setiap cangkir.
</p>`
        },
        {
            text: `Tambahkan class "z-10" pada tag <div> agar teks berada di atas layer gradasi dan gambar.`,
        },
        {
            text: `Tambahkan class "gradient-text" pada tulisan CC untuk memberi efek gradasi pada teks.`,
        },
        {
            text: `Buat agar konten teks berada di tengah-tengah secara vertikal dengan class "justify-center" pada tag <section> dan "text-center" pada tag <div> pembungkus teks.`,
        },
        {
            text: `Tambahkan tombol "Pesan dari rumah" dengan border setebal 8px amber-600 dan sudut melengkung. Jika dihover, tombol berubah background amber-600 dengan teks putih.`,
        },
        {
            text: `Buat tanda panah ke bawah.`,
            code: `<div class="absolute">
    <i class="fas fa-chevron-down text-4xl text-amber-400"></i>
</div>`
        },
        {
            text: `Aturlah agar tanda panah itu berada di posisi paling bawah, dan buat agar ada animasi bounce-nya.`,
            code: `<div class="absolute">
    <i class="fas fa-chevron-down text-4xl text-amber-400"></i>
</div>`
        },
      ],
    },
    {
      title: "Menu Section",
      subtitle: "Card produk kopi",
      step: [
        {
            text: "Tambahkan section container untuk menu — header dan deskripsi singkat.",
            code: `<section id="menu" class="py-24 bg-gradient-to-b from-stone-100 to-white">
    <div class="container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-5xl md:text-6xl font-black text-stone-800">Menu Spesial</h2>
            <p class="text-xl text-stone-600 mt-4">Dipilih & disangrai dengan penuh cinta</p>
        </div>
        
    </div>
</section>`
        },
        {
            text: "Buat tag div untuk membungkus semua menu.",
            code: `<div>
</div>`
        },
        {
            text: `Buat agar item yang berada di dalam tag div tadi berada dalam grid dengan 2 kolom di mobile, 3 kolom di desktop. Beri jarak antar item 40px (10 dalam satuan tailwind).`,
        },
        {
            text: `Buat card untuk menu dengan tag <div>.`,
            code: `<div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-500">
</div>`
        },
        {
            text: `Tambahkan pembungkus untuk gambar, nama produk, dan harga.`,
            code: `<div class="relative h-80 overflow-hidden">
</div>`
        },
        {
            text: `Tambahkan gambar produk.`,
            code: `<img src="assets/images/menus/espresso.png" alt="Espresso" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">`
        },
        {
            text: `Tambahkan nama dan harga produk.`,
            code: `<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div class="absolute bottom-6 left-6 text-white">
    <h3 class="text-3xl font-bold">Espresso</h3>
    <p class="text-2xl text-amber-400">Rp 22.000</p>
</div>`
        },
        {
            text: `Tambahkan deskripsi produk. Taruh di luar pembungkus gambar, nama, dan harga`,
            code: `<div class="p-8">
    <p class="text-gray-600 leading-relaxed">Ekstraksi kopi murni dengan rasa kuat, pekat, dan aromatik.</p>
</div>`
        },
        {
            text: `Masukkan kode berikut untuk menu-menu lainnya.`,
            code: `<div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-500">
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

<div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-500">
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

<div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-500">
    <div class="relative h-80 overflow-hidden">
        <img src="assets/images/menus/affogato.png" alt="Caffe Latte" class="w-full h-full object-cover group-hover:scale-110 transition">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-3xl font-bold">Affogato</h3>
            <p class="text-2xl text-amber-400">Rp 38.000</p>
        </div>
    </div>
    <div class="p-8">
        <p class="text-gray-600 leading-relaxed">Espresso panas dituang di atas satu scoop gelato vanilla premium .</p>
    </div>
</div>

<div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-500">
    <div class="relative h-80 overflow-hidden">
        <img src="assets/images/menus/cortado.png" alt="Caffe Latte" class="w-full h-full object-cover group-hover:scale-110 transition">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-3xl font-bold">Cortado</h3>
            <p class="text-2xl text-amber-400">Rp 30.000</p>
        </div>
    </div>
    <div class="p-8">
        <p class="text-gray-600 leading-relaxed">Espresso “dipotong” dengan sedikit susu steamed hangat.</p>
    </div>
</div>

<div class="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl duration-500">
    <div class="relative h-80 overflow-hidden">
        <img src="assets/images/menus/mocha.png" alt="Caffe Latte" class="w-full h-full object-cover group-hover:scale-110 transition">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-6 left-6 text-white">
            <h3 class="text-3xl font-bold">Mocha</h3>
            <p class="text-2xl text-amber-400">Rp 36.000</p>
        </div>
    </div>
    <div class="p-8">
        <p class="text-gray-600 leading-relaxed">Espresso bertemu cokelat pekat dan susu steamed, ditambah whipped cream di atasnya.</p>
    </div>
</div>`
        },
      ],
    },
    {
      title: "Tentang Kami",
      subtitle: "Cerita brand & komitmen",
      step: [
        {
            text: "Buat section tentang dengan grid: teks di kiri, gambar di kanan (desktop).",
            code: `<section id="about" class="py-24 bg-amber-50">
    <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- teks -->
            <!-- gambar -->
        </div>
    </div>
</section>`
        },
        {
            text: "Isi teks cerita: tulis 2–3 paragraf singkat tentang brand dan misi.",
            code: `<div>
    <h2 class="text-5xl md:text-6xl font-black text-stone-800 mb-8">Cerita Kami</h2>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Kopi CC lahir dari kecintaan mendalam terhadap kopi Indonesia. Sejak 2020, kami berkomitmen menghadirkan kopi berkualitas tinggi yang terjangkau.
    </p>
    <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Setiap biji kami pilih langsung dari petani lokal terbaik di Aceh, Toraja, Kintamani, hingga Papua.
    </p>
</div>`
        },
        {
            text: "Tambahkan gambar yang merepresentasikan kedai.",
            code: `<div class="rounded-3xl overflow-hidden shadow-2xl">
    <img src="assets/images/coffee-shop.png" alt="Coffee Shop" class="w-full h-full object-cover">
</div>`
        },
      ],
    },
    {
      title: "Galeri",
      subtitle: "Visual produk & suasana",
      step: [
        {
            text: "Buat section galeri dengan grid gambar. Pastikan gambar punya ukuran seragam untuk tampilan rapi.",
            code: `<section id="gallery" class="py-24 bg-white">
    <div class="container mx-auto px-6 text-center">
        <h2 class="text-5xl md:text-6xl font-black text-stone-800 mb-4">Galeri Kami</h2>
        <p class="text-xl text-stone-600 mb-16">Berbagai Momen di Tempat Kami</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <!-- gambar -->
        </div>
    </div>
</section>`
        },
        {
            text: "Masukkan gambar dan beri class rounded & hover effect untuk interaksi.",
            code: `<img src="assets/images/galleries/gallery1.png" class="rounded-2xl shadow-lg hover:scale-105 transition duration-500 cursor-pointer">`
        },
      ],
    },
    {
      title: "Testimoni",
      subtitle: "Ulasan pelanggan",
      step: [
        {
            text: "Buat section testimonial dengan judul dan deskripsi pendek.",
            code: `<section id="testimoni" class="py-24 bg-amber-50">
    <div class="container mx-auto px-6">
        <h2 class="text-5xl md:text-6xl font-black text-center text-stone-800 mb-4">Apa Kata Mereka</h2>
        <p class="text-xl text-center text-stone-600 mb-16">Pelanggan setia kami</p>
        <div class="grid md:grid-cols-3 gap-10">
            <!-- kartu testimonial -->
        </div>
    </div>
</section>`
        },
        {
            text: "Template kartu testimonial: rating, kutipan, dan info user.",
            code: `<div class="bg-white p-8 rounded-3xl shadow-xl">
    <div class="text-4xl text-amber-500 mb-4">★★★★★</div>
    <p class="italic text-gray-700 mb-6">"Kopi terbaik yang pernah saya coba!"</p>
    <div class="flex items-center gap-4">
        <div class="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center text-2xl">M</div>
        <div>
            <p class="font-bold text-stone-800">Budi Santoso</p>
            <p class="text-sm text-gray-600">Pengusaha</p>
        </div>
    </div>
</div>`
        },
        {
            text: "Tambahkan 2 kartu lagi.",
            code: `<div class="bg-white p-8 rounded-3xl shadow-xl">
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
</div>`
        },
      ],
    },
    {
      title: "Form Kontak",
      subtitle: "Form interaktif — langkah membuat form sederhana",
      step: [
        {
            text: "Buat section form dengan max-width agar tidak melebar di desktop.",
            code: `<section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4 max-w-3xl">
        <!-- judul dan form -->
    </div>
</section>`
        },
        {
            text: "Masukkan input: nama, email, telepon, pesan — beri placeholder dan kelas fokus.",
            code: `<form class="bg-amber-50 p-8 rounded-lg shadow-lg">
    <div class="mb-6">
        <label class="block text-amber-900 font-bold mb-2">Nama Lengkap</label>
        <input 
            name="name"
            type="text" 
            class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="Masukkan nama Anda"
            required
        >
    </div>
</form>`},
        {
            text: "Lanjutkan dengan input email, nomor telepon, dan textarea untuk pesan.",
        code: `<div class="mb-6">
    <label class="block text-amber-900 font-bold mb-2">Email</label>
    <input 
        name="email"
        type="email" 
        class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        placeholder="email@contoh.com"
        required
    >
</div>

<div class="mb-6">
    <label class="block text-amber-900 font-bold mb-2">Nomor Telepon</label>
    <input 
        name="phone"
        type="tel" 
        class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        placeholder="08xx xxxx xxxx"
    >
</div>

<div class="mb-6">
    <label class="block text-amber-900 font-bold mb-2">Pesan</label>
    <textarea 
        name="message"
        rows="5" 
        class="w-full px-4 py-3 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        placeholder="Tulis pesan Anda di sini..."
        required
    ></textarea>
</div>`
        },
        {
            text: "Tambahkan tombol kirim",
            code: `<button 
    type="submit" 
    class="w-full bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition"
>
    Kirim Pesan
</button>`
        },
        {
            text: "Agar form bisa mengirim data, kita bisa pakai layanan Formspree. Tambahkan atribut action dan method pada tag <form> seperti berikut:",
            code: `action="{endpoint formspree kamu}" method="post"`
        }
      ],
    },
    {
      title: "Footer",
      subtitle: "Informasi lengkap & copyright — struktur sederhana",
      step: [
        {
            text: "Buat footer dengan beberapa kolom: brand, menu, kontak, jam buka.",
            code: `<footer class="bg-stone-900 text-white py-16">
    <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-10 mb-12">
            <!-- kolom -->
        </div>
        <div class="border-t border-amber-800/30 pt-8 text-center text-amber-100">
            <!-- copyright -->
        </div>
    </div>
</footer>`
        },
        {
            text: "Isi tiap kolom.",
            code: `<div>
    <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
        <img src="assets/images/logo.png" alt="" class="h-12"> Kopi CC
    </h3>
    <p class="text-amber-100">Menyajikan kopi nusantara terbaik sejak 2020.</p>
</div>`
        },
        {
            text: "Full code footer:",
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
                <ul class="space-y-2 text-amber-100">
                    <li><a href="#home" class="hover:text-amber-400">Beranda</a></li>
                    <li><a href="#menu" class="hover:text-amber-400">Menu</a></li>
                    <li><a href="#about" class="hover:text-amber-400">Tentang</a></li>
                </ul>
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
</footer>`
        }
      ],
    },
    {
      title: "Ekstra",
      subtitle: "Membuat scroll smooth dan navbar tidak ikut di-scroll",
      step: [
        {
            text: `Tambahkan class "scroll-smooth" pada tag <html> untuk membuat efek scroll yang halus saat mengklik link navigasi.`,
        },
        {
            text: `Tambahkan class "fixed top-0 w-full z-40" pada tag <nav> pertama untuk membuat navbar tetap di atas saat discroll.`,
        },
        {
            text: `Tambahkan class "fixed top-20 z-30 w-full" pada tag <nav> kedua (menu mobile) untuk membuatnya tetap di bawah navbar utama saat discroll.`,
        },
      ],
    },
    {
      title: "Penutup",
      subtitle: "Selamat telah menyelesaikan project website landing page bisnis kopi",
      step: [
        {
            text: `Berikut adalah formulir untuk feedback Training Basic.`,
            img: `/feedback.jpg`,
            link: `https://docs.google.com/forms/d/e/1FAIpQLSf_P_M0OmEa6hvAm4sP37T20YZf3CHmqL6-nNcyiFSlIiBmfg/viewform?pli=1`
        },
        {
            text: `Berikut adalah formulir untuk mendapatkan token Dicoding.`,
            img: `/dicoding.jpg`,
            link:  `https://docs.google.com/forms/d/e/1FAIpQLScMMyPPO2MPhMXwGFB1KoWZsuQk4hzBMrbVu0kZEy5xwwN0MQ/viewform`
        },
      ],
    },
  ];
