const express = require('express');
const router = express.Router();
const MorbilidadConsulta = require('../models');

// Obtener todas las morbilidades por consulta
router.get('/', async (req, res) => {
    try {
        const morbilidades = await MorbilidadConsulta.findAll();
        res.json(morbilidades);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener morbilidades',details: error.message  });
    }
});

// Crear una nueva morbilidad
router.post('/', async (req, res) => {
    try {
        const nuevaMorbilidad = await MorbilidadConsulta.create(req.body);
        res.status(201).json(nuevaMorbilidad);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear morbilidad',details: error.message });
    }
});

module.exports = router;

