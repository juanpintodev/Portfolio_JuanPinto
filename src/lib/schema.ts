import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Project {
    id: ID!
    title: String!
    description: String!
    image: String
    technologies: [String!]!
    githubUrl: String
    liveUrl: String
    createdAt: String!
  }

  type Skill {
    id: ID!
    name: String!
    category: String!
    level: Int!
  }

  type Contact {
    id: ID!
    name: String!
    email: String!
    subject: String!
    message: String!
    createdAt: String!
  }

  type Query {
    projects: [Project!]!
    skills: [Skill!]!
    project(id: ID!): Project
  }

  type Mutation {
    createContact(name: String!, email: String!, subject: String!, message: String!): Contact!
  }
`