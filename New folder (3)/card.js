gsap.set(".card-back p, .card-back h2", { opacity: 0, y: 50 });

gsap.to(".card-front", {
    duration: 2,
    boxShadow: "0px 20px 30px rgba(0,0,0,0.5)",
    filter: "hue-rotate(90deg)",
    scale: 1.2,
    ease: "power2.out"
});

gsap.to(".card-back", {
    duration: 2,
    boxShadow: "0px -20px 30px rgba(0,0,0,0.5)",
    filter: "hue-rotate(-90deg)",
    scale: 1.2,
    rotationY: 180,
    ease: "power2.out"
});

gsap.to(".card-back p", {
    duration: 1,
    delay: 1,
    opacity: 1,
    y: 0,
    ease: "power2.out"
});

gsap.to(".card-back h2", {
    duration: 1,
    delay: 1.5,
    opacity: 1,
    y: 0,
    ease: "power2.out"
});
