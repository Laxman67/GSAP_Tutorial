// gsap.to("h1", {
//   color: "red",
//   x: 400,
//   y: 20,
//   scale: 2,
//   //   backgroundColor:"red",
//   opacity: 0.5,
//   padding: 12,
//   duration: 1.5,
//   rotation: 360,
//   height: 150,
// });

gsap.from("h1", {
  color: "red",
  x: 300,
  scale: 2,
  opacity: 0.5,
  duration: 1.5,
  height: 150,
});

gsap.fromTo(
  "h2",
  {
    x: 200,
    y: 150,
    opacity: 0.3,
    duration: 2,
  },
  {
    x: 300,
    y: 50,
    scale: 2,
    opacity: 1,
    duration: 2,
  }
);

gsap.to(".item-1", { x: 300, duration: 2, ease: "back(3)" });

// ease:"bounce.in" --> Bounce at the begining
// ease: "linear"
// ease: "elastic"
// ease: "bounce"
// ease: "back(4)"  --> overshoot and come back to defined area

gsap.to(".item-2", { x: 300, duration: 2, ease: "bounce" });

//  Stragger
// stagger:0.2
// from:"center"/ end / start

gsap.to(".ele-items", {
  y: -100,
  stagger: {
    amount: 0.3,
    from: "center",
  },
});
