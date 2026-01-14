document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=200%",
      scrub: true,
      pin: true,
      markers: true
    }
  })
  .to(".content h2", { opacity: 1, y: 0 })
  .to(".content p", { opacity: 1, y: 0 }, "-=0.4");
});
