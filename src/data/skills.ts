export interface Skill {
  id: string
  name: string
  category: string
  level: number
}

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'JavaScript', category: 'Frontend', level: 90 },
  { id: '2', name: 'TypeScript', category: 'Frontend', level: 85 },
  { id: '3', name: 'React', category: 'Frontend', level: 88 },
  { id: '4', name: 'Next.js', category: 'Frontend', level: 82 },
  { id: '5', name: 'Material-UI', category: 'Frontend', level: 85 },
  { id: '6', name: 'HTML/CSS', category: 'Frontend', level: 92 },
  { id: '7', name: 'Tailwind CSS', category: 'Frontend', level: 80 },
  
  // Backend
  { id: '8', name: 'Node.js', category: 'Backend', level: 85 },
  { id: '9', name: 'Express', category: 'Backend', level: 80 },
  { id: '10', name: 'MongoDB', category: 'Backend', level: 75 },
  { id: '11', name: 'GraphQL', category: 'Backend', level: 70 },
  { id: '12', name: 'Firebase', category: 'Backend', level: 78 },
  { id: '13', name: 'PostgreSQL', category: 'Backend', level: 65 },
  
  // Herramientas & Otros
  { id: '14', name: 'Git', category: 'Tools', level: 85 },
  { id: '15', name: 'SEO', category: 'Tools', level: 75 },
  { id: '16', name: 'Docker', category: 'Tools', level: 65 },
  { id: '17', name: 'AWS', category: 'Tools', level: 60 },
  { id: '18', name: 'Testing', category: 'Tools', level: 70 },
  { id: '19', name: 'CI/CD', category: 'Tools', level: 65 },
  { id: '20', name: 'Figma', category: 'Tools', level: 60 },
]