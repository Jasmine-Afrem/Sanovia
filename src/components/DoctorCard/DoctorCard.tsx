// src/components/DoctorCard/DoctorCard.tsx
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

// Define the shape of the doctor object
interface Doctor {
    id: number;
    name: string;
    clinic: string;
    location: string;
    rating: number;
    imageUrl: string;
}

// Reusable Star Rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => { // The extra period has been removed here
    return (
        <div className="doctorRating">
            {[...Array(Math.floor(rating))].map((_, i) => (
                <svg key={`full_${i}`} className="star" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
            <span>{rating.toFixed(1)}</span>
        </div>
    );
};


const DoctorCard: React.FC<{ doctor: Doctor, delay?: number }> = ({ doctor, delay = 0 }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1 });

    const activeClass = isVisible ? 'active' : '';

    return (
        <Link 
            ref={cardRef}
            to={`/find-a-doctor/${doctor.id}`} 
            className={`doctorCardLink reveal card-shadow ${activeClass}`}
            style={{ transitionDelay: `${delay}ms` }} // Stagger the animation
        >
            <div className="doctorCard">
                <img src={doctor.imageUrl} alt={`Dr. ${doctor.name}`} className="doctorPhoto" />
                <div className="doctorDetails">
                    <h3 className="doctorName">{doctor.name}</h3>
                    <p className="doctorClinic">{doctor.clinic}</p>
                    <p className="doctorLocation">{doctor.location}</p>
                    <StarRating rating={doctor.rating} />
                </div>
            </div>
        </Link>
    );
};

export default DoctorCard;