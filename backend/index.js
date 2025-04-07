const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('MRG IA Plus API Online')
})

app.listen(port, () => {
  console.log(`🚀 Backend rodando em http://localhost:${port}`)
})