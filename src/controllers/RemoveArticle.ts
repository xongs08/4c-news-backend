import asyncHandler from 'express-async-handler'
import { db } from '../middlewares/firebase'
import { doc, deleteDoc, getDoc } from 'firebase/firestore'
import { isAuth } from '../middlewares/auth'

export const DeleteArticle = asyncHandler(async (req, res) => {
  const articleId = req.params.id
  const auth = req.params.auth

  isAuth(auth, async () => {
    const articleRef = doc(db, "articles", articleId)
    const snapshot = await getDoc(articleRef)

    if (snapshot.exists()) {
      await deleteDoc(articleRef)
      res.send("Article Deleted!").status(200)
    } else res.status(404).send("Article Not Found.")
  }, res)
})
