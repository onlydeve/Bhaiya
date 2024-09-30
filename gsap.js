gsap.from("#play-pause", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.5,
});

gsap.from("#logo", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.5,
});

gsap.from(".para", {
  opacity: 0,
  duration: 0.7,
  ease: "back.out(1.7)",
  y: -250,
  delay: 0.8,
  stagger: 0.15,
});
