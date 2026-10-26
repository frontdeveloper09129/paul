const themToggle = document.getElementById("theme-toggle");
const themLabel = document.getElementById("theme-label");
const themIcon = document.getElementById("theme-icon");
const toggleBtn = document.getElementById("view-stack-btn");




themToggle.addEventListener("click", () => {
    toggle()
})

toggleBtn.addEventListener('click', () => {
    window.location = "viewStack.html"
})

function toggle() {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themIcon.innerHTML = ''
        themIcon.className = 'fas fa-sun';
        themLabel.textContent = "Light Mode"
    } else {
        themIcon.className = 'fas fa-moon'
        themLabel.textContent = "Dark Mode"
    }
}