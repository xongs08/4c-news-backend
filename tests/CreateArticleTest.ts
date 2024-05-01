import dotenv from 'dotenv'
dotenv.config()

fetch("http://localhost:3001/article/create", {
  method: "POST",
  headers: { "Content-type": "application/json" },
  body: JSON.stringify({
    title: "🚨 Corinthians FIFA World Champion",
    media: ['image', "https://a.espncdn.com/photo/2020/1117/r777229_1296x729_16-9.jpg"],
    paragraph: "O Corinthians comemora, neste sábado, 11 anos da conquista do Mundial de Clubes da Fifa diante do Chelsea, da Inglaterra. Paolo Guerrero garantiu o placar de 1 a 0, para a alegria de milhares de corintianos presentes no Estádio Internacional de Yokohama, no Japão.",
    author: "Xongs",
    auth: process.env.SECRET
  })
})
  .then(resp => resp.text())
  .then(data => console.log(data))
