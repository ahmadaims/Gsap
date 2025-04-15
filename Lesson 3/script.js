// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// })
// gsap.from("#page2 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// })



// The issue this when we reached to the second page he animation maybe ends so here comes the scrolltrrigger
gsap.from("#page1 #box", {
  scale: 0,
  duration: 1,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page1 #box",
    // markers: true,
    end: "top 20%",
    scrub: true,
  },
})

gsap.from("#page2 .quote-h1", {
  opacity: 0,
  scale: 0,                                 
  duration: 3,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 20%",
    scrub: true, //this value can be true or number between 1 to 5 depends on the smoothenss you want
    }
})


