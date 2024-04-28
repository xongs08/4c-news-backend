import express from "express"

export const isAuth = (authString: string, callback: () => void, response: express.Response<any, Record<string, any>>) => {
  if (authString === process.env.SECRET) callback()
  else response.send("You're not allowed to do this.").status(403)
}
