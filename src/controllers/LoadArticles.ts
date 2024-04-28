import asyncHandler from 'express-async-handler'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const LoadArticles = asyncHandler(async (req, res) => {
  const articlesRef = collection(db, "articles")
  const snapshot = await getDocs(articlesRef)
  res.status(200).json(snapshot.docs.map(doc => doc.data()))
})
