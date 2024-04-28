import asyncHandler from 'express-async-handler'
import { doc, setDoc } from 'firebase/firestore'
import { db } from "../firebase"
import { generateUniqueId } from '../utils/createId'
import { isAuth } from '../utils/auth'
import { getFormattedDate } from '../utils/getFormattedDate'

export const CreateArticle = asyncHandler(async (req, res) => {
  const { title, media, paragraph, author, auth, date } = req.body

  isAuth(auth, async () => {
    const articleRef = doc(db, 'articles', generateUniqueId())
    
    if (date !== '') setDoc(articleRef, {
      title: title,
      media: media,
      paragraph: paragraph,
      author: author,
      likes: 0,
      views: 0,
      date: date
    })
      .then(doc => res.send("Article Created Successfullty!").json({ createdArticle: doc }).status(200))
      .catch(err => res.send(`Error Trying to Create Article: ${err}`).status(500))
    else setDoc(articleRef, {
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
