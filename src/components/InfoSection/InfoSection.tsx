import React from 'react';
import styles from './InfoSection.module.css';

interface InfoSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    imageOnLeft: boolean;
    buttonText: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({
    title,
    description,
    imageUrl,
    imageOnLeft,
    buttonText
}) => {
    const containerClasses = `${styles.infoContainer} ${imageOnLeft ? styles.imageLeft : ''}`;

    return (
        <section className={containerClasses}>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt={title}/>
            </div>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p>{description}</p>
                <button className={styles.learnMoreButton}>{buttonText}</button>
            </div>
        </section>
    );
};

export default InfoSection;