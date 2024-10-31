const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Consulta', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    cedula_paciente: {
      type: DataTypes.TEXT,
      references: {
        model: 'paciente', // Usa el nombre de la tabla en lugar del modelo
        key: 'cedula',
      },
    },
    id_medico: {
      type: DataTypes.BIGINT,
      references: {
        model: 'medico', // Usa el nombre de la tabla en lugar del modelo
        key: 'id',
      },
    },
    fecha: DataTypes.DATE,
    observaciones: DataTypes.TEXT,
  }, {
    tableName: 'consulta',
    timestamps: false,
  });
};
