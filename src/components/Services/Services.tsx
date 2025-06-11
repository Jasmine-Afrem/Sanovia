import React from 'react';
import styles from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faUserMd, faNotesMedical, faAmbulance, faHospital, faPrescriptionBottleAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ServiceCardProps {
    icon: any;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
    const cardRef = useScrollAnimation({
        threshold: 0.1,
        rootMargin: '0px 0px -15% 0px'
    });

    return (
        <div className={`${styles.serviceCard}`} ref={cardRef}>
            <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className={styles.learnMore}>
                Learn More
                <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>
    );
};

const Services: React.FC = () => {
    const services = [
        {
            icon: faHeartbeat,
            title: "Emergency Care",
            description: "24/7 emergency medical care services with state-of-the-art facilities and experienced healthcare professionals."
        },
        {
            icon: faUserMd,
            title: "Qualified Doctors",
            description: "Access to highly qualified and experienced doctors across various medical specialties."
        },
        {
            icon: faNotesMedical,
            title: "Medical Treatment",
            description: "Comprehensive medical treatment plans tailored to your specific health needs and conditions."
        },
        {
            icon: faAmbulance,
            title: "Fast Ambulance",
            description: "Rapid response ambulance service equipped with modern medical equipment and trained paramedics."
        },
        {
            icon: faHospital,
            title: "Modern Facilities",
            description: "State-of-the-art medical facilities and equipment for accurate diagnosis and effective treatment."
        },
        {
            icon: faPrescriptionBottleAlt,
            title: "Pharmacy Service",
            description: "On-site pharmacy service providing prescribed medications and healthcare products."
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2>Our Services</h2>
                    <p>We provide the best quality healthcare services for our patients</p>
                </div>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;