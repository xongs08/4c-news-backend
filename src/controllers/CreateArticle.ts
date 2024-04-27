import asyncHandler from 'express-async-handler'
import { isAuth } from '../middlewares/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from "../middlewares/firebase"
import { generateUniqueId } from '../middlewares/createId'
import { getFormattedDate } from '../middlewares/getFormattedDate'

export const CreateArticle = asyncHandler(async (req, res) => {
  const { title, media, paragraph, author, auth } = req.body

  isAuth(auth, () => {
    const articleRef = doc(db, 'articles', generateUniqueId())
    setDoc(articleRef, {
      title: title,
      media: media,
      paragraph: paragraph,
      author: author,
      date: getFormattedDate()
    })
      .then(doc => res.send("Article Created Successfullty!").json({ createdArticle: doc }).status(200))
      .catch(err => res.send(`Error Trying to Create Article: ${err}`).status(500))
  }, res)
})
