const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'storage.sqlite',
  // logging: false
});


try {
    sequelize.authenticate().then(() => {
        console.log('Banco de dados conectado!');
    });
  } catch (error) {
    console.error('Não foi possível se conectar com o banco de dados:', error);
}


module.exports = sequelize


