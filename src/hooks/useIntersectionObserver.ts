// src/hooks/useIntersectionObserver.ts
import { useState, useEffect, RefObject } from 'react';

export const useIntersectionObserver = (
    elementRef: RefObject<Element>,
    { threshold = 0.1, root = null, rootMargin = '0%' }
): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const node = elementRef?.current; 
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, [elementRef, threshold, root, rootMargin]);

    return isIntersecting;
};