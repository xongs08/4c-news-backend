import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './src/router'
import dotenv from 'dotenv'
dotenv.config()

const app: express.Express = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api", router)

app.listen(3000, () => console.log("Server ready on port 3000."))

export default app
