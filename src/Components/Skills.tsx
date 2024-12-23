import './Skills.css';
import skills from '../skills.json';

function Skills() {
  return (
    <>
      <div id="skills" className="section">
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <p className="skill" key={index}>
            <strong>{Object.keys(skill)[0]}: </strong>
            {Object.values(skill)[0].join(', ')}
          </p>
        ))}
      </div>
    </>
  );
}

export default Skills;
