const { Sequelize } = require('sequelize');
const config =  require('../config/config.json')
const os = require('os')


if(process.argv[1].endsWith('seed.js')){
  setSeedEnviroment(config)
}

const sequelize = new Sequelize({
  dialect: config['dialect'],
  storage: config['storage'],
  logging: false,
  benchmark: true
});

function setSeedEnviroment(config){
  config['storage'] = 'storage.sqlite'
}

function verificarConexaoBanco(sequelize){
  try {
    sequelize.authenticate().then(() => {
        console.log('Banco de dados conectado!');
    });
  } catch (error) {
    console.error('Não foi possível se conectar com o banco de dados:', error);
  }
}

verificarConexaoBanco(sequelize)

module.exports = sequelize


