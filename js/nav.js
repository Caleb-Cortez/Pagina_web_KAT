document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navbarNav = document.getElementById("navbarNav");

    if (menuToggle && navbarNav) {
        menuToggle.addEventListener("click", () => {
            navbarNav.classList.toggle("open");
        });
    }
});
