import styles from './styles/About.module.css';

const About = ({ background, skills, interests }) => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.backgroundCard}>
            <h3>Background</h3>
            <p>{background}</p>
          </div>
          
          <div className={styles.skillsCard}>
            <h3>Skills</h3>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <span key={index} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className={styles.interestsCard}>
            <h3>Interests</h3>
            <ul className={styles.interestsList}>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
