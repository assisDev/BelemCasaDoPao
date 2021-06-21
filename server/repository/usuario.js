const usuarioModel = require('../models/Usuario')

async function get_all(){
    try{
        let usuarios = await usuarioModel.findAll()
        return usuarios
    } catch(e){
        console.log('Algo aconteceu:', e)
    }
}

async function get_by_id(id){
    try{
        let usuario = await usuarioModel.findAll({ where: { 'id': id }})
        return usuario
    } catch(e){
        console.log('Algo aconteceu:', e)
    }
}

async function delete_by_id(id){
    try{
        await usuarioModel.destroy({ where: { id: id }})
    } catch(e){
        console.log('Algo aconteceu:', e)
    }
}

async function delete_all(){
    try{
        await usuarioModel.destroy()
    } catch(e){
        console.log('Algo aconteceu:', e)
    }
}

module.exports = {
    get_all,
    get_by_id,
    delete_by_id,
    delete_all
}