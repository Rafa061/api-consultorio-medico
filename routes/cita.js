const express = require('express');
const router = express.Router();
const { Citas } = require('../models');

// Obtener todas las citas
router.get('/', async (req, res) => {
  try {
    const citas = await Citas.findAll();
    res.json(citas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener citas',details: error.message  });
  }
});

// Crear una nueva cita
router.post('/', async (req, res) => {
  try {
    const nuevaCita = await Citas.create(req.body);
    res.json(nuevaCita);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cita',details: error.message  });
  }
});

module.exports = router;
