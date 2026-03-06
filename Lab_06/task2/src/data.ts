export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: 'React Basics',
    instructor: 'John Smith',
    description: 'Learn the fundamentals of React'
  },
  {
    id: 2,
    title: 'TypeScript Fundamentals',
    instructor: 'Jane Doe',
    description: 'Master TypeScript for better code'
  },
  {
    id: 3,
    title: 'Advanced React Patterns',
    instructor: 'Bob Johnson',
    description: 'Advanced concepts in React development'
  },
  {
    id: 4,
    title: 'Node.js Essentials',
    instructor: 'Alice Williams',
    description: 'Backend development with Node.js'
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find(c => c.id === id);
}
