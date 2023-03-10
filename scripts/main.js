const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

// apply theme