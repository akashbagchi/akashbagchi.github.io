const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const toggle = document.querySelector(".theme-toggle");
  toggle.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-toggle");
  const preferredTheme = getPreferredTheme();

  setTheme(preferredTheme);

  // Add bounce animation after a short delay
  setTimeout(() => {
    toggle.classList.add("initial-bounce");
    // Remove the class after animation completes to allow it to be triggered again if needed
    toggle.addEventListener("animationend", () => {
      toggle.classList.remove("initial-bounce");
    });
  }, 1000);

  toggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
});
