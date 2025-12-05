import './App.css';
import AboutMe from './Components/AboutMe';
import Experience from './Components/Experience';
import Edcuation from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';

function App() {
  //TODO: extract navbar
  //TODO: hamburger menu on mobile
  return (
    <>
      <div className="navbar-container">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>

      <div className="wrapper" id="home">
        <div className="content">
          <AboutMe />
          <Experience />
          <Edcuation />
          <Skills />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
