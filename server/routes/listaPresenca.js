const express = require("express");
const router = express.Router()
const presencaService = require('../services/presenca')

router.get('/', async (req, res) => {
    let listaPresenca = await presencaService.get_all()
    res.send({'rota': listaPresenca})
})


module.exports = router