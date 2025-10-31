import styles from './styles/ProjectCard.module.css';

const ProjectCard = ({ title, description, technologies, image, demoLink, githubLink }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.projectImage} />
        <div className={styles.overlay}>
          <div className={styles.links}>
            {demoLink && (
              <a 
                href={demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live Demo
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
