import { ApolloServer } from 'apollo-server'
import { prisma } from './generated/prisma-client'
import { schema } from './schema'

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    const authorization = req.headers.authorization || ''
    return {
      prisma,
      authorization,
    }
  },
})

server.listen({ port: process.env.APOLLO_ENDPOINT_PORT! }, () =>
  console.log(`Server ready at ${process.env.APOLLO_ENDPOINT_URL!}:${process.env.APOLLO_ENDPOINT_PORT!}`),
)