import asyncHandler from 'express-async-handler'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from "../firebase"
import { CleanTitle } from '../utils/cleanTitle'
import { isAuth } from '../utils/auth'
import { getFormattedDate } from '../utils/getFormattedDate'

export const CreateArticle = asyncHandler(async (req, res) => {
  const { title, media, paragraph, author, auth } = req.body

  isAuth(auth, async () => {
    const articleRef = doc(db, 'articles', CleanTitle(title))
    const snapshot = await getDoc(articleRef)

    if (snapshot.exists()) res.send("Article Already Exists!")
    else setDoc(articleRef, {
        title: title,
        media: media,
        paragraph: paragraph,
        author: author,
        date: getFormattedDate()
      })
        .then(doc => res.send("Article Created Successfully!").json({ createdArticle: doc }).status(200))
        .catch(err => res.send(`Error Trying to Create Article: ${err}`).status(500))
  }, res)
})
