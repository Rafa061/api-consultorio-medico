const express = require('express');
const router = express.Router();
const { Usuarios } = require('../models');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios',details: error.message  });
  }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const nuevoUsuario = await Usuarios.create(req.body);
    res.json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario',details: error.message  });
  }
});

module.exports = router;
