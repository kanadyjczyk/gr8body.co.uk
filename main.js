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
});

// ── Mobile menu toggle
navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu?.classList.toggle('open');
  document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isOpen = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
  });
});

// ── Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Cookie Banner
const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');
const cookieDecline = document.getElementById('cookie-decline');

if (cookieBanner && !localStorage.getItem('gr8body-cookies')) {
  cookieBanner.classList.add('show');
}

cookieAccept?.addEventListener('click', () => {
  localStorage.setItem('gr8body-cookies', 'accepted');
  cookieBanner.classList.remove('show');
});

cookieDecline?.addEventListener('click', () => {
  localStorage.setItem('gr8body-cookies', 'declined');
  cookieBanner.classList.remove('show');
});

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
  const linkPath = new URL(link.href, window.location.origin).pathname;
  if (linkPath === currentPath || (currentPath.includes(linkPath) && linkPath !== '/')) {
    link.classList.add('active');
  }
});
