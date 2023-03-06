import express, { Request, Response } from 'express'

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})