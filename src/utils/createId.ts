export function generateUniqueId() {
  const timestamp = new Date().getTime()
  const random = Math.floor(Math.random() * 10000)
  const uniqueId = timestamp.toString(16) + random.toString(16)
  return uniqueId
}
