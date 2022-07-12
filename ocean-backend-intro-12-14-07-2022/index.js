const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send("Olá mundo")
})

const bts = ["Kim Namjoon", "Kim Seokjin", "Jung Hoseok", "Park Jimin", "Kim Taehyung", "Jeon Jungkook"]

app.get("/bts", function (req, res) {
    res.send(bts)
})

app.listen(3000, function () {
    console.log("Aplicação rodando em http://localhost:3000")
})