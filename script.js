// Toggle Mobile Menu
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Close mobile menu on click
window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Dark / Light Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
    }
});

// Project Filtering Script
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Active button styling
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission Handler
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMsg.textContent = "Thank you! Your message has been successfully sent.";
    contactForm.reset();
    setTimeout(() => {
        formMsg.textContent = "";
    }, 4000);
});