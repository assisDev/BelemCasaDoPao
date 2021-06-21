const usuarioRepository = require('../repository/usuario') 

async function get_all(){
    return await usuarioRepository.get_all()
}

async function get_by_id(id){
    return await usuarioRepository.get_by_id(id)
}

module.exports = {
    get_all, 
    get_by_id
}