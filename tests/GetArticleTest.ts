fetch("http://localhost:3001/api/article/example")
  .then(resp => resp.json())
  .then(data => console.log(data))
