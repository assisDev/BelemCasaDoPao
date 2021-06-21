require('./models')

const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = 8000


app.use('/presenca', routes.listaPresenca);


app.get('/', (req, res) => {
  res.send({'belem': 'Bem-vindo!'})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando, http://localhost:${PORT}`)
})


module.exports = app