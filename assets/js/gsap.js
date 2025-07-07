
  gsap.registerPlugin(ScrollTrigger);

  // Shared directions array (used in service + testimonial)
  const directions = [
    { x: -100, opacity: 0 },  // left
    { y: -100, opacity: 0 },  // top
    { y: 100, opacity: 0 },   // bottom
    { x: 100, opacity: 0 }    // right
  ];

  // Section 1 - Hero content (on load)
  window.addEventListener('DOMContentLoaded', () => {
    gsap.from(".hero-content h1", {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power3.out"
    });

    gsap.from(".hero-content p", {
      duration: 1,
      opacity: 0,
      y: 20,
      delay: 0.5,
      ease: "power3.out"
    });

    gsap.from(".hero-content .btn", {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      delay: 1,
      ease: "back.out(1.7)"
    });

    gsap.from(".social-icons .icon", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.2,
      delay: 1.3,
      ease: "power2.out"
    });
  });

  // Section 2 - Car Info + Feature Cards
  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".card-features",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });

  gsap.from(".car-image", {
    scrollTrigger: {
      trigger: ".car-info-wrapper",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".car-info-text", {
    scrollTrigger: {
      trigger: ".car-info-wrapper",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  // Section 3 - Why Second Choice
  gsap.from(".why-left > .section-subtitle, .why-left > .section-title", {
    scrollTrigger: {
      trigger: ".why-second-choice",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });

  gsap.from(".feature-item", {
    scrollTrigger: {
      trigger: ".why-second-choice",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3
  });

  gsap.from(".why-right", {
    scrollTrigger: {
      trigger: ".why-second-choice",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  gsap.from(".why-right .dots-top, .why-right .dots-mid", {
    scrollTrigger: {
      trigger: ".why-second-choice",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.2
  });

  // Section 5 - Steps Section
  gsap.from(".steps-header .subtitle, .steps-header h2", {
    scrollTrigger: {
      trigger: ".steps-section",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2
  });

  gsap.from(".step-box", {
    scrollTrigger: {
      trigger: ".steps-section",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out"
  });

  // Section 6 - Service Cards (4 directions)
  document.querySelectorAll(".service-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      ...directions[index % directions.length],
      duration: 1,
      ease: "power3.out"
    });
  });

  // Section 7 - Testimonial Section
  gsap.from(".testimonial-section .section-subtitle, .testimonial-section .section-title", {
    scrollTrigger: {
      trigger: ".testimonial-section",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  document.querySelectorAll(".testimonial-card").forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      },
      ...directions[index % directions.length],
      duration: 1,
      ease: "power3.out"
    });
  });

//   contact html gsap effect

  gsap.from(".contact-card.first", {
    scrollTrigger: {
      trigger: ".contact-card.first",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".contact-card.second", {
    scrollTrigger: {
      trigger: ".contact-card.second",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });


//   car contact circle section

 gsap.from(".contact-text", {
    scrollTrigger: {
      trigger: ".contact-banner",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".contact-image-wrapper", {
    scrollTrigger: {
      trigger: ".contact-banner",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

   gsap.from(".circle-bg, .dots-bg", {
    scrollTrigger: {
      trigger: ".contact-banner",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    stagger: 0.2
  });

//   testimonial

 gsap.registerPlugin(ScrollTrigger);

  gsap.from(".testimonial-section1 .test-card", {
    scrollTrigger: {
      trigger: ".testimonial-section1",
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3
  });