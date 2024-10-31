const express = require('express');
const { Medico } = require('../models');
const router = express.Router();

// Obtener todos los médicos
router.get('/', async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener médicos',details: error.message  });
  }
});

// Crear un nuevo médico
router.post('/', async (req, res) => {
  try {
    const medico = await Medico.create(req.body);
    res.json(medico);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear médico',details: error.message  });
  }
});

module.exports = router;
