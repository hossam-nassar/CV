/* Hossam Aly — site behaviour (menu, year, section reveals). No dependencies. */
(function () {
  'use strict';

  /* Mobile navigation */
  var menuButton = document.querySelector('[data-menu-button]');
  var nav = document.querySelector('[data-nav]');
  if (menuButton && nav) {
    var closeMenu = function () {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    };
    menuButton.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
        menuButton.focus();
      }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !e.target.closest('.nav')) closeMenu();
    });
  }

  /* Current year */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Subtle section reveals (respects prefers-reduced-motion) */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('[data-reveal]');
  if (!reduced && 'IntersectionObserver' in window && targets.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
})();
