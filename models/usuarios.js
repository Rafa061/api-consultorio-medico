const { DataTypes } = require('sequelize');
const Roles = require('./roles');

module.exports = (sequelize) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre_usuario: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    contrasena: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    id_rol: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Roles', // Cambia esto para que sea una cadena
        key: 'id',
      },
    },
  }, {
    tableName: 'usuarios',
    timestamps: false,
  });

  Usuarios.belongsTo(Roles(sequelize), { foreignKey: 'id_rol' });


  return Usuarios;
};


