const express = require("express");
const usuarioService = require('../services/usuario')

const router = express.Router()

router.get('/', async (req, res) => {
    let resultado = await usuarioService.get_all()
    res.send({'resposta': resultado})
})

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let resultado = await usuarioService.get_by_id(id)
    res.send({'resposta': resultado})
})

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    let resultado = await usuarioService.delete_by_id(id)
    res.send({'status': resultado})
})

router.post('/delete', async (req, res) => {
    let query = req.body
    let resultado = await usuarioService.delete_by_query(query)
    res.send({'status': resultado})
})

router.post('/', async (req, res) => {
    let usuario = req.body
    let resultado = await usuarioService.create(usuario)
    res.send({'status': resultado})
})


module.exports = router