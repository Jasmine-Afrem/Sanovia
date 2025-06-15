import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; // Make sure path is correct

// Import the icons we'll use from the 'react-icons' library
import { FaHome, FaUserMd, FaMobileAlt, FaInfoCircle } from 'react-icons/fa';

// Update our data structure to include an icon for each link
const navLinksData = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Find a doctor", path: "/find-doctor", icon: FaUserMd },
    { name: "Mobile App", path: "/mobile-app", icon: FaMobileAlt },
    { name: "About us", path: "/about", icon: FaInfoCircle }
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
            <NavLink to="/" className={styles.logoLink} onClick={closeMenu}>
                <img src={logo} alt="Sanovia Logo" className={styles.logoImage} />
                <span className={styles.logoText}>Sanovia</span>
            </NavLink>

            <nav className={styles.navLinks}>
                <ul>
                    {navLinksData.map((link) => (
                        <li key={link.name}>
                            <NavLink to={link.path} className={({ isActive }) => isActive ? styles.activeLink : ""}>
                                <link.icon className={styles.linkIcon} />
                                <span className={styles.linkText}>{link.name}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <button 
                className={`${styles.hamburger} ${isOpen ? styles.toggled : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>
            
            <div className={`${styles.mobileNavContainer} ${isOpen ? styles.navOpen : ''}`}>
                <ul>
                    {navLinksData.map((link) => (
                         <li key={link.name}>
                            <NavLink to={link.path} onClick={closeMenu}>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;