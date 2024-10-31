const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('TipoPatologia', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    id_patologia: {
      type: DataTypes.BIGINT,
      references: { model: 'patologia', key: 'id' },
    },
  }, {
    tableName: 'tipo_patologia',
    timestamps: false,
  });
};
