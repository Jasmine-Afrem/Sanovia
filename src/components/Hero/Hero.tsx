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
                    <span>Sanovia</span> healthcare
                </h1>
                <p className={`${styles.heroDescription} reveal`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper consectetur enim, id luctus augue tincidunt sed. Vestibulum massa urna, posuere sit amet est ac, egestas fermentum felis. Nulla at sagittis tortor, eu scelerisque est. Morbi quis quam eu sem laoreet hendrerit in id ex. Vivamus leo libero, ultrices varius sodales vitae, laoreet at lorem. Proin nec tortor quis enim vehicula interdum. In hac habitasse platea dictumst. Donec congue erat vel lacus posuere, bibendum laoreet magna aliquet. Nunc euismod nisl ut aliquam ullamcorper. Ut porta leo nec arcu faucibus, ac vestibulum nisi posuere. Curabitur rhoncus nec ante hendrerit fringilla. Aliquam pulvinar non leo a semper. Donec varius tortor eu orci scelerisque molestie.
                </p>
                <div className={`${styles.heroButtons} reveal`}>
                    <button className={`${styles.learnMoreButton} btn-depth`}>Consult today</button>
                </div>
            </div>
            <div className={`${styles.heroImageContainer} reveal-right`}>
                <img src={healthImage} alt="Sanovia Healthcare Illustration" className={`${styles.heroImage} floating`}/>
                <div className={`${styles.backgroundShape} ${styles.shape1}`}></div>
                <div className={`${styles.backgroundShape} ${styles.shape2}`}></div>
            </div>
        </section>
    );
};

export default Hero;