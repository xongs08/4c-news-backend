import asyncHandler from 'express-async-handler'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { isAuth } from '../utils/auth'

export const GetArticle = asyncHandler(async (req, res) => {
  const auth = req.params.auth
  const articleId = req.params.id

  isAuth(auth, async () => {
    const articleRef = doc(db, "articles", articleId)
    const snapshot = await getDoc(articleRef)

    if (snapshot.exists()) res.json({ article: snapshot.data() }).status(200)
    else res.status(404).json({ article: "Not Found" })
  }, res)
})
