import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'
// no typescript é obrigado a passar o tipo do parametro que você está passando por exemplo app
export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const user = await prisma.user.findMany()
    return user
  })
}
