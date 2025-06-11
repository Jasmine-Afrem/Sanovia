import React, { useEffect } from 'react';
import styles from './Services.module.css';
import { FaSearch, FaFlask, FaFileAlt, FaAmbulance, FaCapsules, FaMicroscope } from 'react-icons/fa';

const servicesData = [
    { icon: <FaSearch/>, title: "Search a doctor", description: "Choose your doctor from thousands of specialists"},
    { icon: <FaCapsules/>, title: "Online pharmacy", description: "Buy your medicine"},
    { icon: <FaFileAlt/>, title: "Consultation", description: "Free consultations with our trusted doctors"},
    { icon: <FaFlask/>, title: "Details info", description: "Lorem ipsum"},
    { icon: <FaAmbulance/>, title: "Emergency care", description: "24/7 urgent care"},
    { icon: <FaMicroscope/>, title: "Tracking", description: "Track and save your medical history"}
];

const Services: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const ratio = entry.intersectionRatio;
                        const element = entry.target as HTMLElement;
                        
                        if (ratio >= 0.1) {
                            element.classList.add(styles.visible);
                        }
                    }
                });
            },
            {
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                rootMargin: '50px 0px -10% 0px'
            }
        );

        const cards = document.querySelectorAll(`.${styles.serviceCard}`);
        cards.forEach((card, index) => {
            (card as HTMLElement).style.transitionDelay = `${index * 150}ms`;
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => {
                observer.unobserve(card);
                (card as HTMLElement).style.transitionDelay = '';
            });
            observer.disconnect();
        };
    }, []);

    return (
        <section className={styles.servicesContainer}>
            <h2>Our services</h2>
            <hr className={styles.divider} />
            <p className={styles.subHeading}>
                We provide to you the best choiches for you. Adjust it to your health needs and make sure you undergo treatment
                with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </p>
            <div className={styles.servicesGrid}>
                {servicesData.map((service, index) => (
                    <div 
                        key={index} 
                        className={styles.serviceCard}
                    >
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
            <button className={styles.learnMoreButton}>
                Learn more
            </button>
        </section>
    );
};

export default Services;