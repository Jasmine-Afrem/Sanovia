import React from 'react';
import styles from './Hero.module.css';
import healthImage from '../../assets/healthImage.jpeg';

const Hero: React.FC = () => {
    return (
        <section className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <h1>Sanovia healthcare</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper consectetur enim, id luctus augue tincidunt sed. Vestibulum massa urna, posuere sit amet est ac, egestas fermentum felis. Nulla at sagittis tortor, eu scelerisque est. Morbi quis quam eu sem laoreet hendrerit in id ex. Vivamus leo libero, ultrices varius sodales vitae, laoreet at lorem. Proin nec tortor quis enim vehicula interdum. In hac habitasse platea dictumst. Donec congue erat vel lacus posuere, bibendum laoreet magna aliquet. Nunc euismod nisl ut aliquam ullamcorper. Ut porta leo nec arcu faucibus, ac vestibulum nisi posuere. Curabitur rhoncus nec ante hendrerit fringilla. Aliquam pulvinar non leo a semper. Donec varius tortor eu orci scelerisque molestie.
                </p>
                <button className={styles.consultButton}>Consult today</button>
            </div>
            <div className={styles.imageContainer}>
                <img src={healthImage} alt="Sanovia Healthcare Illustration"/>
            </div>
        </section>
    );
};

export default Hero;