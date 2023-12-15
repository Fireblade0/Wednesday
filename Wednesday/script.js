
var tl=gsap.timeline()

tl.from("#nav h1,#nav h4,#nav i,#nav h5",{
    Delay:0.4,
    y:-60,
    duration:0.3,
    opacity:0,
    stagger:0.1
})

.from("#center>h1",{
   opacity:0,
   y:30,
   scale:1.2,
   duration:0.6
})
.from("#center>p",{
    opacity:0,
    y:20,
    duration:0.3
})

.from("#page1 img",{
    opacity:0,
    scale:0.8,
    y:20

})
.from("#page2>h2",{
    opacity:0,
    y:30,
    duration:0.4
})

.from("#page2>p",{
    opacity:0,
    y:30,
    duration:0.2
})
