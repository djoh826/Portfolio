import experience from '../experience.json';
import './Experience.css';
function Experience() {
  //TODO: ul should animate downwards
  //TODO: fix bulleted list
  //TODO: add photos in json for experience + education
  //TODO: create cards for projects?

  return (
    <>
      <div id="experience" className="section">
        <h2 className="header">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <p>
              <strong>
                {exp.title} | {exp.company}
              </strong>
              <span style={{ float: 'right' }}>{exp.date}</span>
            </p>

            <ul>
              {exp.bulletPoints.map((point, index) => (
                <li
                  style={{ textAlign: 'left', marginBottom: '0.25rem' }}
                  key={index}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
