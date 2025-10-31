import { useState } from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          Mudasir's Portfolio<span className={styles.logoPlus}></span>
        </div>

        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <li>
            <a onClick={() => scrollToSection('home')} className={styles.navLink}>
              Home
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('about')} className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')} className={styles.navLink}>
              Projects
            </a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')} className={styles.navLink}>
              Contact
            </a>
          </li>
          <li>
            <button 
              onClick={toggleDarkMode} 
              className={styles.themeToggle}
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
