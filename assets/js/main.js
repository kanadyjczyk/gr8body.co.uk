/* GR8BODY - Main JavaScript */

// ── Navigation scroll effect
const nav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav?.classList.add('scrolled');
  } else {
    nav?.classList.remove('scrolled');
  }
}, { passive: true });

// ── Mobile menu toggle
navToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.contains('open');
  navToggle.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  document.body.style.overflow = !isOpen ? 'hidden' : '';
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    mobileMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ── FAQ Accordion — handles both .faq-question (button) and .faq-q (button) patterns
function initFAQ(selector) {
  document.querySelectorAll(selector).forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.faq-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      // Close all in same container
      const container = item.parentElement;
      container.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        const btn = i.querySelector(selector);
        btn?.setAttribute('aria-expanded', 'false');
        const ans = i.querySelector('.faq-answer, .faq-a');
        if (ans) ans.style.maxHeight = '0';
      });

      // Open clicked if it was closed
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        const ans = item.querySelector('.faq-answer, .faq-a');
        if (ans) ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });
}

initFAQ('.faq-question');
initFAQ('.faq-q');

// ── Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // stop watching once visible
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Cookie Banner
const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');
const cookieDecline = document.getElementById('cookie-decline');

if (cookieBanner && !localStorage.getItem('gr8body-cookies')) {
  setTimeout(() => cookieBanner.classList.add('show'), 1500);
}

cookieAccept?.addEventListener('click', () => {
  localStorage.setItem('gr8body-cookies', 'accepted');
  cookieBanner.classList.remove('show');
});

cookieDecline?.addEventListener('click', () => {
  localStorage.setItem('gr8body-cookies', 'declined');
  cookieBanner.classList.remove('show');
});

// Inline cookie accept buttons (some pages use onclick)
window.closeCookieBanner = () => {
  const banner = document.getElementById('cookie-banner');
  if (banner) {
    banner.style.display = 'none';
    localStorage.setItem('gr8body-cookies', 'accepted');
  }
};

// ── Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Active nav link detection
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  try {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    if (linkPath === currentPath || (currentPath.includes(linkPath) && linkPath.length > 1)) {
      link.classList.add('active');
    }
  } catch (e) { /* ignore invalid URLs */ }
});
