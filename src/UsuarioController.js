/**
 * Classe que define os endpoints da API.
 */

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
    res.send(usuarioService.remover(parseInt(req.params.id)))
})

app.put('/users/:id', (req, res, next) => {
    let usuario = {
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco}
    res.send(usuarioService.atualizarPorID(parseInt(req.params.id), usuario))
})

app.get('/users', (req, res, next) => {
    res.send(usuarioService.listarTodos())
})

app.get('/users/:id', (req, res, next) => {
    res.send(usuarioService.buscaPorID(parseInt(req.params.id)))
})