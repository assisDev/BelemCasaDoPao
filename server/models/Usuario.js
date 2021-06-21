const { DataTypes } = require('sequelize');
const sequelize = require('../databases/config')

let options = {
  paranoid: true,
  underscored: true,
  freezeTableName: true,
}

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
  },
}, options);


module.exports = Usuario