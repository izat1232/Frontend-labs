import UserCard from './UserCard';
import SkillList from './SkillList';
import { User, Skill } from './types';

const sampleUser: User = {
  name: 'John Doe',
  email: 'john@example.com',
  age: 25
};

const sampleSkills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Expert' },
  { id: 2, name: 'React', level: 'Intermediate' },
  { id: 3, name: 'TypeScript', level: 'Beginner' }
];

function App() {
  return (
    <div>
      <h1>Lab 5.1 - Typed Components</h1>
      <UserCard user={sampleUser} isActive={true}>
        <p>User bio goes here</p>
      </UserCard>
      <SkillList skills={sampleSkills} />
    </div>
  );
}

export default App;
