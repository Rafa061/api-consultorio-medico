const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Roles = sequelize.define('Roles', {
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'roles',
    timestamps: true,
  });

  return Roles;
};
