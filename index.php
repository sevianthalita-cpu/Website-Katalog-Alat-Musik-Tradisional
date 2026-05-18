<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alunan Nusantara - Alat Musik Tradisional</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lily+Script+One&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-light fixed-top navigation-bar">
        <div class="container-fluid px-md-5">
            <a class="navbar-brand brand-font text-dark" href="#">
                <img src="assets/images/logo.png" alt="" class="d-inline-block align-text-top me-2" style="height: 30px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav gap-4">
                    <li class="nav-item"><a class="nav-link active" href="#">Beranda</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Jelajahi</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Hubungi Kami</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Tentang Kami</a></li>
                    <li class="nav-item"><a class="nav-link btn-masuk px-4 py-1 text-white bg-dark rounded-pill" href="#">Masuk</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="hero-section">
        <div class="container position-relative h-100 d-flex flex-column justify-content-center">
            <div class="row align-items-center pt-5">
                <div class="col-lg-5 text-section">
                    <h1 class="brand-font hero-title">Alunan Nusantara</h1>
                    <div class="search-container my-4">
                        <i class="bi bi-search search-icon"></i>
                        <input type="text" class="form-control search-input" placeholder="Cari Alat Musik Tradisional...">
                    </div>
                    <p class="hero-subtitle text-muted">
                        Selamat datang dalam sebuah petualangan nada! Mari temukan macam-macam instrumen yang ada di alat musik tradisional Indonesia.
                    </p>
                    
                    <div class="slider-controls mt-5 d-flex gap-2">
                        <button class="btn ctrl-btn" id="hero-prev"><i class="bi bi-chevron-left"></i></button>
                        <button class="btn ctrl-btn" id="hero-next"><i class="bi bi-chevron-right"></i></button>
                    </div>
                </div>

                <div class="col-lg-3 text-center position-relative display-instrument-wrapper">
                    <img id="main-showcase-img" src="assets/images/angklung-center.png" alt="Featured Instrument" class="img-fluid main-instrument-img animate-fade">
                </div>

                <div class="col-lg-4">
                    <div class="instrument-stack-wrapper" id="dynamic-stack-container">
                        </div>
                </div>
            </div>
        </div>
    </section>

    <div class="wood-divider-bar">
        <img src="assets/images/wood-carving-divider.png" alt="Carving Divider" class="divider-pattern">
    </div>

    <section class="discovery-section py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5 text-center text-lg-start mb-5 mb-lg-0">
                    <h2 class="section-title fw-bold mb-4">Apa saja yang bisa di temukan?</h2>
                    <img src="assets/images/indonesia-map.png" alt="Indonesia Map Silhouette" class="img-fluid map-graphic px-4">
                </div>
                <div class="col-lg-7">
                    <div class="row g-4">
                        <div class="col-sm-6">
                            <div class="feature-card shadow-sm p-4 bg-white text-center text-sm-start">
                                <h4 class="fw-bold fs-5 text-dark mb-2">Cerita Sejarah & cara memainkan</h4>
                                <p class="text-muted small mb-0">Memahami cerita sejarah, pengertian, fungsi, dan cara memainkannya.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="feature-card shadow-sm p-4 bg-white text-center text-sm-start">
                                <h4 class="fw-bold fs-5 text-dark mb-2">Provinsi & asal musiknya</h4>
                                <p class="text-muted small mb-0">Kenali daerah tempat lahirnya setiap alat musik.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="feature-card shadow-sm p-4 bg-white text-center text-sm-start">
                                <h4 class="fw-bold fs-5 text-dark mb-2">Koleksi alat musik tradisional</h4>
                                <p class="text-muted small mb-0">Menelusuri berbagai macam alat musik dari provinsi yang kamu pilih.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="feature-card shadow-sm p-4 bg-white text-center text-sm-start">
                                <h4 class="fw-bold fs-5 text-dark mb-2">Cerita Sejarah & cara memainkan</h4>
                                <p class="text-muted small mb-0">Kenali daerah tempat lahirnya setiap alat musik.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="why-choose-section py-5">
        <div class="container py-4">
            <div class="row align-items-center g-5">
                <div class="col-lg-5">
                    <div id="secondaryInstrumentCarousel" class="carousel slide custom-card-slider shadow" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="slider-card-img-wrapper position-relative">
                                    <img src="assets/images/kendang-featured.jpg" class="d-block w-100" alt="Kendang">
                                    <button class="action-arrow-btn"><i class="bi bi-arrow-right-short"></i></button>
                                </div>
                                <div class="slider-card-body p-4 bg-white">
                                    <h3 class="brand-font fs-2 text-dark mb-2">Kendang</h3>
                                    <p class="text-muted mb-0 small">Kendang adalah instrumen gamelan berbentuk tabung kayu dengan dua sisi membran kulit yang dimainkan langsung dengan tangan untuk berfungsi sebagai pemimpin irama.</p>
                                </div>
                            </div>
                            </div>
                        <div class="carousel-indicators-custom d-flex justify-content-center gap-2 mt-4">
                            <span class="dot active"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-7 ps-lg-5">
                    <h2 class="section-title fw-bold mb-5">Mengapa Memilih alat musik tradisional?</h2>
                    
                    <div class="v-prop-list d-flex flex-column gap-4">
                        <div class="v-prop-item d-flex align-items-start gap-4">
                            <div class="icon-shape shadow-sm"><i class="bi bi-masks"></i></div>
                            <div>
                                <h4 class="fw-bold fs-5 mb-1 text-dark">Pelestarian Budaya</h4>
                                <p class="text-muted mb-0 small">Dengan memainkan alat musik tradisional, Anda ikut menjaga warisan budaya bangsa agar tetap lestari.</p>
                            </div>
                        </div>
                        <div class="v-prop-item d-flex align-items-start gap-4">
                            <div class="icon-shape shadow-sm"><i class="bi bi-music-note-beamed"></i></div>
                            <div>
                                <h4 class="fw-bold fs-5 mb-1 text-dark">Suara yang Unik</h4>
                                <p class="text-muted mb-0 small">Setiap instrumen tradisional memiliki suara otentik yang tidak bisa ditiru, menawarkan pengalaman musikal yang khas.</p>
                            </div>
                        </div>
                        <div class="v-prop-item d-flex align-items-start gap-4">
                            <div class="icon-shape shadow-sm"><i class="bi bi-people-fill"></i></div>
                            <div>
                                <h4 class="fw-bold fs-5 mb-1 text-dark">Kolaborasi dan Kreativitas</h4>
                                <p class="text-muted mb-0 small">Bermain alat musik tradisional melatih kerja sama tim dan kreativitas Anda saat menciptakan harmoni bersama.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section text-center py-5">
        <div class="container py-4 position-relative">
            <h2 class="section-title fw-bold mb-4">Mari temukan alat musik<br>tradisional favoritmu!</h2>
            <a href="#" class="btn btn-cta rounded-pill px-4 py-2 text-white">Mulai Menjelajahi</a>
            <div class="cta-floating-art mt-4">
                <img src="assets/images/instrument-mini-icon.png" alt="Decorative Instrument Asset" class="img-fluid float-artwork">
            </div>
        </div>
    </section>

    <footer class="main-footer text-white pt-5 pb-4">
        <div class="container">
            <div class="row gy-4">
                <div class="col-md-4">
                    <div class="d-flex align-items-start gap-3 mb-3">
                        <div class="footer-icon-circle"><i class="bi bi-geo-alt-fill"></i></div>
                        <div>
                            <h5 class="fw-bold mb-1 fs-6">Alamat</h5>
                            <p class="text-muted mb-0 small text-white-50">Jl. Terusan No.23, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65147</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start gap-3 mb-3">
                        <div class="footer-icon-circle"><i class="bi bi-envelope-fill"></i></div>
                        <div>
                            <h5 class="fw-bold mb-1 fs-6">Email</h5>
                            <p class="text-muted mb-0 small text-white-50">alunan.nus770@gmail.com<br>polinema@gmail.com</p>
                        </div>
                    </div>
                    <div class="d-flex align-items-start gap-3">
                        <div class="footer-icon-circle"><i class="bi bi-telephone-fill"></i></div>
                        <div>
                            <h5 class="fw-bold mb-1 fs-6">Telepon</h5>
                            <p class="text-muted mb-0 small text-white-50">+62832-2321-1123<br>+62 813-2858-3431</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 px-md-5">
                    <h5 class="fw-bold mb-4 fs-6 text-uppercase tracking-wider">Ikuti sosial media kita</h5>
                    <div class="d-flex flex-column gap-3">
                        <a href="#" class="text-white-50 text-decoration-none small d-flex align-items-center gap-2 social-link">
                            <i class="bi bi-instagram fs-5 text-white"></i> @alunan_nusantara
                        </a>
                        <a href="#" class="text-white-50 text-decoration-none small d-flex align-items-center gap-2 social-link">
                            <i class="bi bi-tiktok fs-5 text-white"></i> @alunan_nusantara1
                        </a>
                        <a href="#" class="text-white-50 text-decoration-none small d-flex align-items-center gap-2 social-link">
                            <i class="bi bi-twitter-x fs-5 text-white"></i> @alunan_nusantara
                        </a>
                    </div>
                </div>

                <div class="col-md-4 text-center text-md-end d-flex flex-column justify-content-center align-items-md-end">
                    <img src="assets/images/footer-logo.png" alt="Alunan Nusantara Logo" class="img-fluid footer-brand-img mb-2">
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>