import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { gsap } from 'gsap';

export const useInstantUrlTransition = () => {
  const router = useRouter();

  const handleTransition = useCallback(async (href, event) => {
    event.preventDefault();

    if (window.location.pathname === href) {
      return;
    }

    window.history.pushState({}, '', href);

    const mainElement = document.querySelector('main');
    const overlayElement = document.querySelector('.transition-overlay');
    const transitionElement = document.querySelector('.transition');

    gsap.to(mainElement, {
      translateY: '-400px',
      ease: 'power4.out',
      duration: 0.7,
    });

    gsap.set(overlayElement, { visibility: 'visible', opacity: 0 });
    gsap.to(overlayElement, {
      opacity: 1,
      ease: 'power4.out',
      duration: 1,
      delay: 0.3,
    });

    gsap.set(transitionElement, { display: 'block' });
    gsap.to(transitionElement, {
      translateY: '0%',
      ease: 'power4.out',
      duration: 1,
      delay: 0.3,
      onComplete: async () => {
        await router.push(href);

        // Réinitialisation des éléments après l'animation si nécessaire
        // gsap.set(mainElement, { translateY: '0px' });
        // gsap.set(transitionElement, { translateY: '-100%' });
        // gsap.set(transitionElement, { display: 'none' });
        // gsap.set(overlayElement, { visibility: 'hidden', opacity: 0 });
      }
    });
  }, [router]);

  return handleTransition;
};
