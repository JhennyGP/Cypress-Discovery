const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message: 'Hello Jhennyzinha'})
})

app.get('/avengers',function(req, res){
    var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Robers']
    return res.json({data: avengers})
})

app.get('/cnh', function (req, res){
    const idade = req.query.idade

    var idadeNum = parseInt(idade)
    if(!idade){
        return res.json({message: "Idade é um campo obrigatório."})
    }

    if(idadeNum >= 18){
        return res.json({message: 'Ok, você pode tirar sua CNH.'})
    } else if (idadeNum > 4){
        return res.json({message: 'Você é menor de idade, sugiro andar de bike.'})
    } else{
        return res.json({message: 'Você ainda é um nenê'})
    }
})

app.listen(3000)