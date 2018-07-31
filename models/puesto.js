'use strict';
module.exports = (sequelize, DataTypes) => {
  var Puesto = sequelize.define('Puesto', {
    nombre: DataTypes.STRING,
    entrada: DataTypes.TIME,
    salida: DataTypes.TIME,
    diasLaborales: DataTypes.ENUM('D','L','M','X','J','V','S'),
    sueldo: DataTypes.NUMERIC,
    descripcion: DataTypes.STRING
  }, {});
  Puesto.associate = function(models) {
    // associations can be defined here
  };
  return Puesto;
};