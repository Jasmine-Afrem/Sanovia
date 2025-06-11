import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header className={`${styles.headerContainer} ${isScrolled ? styles.scrolled : ''}`}>
            <Link to="/" className={styles.logoLink} onClick={closeMenu}>
                <img src={logo} alt="Sanovia Logo" className={styles.logoImage} />
                <span className={styles.logoText}>Sanovia</span>
            </Link>

            <nav className={`${styles.navLinks} ${isOpen ? styles.navOpen : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/find-doctor" onClick={closeMenu}>Find a doctor</Link>
                    </li>
                    <li>
                        <Link to="/mobile-app" onClick={closeMenu}>Mobile App</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>About us</Link>
                    </li>
                </ul>
            </nav>

            <button 
                className={`${styles.hamburger} ${isOpen ? styles.toggled : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>
        </header>
    );
};

export default Navbar;