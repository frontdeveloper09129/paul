const themeToggle = document.querySelector(".theme-toggle");
const iconMode = document.getElementById("theme-icon");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    iconMode.className = isDarkMode
        ? "fa-solid fa-sun"
        : "fa-solid fa-moon";

    iconMode.innerHTML = ''

    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

document.querySelector(".view-stack")?.addEventListener("click", () => {
    window.location.href = "viewStack.html";
});