import "./Projects.css";
import projects from "../projects.json";

function Projects() {
  return (
    <>
      <div id="projects" className="section">
        <h2 className="header">Projects</h2>
        {projects.map((project, index) => (
          <p className="project" key={index}>
            <strong>{project.title}</strong>
            <span style={{ float: "right" }}>{project.date}</span>
            <br />
            {project.technologies.join(", ")}
            <ul>
              {project.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {(project.repoUrl || project.demoUrl) && (
              <div style={{ marginTop: "8px" }}>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginRight: "12px" }}
                  >
                    GitHub
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </p>
        ))}
      </div>
    </>
  );
}

export default Projects;
