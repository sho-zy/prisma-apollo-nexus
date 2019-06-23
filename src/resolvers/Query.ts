import { idArg, stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

// @ts-ignore: Expression produces a union type that is too complex to represent.ts(2590)
export const Query = prismaObjectType({
  name: `Query`,
  definition(t) {
    t.prismaFields(['posts'])
    t.prismaFields(['users'])
    t.list.field('feed', {
      type: 'Post',
      resolve: (parent, args, ctx) => ctx.prisma.posts({
        where: { published: true },
      }),
    })
    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: stringArg({ nullable: true }),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.posts({
          where: {
            OR: [
              { title_contains: searchString },
              { content_contains: searchString },
            ],
          },
        })
      },
    })
    t.field('post', {
      type: 'Post',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.post({ id })
      },
    })
  },
})