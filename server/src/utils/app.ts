import express from 'express'
import cors from 'cors'

// initialize app
const app = express()

// middlewares
app.use(cors({
  origin: [
    "http://54.204.67.134:3000" // only production IP allowed
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));

app.use(express.json()) // body parser
app.use(express.urlencoded({ extended: false })) // url parser

export default app