const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

function setTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    themeIcon.className = isDark
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    themeLabel.textContent = isDark
        ? "Light mode"
        : "Dark mode";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );

    localStorage.setItem(
        "portfolio-theme",
        isDark ? "dark" : "light"
    );
}

setTheme(localStorage.getItem("portfolio-theme") === "dark");

themeToggle.addEventListener("click", () => {
    const isDark =
        document.body.classList.contains("dark-mode");

    setTheme(!isDark);
});