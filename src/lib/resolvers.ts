import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

export const resolvers = {
  Query: {
    projects: () => {
      return projects
    },
    skills: () => {
      return skills
    },
    project: (_: any, { id }: { id: string }) => {
      return projects.find(project => project.id === id)
    },
  },
  Mutation: {
    createContact: async (_: any, { name, email, subject, message }: any) => {
      // Simulación de guardado
      const contact = {
        id: Date.now().toString(),
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
      }
      
      console.log('Contact saved:', contact)
      
      return contact
    },
  },
}