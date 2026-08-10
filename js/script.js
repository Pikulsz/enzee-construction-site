/* =====================================================================
   ENZEE CONSTRUCTION — JAVASCRIPT
   =====================================================================
   JavaScript is what makes a page "do" things (react to clicks, update
   content, etc). HTML is the skeleton, CSS is the appearance, JS is the
   behavior. This file has three small, beginner-friendly features:

   1. Toggling the mobile menu open/closed when the ☰ button is tapped.
   2. Automatically writing the current year into the footer.
   3. Opening a bigger version of a photo when a gallery image is tapped.
   ===================================================================== */

// "document" represents the whole webpage. getElementById finds one
// specific element by its id="..." attribute in the HTML.
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

// addEventListener says "when this happens, run this function".
// Here: when the hamburger button is clicked, toggle the 'open' class
// on the nav menu. The 'open' class is defined in style.css and is
// what actually makes the menu slide down.
menuToggle.addEventListener('click', function () {
  mainNav.classList.toggle('open');
});

// Close the mobile menu automatically after a link is tapped,
// so the menu doesn't stay open after navigating.
const navLinks = mainNav.querySelectorAll('a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mainNav.classList.remove('open');
  });
});

// Fill in the current year in the footer automatically.
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

/* ---------------------------------------------------------------------
   GALLERY LIGHTBOX
   "querySelectorAll" finds every element matching a CSS selector — here,
   every photo inside a .gallery-item. When one is clicked, we copy its
   image into the hidden #lightbox overlay and show it full-screen.
   --------------------------------------------------------------------- */
const galleryImages = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

galleryImages.forEach(function (img) {
  img.addEventListener('click', function () {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});

// Close the lightbox when the × button is clicked...
lightboxClose.addEventListener('click', function () {
  lightbox.classList.remove('open');
});

// ...or when clicking anywhere on the dark background itself.
lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    lightbox.classList.remove('open');
  }
});

// ...or when pressing the Escape key.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    lightbox.classList.remove('open');
  }
});
