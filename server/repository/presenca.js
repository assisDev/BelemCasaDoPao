const presenca = require('../models/Presenca')

async function get_all(){
    let listaPresenca = await presenca.findAll()
    return listaPresenca
}

module.exports = {
    get_all
}