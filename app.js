const express = require('express');
const sequelize = require('./config/database');

// Importar rutas
const pacientesRoutes = require('./routes/paciente');
const medicosRoutes = require('./routes/medico');
const especialidadRoutes = require('./routes/especialidad');
const sintomasRoutes = require('./routes/sintoma');
const patologiaRoutes = require('./routes/patologia');
const citasRoutes = require('./routes/cita');
const historialRoutes = require('./routes/historial_clinico');
const usuariosRoutes = require('./routes/usuario');
const rolesRoutes = require('./routes/rol');
const morbilidadRoutes = require('./routes/morbilidad_consulta');
const sintomaConsultaRoutes = require('./routes/sintoma_consulta');
const patologiaSintomaRelRoutes = require('./routes/patologia_sintoma_rel');
const tipoPatologiaRoutes = require('./routes/tipo_patologia');
const tipoPacienteRoutes = require('./routes/tipo_paciente');
const historialClinicoRoutes = require('./routes/historial_clinico');

// Inicializar Express
const app = express();
app.use(express.json()); // Para analizar los cuerpos de las solicitudes en JSON

// Rutas
app.use('/api/pacientes', pacientesRoutes);
app.use('/api/medicos', medicosRoutes);
app.use('/api/especialidad', especialidadRoutes);
app.use('/api/sintomas', sintomasRoutes);
app.use('/api/patologias', patologiaRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/morbilidad-consulta', morbilidadRoutes);
app.use('/api/sintoma-consulta', sintomaConsultaRoutes);
app.use('/api/patologia-sintoma-rel', patologiaSintomaRelRoutes);
app.use('/api/tipo-patologia', tipoPatologiaRoutes);
app.use('/api/tipo-paciente', tipoPacienteRoutes);
app.use('/api/historial-clinico', historialClinicoRoutes);

// Sincronización de la base de datos y arranque del servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
}).catch(error => {
    console.error('Error al sincronizar la base de datos:', error);
});
