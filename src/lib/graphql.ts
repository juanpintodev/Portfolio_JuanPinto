import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { req }
  },
})

export const startServer = apolloServer.start()