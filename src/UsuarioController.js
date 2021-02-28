const express = require('express')
const app = express()
var usuarioService = require('./UsuarioService')

app.use(express.json())
app.listen(process.env.PORT || 3030)

app.post('/users', (req, res, next) => {
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco}

    usuario = usuarioService.salvar(usuario)
    res.send(usuario)
})

app.delete('/users/:id', (req, res, next) => {

})

app.put('/users/:id', (req, res, next) => {

})

app.get('/users', (req, res, next) => {
    res.send(usuarioService.listarTodos())
})