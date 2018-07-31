'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comentario = sequelize.define('Comentario', {
    valoracion: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    fechaInicio: DataTypes.DATEONLY,
    fechaFin: DataTypes.DATEONLY
  }, {});
  Comentario.associate = function(models) {
    // associations can be defined here
  };
  return Comentario;
};