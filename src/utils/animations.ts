export const setupAnimations = () => {
    if (typeof window === 'undefined') return () => {};

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '50px'
        }
    );

    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach(element => observer.observe(element));

    return () => {
        elements.forEach(element => observer.unobserve(element));
        observer.disconnect();
    };
}; 