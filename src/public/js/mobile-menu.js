// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const body = document.body;

    if (mobileMenuBtn && mobileNavOverlay) {
        mobileMenuBtn.addEventListener('click', function() {
            const isActive = mobileMenuBtn.classList.contains('active');

            if (isActive) {
                // Close menu
                mobileMenuBtn.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            } else {
                // Open menu
                mobileMenuBtn.classList.add('active');
                mobileNavOverlay.classList.add('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                body.style.overflow = 'hidden';
            }
        });

        // Close menu when clicking on overlay
        mobileNavOverlay.addEventListener('click', function(e) {
            if (e.target === mobileNavOverlay) {
                mobileMenuBtn.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });

        // Close menu when clicking on mobile nav links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });

        // Close menu on window resize if viewport becomes desktop size
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mobileNavOverlay.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                body.style.overflow = '';
            }
        });
    }
});