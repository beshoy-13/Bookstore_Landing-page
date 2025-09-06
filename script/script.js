    document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    if (!toggle || !nav) return;

    const setOpen = (open) => {
        nav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    toggle.addEventListener("click", () => {
        const willOpen = !nav.classList.contains("is-open");
        setOpen(willOpen);
    });

    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });

    nav.querySelectorAll("a, button").forEach(el =>
        el.addEventListener("click", () => setOpen(false))
    );

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setOpen(false);
    });
    });
