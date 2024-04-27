import { Router } from "express"
import { CreateArticle } from "./controllers/CreateArticle"
import { GetArticle } from "./controllers/GetArticle"
import { LoadArticles } from "./controllers/LoadArticles"
import { UpdateArticle } from "./controllers/UpdateArticle"
import { DeleteArticle } from "./controllers/RemoveArticle"

const router = Router()

router.post("/article/create", CreateArticle)
router.get("/article/:id/:auth", GetArticle)
router.get("/articles/loadall/:auth", LoadArticles)
router.post("/article/update/:id/:auth", UpdateArticle)
router.delete("/article/:id/:auth", DeleteArticle)

export default router
