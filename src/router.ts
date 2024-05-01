import { Router } from "express"
import { CreateArticle } from "./controllers/CreateArticle"
import { GetArticle } from "./controllers/GetArticle"
import { LoadArticles } from "./controllers/LoadArticles"
import { UpdateArticle } from "./controllers/UpdateArticle"
import { DeleteArticle } from "./controllers/RemoveArticle"
import { Authorize } from "./Authorize"

const router = Router()

router.get("/", (req, res) => res.send(`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Helvetica;"><h1>Error: Bad Route</h1><br><p>Check <a href="/article/example"><pre>/article/example</pre></a> to see a demo</p></div>`))

router.post("/article/create", CreateArticle)

router.get("/article/:id/:auth", GetArticle)
router.get("/articles/loadall/:auth", LoadArticles)

router.get("/admin/authorize/:auth", Authorize)

router.put("/article/update/:id/:auth", UpdateArticle)

router.delete("/article/:id/:auth", DeleteArticle)

export default router
