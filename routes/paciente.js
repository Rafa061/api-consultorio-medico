const express = require('express');
const router = express.Router();
const { Paciente } = require('../models');

// Obtener todos los pacientes
router.get('/', async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener pacientes', details: error.message });
  }
});

// Crear un nuevo paciente
router.post('/', async (req, res) => {
  try {
    // Buscar si ya existe un paciente con la misma cédula
    const { cedula } = req.body;
    const pacienteExistente = await Paciente.findOne({ where: { cedula } });

    if (pacienteExistente) {
      return res.status(400).json({ error: 'El paciente ya existe' });
    }

    // Crear el nuevo paciente si no existe
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente); 
  } catch (error) {
    console.error(error); // Imprimir el error completo en la consola
    res.status(500).json({ error: 'Error al crear paciente', details: error.message }); // Puedes incluir detalles del error
  }
});


// Eliminar un paciente por cédula
router.delete('/:cedula', async (req, res) => {
  const { cedula } = req.params;
  try {
    const paciente = await Paciente.findByPk(cedula);

    if (!paciente) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    await paciente.destroy();
    res.json({ message: 'Paciente eliminado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar paciente', details: error.message });
  }
});

// Actualizar un paciente por cédula
router.put('/:cedula', async (req, res) => {
  const { cedula } = req.params;
  try {
    const paciente = await Paciente.findByPk(cedula);

    if (!paciente) {
      return res.status(404).json({ error: 'Paciente no encontrado' });
    }

    // Actualizar datos del paciente
    await paciente.update(req.body);
    res.json({ message: 'Paciente actualizado exitosamente', paciente });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar paciente', details: error.message });
  }
});

module.exports = router;

