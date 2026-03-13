import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fade up animations
gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el, i) => {
  gsap.set(el, { y: 40 });
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    delay: i % 3 * 0.1,
  });
});

// Slide in from right (hero phone)
gsap.utils.toArray<HTMLElement>('[data-animate="slide-in-right"]').forEach((el) => {
  gsap.set(el, { x: 80, rotation: 3 });
  gsap.to(el, {
    x: 0,
    rotation: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// Bento grid — each card triggers individually
gsap.utils.toArray<HTMLElement>('[data-animate="bento-item"]').forEach((el, i) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    delay: i % 3 * 0.1,
  });
});

