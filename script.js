(() => {
  "use strict";

  const viewer = document.querySelector(".viewer");
  const range = document.querySelector(".reveal-control");

  if (viewer && range) {
    const updateReveal = () => {
      const value = Number(range.value);
      viewer.style.setProperty("--reveal", `${value}%`);
      range.setAttribute(
        "aria-valuetext",
        `${value}% flat Log on the left, ${100 - value}% corrected Rec.709 on the right`
      );
    };

    range.addEventListener("input", updateReveal);
    updateReveal();
  }

  const yearTargets = document.querySelectorAll("[data-year]");
  const currentYear = new Date().getFullYear();
  yearTargets.forEach((target) => {
    target.textContent = String(currentYear);
  });

  const animated = document.querySelectorAll("[data-animate]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reducedMotion) {
    animated.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  animated.forEach((element) => observer.observe(element));
})();
