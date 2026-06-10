function toggleSubmenu(event) {
    event.stopPropagation();
    const submenu = document.getElementById('publication-submenu');
    const opener = event.currentTarget;
    const isExpanded = opener.getAttribute('aria-expanded') === 'true';
    if (!isExpanded) {
        submenu.style.display = 'block';
        submenu.setAttribute('aria-hidden', 'false');
        opener.setAttribute('aria-expanded', 'true');
    } else {
        submenu.style.display = 'none';
        submenu.setAttribute('aria-hidden', 'true');
        opener.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('opener')) {
            e.preventDefault();
            toggleSubmenu(e);
        }
    }
});

document.addEventListener('click', function(e) {
    const publicationDropdown = document.querySelector('.publication-dropdown');
    if (publicationDropdown && !publicationDropdown.contains(e.target)) {
        const submenu = document.getElementById('publication-submenu');
        const opener = document.querySelector('.opener');
        if (submenu) submenu.style.display = 'none';
        if (opener) {
            submenu.setAttribute('aria-hidden', 'true');
            opener.setAttribute('aria-expanded', 'false');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('main-nav-menu');

    if (menuButton && navMenu) {
        menuButton.addEventListener('click', function(event) {
            event.stopPropagation();
            navMenu.classList.toggle('show');
            const isExpanded = navMenu.classList.contains('show');
            menuButton.setAttribute('aria-expanded', isExpanded);
        });

        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !menuButton.contains(e.target)) {
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    menuButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});

// Dark/Light mode toggle
(function() {
    function applyTheme(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        var btn = document.getElementById('theme-toggle');
        if (btn) btn.innerHTML = isDark
            ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
            : '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
    var _t = localStorage.getItem('theme');
    applyTheme(_t ? _t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) applyTheme(e.matches);
    });
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', function() {
                var isDark = document.body.classList.contains('dark-mode');
                applyTheme(!isDark);
                localStorage.setItem('theme', !isDark ? 'dark' : 'light');
            });
        }
    });
})();
