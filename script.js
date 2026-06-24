function openSite(url) {
    window.open(url, '_blank');
}

// Wire up mobile menu, theme toggle, and set card background images
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');
    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', function () {
            const open = topNav.classList.toggle('open');
            menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    // Theme toggle (day / night), persisted in localStorage
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const THEME_KEY = 'historynama-theme';

    function setDarkMode(enabled) {
        body.classList.toggle('dark-mode', enabled);
        if (enabled) {
            localStorage.setItem(THEME_KEY, 'dark');
        } else {
            localStorage.setItem(THEME_KEY, 'light');
        }
    }

    // initialize theme
    const saved = localStorage.getItem(THEME_KEY);
    setDarkMode(saved === 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isDark = body.classList.toggle('dark-mode');
            setDarkMode(isDark);
        });
    }

    // Set CSS --img variable on each image-box from contained front <img>
    document.querySelectorAll('.image-box').forEach(box => {
        const frontImg = box.querySelector('.front img');
        if (frontImg && frontImg.src) {
            box.style.setProperty('--img', `url('${frontImg.src}')`);
        }
    });
});
