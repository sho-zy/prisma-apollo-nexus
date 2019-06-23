import { idArg, stringArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'

// @ts-ignore: Expression produces a union type that is too complex to represent.ts(2590)
export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.field('signupUser', {
      type: 'User',
      args: {
        name: stringArg({ nullable: true }),
        email: stringArg(),
      },
      resolve: (parent, { name, email }, ctx) => {
        return ctx.prisma.createUser({
          name,
          email,
        })
      },
    })
    t.field('deleteUser', {
      type: 'User',
      args: {
        id: stringArg({ nullable: false })
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deleteUser({
          id
        })
      },
    })

    t.field('createDraft', {
      type: 'Post',
      args: {
        title: stringArg(),
        content: stringArg({ nullable: true }),
        authorEmail: stringArg(),
      },
      resolve: (parent, { title, content, authorEmail }, ctx) => {
        return ctx.prisma.createPost({
          title,
          content,
          author: {
            connect: { email: authorEmail },
          },
        })
      },
    })

    t.field('deletePost', {
      type: 'Post',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.deletePost({ id })
      },
    })

    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: {
        id: idArg(),
      },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.updatePost({
          where: { id },
          data: { published: true },
        })
      },
    })
  },
})