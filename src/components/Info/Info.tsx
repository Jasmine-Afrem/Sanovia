import React, { useEffect } from 'react';
import styles from './Info.module.css';

interface InfoProps {
    title: string;
    description: string;
    image: string;
    imageLeft?: boolean;
}

const Info: React.FC<InfoProps> = ({ title, description, image, imageLeft = true }) => {
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
        <section className={`${styles.infoContainer} ${!imageLeft ? styles.reversed : ''}`}>
            <div className={styles.infoContent}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.description}>
                    {description}
                </p>
                <button className={styles.learnMoreButton}>
                    Learn more
                </button>
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src={image} 
                    alt={title} 
                    className={styles.infoImage}
                />
            </div>
        </section>
    );
};

export default Info; 