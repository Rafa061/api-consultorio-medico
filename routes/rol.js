const express = require('express');
const router = express.Router();
const { Roles } = require('../models');

// Obtener todos los roles
router.get('/', async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener roles',details: error.message  });
  }
});

// Crear un nuevo rol
router.post('/', async (req, res) => {
  try {
    const nuevoRol = await Roles.create(req.body);
    res.json(nuevoRol);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear rol',details: error.message  });
  }
});

module.exports = router;
