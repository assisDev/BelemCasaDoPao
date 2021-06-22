const models = require('./models')


async function init(){
    try{
        await seedUsuario()

    } catch(e){
        console.log('Algo aconteceu:', e)
    }

    console.log('Pronto!')
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
    
    await models.Usuario.sync({ force: true })
    
    usuariosMock.forEach(async nome => {
        await models.Usuario.create(nome)
    })
}


console.log('Executando seed...')
init()
