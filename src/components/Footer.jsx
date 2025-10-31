import styles from './styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} MyPortfolio+. Built with React & ❤️
        </p>
        <p className={styles.subtext}>
          Designed and Developed by You
        </p>
      </div>
    </footer>
  );
};

export default Footer;
