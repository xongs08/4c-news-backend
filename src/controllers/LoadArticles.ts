import asyncHandler from 'express-async-handler'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { isAuth } from '../utils/auth'

export const LoadArticles = asyncHandler(async (req, res) => {
  const auth = req.params.auth

  isAuth(auth, async () => {
    const articlesRef = collection(db, "articles")
    const snapshot = await getDocs(articlesRef)
    res.status(200).json(snapshot.docs.map(doc => doc.data()))
  }, res)
})
