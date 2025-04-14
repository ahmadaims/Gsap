// gsap.to("#box1", {
//   x: 800,
//   rotate: 360,
//   duration: 3,
//   delay: 1,
// })
// gsap.to("#box2", {
//   x: 800,
//   rotate: 360,
//   duration: 2,
//   delay: 4,
// })
// gsap.to("#box3", {
//   x: 800,
//   scale: 0.5,
//   borderRadius: "50%",
//   delay: 6,
//   duration: 3,
// })
// IN THIS UPPER CODE THE MAIN ISSUE IS IF WE WANT A CERATN ANIMATION TO START AFTER THE FOORST ANIMATION IS COMPLETED THEN WE NEED TO USE THE DELAY PROPERTY BUT WITH A CALCULATED SECONDS LIKE IF BOX 1 HAS A DELAY OF 1 SECOND AND DURATION OF 3 SECONDS SO WE HAVE TO USE 4 SECONDS FOR THE DELAY OF BOX 2 BECASUE IT IS GOING TO START AFTER BOX 1 IS COMPLETED. SO HERE COMES THE USE OF TIMELINE GSAP


// USING TIMELINE GSAP
var tl = gsap.timeline()

tl.to("#box1", {
  x: 500,
  rotate: 360,
  duration: 1,
  delay: 1,
})
tl.to("#box2", {
  x: 500,
  rotate: 360,
  duration: 2,
})
tl.to("#box3", {
  x: 500,
  rotate: 360,
  duration: 2,
})