'use strict';
module.exports = (sequelize, DataTypes) => {
  var Empresa = sequelize.define('Empresa', {
    nombre: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    area: DataTypes.STRING,
    web: DataTypes.STRING
  }, {});
  Empresa.associate = function(models) {
    // associations can be defined here
  };
  return Empresa;
};