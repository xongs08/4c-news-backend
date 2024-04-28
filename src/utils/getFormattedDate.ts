export function getFormattedDate() {
  const currentDate = new Date()
  
  const day = currentDate.getDate().toString().padStart(2, '0')
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const year = currentDate.getFullYear()

  const hours = currentDate.getHours().toString().padStart(2, '0')
  const minutes = currentDate.getMinutes().toString().padStart(2, '0')
  
  const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}`

  return formattedDate
}
