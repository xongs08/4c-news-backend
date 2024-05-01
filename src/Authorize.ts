import asyncHandler from 'express-async-handler'
import { isAuth } from './utils/auth'

export const Authorize = asyncHandler(async (req, res) => {
  const auth = req.params.auth

  isAuth(auth, () => {
    res.send("Authorized!").status(200)
  }, res)
})
