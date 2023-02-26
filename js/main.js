document.querySelectorAll(".nav-links").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }else {
        link.classList.remove("active");
        link.setAttribute("aria-current", "page");
    }
});