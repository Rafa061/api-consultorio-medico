const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return  sequelize.define('Citas', {
  id_paciente: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  id_medico: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'citas',
  timestamps: false,
});

};
