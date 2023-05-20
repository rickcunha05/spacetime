import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  // origin: ['http://localhost:3030', 'url de produção'],
  origin: true,
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP SERVER RUNNING ON http://localhost:3333')
  })
