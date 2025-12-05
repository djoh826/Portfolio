import './Skills.css';
import skills from '../skills.json';

function Skills() {
  type SkillItem = {
    Skill: string;
    IconId: string;
    CustomLink?: boolean;
  };

  type SkillCategory = Record<string, SkillItem[]>;

  // FIX: cast through unknown
  const typedSkills = skills as unknown as SkillCategory[];

  return (
    <div id="skills" className="section">
      <h1 className="header" style={{ marginBottom: '-0.5rem' }}>
        Skills
      </h1>

      {typedSkills.map((categoryObj, index) => {
        const categoryName = Object.keys(categoryObj)[0];
        const items = categoryObj[categoryName];

        return (
          <div key={index} className="skill-category">
            <h3>{categoryName}</h3>
            <div className="skill-list">
              {items.map((skill, i) => (
                <div key={i} className="skill">
                  <img
                    src={
                      skill.CustomLink
                        ? skill.IconId
                        : `https://skillicons.dev/icons?i=${skill.IconId}&theme=dark`
                    }
                    alt={skill.Skill}
                    className="skill-icon"
                    width="50px"
                    height="50px"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
