var usuario = {
    _id: 0,
    get id() {
        return this._id++
    }
}

function getId(){
    return this.getId()
}

function getNome() {
    return this._nome
}

function setNome(nome) {
    this._nome = nome
}

function getEmail() {
    return this._email
}

function setEmail(email) {
    this._email = email
}

function getEndereco() {
    return this._endereco
}

function setEndereco(endereco) {
    this._endereco = endereco
}

module.exports = {
                getNome, setNome,
                getEmail, setEmail,
                getEndereco, setEndereco}

