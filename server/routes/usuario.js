const express = require("express");
const usuarioService = require('../services/usuario')

const router = express.Router()

router.get('/', async (req, res) => {
    let usuarios = await usuarioService.get_all()
    res.send({'resposta': usuarios})
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let usuario = await usuarioService.get_by_id(id)
    res.send({'resposta': usuario})
})


module.exports = router