import { useRef, useEffect, useState, type RefObject } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

interface UseScrollAnimationReturn {
  ref: RefObject<HTMLElement>;
  shouldAnimate: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}): UseScrollAnimationReturn {
  const { threshold = 0.2, rootMargin = '-20px' } = options;
  const ref = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const hasAnimated = useRef(false);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const isScrollingDown = useRef(true);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          isScrollingDown.current = currentScrollY > lastScrollY.current;
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    lastScrollY.current = window.scrollY;
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && isScrollingDown.current && !hasAnimated.current) {
            // Trigger animation only when scrolling down into view
            hasAnimated.current = true;
            setShouldAnimate(true);
          } else if (entry.isIntersecting && hasAnimated.current) {
            // Keep visible if already animated
            setShouldAnimate(true);
          } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            // Reset when element is above viewport (scrolled back up past it)
            hasAnimated.current = false;
            setShouldAnimate(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref: ref as RefObject<HTMLElement>, shouldAnimate };
}
