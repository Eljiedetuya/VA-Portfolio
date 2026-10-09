const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
    const revealElements = document.querySelectorAll(
        ".hero-content > *, .hero-card, .intro > *, .section-heading, .service-card, " +
        ".signature-section > *, .project-preview > *, .cta > *, footer > *"
    );

    revealElements.forEach((element) => element.classList.add("reveal"));
    document.documentElement.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
}
