fetch("http://localhost:3001/api/article/update/example/", { method: "DELETE" })
  .then(resp => resp.text())
  .then(data => console.log(data))
