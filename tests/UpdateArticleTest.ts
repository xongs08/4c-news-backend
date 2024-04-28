fetch("http://localhost:3001/api//article/update/example/", {
  method: "PUT",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    likes: 0,
    views: 0
  })
})
  .then(resp => resp.text())
  .then(data => console.log(data))
