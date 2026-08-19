const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");


// =========================
// MOBILE NAVIGATION
// =========================

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


// =========================
// FOOTER YEAR
// =========================

document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// SCROLL REVEAL ANIMATIONS
// =========================

const animatedElements = document.querySelectorAll(
    ".about-content, .collection-card, .section-heading, " +
    ".statement-inner, .social-grid, .store-grid, .detail-row"
);

animatedElements.forEach((element) => {
    element.classList.add("scroll-reveal");
});


const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
    entry.target.classList.add("visible");
} else {
    entry.target.classList.remove("visible");
}

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px"
    }
);


animatedElements.forEach((element) => {
    observer.observe(element);
});


// =========================
// COLLECTION CARD STAGGER
// =========================

const cards = document.querySelectorAll(".collection-card");

cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
});


// =========================
// HERO PARALLAX
// =========================

const hero = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");

window.addEventListener(
    "scroll",
    () => {

        const scrollPosition = window.scrollY;

        if (scrollPosition < window.innerHeight) {

            heroContent.style.transform =
                `translateY(${scrollPosition * 0.12}px)`;

            hero.style.opacity =
                Math.max(0.45, 1 - scrollPosition / 900);

        }

    },
    { passive: true }
);