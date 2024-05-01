export const CleanTitle = (title: string) => {
  const regex = /\s+/g
  const modifiedString = title.replace(regex, "-").toLowerCase()
  return modifiedString
}
