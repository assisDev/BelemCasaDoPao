const { DataTypes } = require('sequelize');
const sequelize = require('../databases/config')

let options = {
  paranoid: true,
  underscored: true,
  freezeTableName: true,
}

const Presenca = sequelize.define('Presenca', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING
  },
}, options);


module.exports = Presenca