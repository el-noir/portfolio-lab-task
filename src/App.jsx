import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { personalInfo, aboutData, projectsData, contactData } from './data/portfolioData';
import profilePhoto from './assets/Mudasirshah.png';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Home 
          name={personalInfo.name}
          photo={profilePhoto}
          welcomeMessage={personalInfo.welcomeMessage}
        />
        <About 
          background={aboutData.background}
          skills={aboutData.skills}
          interests={aboutData.interests}
        />
        <Projects projects={projectsData} />
        <Contact 
          email={contactData.email}
          phone={contactData.phone}
          github={contactData.github}
          linkedin={contactData.linkedin}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
