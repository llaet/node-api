const express = require('express')
const app = express()
var usuarioService = require('./UsuarioService')

app.listen(process.env.PORT || 3030)

app.get('/users', (req, res, next) => {
    res.send(usuarioService.listarTodos())
})