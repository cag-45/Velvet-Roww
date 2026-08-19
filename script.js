const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);
});

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();