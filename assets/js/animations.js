/* ============================================================
   ANIMATIONS.JS — Tambahan animasi & efek visual
   Alunan Nusantara
   ============================================================ */

// ============================================================
// PARALLAX EFFECT — Hero background subtle parallax
// ============================================================
function initParallax() {
  const heroBg = document.querySelector('.hero-bg-image');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    // Move bg slower than scroll (parallax feel)
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }, { passive: true });
}

// ============================================================
// HOVER TILT — Feature cards subtle tilt on hover
// ============================================================
function initCardTilt() {
  const cards = document.querySelectorAll('.feature-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      const deltaX  = (e.clientX - centerX) / (rect.width  / 2);
      const deltaY  = (e.clientY - centerY) / (rect.height / 2);

      card.style.transform = `perspective(600px) rotateY(${deltaX * 5}deg) rotateX(${-deltaY * 5}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ============================================================
// COUNTER ANIMATION — Angka statistik (jika ada)
// ============================================================
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  counters.forEach(counter => {
    const target   = parseInt(counter.dataset.count, 10);
    const duration = 1800;
    const step     = target / (duration / 16);
    let current    = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current).toLocaleString('id-ID');
    }, 16);
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initParallax();
  initCardTilt();
});
