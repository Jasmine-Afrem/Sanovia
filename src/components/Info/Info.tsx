import React, { useEffect, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import styles from './Info.module.css';

interface InfoProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    isDownloadSection?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
}

const Info: React.FC<InfoProps> = ({
    title,
    description,
    imageSrc,
    imageAlt,
    isDownloadSection = false,
    buttonText = "Learn more",
    onButtonClick
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }
        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className={`${styles.infoContainer} ${isDownloadSection ? styles.download : ''}`}>
            <div ref={contentRef} className={styles.infoContent}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <button 
                    className={styles.learnMoreButton}
                    onClick={onButtonClick}
                    aria-label={buttonText}
                >
                    {buttonText}
                    <FiArrowRight aria-hidden="true" />
                </button>
            </div>
            <div ref={imageRef} className={styles.imageContainer}>
                <img 
                    src={imageSrc} 
                    alt={imageAlt} 
                    className={styles.infoImage}
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Info; 