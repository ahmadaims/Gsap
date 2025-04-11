// gsap.from("#box", {
//   x: 300,
//   duration: 2,
//   delay: 1,
// })
// gsap.to("#box2", {
//   x: 300,
//   duration: 2,
//   delay: 1,
// })
// gsap.to("#box", {
//   x: 700 ,
//   duration:2,
//   delay:1,
//   rotate: 360,
//   backgroundColor: "cyan",
//   borderRadius: "50%",
//   scale: 1.2,
// }
// )
gsap.to("h1", {
  color: "crimson",
  delay: 0,
  duration: 1,
  opacity: 1,
  y: 30,
  stagger: 0.3, //This will do one by one animation for each h1 element by 0.3 seconds
  repeat: -1, //This will repeat the animation 3 times because 1st time is default, we use -1 for infinite
  yoyo: true, //This will reverse the animation after it is completed
})