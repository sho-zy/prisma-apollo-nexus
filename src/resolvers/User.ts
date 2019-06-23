import { prismaObjectType } from 'nexus-prisma'

// @ts-ignore: Expression produces a union type that is too complex to represent.ts(2590)
export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields([
      'id',
      'name',
      'email',
      'password',
      {
        name: 'posts',
        args: [], // remove the arguments from the `posts` field of the `User` type in the Prisma schema
      },
    ])
  },
})