import { useState } from 'react';
import styles from './styles/Contact.module.css';

const Contact = ({ email, phone, github, linkedin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Get In Touch</h2>
        <p className={styles.subtitle}>Feel free to reach out for collaborations or just a friendly hello</p>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📧</span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.icon}>📱</span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
            {github && (
              <div className={styles.infoItem}>
                <span className={styles.icon}>💻</span>
                <div>
                  <h4>GitHub</h4>
                  <a href={github} target="_blank" rel="noopener noreferrer">
                    {github.replace('https://', '')}
                  </a>
                </div>
              </div>
            )}
            {linkedin && (
              <div className={styles.infoItem}>
                <span className={styles.icon}>💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    {linkedin.replace('https://', '')}
                  </a>
                </div>
              </div>
            )}
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={styles.textarea}
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
