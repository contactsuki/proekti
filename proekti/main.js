document.documentElement.style.scrollBehavior = "smooth";

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

document.querySelectorAll(
    ".game-card, .sidebar-content, .welcome-content, .login-card"
).forEach(el => {
    el.classList.add("fade-up");
    observer.observe(el);
});



