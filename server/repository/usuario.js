const usuarioModel = require('../models/Usuario')


async function get_all(){
    try{
        let usuarios = await usuarioModel.findAll()
        return usuarios
    } catch(e){
        console.log('Algo aconteceu:', e)
    }
}

async function get_by_query(filtro){
    try{
        let usuarios = await usuarioModel.findAll({ where: filtro })
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

async function delete_one(filtro){
    try{
        return await usuarioModel.destroy({ where: filtro})
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

async function create(usuario){
    try{
        return await usuarioModel.create(usuario)
    } catch(e){
        console.log('Algo aconteceu:', e)
    }
}

module.exports = {
    get_all,
    get_by_id,
    get_by_query,
    delete_one,
    delete_all,
    create
}