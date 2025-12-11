gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const lineOneTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top 80%",
    // markers: true,
  },
});

lineOneTimeline
  .from(".container .line-one span", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  .to(".container .line-one", {
    backgroundColor: "yellow",
  })
  .from(".container .line-one .sun", {
    x: 300,
    duration: 1,
  });

gsap.from(".line-two span:first-child", {
  x: -1000,
  scale: 10,
  scrollTrigger: {
    trigger: ".line-two",
    start: "top 40%",
    end: "center 60%",
    // markers: true,
    scrub: true,
  },
});

gsap.from(".line-two span:last-child", {
  x: 1000,
  scale: 10,
  scrollTrigger: {
    trigger: ".line-two",
    start: "top 40%",
    end: "center 60%",
    // markers: true,
    scrub: true,
  },
});

gsap.to(".line-two span:first-child", {
  y: -30,
  scrollTrigger: {
    trigger: ".line-two",
    start: "center 50%",
    end: "center 40%",
    scrub: true,
    // markers: true,
  },
});

gsap.to(".line-two span:first-child", {
  y: 0,
  scrollTrigger: {
    trigger: ".line-two",
    start: "center 40%",
    end: "center 30%",
    scrub: true,
  },
});

gsap.to(".line-two span:last-child", {
  y: -30,
  scrollTrigger: {
    trigger: ".line-two",
    start: "center 30%",
    end: "center 20%",
    scrub: true,
    // markers: true,
  },
});

gsap.to(".line-two span:last-child", {
  y: 0,
  scrollTrigger: {
    trigger: ".line-two",
    start: "center 20%",
    end: "center 10%",
    scrub: true,
  },
});

const lineThreeTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top 40%",
    // markers: true,
  },
});

lineThreeTimeline
  .from(".container .line-three span", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  })
  .to(".container .line-three", {
    color: "white",
    backgroundColor: "black",
    backgroundPositionX: "0%",
  })
  .from(".container .line-three .moon", {
    x: 300,
    duration: 1,
  });
