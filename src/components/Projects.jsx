import ProjectCard from './ProjectCard';
import styles from './styles/Projects.module.css';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.subtitle}>Here are some of my recent works</p>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
