const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('EspecialidadMedica', {
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'especialidad_medica',
    timestamps: false,
  });
};
