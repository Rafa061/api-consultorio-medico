const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Patologia', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'patologia',
    timestamps: false,
  });
};
