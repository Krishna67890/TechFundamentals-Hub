import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Animation for page entrance
export const animatePageEntrance = (element) => {
  gsap.fromTo(element, 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
  );
};

// Animation for cards
export const animateCard = (element) => {
  gsap.fromTo(element,
    { opacity: 0, scale: 0.9, y: 30 },
    { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      duration: 0.6, 
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Animation for code blocks
export const animateCodeBlock = (element) => {
  gsap.fromTo(element,
    { opacity: 0, x: -50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.7, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Stagger animation for lists
export const animateStaggeredList = (elements) => {
  gsap.fromTo(elements,
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.5, 
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0].parentElement,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Hover animation for interactive elements
export const addHoverAnimation = (element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  });
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });
};

// Scroll animation for section headers
export const animateSectionHeader = (element) => {
  gsap.fromTo(element,
    { opacity: 0, x: -30 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.6, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Bounce animation for important elements
export const animateBounce = (element) => {
  gsap.fromTo(element,
    { y: -20, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};

// Cleanup function to kill scroll triggers
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};