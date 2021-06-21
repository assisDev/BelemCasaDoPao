const models = require('./models')


async function init(){
    try{
        await seedPresenca()

    } catch(e){
        console.log('Algo aconteceu:', e)
    }

    console.log('Pronto!')
}


async function seedPresenca(){
    let nomes = [
        {
            'nome': 'Matheus',
            'Sobrenome': 'Assis'
        },
        {
            'nome': 'Maria',
            'Sobrenome': 'Lurdes'
        },
        {
            'nome': 'Marcelo',
            'Sobrenome': 'Assis'
        }
    ]
    
    await models.Presenca.sync({ force: true })
    
    nomes.forEach(async nome => {
        await models.Presenca.create(nome)
    })
}


console.log('Executando seed...')
init()
