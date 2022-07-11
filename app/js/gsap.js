// gsap.from(".nav__logo", { duration: 1, y: "-100%", ease: "bounce" });

// gsap.fromTo(
//   ".hair",
//   {
//     opacity: 0.75,
//   },
//   {
//     repeat: -1,
//     x: 1.5,
//     y: -1,
//     opacity: 1,
//     duration: 0.4,
//     yoyo: true,
//   }
// );

// gsap.to(".line864", {
//   duration: 120,
//   repeat: -1,
//   repeatDelay: 4,
//   x: "100%",
//   ease: "none",
// });

// gsap.from(".tail", {
//   repeat: -1,
//   y: 10,
//   x: 10,
//   skewX: 2,
//   skewY: 2,
//   opacity: 1,
//   duration: 0.4,
//   yoyo: true,
// });

// gsap.from("#rocket, #guy", {
//   repeat: -1,
//   x: 5,
//   ease: "none",
//   duration: 1,
//   delay: 0.4,
//   yoyo: true,
// });

gsap.from("#rocket, #guy", {
  repeat: -1,
  x: 5,
  ease: "none",
  duration: 1,
  delay: 0.5,
  yoyo: true,
});

gsap.from(".fire-red", {
  repeat: -1,
  y: 5,
  x: 5,
  skewX: 1,
  skewY: 1,
  opacity: 1,
  duration: 0.25,
  delay: 0.5,
  yoyo: true,
});

gsap.from(".fire-red2", {
  repeat: -1,
  y: 5,
  x: 5,
  skewX: 3,
  skewY: 3,
  ease: "ease",
  duration: 0.25,
  yoyo: true,
});

gsap.from(".ellipse-dot", {
  repeat: -1,
  scale: 1,
  opacity: 0,
  duration: 0.1,
  delay: 0.5,
  yoyo: true,
  stagger: 0.1,
});

gsap.to(".line864", {
  duration: 360,
  repeat: -1,
  repeatDelay: 4,
  x: 3,
  ease: "ease",
  yoyo: true,
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#rocket_1_, #guy", {
  scrollTrigger: {
    trigger: ".hero__image--header",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: 300,
  y: 300,
  ease: "none",
  duration: 0.5,
  opacity: 0,
});

gsap.from(".hero-animate", {
  scrollTrigger: {
    trigger: ".heading--header",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.5,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".client-animate", {
  scrollTrigger: {
    trigger: ".testimonial",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.5,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".how-animate", {
  scrollTrigger: {
    trigger: ".cd",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.5,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".team-animate", {
  scrollTrigger: {
    trigger: ".team",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.3,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".project-animate", {
  scrollTrigger: {
    trigger: ".project",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.3,
  stagger: 0.3,
  opacity: 0,
});

gsap.from(".clients-animate", {
  scrollTrigger: {
    trigger: ".client",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.3,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".talk-animate", {
  scrollTrigger: {
    trigger: ".talk",
    toggleActions: "restart restart restart restart",
    start: "-500px",
    // markers: true,
  },
  x: -150,
  duration: 0.6,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".footer-animate", {
  scrollTrigger: {
    trigger: ".footer",
    toggleActions: "restart restart restart restart",
    start: "-750px",
    // markers: true,
  },
  x: -150,
  duration: 0.6,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

// CONTACT US PAGE
gsap.from(".contact-animate", {
  scrollTrigger: {
    trigger: ".hero--contact",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.6,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});

gsap.from(".globe-animate", {
  scrollTrigger: {
    trigger: ".globe",
    toggleActions: "restart restart restart restart",
    // markers: true,
  },
  x: -150,
  duration: 0.6,
  stagger: 0.1,
  opacity: 0,
  ease: "ease",
});
