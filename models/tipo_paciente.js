const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('TipoPaciente', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'tipo_paciente',
    timestamps: false,
  });
};
