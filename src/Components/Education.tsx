import './Education.css';
import education from '../education.json';

function Education() {
  return (
    <>
      <div id="education" className="section">
        <h2 className="header">Education</h2>
        {education.map((edu, index) => (
          <p className="edu" key={index}>
            <strong>{edu.school}</strong> - {edu.location}
            <span style={{ float: 'right' }}>{edu.graduation}</span>
            <br />
            <i>{edu.degree}</i>
          </p>
        ))}
      </div>
    </>
  );
}

export default Education;
