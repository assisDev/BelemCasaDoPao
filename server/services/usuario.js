const usuarioRepository = require('../repository/usuario') 

async function get_all(){
    let usuarios = await usuarioRepository.get_all()

    if(!usuarios.length) return 'Sem usuario cadastrado'
    return usuarios
}

async function get_by_id(id){
    let usuario = await usuarioRepository.get_by_id(id)
    if(!usuario.length) return 'usuario nao encontrado'
    return usuario

}

async function delete_by_id(id){
    let filtro = {'id': id}
    return await usuarioRepository.delete_one(filtro)
}

async function delete_by_query(query){
    return await usuarioRepository.delete_one(query)
}

async function create(usuario){

    function verificarUsuario(){
        let naoPermitidos = [null, ''] 
        for(dado of Object.entries(usuario)){
            if(dado[1] in naoPermitidos) return false
        }
        return true
    }

    async function isNomeDisponivel(){
        let resultado = await usuarioRepository.get_by_query(usuario)
        if(!resultado.length) return true
        return false
    }

    function ajustarDados(){
        Object.entries(usuario).forEach(dado => {
            let primeiraLetra = usuario[dado[0]].charAt(0).toUpperCase() 
            let restoDaFrase = usuario[dado[0]].slice(1).toLowerCase()
            let fraseNormalizada = primeiraLetra + restoDaFrase
            usuario[dado[0]] = fraseNormalizada
        })
    }

    ajustarDados()

    if(verificarUsuario() && await isNomeDisponivel()){
        let resultado = await usuarioRepository.create(usuario)
        if(!resultado) return 'Envie todos os campos' 
        return resultado
    } else {
        return 'Usuario já cadastrado'
    }
}


module.exports = {
    get_all, 
    get_by_id,
    delete_by_id,
    delete_by_query,
    create
}