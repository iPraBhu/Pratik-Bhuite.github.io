// Theme Toggle Functionality
(function() {
    // Get current theme from localStorage or default to dark
    const getCurrentTheme = () => {
        return localStorage.getItem('theme') || 'dark';
    };

    // Set theme and save to localStorage
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button icons (now in navbar)
        const toggleBtn = document.querySelector('.nav-theme-toggle');
        if (toggleBtn) {
            const sunIcon = toggleBtn.querySelector('.fa-sun');
            const moonIcon = toggleBtn.querySelector('.fa-moon');
            
            if (sunIcon && moonIcon) {
                if (theme === 'dark') {
                    sunIcon.style.display = 'inline-block';
                    moonIcon.style.display = 'none';
                } else {
                    sunIcon.style.display = 'none';
                    moonIcon.style.display = 'inline-block';
                }
            }
        }
    };

    // Initialize theme on page load
    const initializeTheme = () => {
        const currentTheme = getCurrentTheme();
        setTheme(currentTheme);
    };

    // Toggle between light and dark themes
    const toggleTheme = () => {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => {
        initializeTheme();
        
        // Add click event to theme toggle button (now in navbar)
        const toggleBtn = document.querySelector('.nav-theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    });

    // Also initialize immediately in case DOM is already loaded
    if (document.readyState === 'loading') {
        // Do nothing, event listener above will handle it
    } else {
        initializeTheme();
    }
})();