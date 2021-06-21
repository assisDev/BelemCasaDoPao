require('./models')

const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 8003


app.use('/usuarios', routes.usuario);


app.get('/', (req, res) => {
  res.send({'belem': 'Bem-vindo!'})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando, http://localhost:${PORT}`)
})


module.exports = app