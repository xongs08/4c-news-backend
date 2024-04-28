import asyncHandler from 'express-async-handler'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { isAuth } from '../utils/auth'

export const UpdateArticle = asyncHandler(async (req, res) => {
  const articleId = req.params.id
  const auth = req.params.auth
  const updates = req.body

  isAuth(auth, async () => {
    const articleRef = doc(db, "articles", articleId)
    const snapshot = await getDoc(articleRef)

    if (snapshot.exists()) {
      await setDoc(articleRef, updates, { merge: true })
      res.send("Article updated!").status(200)
    } else res.status(404).send("Article Not Found.")
  }, res)
})
