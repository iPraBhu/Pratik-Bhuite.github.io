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
        
        // Update toggle button icon
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fa fa-sun-o';
                } else {
                    icon.className = 'fa fa-moon-o';
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
        
        // Add click event to theme toggle button
        const toggleBtn = document.querySelector('.theme-toggle');
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