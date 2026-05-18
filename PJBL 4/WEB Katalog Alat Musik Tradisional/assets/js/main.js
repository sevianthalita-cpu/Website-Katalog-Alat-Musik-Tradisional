/* ============================================================
   MAIN.JS — Entry Point JavaScript
   Alunan Nusantara
   ============================================================ */

// ============================================================
// DATA — Instrument collections for hero carousel
// ============================================================
const instrumentSlides = [
  {
    name: 'Kendang',
    stars: 3,
    img: 'assets/images/alatmusik/kendang.png',
    alt: 'Kendang - Alat Musik Tradisional'
  },
  {
    name: "Sape'",
    stars: 2,
    img: 'assets/images/alatmusik/sape.png',
    alt: "Sape' - Alat Musik Tradisional"
  },
  {
    name: 'Angklung',
    stars: 5,
    img: 'assets/images/alatmusik/angklung.png',
    alt: 'Angklung - Alat Musik Tradisional'
  },
  {
    name: 'Gamelan',
    stars: 4,
    img: 'assets/images/alatmusik/gamelan.png',
    alt: 'Gamelan - Alat Musik Tradisional'
  },
  {
    name: 'Suling',
    stars: 4,
    img: 'assets/images/alatmusik/suling.png',
    alt: 'Suling - Alat Musik Tradisional'
  },
  {
    name: 'Rebab',
    stars: 3,
    img: 'assets/images/alatmusik/rebab.png',
    alt: 'Rebab - Alat Musik Tradisional'
  }
];

// ============================================================
// HERO CAROUSEL — Right panel instrument cards
// ============================================================
class HeroCarousel {
  constructor() {
    this.track        = document.getElementById('heroCardsTrack');
    this.prevBtn      = document.getElementById('heroPrev');
    this.nextBtn      = document.getElementById('heroNext');
    this.currentIndex = 0;
    this.itemsPerView = 3;
    this.isAnimating  = false;

    if (!this.track) return;

    this.init();
  }

  init() {
    this.render();
    this.prevBtn?.addEventListener('click', () => this.prev());
    this.nextBtn?.addEventListener('click', () => this.next());

    // Auto-advance every 4 seconds
    this.autoTimer = setInterval(() => this.next(), 4000);

    // Pause on hover
    this.track.closest('.hero-cards-wrapper')?.addEventListener('mouseenter', () => {
      clearInterval(this.autoTimer);
    });
    this.track.closest('.hero-cards-wrapper')?.addEventListener('mouseleave', () => {
      this.autoTimer = setInterval(() => this.next(), 4000);
    });
  }

  render() {
    if (!this.track) return;
    this.track.innerHTML = '';

    const totalSlides = instrumentSlides.length;
    for (let i = 0; i < this.itemsPerView; i++) {
      const idx = (this.currentIndex + i) % totalSlides;
      const data = instrumentSlides[idx];
      const card = this.createCard(data);
      card.style.opacity = '0';
      card.style.transform = 'translateX(24px)';
      this.track.appendChild(card);

      // Staggered entrance
      setTimeout(() => {
        card.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
        card.style.opacity = '1';
        card.style.transform = 'translateX(0)';
      }, 20);
    }
  }

  createCard(data) {
    const card = document.createElement('div');
    card.className = 'instrument-mini-card';

    const stars = this.buildStars(data.stars);
    card.innerHTML = `
      <img
        src="${data.img}"
        alt="${data.alt}"
        class="instrument-mini-img"
        onerror="this.src='assets/images/placeholder.png'; this.onerror=null;"
      >
      <div class="instrument-mini-info">
        <span class="instrument-mini-name">${data.name}</span>
        <div class="star-rating">${stars}</div>
      </div>
    `;
    return card;
  }

  buildStars(count) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      html += `<i class="bi bi-star-fill${i > count ? ' empty' : ''}"></i>`;
    }
    return html;
  }

  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex + 1) % instrumentSlides.length;
    this.animateOut('left');
    setTimeout(() => {
      this.render();
      this.isAnimating = false;
    }, 320);
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = (this.currentIndex - 1 + instrumentSlides.length) % instrumentSlides.length;
    this.animateOut('right');
    setTimeout(() => {
      this.render();
      this.isAnimating = false;
    }, 320);
  }

  animateOut(direction) {
    if (!this.track) return;
    const cards = this.track.querySelectorAll('.instrument-mini-card');
    cards.forEach(card => {
      card.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
      card.style.opacity = '0';
      card.style.transform = direction === 'left' ? 'translateX(-24px)' : 'translateX(24px)';
    });
  }
}

// ============================================================
// NAVBAR — Scroll effect
// ============================================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ============================================================
// SCROLL ANIMATIONS — Intersection Observer
// ============================================================
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ============================================================
// INIT — DOMContentLoaded
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  new HeroCarousel();
  initScrollAnimations();
});
