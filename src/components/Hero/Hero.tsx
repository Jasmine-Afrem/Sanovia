import React, { useEffect } from 'react';
import styles from './Hero.module.css';
import healthImage from '../../assets/healthImage.jpeg';
import { setupScrollReveal } from '../../utils/scrollReveal';
import '../../styles/effects.css';

const Hero: React.FC = () => {
    useEffect(() => {
        const cleanup = setupScrollReveal();
        return () => cleanup();
    }, []);

    return (
        <section className={styles.heroContainer}>
            <div className={`${styles.heroContent} reveal-left`}>
                <h1 className={`${styles.heroTitle} reveal`}>
                    <span>Sanovia</span>
                    Modern Healthcare Solutions
                </h1>
                <p className={`${styles.heroDescription} reveal`}>
                    Experience the future of healthcare with Sanovia. We combine cutting-edge technology with compassionate care to provide you with the best medical services. Our team of expert healthcare professionals is dedicated to your well-being, offering personalized solutions that fit your unique needs.
                </p>
                <div className={`${styles.heroButtons} reveal`}>
                    <button className={`${styles.learnMoreButton} btn-depth`}>
                        Schedule Consultation
                    </button>
                </div>
            </div>
            <div className={`${styles.heroImageContainer} reveal-right`}>
                <img 
                    src={healthImage} 
                    alt="Advanced Healthcare Technology" 
                    className={`${styles.heroImage} floating`}
                />
                <div className={`${styles.backgroundShape} ${styles.shape1}`}></div>
                <div className={`${styles.backgroundShape} ${styles.shape2}`}></div>
            </div>
        </section>
    );
};

export default Hero;