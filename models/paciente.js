const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Paciente', {
    cedula: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    nom1: DataTypes.TEXT,
    nom2: DataTypes.TEXT,
    ape1: DataTypes.TEXT,
    ape2: DataTypes.TEXT,
    fecn: DataTypes.DATE,
    altura: {
      type: DataTypes.INTEGER,
      validate: { min: 1 },
    },
    peso: {
      type: DataTypes.FLOAT,
      validate: { min: 1 },
    },
    direccion: DataTypes.TEXT,
    telefono: {
      type: DataTypes.TEXT,
      unique: true,
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
    },
    sexo: {
      type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
    },
  }, {
    tableName: 'paciente',
    timestamps: false,
  });
};
