import React from 'react';
import styles from './Footer.module.css';

const footerLinks = {
  company: ["About", "Find a doctor", "Apps"],
  region: ["Indonesia", "Singapore", "Hongkong", "Canada"],
  help: ["Help center", "Contact support", "Instructions", "How it works"]
};

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        <div className={styles.aboutColumn}>
          <div className={styles.logoContainer}>
             <div className={styles.logoSymbol}>S</div> 
             <span className={styles.logoText}>Sanovia</span>
          </div>
          <p>Sanovia provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p>Sanovia 2025. All rights reserved</p>
        </div>

        <div className={styles.linkColumn}>
          <h3>Company</h3>
          <ul>
            {footerLinks.company.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>
        
        <div className={styles.linkColumn}>
          <h3>Region</h3>
          <ul>
            {footerLinks.region.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3>Help</h3>
          <ul>
            {footerLinks.help.map(link => <li key={link}><a href="#">{link}</a></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;