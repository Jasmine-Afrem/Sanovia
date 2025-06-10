import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logoWhiteBg.png'; // Make sure this path is correct

const Navbar: React.FC = () => {
    // State to manage the mobile navigation menu
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navLinks = ["Home", "Find a doctor", "Mobile App", "About us"];

    // Function to close the mobile menu
    const closeMobileMenu = () => {
        setIsNavOpen(false);
    };

    return (
        <header className={styles.headerContainer}>
            {/* Logo now acts as a single link to the homepage */}
            <a href="/" className={styles.logoLink} onClick={closeMobileMenu}>
                <img className={styles.logoImage} src={logo} alt="Sanovia Logo" />
                <span className={styles.logoText}>Sanovia</span>
            </a>

            {/* Navigation - classes are combined for responsiveness */}
            <nav className={`${styles.navLinks} ${isNavOpen ? styles.navOpen : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link}>
                            {/* When a link is clicked, the mobile menu closes */}
                            <a 
                                href="#" 
                                className={link === "Home" ? styles.activeLink : ""}
                                onClick={closeMobileMenu}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Hamburger Menu Button - only visible on mobile via CSS */}
            <button 
                className={`${styles.hamburger} ${isNavOpen ? styles.toggled : ''}`}
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-label="Toggle navigation menu"
            >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>
        </header>
    );
};

export default Navbar;