const presencaRepository = require('../repository/presenca') 

async function get_all(){
    return await presencaRepository.get_all()
}

module.exports = {
    get_all
}