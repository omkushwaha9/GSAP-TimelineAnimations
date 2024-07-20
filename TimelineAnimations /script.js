function page1Animation() {
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
tl.from("#center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
})
tl.from("#center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from("#center-part1 button",{
    opacity:0,
    duration:0.4
})
tl.from("#center-part2 img",{
    opacity:0,
    duration:0.5
},"-=0.3")
tl.from("#section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})

}
// page1Animation()

gsap.from("#services")