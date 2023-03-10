const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})

// apply theme