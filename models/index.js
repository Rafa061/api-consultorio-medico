const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Importar modelos
const Paciente = require('./paciente')(sequelize);
const Medico = require('./medico')(sequelize);
const EspecialidadMedica = require('./especialidad_medica')(sequelize);
const Sintomas = require('./sintomas')(sequelize);
const Patologia = require('./patologias')(sequelize);
const Citas = require('./citas')(sequelize);
const HistorialClinico = require('./historial_clinico')(sequelize);
const Roles = require('./roles')(sequelize);
const Usuarios = require('./usuarios')(sequelize);
const TipoPaciente = require('./tipo_paciente')(sequelize);
const TipoPatologia = require('./tipo_patologia')(sequelize);
const PatologiaSintomaRel = require('./patologia_sintoma_rel')(sequelize);
const MorbilidadConsulta = require('./morbilidad_consulta')(sequelize);
const SintomaConsulta = require('./sintoma_consulta')(sequelize);

// Asociaciones
// Relaciones de Paciente
Paciente.hasMany(Citas, { foreignKey: 'id_paciente' });
Paciente.hasMany(HistorialClinico, { foreignKey: 'id_paciente' });
Paciente.belongsTo(TipoPaciente, { foreignKey: 'tipo' });

// Relaciones de Medico
Medico.hasMany(Citas, { foreignKey: 'id_medico' });
Medico.hasMany(HistorialClinico, { foreignKey: 'id_medico' });

// Relaciones de Rol y Usuario
Roles.hasMany(Usuarios, { foreignKey: 'id_rol' });
Usuarios.belongsTo(Roles, { foreignKey: 'id_rol' });

// Relaciones de Patología y Síntomas
Patologia.belongsToMany(Sintomas, {
  through: PatologiaSintomaRel,
  foreignKey: 'id_patologia',
});
Sintomas.belongsToMany(Patologia, {
  through: PatologiaSintomaRel,
  foreignKey: 'id_sintoma',
});

// Relaciones de Citas
Citas.belongsTo(Paciente, { foreignKey: 'id_paciente' });
Citas.belongsTo(Medico, { foreignKey: 'id_medico' });
Citas.hasMany(MorbilidadConsulta, { foreignKey: 'id_consulta' });
Citas.hasMany(SintomaConsulta, { foreignKey: 'id_consulta' });

// Relaciones de Patología y Tipo de Patología
Patologia.belongsToMany(TipoPatologia, {
  through: 'tipo_patologia',
  foreignKey: 'id_patologia',
});
TipoPatologia.belongsToMany(Patologia, {
  through: 'tipo_patologia',
  foreignKey: 'id_tipo',
});

// Exportar todos los modelos
module.exports = {
  Paciente,
  Medico,
  EspecialidadMedica,
  Sintomas,
  Patologia,
  Citas,
  HistorialClinico,
  Roles,
  Usuarios,
  TipoPaciente,
  TipoPatologia,
  PatologiaSintomaRel,
  MorbilidadConsulta,
  SintomaConsulta,
  sequelize, // Para poder sincronizar la base de datos
};
