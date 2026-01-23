const ORIGIN = '*'

export const PORT = Number(process.env.PORT) || 5000;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb'
const MONGO_OPTIONS = {}

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

export { ORIGIN, MONGO_URI, MONGO_OPTIONS, JWT_SECRET }
