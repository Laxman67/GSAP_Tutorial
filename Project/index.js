gsap.from(".header", { duration: 1, y: -100, ease: "bounce" });

gsap.from(".links", { duration: 2, opacity: 0, stagger: 0.3 });

gsap.from(".right", {
  duration: 1.5,
  x: "-100vw",
  delay: 1,
  ease: "power2.in",
});

gsap.from(".left", {
  duration: 1,
  x: "-100%",
  delay: 1,
  ease: "power2.in",
  delay: 2,
});

gsap.to(".footer", {
  duration: 1,
  ease: "elastic",
  y: 0,
  delay: 2.5,
});

gsap.fromTo(
  ".button",
  { opacity: 0, scale: 0, rotation: 720 },
  { opacity: 1, scale: 1, rotation: 0, delay: 3.5 }
);


