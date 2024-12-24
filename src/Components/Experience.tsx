import { useState } from 'react';
import experience from '../experience.json';
import './Experience.css';
function Experience() {
  const [visibleSections, setVisibleSections] = useState<{
    [key: number]: boolean;
  }>({});
  //TODO: ul should animate downwards
  //TODO: fix bulleted list
  //TODO: add photos in json for experience + education
  //TODO: create cards for projects?

  const handleClick = (index: number) => {
    setVisibleSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <>
      <div id="experience" className="section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <p className="exp hoverable" onClick={() => handleClick(index)}>
              <strong>
                {exp.title} | {exp.company} <span className="arrow">&gt;</span>
              </strong>
              <span style={{ float: 'right' }}>{exp.date}</span>
            </p>
            {visibleSections[index] && (
              <ul>
                {exp.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
