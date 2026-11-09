
/* =====================================================================
   main.js – all interactive behavior of the website

   Sections:
     1. Navigation (Tracks dropdown + mobile menu)
     2. Hero slider (home page only)
     3. Start everything
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. NAVIGATION
   --------------------------------------------------------------------- */
function setupNavigation() {
  var dropdown = document.getElementById('dd');
  var dropdownButton = dropdown.querySelector('button');
  var burgerButton = document.getElementById('burger');
  var navigation = document.getElementById('nav');

  function isDesktopWithHover() {
    return window.matchMedia('(hover:hover) and (min-width:821px)').matches;
  }

  function setDropdownOpen(isOpen) {
    dropdown.classList.toggle('open', isOpen);
    dropdownButton.setAttribute('aria-expanded', isOpen);
  }

  dropdownButton.addEventListener('click', function () {
    setDropdownOpen(!dropdown.classList.contains('open'));
  });

  dropdown.addEventListener('mouseenter', function () {
    if (isDesktopWithHover()) setDropdownOpen(true);
  });

  dropdown.addEventListener('mouseleave', function () {
    if (isDesktopWithHover()) setDropdownOpen(false);
  });

  document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) setDropdownOpen(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      setDropdownOpen(false);
      navigation.classList.remove('show');
      burgerButton.setAttribute('aria-expanded', false);
    }
  });

  burgerButton.addEventListener('click', function () {
    var isShown = navigation.classList.toggle('show');
    burgerButton.setAttribute('aria-expanded', isShown);
  });
}

/* ---------------------------------------------------------------------
   2. HERO SLIDER (home page only)
   --------------------------------------------------------------------- */
var SLIDE_DELAY = 5000;

function setupSlider() {
  var slider = document.getElementById('car');
  if (!slider) return;

  var slides = Array.from(slider.querySelectorAll('.slide'));
  var dots = Array.from(slider.querySelectorAll('.dot'));
  var currentIndex = 0;
  var isPaused = false;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle('on', i === currentIndex);
      slide.setAttribute('aria-hidden', i !== currentIndex);
    });

    dots.forEach(function (dot, i) {
      dot.setAttribute('aria-current', i === currentIndex);
    });
  }

  document.getElementById('pv').addEventListener('click', function () {
    showSlide(currentIndex - 1);
  });

  document.getElementById('nx').addEventListener('click', function () {
    showSlide(currentIndex + 1);
  });

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      showSlide(Number(dot.dataset.n));
    });
  });

  ['mouseenter', 'focusin'].forEach(function (eventName) {
    slider.addEventListener(eventName, function () {
      isPaused = true;
    });
  });

  ['mouseleave', 'focusout'].forEach(function (eventName) {
    slider.addEventListener(eventName, function () {
      isPaused = false;
    });
  });

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion:reduce)'
  ).matches;

  if (!prefersReducedMotion) {
    setInterval(function () {
      if (!isPaused) showSlide(currentIndex + 1);
    }, SLIDE_DELAY);
  }
}

/* ---------------------------------------------------------------------
   3. START EVERYTHING
   --------------------------------------------------------------------- */
setupNavigation();
setupSlider();
