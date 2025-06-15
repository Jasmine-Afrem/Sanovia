import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoctorCard from '../../components/DoctorCard/DoctorCard';
import './FindDoctor.css'; 
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage';


const dummyDoctors = [
    {
        id: 1,
        name: 'Dr. Evelyn Reed',
        clinic: 'HealWell Clinic',
        location: 'New York, USA',
        rating: 4.8,
        imageUrl: 'https://i.pravatar.cc/150?u=evelynreed'
    },
    {
        id: 2,
        name: 'Dr. Marcus Thorne',
        clinic: 'City Central Cardiology',
        location: 'London, UK',
        rating: 4.9,
        imageUrl: 'https://i.pravatar.cc/150?u=marcusthorne'
    },
    {
        id: 3,
        name: 'Dr. Chloe Bennett',
        clinic: 'Sunshine Pediatrics',
        location: 'Sydney, AU',
        rating: 4.7,
        imageUrl: 'https://i.pravatar.cc/150?u=chloebennett'
    },
    {
        id: 4,
        name: 'Dr. Samuel Chen',
        clinic: 'Visionary Dermatology',
        location: 'Toronto, CA',
        rating: 5.0,
        imageUrl: 'https://i.pravatar.cc/150?u=samuelchen'
    },
    {
        id: 5,
        name: 'Dr. Isabella Rossi',
        clinic: 'General Health Partners',
        location: 'Rome, IT',
        rating: 4.6,
        imageUrl: 'https://i.pravatar.cc/150?u=isabellarossi'
    },
    {
        id: 6,
        name: 'Dr. Kenji Tanaka',
        clinic: 'Ortho Relief Center',
        location: 'Tokyo, JP',
        rating: 4.9,
        imageUrl: 'https://i.pravatar.cc/150?u=kenjitanaka'
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
        <div className="doctorRating">
            {[...Array(fullStars)].map((_, i) => (
                <svg key={`full_${i}`} className="star" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            ))}
            <span>{rating.toFixed(1)}</span>
        </div>
    );
};


const FindDoctor: React.FC = () => {
    const [showResults, setShowResults] = useState(false);

    const handleSearch = () => {
        setShowResults(false); 
        setTimeout(() => setShowResults(true), 100);
    };

    return (
        <AnimatedPage>
        <div className="findDoctorPage">
            <div className="container">
                <section className="searchSection">
                    <h1>Find a Specialist Near You</h1>
                    <p>Select your location to see a list of highly-rated healthcare professionals in your area.</p>

                    <div className="searchFilters">
                        <div className="filterGroup">
                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                <option value="usa">USA</option>
                                <option value="uk">United Kingdom</option>
                                <option value="ca">Canada</option>
                            </select>
                        </div>
                        <div className="filterGroup">
                            <label htmlFor="county">State / County</label>
                            <select id="county" name="county">
                                <option value="ny">New York</option>
                                <option value="ca">California</option>
                                <option value="london">Greater London</option>
                            </select>
                        </div>
                        <div className="filterGroup">
                            <label htmlFor="city">City</label>
                            <select id="city" name="city">
                                <option value="nyc">New York City</option>
                                <option value="la">Los Angeles</option>
                                <option value="london">London</option>
                            </select>
                        </div>
                        <button className={`learnMoreButton btn-depth`} onClick={handleSearch}>
                            Find Doctors
                        </button>
                    </div>
                </section>
                
                {showResults && (
                    <section className="resultsSection">
                        <h1 className="resultsTitle">Available Doctors</h1>
                        <div className="doctorListGrid">
                            {dummyDoctors.map((doctor, index) => (
                                <DoctorCard 
                                    key={doctor.id} 
                                    doctor={doctor}
                                    delay={index * 100}
                                />
                            ))}
                        </div>
                    </section>
                )}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default FindDoctor;