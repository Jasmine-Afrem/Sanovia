import React from 'react';
import styles from './Services.module.css';
import ServiceCard from '../ServiceCard/ServiceCard';

import { FaSearch, FaFlask, FaFileAlt, FaAmbulance, FaCapsules, FaMicroscope} from 'react-icons/fa';

const servicesData = [
    { icon: <FaSearch/>, title: "Search a doctor", description: "Choose your doctor from thousands of specialists"},
    { icon: <FaCapsules/>, title: "Online pharmacy", description: "Buy your medicine"},
    { icon: <FaFileAlt/>, title: "Consultation", description: "Free consultations with our trusted doctors"},
    { icon: <FaFlask/>, title: "Details info", description: "Lorem ipsum"},
    { icon: <FaAmbulance/>, title: "Emergency care", description: "24/7 urgent care"},
    { icon: <FaMicroscope/>, title: "Tracking", description: "Track and save your medical history"}
];

const Services: React.FC = () => {
    return (
        <section className={styles.servicesContainer}>
            <h2>Our services</h2>
            <hr className={styles.divider}/>
            <p className={styles.subHeading}>
                We provide to you the best choiches for you. Adjust it to your health needs and make sure you undergo treatment
                with our highly qualified doctors you can consult with us which type of service is suitable for your health
            </p>
            <div className={styles.servicesGrid}>
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />  
                ))}
            </div>
            <button className={styles.learnMoreButton}>Learn more</button>
        </section>
    );
};

export default Services;