const express = require('express');
const router = express.Router();
const PatologiaSintomaRel = require('../models');

// Obtener todas las relaciones de patología-síntoma
router.get('/', async (req, res) => {
    try {
        const relaciones = await PatologiaSintomaRel.findAll();
        res.json(relaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener relaciones patología-síntoma',details: error.message  });
    }
});

// Crear una nueva relación de patología-síntoma
router.post('/', async (req, res) => {
    try {
        const nuevaRelacion = await PatologiaSintomaRel.create(req.body);
        res.status(201).json(nuevaRelacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear relación patología-síntoma',details: error.message });
    }
});

module.exports = router;
