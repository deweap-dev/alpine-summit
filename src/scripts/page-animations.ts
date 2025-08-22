export default async function runPageAnimations(): Promise<void> {
  const gsapModule = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");

  const gsap = gsapModule.default;
  gsap.registerPlugin(ScrollTrigger);

  function animateIfExists(
    selector: string,
    tweenFn: "to" | "from",
    config: gsap.TweenVars
  ): void {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const tweenMethod = gsap[tweenFn] as (
      targets: gsap.TweenTarget,
      vars: gsap.TweenVars
    ) => gsap.core.Tween;

    tweenMethod(selector, config);
  }

  animateIfExists("#hero-title", "to", {
    scrollTrigger: {
      trigger: "#hero-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
  });

  animateIfExists("#hero-text", "to", {
    scrollTrigger: {
      trigger: "#hero-text",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.3,
    delay: 0.2,
    ease: "power3.out",
  });

  animateIfExists("#hero-button", "to", {
    scrollTrigger: {
      trigger: "#hero-button",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
    duration: 1.4,
    delay: 0.4,
    ease: "back.out(1.7)",
  });

  animateIfExists(".services-title", "from", {
    scrollTrigger: { trigger: ".services-title", start: "top 80%" },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  animateIfExists(".service-main-image", "from", {
    scrollTrigger: { trigger: ".service-main-image", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  animateIfExists(".service-overlay-image", "from", {
    scrollTrigger: { trigger: ".service-overlay-image", start: "top 80%" },
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power3.out",
  });

  animateIfExists(".service-block", "from", {
    scrollTrigger: { trigger: ".service-block", start: "top 80%" },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    stagger: 0.3,
  });

  animateIfExists(".subscribe-text", "to", {
    scrollTrigger: {
      trigger: ".subscribe-text",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  });

  animateIfExists(".subscribe-form", "to", {
    scrollTrigger: {
      trigger: ".subscribe-form",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  animateIfExists(".bosque-image", "to", {
    scrollTrigger: {
      trigger: ".destinos-hero",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power3.out",
  });

  animateIfExists(".destinos-title", "to", {
    scrollTrigger: {
      trigger: ".destinos-hero",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  animateIfExists(".hero-destinations-image", "to", {
    scrollTrigger: {
      trigger: ".hero-destinations",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
    opacity: 1,
    scale: 1,
    ease: "power3.out",
  });

  animateIfExists(".hero-destinations-title", "to", {
    scrollTrigger: {
      trigger: ".hero-destinations",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });

  animateIfExists(".destinos-section-title", "to", {
    scrollTrigger: {
      trigger: ".destinos-section-title",
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
    opacity: 1,
    y: 0,
    ease: "power3.out",
  });

  const cards = document.querySelectorAll(".destino-card");
  cards.forEach((card) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
      opacity: 1,
      y: 0,
      ease: "power3.out",
    });
  });

  animateIfExists(".nosotros-title", "to", {
    scrollTrigger: {
      trigger: ".nosotros-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "elastic.out(1, 0.5)",
  });

  animateIfExists(".nosotros-intro", "to", {
    scrollTrigger: {
      trigger: ".nosotros-title",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
  });

  const equipoCards = document.querySelectorAll(".equipo-card");
  equipoCards.forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: "back.out(1.7)",
      delay: i * 0.2,
    });
  });

  animateIfExists(".filosofia-block", "to", {
    scrollTrigger: {
      trigger: ".filosofia-block",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.3,
    ease: "elastic.out(1, 0.5)",
  });

  animateIfExists(".hero-nosotros-image", "to", {
    scrollTrigger: {
      trigger: ".hero-nosotros",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out",
  });

  animateIfExists(".hero-nosotros-title", "to", {
    scrollTrigger: {
      trigger: ".hero-nosotros",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "elastic.out(1, 0.5)",
  });

  animateIfExists(".contact-title", "to", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.3,
    ease: "elastic.out(1, 0.5)",
  });

  animateIfExists(".contact-form", "to", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.3,
    ease: "back.out(1.7)",
  });
}
