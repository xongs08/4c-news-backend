import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './src/router'
import dotenv from 'dotenv'
dotenv.config()

const app: express.Express = express()

const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())

app.use("/api", router)

const server = app.listen(port, () => console.log(`Server ready on port ${port}.`))

server.keepAliveTimeout = 120 * 1000
server.headersTimeout = 120 * 1000

export default app
