import React, { useEffect } from 'react';
import styles from './Info.module.css';
import healthImage from '../../assets/healthimage.jpeg';

const Info: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: '50px'
            }
        );

        const elements = document.querySelectorAll(`.${styles.infoContent}, .${styles.imageContainer}`);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.infoContainer}>
            <div className={styles.infoContent}>
                <h2 className={styles.title}>
                    Leading healthcare providers
                </h2>
                <p className={styles.description}>
                    Sanovia provides progressive, and affordable healthcare, accessible on mobile and online 
                    for everyone. To us, it's not just work. We take pride in the solutions we deliver.
                </p>
                <button className={styles.learnMoreButton}>
                    Learn more
                </button>
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src={healthImage} 
                    alt="Healthcare Providers" 
                    className={styles.infoImage}
                />
            </div>
        </section>
    );
};

export default Info; 