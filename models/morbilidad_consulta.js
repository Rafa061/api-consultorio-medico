const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('MorbilidadConsulta', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_consulta: {
      type: DataTypes.BIGINT,
      references: {
        model: 'consulta', // Nombre de la tabla en la base de datos
        key: 'id',
      },
    },
    id_patologia: {
      type: DataTypes.BIGINT,
      references: {
        model: 'patologia', // Nombre de la tabla en la base de datos
        key: 'id',
      },
    },
  }, {
    tableName: 'morbilidad_consulta',
    timestamps: false,
  });
};

