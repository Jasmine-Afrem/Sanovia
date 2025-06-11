export const setupScrollReveal = () => {
    if (typeof window === 'undefined') return () => {};

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target as HTMLElement;
                const delay = element.getAttribute('data-delay') || '0';
                
                // Apply delay if specified
                element.style.transitionDelay = `${parseInt(delay)}ms`;
                element.classList.add('active');
                
                // Reset delay after animation
                setTimeout(() => {
                    element.style.transitionDelay = '0ms';
                }, parseInt(delay) + 800); // 800ms is our animation duration
                
                observer.unobserve(element);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Get all elements that need to be animated
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    elements.forEach(element => {
        // Reset any existing active classes and styles
        element.classList.remove('active');
        element.style.transitionDelay = '0ms';
        observer.observe(element);
    });

    // Cleanup function
    return () => {
        elements.forEach(element => observer.unobserve(element));
        observer.disconnect();
    };
}; 