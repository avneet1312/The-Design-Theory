document.querySelector('.cta').addEventListener('click', () => {
    document.querySelector('#projects || #home').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
// Active nav on scroll
window.addEventListener('scroll', () => {
    const sections = ['#home', '#projects', '#about', '#contact'];
    const navLinks = document.querySelectorAll('.nav-left a, .nav-right a');
    
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= document.querySelector(section).offsetTop - 200) {
            current = section;
        }
    });
    
    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.parentElement.classList.add('active');
        }
    });
});

const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('mobileMenu');
const overlay = document.getElementById('menuOverlay');

// force closed on reload
menu.classList.remove('active');
overlay.classList.remove('active');

toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// click anywhere else → close
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});
