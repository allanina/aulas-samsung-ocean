const express = require('express')
const app = express()

//registrar que estamos usando json no body da req
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send("Olá mundo")
})

const bts = ["Kim Namjoon", "Kim Seokjin", "Jung Hoseok", "Park Jimin", "Kim Taehyung", "Jeon Jungkook"]


//ler tudo
app.get("/bts", function (req, res) {
    res.send(bts)
})

//com id

app.get("/bts/:id", function (req, res) {
    res.send("Ler pelo ID");
})

//criar 
app.post('/bts', function (req, res){
    console.log(req.body)

    //acessamos o valor enviado na req
    const item = req.body.nome;

    //insere o valor na lista
    bts.push(item)

    //exibe mensagem de sucesso
    res.send("membro criado com sucesso")
})

app.listen(3000, function () {
    console.log("Aplicação rodando em http://localhost:3000")
})