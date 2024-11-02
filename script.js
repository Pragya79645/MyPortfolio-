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

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const progress = bar.dataset.progress;
                    const fill = bar.querySelector('.progress-fill');
                    fill.style.setProperty('--progress', ${progress}%);
                    fill.style.width = ${progress}%;
                });
                // Remove observer after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe all skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
        // Add fade-in animation
        card.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});
