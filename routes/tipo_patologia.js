const express = require('express');
const router = express.Router();
const TipoPatologia = require('../models');

// Obtener todos los tipos de patologías
router.get('/', async (req, res) => {
    try {
        const tiposPatologia = await TipoPatologia.findAll();
        res.json(tiposPatologia);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener tipos de patologías',details: error.message  });
    }
});

// Crear un nuevo tipo de patología
router.post('/', async (req, res) => {
    try {
        const nuevoTipoPatologia = await TipoPatologia.create(req.body);
        res.status(201).json(nuevoTipoPatologia);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear tipo de patología',details: error.message  });
    }
});

module.exports = router;
