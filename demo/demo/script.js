



// gsap.from(".main h1",{
//     // y : 100,
//     duration : 2,
//     scale : 0,
//     rotate : 360,
//     // stagger : 1.1

// const { default: gsap } = require("gsap");

    
// })


// gsap.from(".nice h1",{
//     scale : 0,
//     duration : 2,
//     rotate : 360,
//     // delay : 1,
//     // scrollTrigger : ".nice h1",

//     ScrollTrigger : ".nice h1"


// })



// gsap.from(".okey h1",{
//         y : 100,
//         duration : 2,
//         scale : 0,
//         rotate : 360,
//         markers : true,
//         // stagger : 1.1
//         scrollTrigger : ".okey h1",
        
//     })


// ????????????         main Code 


// gsap.from("#ma",{
//     scale : 0,
//     duration : 1,
//     opacity : 0,
// })

// gsap.from("#ni",{
//     scale : 0,
//     duration : 1,
//     opacity : 0,
//     rotate : 360,
//     scrollTrigger :{
//         trigger : "#ni",
//         scroll : "body",
//         markers : true,
//         start : "top 50%",
//         end : "top 10%",
//         scrub : 3,
//         pin : true,

//     }
// })


// gsap.from("#ok",{
//     scale : 0,
//     duration : 1,
//     opacity : 0,
//     scrollTrigger : {
//         trigger : "#ok",
//         scroll : "body",
//         markers : true,
//         // start : "top 0%",
//         scrub : true,

//     }
// })

// ????????????????????????


// gsap.to(".nice , span",{
//     // Transform : "translateX(-130%)",     // or  --->>>  x : 500
//     x : -1900,
//     scrollTrigger : {
//         trigger : "span",
//         scroll : "body",
//         scrub : 2,
//         markers : true,
//         start : "top 16%",
//         end : "top -160",
//         pin : true,

//     }
// })


// gsap.to(".nice , span",{
//     x : -1000,
//     scrollTrigger : {
//         trigger : "span",
//         scroll : "body",
//         scrub : 3,
//         markers : true,
//         start : "top 10%",
//         end : "top -150",


//     }
// })



gsap.to(".okey h1",{
    x : 200,
    stagger : 1.1
})