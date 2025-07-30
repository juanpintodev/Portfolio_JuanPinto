export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  createdAt: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level: number
}

export interface Contact {
  id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
}

export interface FormData {
  name: string
  email: string
  subject: string
  message: string
}