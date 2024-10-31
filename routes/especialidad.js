const express = require('express');
const router = express.Router();
const EspecialidadMedica = require('../models');


// Obtener todas las especialidades médicas
router.get('/', async (req, res) => {
  try {
    const especialidades = await EspecialidadMedica.findAll();
    res.json(especialidades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener especialidades médicas',details: error.message  });
  }
});

// Crear una nueva especialidad médica
router.post('/', async (req, res) => {
  try {
    const nuevaEspecialidad = await EspecialidadMedica.create(req.body);
    res.json(nuevaEspecialidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear especialidad médica',details: error.message  });
  }
});

module.exports = router;
