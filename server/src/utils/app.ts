import express from 'express'
import cors from 'cors'
import { ORIGIN } from '../constants/index'

// initialize app
const app = express()

// middlewares
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://54.204.67.134:3000"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));
app.use(express.json()) // body parser
app.use(express.urlencoded({ extended: false })) // url parser

export default app
