import dotenv from 'dotenv'
dotenv.config()

// CREATE ARTICLE
fetch("http://localhost:3000/api/article/create", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    title: "🚨 URGENTE: XONGS ANUNCIADO COMO PROGRAMADOR MAIS FODA DE JAPARATINGA, SOROCABA E REGIÃO!",
    media: '',
    paragraph: "Xongs foi premiado com o TBPOBA (The Best Programmer Of Brazil Award) esta noite, realmente, um premio muito merecido, ele sabe o que faz.",
    author: "Léo Pias",
    auth: process.env.SECRET
  })
})
  .then(resp => resp.text())
  .then(data => console.log(data))

// GET SINGLE ARTICLE
fetch(`http://localhost:3000/api/article/18f1d6f7536bf6/${process.env.SECRET}`)
  .then(resp => resp.json())
  .then(data => console.log(data))

// LOAD ALL ARTICLES
fetch(`http://localhost:3000/api/articles/loadall/${process.env.SECRET}`)
  .then(resp => resp.json())
  .then(data => console.log(data))

// LOAD ALL ARTICLES
fetch(`http://localhost:3000/api/article/update/18f20bec64726ff/${process.env.SECRET}`, {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    likes: 0,
    views: 1
  })
})
  .then(resp => resp.text())
  .then(data => console.log(data))
