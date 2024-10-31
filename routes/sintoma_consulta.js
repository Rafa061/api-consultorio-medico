const express = require('express');
const router = express.Router();
const SintomaConsulta = require('../models');

// Obtener todos los síntomas por consulta
router.get('/', async (req, res) => {
    try {
        const sintomasConsulta = await SintomaConsulta.findAll();
        res.json(sintomasConsulta);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener síntomas por consulta',details: error.message  });
    }
});

// Crear un nuevo síntoma-consulta
router.post('/', async (req, res) => {
    try {
        const nuevoSintomaConsulta = await SintomaConsulta.create(req.body);
        res.status(201).json(nuevoSintomaConsulta);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear síntoma por consulta',details: error.message  });
    }
});

module.exports = router;
