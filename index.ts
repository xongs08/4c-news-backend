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

app.get("/", (req, res) => res.send(`<!doctype><html><body><div style="display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Helvetica;"><h1>Error: Bad Route</h1><br><p>Check <a href="/api/article/example"><pre>/api/article/example</pre></a> to see a demo</p></div><body></html>`))

app.use("/", router)

const server = app.listen(port, () => console.log(`Server ready on port ${port}.`))

server.keepAliveTimeout = 120 * 1000
server.headersTimeout = 120 * 1000
