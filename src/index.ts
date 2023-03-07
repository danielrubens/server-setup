import express, { Request, Response } from 'express'
import db from './db'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log(`app runnin on port ${PORT}`)
  db.runMigrations()
})
