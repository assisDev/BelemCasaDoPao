const Usuario = require('../models/Usuario') 
const Presenca = require('../models/Presenca') 



async function init(){
    try{
        console.log('Executando seed...')
        await seedUsuario()
        await seedPresenca()
        console.log('Pronto!')
    } catch(e){
        console.log('Algo aconteceu:', e)
    }

}


async function seedUsuario(){
    let usuariosMock = [
        {
            'nome': 'Matheus',
            'sobrenome': 'Assis'
        },
        {
            'nome': 'Maria',
            'sobrenome': 'Lurdes'
        },
        {
            'nome': 'Marcelo',
            'sobrenome': 'Assis'
        }
    ]
    
    await Usuario.sync({ force: true })
    await Usuario.bulkCreate(usuariosMock)
}

async function seedPresenca(){
    let usuarios = await Usuario.findAll()
    let dados = []
    usuarios.forEach(usuario => {
        let mock = {
            usuario,
            data: Date.now()
        }
        dados.push(mock)
    })
    await Presenca.sync({ force: true })
    await Presenca.bulkCreate(dados)
    let novoDado = ({usuario: usuarios[0], data: Date.now()})
    await Presenca.create(novoDado)
}


init()
