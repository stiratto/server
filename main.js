const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000


app.use(cors())
app.use(express.json())

app.post('/receive-code', (req, res) => {
  console.log("Received code")
})

app.get('/greeting', (req, res) => {
  res.send("Hola perro hp")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

