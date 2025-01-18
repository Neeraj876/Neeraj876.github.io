/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ========================== theme colors =========================== */
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");

// Set dark mode by default
document.body.classList.add("dark");

dayNight.addEventListener("click", () => {
    // Toggle the dark mode on body
    document.body.classList.toggle("dark");
    
    // Toggle the icon between sun (light) and moon (dark)
    const icon = dayNight.querySelector("i");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
})

// Update the icon based on the default mode
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");  // Sun icon for dark mode
    } else {
        dayNight.querySelector("i").classList.add("fa-moon"); // Moon icon for light mode
    }
});
