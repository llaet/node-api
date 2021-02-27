const usuario = require('./Usuario')

var _usuarios = []

function salvar(novoUsuario){
    if (!(this._usuarios.some(objeto => objeto.id === novoUsuario.id))) {
        this._usuarios[usuario.id] = usuario
    }   
}

function remover(usuarioID){
    try {
        delete this._usuarios[usuarioID]
    } catch (error) {
        return 'Erro! Usuário não encontrado!'
    }
}

function atualizarPorID(usuarioID, dadosAtualizados){
    if (this._usuarios.some(objeto => objeto.id === novoUsuario.id)) {
        this._usuarios[usuario.id] = dadosAtualizados
    }
    return 'Erro! Usuário não encontrado!'
}

function buscaPorID(usuarioID){
    if (this._usuarios.some(objeto => objeto.id === novoUsuario.id)) {
        return this._usuarios[usuario.id]
    }
    return 'Erro! Usuário não encontrado!'
}

function listarTodos(){
    return this._usuarios
}

module.exports = {salvar, remover, atualizarPorID, buscaPorID, listarTodos}
