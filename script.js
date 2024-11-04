const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('#menu-icon');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});


document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    const fillProgressBars = () => {
        progressBars.forEach(bar => {
            const fill = bar.querySelector('.progress-fill');
            const targetWidth = bar.getAttribute('data-progress') + '%';
            fill.style.width = targetWidth; 
        });
    };
    const skillsSection = document.querySelector('#skills');
    const options = { threshold: 0.5 }; 
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fillProgressBars();
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    observer.observe(skillsSection);
});