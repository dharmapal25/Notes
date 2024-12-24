// gsap.to(".div1",{
//     x : 1000,
//     duration : 2,
//     rotate : 360,
//     backgroundColor : "pink",
//     borderRadius : "50%",
//     yoyo : true,
//     repeat : -1,
// })

gsap.from("h1",{
    y : -30,
    opacity : 0,
    duration : 2,
    stagger : 0.2
})
gsap.from("h4",{
    x : 30,
    opacity : 0,
    duration : 2,
    stagger : 0.2
})