const { DataTypes } = require('sequelize');
const sequelize = require('../databases/config');
const Usuario = require('./Usuario');

let options = {
  paranoid: true,
  underscored: true,
  freezeTableName: true,
}

const Presenca = sequelize.define('Presenca', {}, options);

Presenca.belongsTo(Usuario, {
  foreignKey: 'id',
  onDelete: 'cascade',
  constraints: false,
  as: 'usuario'
})

module.exports = Presenca
