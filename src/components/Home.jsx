import styles from './styles/Home.module.css';

const Home = ({ name, photo, welcomeMessage }) => {
  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={photo} alt={name} className={styles.profileImage} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.name}>
            Hi, I'm <span className={styles.highlight}>{name}</span>
          </h1>
          <p className={styles.welcomeMessage}>{welcomeMessage}</p>
          <div className={styles.ctaButtons}>
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className={styles.primaryBtn}
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className={styles.secondaryBtn}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <div className={styles.arrow}>↓</div>
      </div>
    </section>
  );
};

export default Home;
