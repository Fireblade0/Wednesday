gsap.from("#page1 img", {
    // Scale "image" ya "box" ki size ko utna bada banata(multiplication) hai jitna value isko doge 
    scale: 0,
    duration: 1,
    delay: 0.5,
    rotate: 320,
    opacity: 0,
    //repeat:-1
})

gsap.from("#page2 img", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    rotate: 320,
    opacity: 0,
    //   ScrollTrigger ka use hum aise kr sakte hain ki jaise pehle ka animation chalne ke baad 
    //  doosre page ka animation jab scroll karein tabhi chale toh iska use karenge aur shortcut hai 
    //  iska extended version niche likha hai.
    // scrollTrigger:"#page2 #box"

    /*scrollTrigger ka extended version*/
    scrollTrigger: {
        trigger: "#page2 img",
        scroller: "body",
        //markers: true,
        start: "top 60%",
        end:"top 40%",
        //scrub ko "True" Or "1 to 5" values de sakte hain taki animation smooth ho jaye
        scrub:5
    },
    //repeat:-1
})

gsap.from("#page3 img", {
    scale: 0,
    duration: 1,
    delay: 0.5,
    rotate: 320,
    opacity: 0,
    // Repeat -1 krne pr Animation hamesha ke liye chalega
    // repeat:-1
    // scrollTrigger:"#page3 #box"

}) 