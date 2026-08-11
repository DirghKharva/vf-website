/* ============================================================
   VF AGRI EXPORT — Navbar JS
   navbar.js
   ============================================================ */
(function () {
  'use strict';

  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('nav-hamburger');
  const navMenu    = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');
  const dropLink   = document.querySelector('.nav-dropdown > .nav-link');
  const dropMenu   = document.querySelector('.nav-dropdown .dropdown-menu');

  /* ---- Scroll effect ---- */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Open / Close helpers ---- */
  function openMenu() {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    navOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
    if (dropMenu) {
      dropMenu.classList.remove('open');
      if (dropLink) {
        const arr = dropLink.querySelector('.nav-arrow');
        if (arr) arr.style.transform = '';
      }
    }
  }

  hamburger.addEventListener('click', function () {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  navOverlay.addEventListener('click', closeMenu);

  /* ---- Mobile Products accordion ---- */
  function mobileDropHandler(e) {
    if (window.innerWidth > 768) return;
    e.preventDefault();
    const isOpen = dropMenu.classList.toggle('open');
    const arr = dropLink.querySelector('.nav-arrow');
    if (arr) arr.style.transform = isOpen ? 'rotate(180deg)' : '';
  }

  if (dropLink) dropLink.addEventListener('click', mobileDropHandler);

  /* ---- Close menu on nav-link click (mobile) ---- */
  document.querySelectorAll(
    '.nav-list .nav-link:not(.nav-dropdown > .nav-link), .dropdown-item'
  ).forEach(function (el) {
    el.addEventListener('click', function () {
      if (window.innerWidth <= 768) closeMenu();
    });
  });

  /* ---- Close on resize to desktop ---- */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) closeMenu();
  });
})();
