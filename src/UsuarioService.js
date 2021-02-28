var valorGerado = {
    _id: 0,
    get id() {
        return this._id++
    }
}

var _usuarios = []

function salvar(novoUsuario){
    novoUsuario.id = valorGerado.id
    _usuarios[novoUsuario.id] = novoUsuario
    return novoUsuario
}

function listarTodos(){
    return _usuarios
}

module.exports = {salvar, remover, atualizarPorID, buscaPorID, listarTodos}
