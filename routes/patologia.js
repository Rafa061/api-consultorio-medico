const express = require('express');
const router = express.Router();
const { Patologia } = require('../models');

// Obtener todas las patologías
router.get('/', async (req, res) => {
  try {
    const patologias = await Patologia.findAll();
    res.json(patologias);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener patologías', details : error.message });
  }
});

// Crear una nueva patología
router.post('/', async (req, res) => {
  try {
    const nuevaPatologia = await Patologia.create(req.body);
    res.json(nuevaPatologia);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear patología',details: error.message  });
  }
});

module.exports = router;
