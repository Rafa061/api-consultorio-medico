const { DataTypes } = require('sequelize');
const EspecialidadMedica = require('./especialidad_medica');

module.exports = (sequelize) => {
  return sequelize.define('Medico', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.TEXT,
    apellido: DataTypes.TEXT,
    especialidad: {
      type: DataTypes.BIGINT,
      references: {
        model: 'especialidad_medica', // Nombre de la tabla en la base de datos
        key: 'id',
      },
    },
    telefono: DataTypes.TEXT,
    email: DataTypes.TEXT,
  }, {
    tableName: 'medico',
    timestamps: false,
  });
};
