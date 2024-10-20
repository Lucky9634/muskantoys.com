
let tl = gsap.timeline()
tl.from("nav .logo a", {
    opacity: 0,
    x: -300,
    duration: 0.7,
    scrub: true,
    delay: 1
})

tl.from("nav ul li", {
    y: -200,
    duration: 0.7,
    opacity: 0,
    scrub: true,
    stagger: 0.1
})


gsap.from("nav .login", {
    opacity: 0,
    x: 300,
    duration: 0.7,
    scrub: true,
    delay: 1,
})
gsap.from(".container", {
    opacity: 0,
    duration: 1,
    scrub: true,
    delay: 2,
    scale: 0.3,
})




