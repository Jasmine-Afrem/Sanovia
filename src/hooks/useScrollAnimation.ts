import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const {
        threshold = 0.1,
        rootMargin = '0px',
        once = true
    } = options;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        requestAnimationFrame(() => {
                            element.classList.add('visible');
                        });
                        if (once) {
                            observer.unobserve(element);
                        }
                    } else if (!once) {
                        requestAnimationFrame(() => {
                            element.classList.remove('visible');
                        });
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, once]);

    return elementRef;
}; 