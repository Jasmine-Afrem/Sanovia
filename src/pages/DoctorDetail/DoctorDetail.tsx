import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaGraduationCap, FaCheckCircle } from 'react-icons/fa';
import './DoctorDetail.css';

// --- THE FIX: Create complete types for all your data ---
type Service = {
    name: string;
    price: number;
    description: string;
};

type Doctor = {
    id: number;
    name: string;
    clinic: string;
    location: string;
    address: string;
    phone: string;
    rating: number;
    imageUrl: string;
    bio: string;
    specialties: string[];
    education: string[];
    hours: string;
    services: Service[];
};

const dummyDoctorData: Record<string, Doctor> = {
    '1': { 
        id: 1, 
        name: 'Dr. Evelyn Reed', 
        clinic: 'HealWell Clinic', 
        location: 'New York, USA', 
        address: '123 Wellness Ave, New York, NY 10001',
        phone: '+1 (212) 555-0199',
        rating: 4.8, 
        imageUrl: 'https://i.pravatar.cc/150?u=evelynreed', 
        bio: 'Dr. Reed is a board-certified internist with over 15 years of experience in managing complex adult illnesses. She believes in a holistic approach to medicine, focusing on both treatment and preventative care to ensure long-term well-being for her patients.', 
        specialties: ['Internal Medicine', 'Preventative Care', 'Chronic Disease Management', 'Geriatrics'],
        education: ['MD, Harvard Medical School', 'Residency, NewYork-Presbyterian Hospital'],
        hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
        services: [
            {name: 'Annual Physical Exam', price: 250, description: 'A comprehensive check-up to assess your overall health.'}, 
            {name: 'Chronic Disease Management', price: 180, description: 'Ongoing care for conditions like diabetes and hypertension.'}, 
            {name: 'Preventative Screening', price: 150, description: 'Tests to detect potential health issues early.'},
            {name: 'Vaccinations', price: 80, description: 'Standard immunizations for adults.'}
        ] 
    },
    '2': { 
        id: 2, 
        name: 'Dr. Marcus Thorne', 
        clinic: 'City Central Cardiology', 
        location: 'London, UK',
        address: '456 Heartbeat Rd, London, W1U 6JJ',
        phone: '+44 20 7946 0990',
        rating: 4.9, 
        imageUrl: 'https://i.pravatar.cc/150?u=marcusthorne', 
        bio: 'A leading expert in cardiovascular health, Dr. Thorne specializes in non-invasive cardiology and preventative heart care. His research on lifestyle impacts on heart health has been published in numerous international medical journals.',
        specialties: ['Cardiology', 'Echocardiography', 'Preventative Heart Care', 'Hypertension'],
        education: ['MBBS, Imperial College London', 'Cardiology Fellowship, Barts Heart Centre'],
        hours: 'Mon-Thu: 8:30 AM - 6:00 PM',
        services: [
            {name: 'Echocardiogram', price: 400, description: 'Ultrasound imaging of the heart.'}, 
            {name: 'Stress Test', price: 350, description: 'Measures heart function during physical activity.'}, 
            {name: 'Heart Rhythm Monitoring', price: 280, description: '24/7 monitoring with a Holter device.'}, 
            {name: 'Initial Consultation', price: 220, description: 'Comprehensive assessment and treatment plan.'}
        ] 
    },
};

const DoctorDetail: React.FC = () => {
    const { doctorId } = useParams<{ doctorId: string }>();
    const navigate = useNavigate();

    // Refs for animation
    const headerRef = useScrollAnimation();
    const aboutRef = useScrollAnimation();
    const servicesRef = useScrollAnimation();
    const clinicRef = useScrollAnimation();
    
    // @ts-ignore
    const doctor = doctorId ? dummyDoctorData[doctorId] : null;

    if (!doctor) {
        return <AnimatedPage><div>Doctor not found.</div></AnimatedPage>;
    }


 return (
        <AnimatedPage>
            <div className="doctorDetailPage">
                <div className="bgShape"></div>
                <div className="container">
                    <button onClick={() => navigate(-1)} className="backButton">
                        ← Back to Results
                    </button>

                    <header ref={headerRef} className="detailHeader reveal">
                        <img src={doctor.imageUrl} alt={doctor.name} className="detailPhoto" />
                        <div className="headerText">
                            <h1>{doctor.name}</h1>
                            <p>{doctor.clinic} • {doctor.location}</p>
                        </div>
                    </header>
                    
                    <div className="detailGrid">
                        <div className="mainContent">
                            <section ref={aboutRef} className="contentSection reveal">
                                <h2>About Dr. {doctor.name.split(' ').pop()}</h2>
                                <p>{doctor.bio}</p>
                            </section>

                            <section ref={servicesRef} className="contentSection reveal">
                                <h2>Services & Pricing</h2>
                                <ul className="servicesList">
                                    {doctor.services.map((service: Service) => (
                                        <li key={service.name} className="serviceItem">
                                            <div className="serviceInfo">
                                                <span className="serviceName">{service.name}</span>
                                                <p className="serviceDesc">{service.description}</p>
                                            </div>
                                            <span className="priceTag">${service.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <aside ref={clinicRef} className="sidebar reveal">
                            <div className="infoCard">
                                <h3>Clinic Information</h3>
                                <div className="infoBlock">
                                    <FaMapMarkerAlt className="infoIcon" />
                                    <div>
                                        <strong>Address</strong>
                                        <span>{doctor.address}</span>
                                    </div>
                                </div>
                                <div className="infoBlock">
                                    <FaPhoneAlt className="infoIcon" />
                                    <div>
                                        <strong>Phone</strong>
                                        <span>{doctor.phone}</span>
                                    </div>
                                </div>
                                <div className="infoBlock">
                                    <FaClock className="infoIcon" />
                                    <div>
                                        <strong>Hours</strong>
                                        <span>{doctor.hours}</span>
                                    </div>
                                </div>
                                <div className="mapPlaceholder"><p>Live Map Preview</p></div>
                                <button className="learnMoreButton">Book an Appointment</button>
                            </div>

                            <div className="infoCard">
                                <h3><FaGraduationCap /> Specialties & Education</h3>
                                <ul className="specialtyList">
                                    {doctor.specialties.map((spec: string) => <li key={spec}><FaCheckCircle/> {spec}</li>)}
                                </ul>
                                <ul className="educationList">
                                    {doctor.education.map((edu: string) => <li key={edu}>{edu}</li>)}
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default DoctorDetail;