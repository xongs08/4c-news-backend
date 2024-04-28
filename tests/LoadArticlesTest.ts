fetch("http://localhost:3001/api/article/loadall")
  .then(resp => resp.json())
  .then(data => console.log(data))
