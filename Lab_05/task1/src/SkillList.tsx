import { Skill } from './types';

interface SkillListProps {
  skills: Skill[];
}

function SkillList({ skills }: SkillListProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'green';
      case 'Intermediate': return 'orange';
      case 'Expert': return 'red';
      default: return 'black';
    }
  };

  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.id}>
          {skill.name} - 
          <span style={{ color: getLevelColor(skill.level) }}>
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default SkillList;
