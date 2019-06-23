import { prismaObjectType } from 'nexus-prisma'

// @ts-ignore: Expression produces a union type that is too complex to represent.ts(2590)
export const Post = prismaObjectType({
  name: 'Post',
  definition(t) {
    t.prismaFields(['*'])
  },
})