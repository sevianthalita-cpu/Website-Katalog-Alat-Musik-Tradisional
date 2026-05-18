# Alunan Nusantara — Front-End Documentation

Website platform alat musik tradisional Indonesia.

## Struktur Folder
```
alunan-nusantara/
├── index.php               ← Beranda (HALAMAN INI)
├── jelajahi.php            ← Halaman Jelajahi
├── hubungi.php             ← Hubungi Kami
├── masuk.php               ← Login
├── daftar.php              ← Register
├── editprofile.php         ← Edit Profile
│
├── assets/
│   ├── css/
│   │   ├── base.css        ← CSS Variables + Reset
│   │   ├── layout.css      ← Grid & Section structure
│   │   ├── components.css  ← UI Components
│   │   └── main.css        ← Master @import
│   ├── js/
│   │   ├── main.js         ← Hero carousel + Navbar + Animations
│   │   └── animations.js   ← Parallax + Card tilt effects
│   └── images/
│       ├── logo/           ← File logo (logo.png, logo.svg)
│       ├── alatmusik/      ← Foto alat musik (kendang.png, sape.png, dll)
│       ├── pulau/          ← peta-indonesia.png, dll
│       └── hero/           ← hero-bg.jpg (landscape background)
│
├── includes/               ← PHP files (diisi saat backend)
│   ├── config.php
│   ├── header.php
│   ├── footer.php
│   └── functions.php
│
└── README.md

## Gambar yang Dibutuhkan
Letakkan file gambar berikut di folder yang sesuai:

### assets/images/hero/
- hero-bg.jpg         ← Landscape pegunungan/alam Nusantara

### assets/images/alatmusik/
- angklung.png        ← Gambar angklung (hero center)
- kendang.png         ← Kendang (showcase + mini card)
- kendang-2.png       ← Foto alternatif kendang
- kendang-3.png       ← Foto alternatif kendang
- sape.png            ← Alat musik Sape'
- gamelan.png         ← Gamelan
- suling.png          ← Suling
- rebab.png           ← Rebab
- cta-instrument.png  ← Gambar instrumen di section CTA

### assets/images/logo/
- logo.png            ← Logo Alunan Nusantara

### assets/images/pulau/
- peta-indonesia.png  ← Silhouette peta Indonesia (hitam/gelap)

## Tech Stack
- HTML5 + PHP (siap untuk backend)
- Bootstrap 5.3.3 (CDN) — untuk grid & responsive
- Bootstrap Icons 1.11.3 (CDN)
- Google Fonts: Playfair Display, Lora, Nunito
- Vanilla JavaScript (ES6+)

## Cara Jalankan (Development)
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan `index.php` → Open with Live Server
   ATAU buka di XAMPP: `http://localhost/alunan-nusantara/`

## Fitur JavaScript
- Hero Carousel: auto-slide + manual navigation (kiri/kanan)
- Navbar: sticky dengan efek glassmorphism saat scroll
- Scroll Animations: fade-in-up / left / right dengan stagger delay
- Parallax: hero background subtle parallax effect
- Card Tilt: feature cards perspektif tilt on hover
```
