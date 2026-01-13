document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.innerWidth < 768;

  gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: isMobile ? "+=120%" : "+=250%",
      scrub: true,
      pin: !isMobile,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  })
  .to(".content h2", {
    opacity: 1,
    y: 0,
    ease: "none"
  })
  .to(".content p", {
    opacity: 1,
    y: 0,
    ease: "none"
  }, "-=0.4");

  ScrollTrigger.refresh();
});
