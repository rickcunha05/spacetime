import 'dotenv/config'

import { fastify } from 'fastify'
import { memoriesRoutes } from './Routes/memories'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './Routes/auth'
import multipart from '@fastify/multipart'
import { uploadRoutes } from './Routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)
app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'spacetime',
})
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})
app.register(memoriesRoutes)
app.register(uploadRoutes)
app.register(authRoutes)
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🦁 HTTP server running on http://localhost:3333 ')
  })
