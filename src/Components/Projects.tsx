import './Projects.css';
import projects from '../projects.json';

function Projects() {
  return (
    <>
      <div id="projects" className="section">
        <h2 className="header">Projects</h2>
        {projects.map((project, index) => (
          <p className="project" key={index}>
            <strong>{project.title}</strong>
            <span style={{ float: 'right' }}>{project.date}</span>
            <br />
            {project.technologies.join(', ')}
            <ul>
              {project.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </p>
        ))}
      </div>
    </>
  );
}

export default Projects;
