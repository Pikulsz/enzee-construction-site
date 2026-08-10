/* =====================================================================
   ENZEE CONSTRUCTION — JAVASCRIPT
   =====================================================================
   JavaScript is what makes a page "do" things (react to clicks, update
   content, etc). HTML is the skeleton, CSS is the appearance, JS is the
   behavior. This file has two small, beginner-friendly features:

   1. Toggling the mobile menu open/closed when the ☰ button is tapped.
   2. Automatically writing the current year into the footer, so you
      never have to manually update "© 2026" -> "© 2027" etc.
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
