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
    duration:2
  },
  {
    x: 300,
    y: 50,
    scale: 2,
    opacity: 1,
    duration:2
  }
);
