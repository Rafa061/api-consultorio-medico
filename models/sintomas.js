const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Sintomas', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'sintomas',
    timestamps: false,
  });
};
