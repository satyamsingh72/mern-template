import dotenv from 'dotenv'
dotenv.config()

import app from './utils/app' // (server)
import mongo from './utils/mongo' // (database)
import { PORT } from './constants/index'
import authRoutes from './routes/auth'

const bootstrap = async () => {
  await mongo.connect()

  app.get('/', (req, res) => {
    res.status(200).send('Hello, world!')
  })

  app.get('/healthz', (req, res) => {
    res.status(204).end()
  })

  app.use('/auth', authRoutes)
  // add rest of routes here...

  // IMPORTANT: Bind to 0.0.0.0 so it is accessible outside Docker
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
