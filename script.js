document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SMOOTH SCROLL (CTA + NAV)
     ========================= */

  // CTA button → Projects section
  const ctaBtn = document.querySelector(".cta");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
      document.querySelector("#projects")?.scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // All anchor links smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      // close mobile menu after click
      mobileMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  });


  /* =========================
     ACTIVE NAV ON SCROLL
     ========================= */

  const sections = ["#home", "#about", "#projects", "#contact"];
  const navLinks = document.querySelectorAll(".nav-left a, .nav-right a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(id => {
      const section = document.querySelector(id);
      if (section && window.scrollY >= section.offsetTop - 200) {
        current = id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  });


  /* =========================
     MOBILE MENU
     ========================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  // force closed on reload
  mobileMenu.classList.remove("active");
  menuOverlay.classList.remove("active");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  });

  menuOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  });


  /* =========================
     HERO IMAGE SLIDER
     ========================= */

const slides = document.querySelectorAll('.slide');
let current = 0;

// show first slide immediately
slides[0].classList.add('active');

// first slide: 1 second only
setTimeout(() => {
  slides[0].classList.remove('active');
  current = 1;
  slides[current].classList.add('active');

  // normal slider timing after first slide
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 4500);

}, 2000); // ⏱️ ONLY FIRST SLIDE = 1s



});
