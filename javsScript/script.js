let tl = gsap.timeline()

tl.from(".logo>img, .nav h4, nav-2, button", {
    y:-100,
    duration:1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2,
    
})

tl.from(".main h1", {
    y: 200,
    opacity:0,
    stagger:0.3
})

tl.from(".main>img" ,{
    scale: 0,
    opacity:0,
    stagger:0.5,
})