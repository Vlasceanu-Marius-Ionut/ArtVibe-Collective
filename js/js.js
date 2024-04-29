'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Funcția de derulare lină către un element
    function smoothScroll(target, duration) {
        const targetElement = document.querySelector(target);
        const startPosition = window.pageYOffset;
        const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
        const distance = targetPosition - startPosition;

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

    // Funcția de derulare lină către începutul paginii
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Eveniment pentru butonul de scroll către începutul paginii
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    // Eveniment pentru link-urile care navighează către ancore interne
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target, 1000);
        });
    });

    // Eveniment pentru meniul mobil (toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation ul');
    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });
    }

    // Eveniment pentru butonul de înregistrare (inscriere)
    const inscriereButton = document.querySelector('.scrissibuton button');
    if (inscriereButton) {
        inscriereButton.addEventListener('click', () => {
            window.location.href = '/indexes/volunt.html';
        });
    }

    // Eveniment pentru formularul de donații
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const amount = document.getElementById('amount').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (amount && name && email) {
                alert(`Mulțumim pentru donația de ${amount} RON, ${name}!`);
                form.reset();
            } else {
                alert('Vă rugăm să completați toate câmpurile.');
            }
        });
    }

    // Eveniment pentru zoom-ul imaginilor
    const images = document.querySelectorAll('.region img');
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomedImage = document.getElementById('zoomedImage');
    
    images.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('src');
            if (zoomedImage && zoomOverlay) {
                zoomedImage.setAttribute('src', src);
                zoomOverlay.style.display = 'flex';
            }
        });
    });

    if (zoomOverlay) {
        zoomOverlay.addEventListener('click', () => {
            zoomOverlay.style.display = 'none';
        });
    }
});
