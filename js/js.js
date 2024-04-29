'use strict';

function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 70;
    let startTime = null;

    function animation(currentTime) {
        startTime = startTime || currentTime;
        const timeElapsed = currentTime - startTime;
        window.scrollTo(0, ease(timeElapsed, startPosition, distance, duration));
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    scrollToTopBtn.addEventListener('click', () => {
        scrollToTop();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation ul');
    
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });    
    const inscriereButton = document.querySelector('.scrissibuton button');
    inscriereButton.addEventListener('click', () => {
        window.location.href = '/indexes/voluntariat.html';
    });
});
