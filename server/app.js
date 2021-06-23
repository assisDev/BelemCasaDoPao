const express = require('express')
const app = express()
const routes = require('./routes')
const config = require('./config/config.json')

const PORT = config['porta']

modelos = [
  require('./models/Presenca'),
  require('./models/Usuario')
]

configuracoes = [
  app.use(express.json())

]

rotasPublicas = [
  app.use('/usuarios', routes.usuario)

] 

app.get('/', (req, res) => {
  res.send({'belem': 'Bem-vindo!'})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando, http://localhost:${PORT}`)
})


module.exports = app