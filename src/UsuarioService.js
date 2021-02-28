/**
 * Classe que define as funcionalidades da API.
 */

var valorGerado = {
    _id: 0,
    get id() {
        return this._id++
    }
}

var _usuarios = []

function salvar(novoUsuario){
    //trata caso o usuário já exista
    if (_usuarios.some(usuario => usuario.email == novoUsuario.email)) {
        return _usuarios.filter(usuario => usuario.email == novoUsuario.email)
    }
    novoUsuario.id = valorGerado.id
    _usuarios[novoUsuario.id] = novoUsuario
    return novoUsuario
}

function remover(usuarioID){
    //verifica se o ID informado existe
    if (_usuarios.some(usuario => usuario.id === usuarioID)) {
        return delete _usuarios[usuarioID]
    }
    return 'Erro! Usuário não encontrado!'
}

function atualizarPorID(usuarioID, usuario){
    usuario.id = usuarioID
    if (_usuarios.some(objeto => objeto.id === usuarioID)) {
        _usuarios[usuarioID] = usuario
        return usuario
    }
    return 'Erro! Usuário não encontrado!'
}

function buscaPorID(usuarioID){
    if (_usuarios.some(objeto => objeto.id === usuarioID)) {
        return _usuarios[usuarioID]
    }
    return 'Erro! Usuário não encontrado!'
}

function listarTodos(){
    return _usuarios
}

module.exports = {salvar, remover, atualizarPorID, buscaPorID, listarTodos}
