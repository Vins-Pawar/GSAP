// gsap.to("#box1", {
//     x: 1000,
//     duration: 3,
//     delay: 2,
//     rotate : 360,
//     backgroundColor : "orange",
//     borderRadius : "50%",
//     scale:0.5,

// });

// // gsap.to("#box2",{
// //     x:500,
// //     y:500,
// //     duration : 2,
// //     delay:2,
// // })

// gsap.from("#box2", {
//     x: 1000,
//     duration: 3,
//     delay: 2,
// });

gsap.from("h1",{
    color:"red",
    opacity:0,
    y:30,
    duration:3,
    delay : 1,
    stagger : 0.5 // 1 , -1
})

// gsap.to("#box3",{
//     x:1000,
//     delay : 1,
//     duration : 2,
//     rotate : 360,
//     // repeat : 1 // animate twice
//     // repeat : 2 // animate thrice
//     repeat : -1, // animate infinite
//     yoyo :true,  // bounce back
// })

// timeline

var tl = gsap.timeline();

tl.to("#box1", {
    x: 1100,
    duration: 2,
    rotate: 360,
    delay: 1,
});
tl.to("#box2", {
    x: 1100,
    backgroundColor: "green",
    delay: 1,
    duration: 2,
});
tl.to("#box3", {
    x: 1100,
    duration : 2,
    scale: 2,
    borderRadius: "50%",
});
