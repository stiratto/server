const express = require('express')
const app = express()
const port = 3000

app.post('/receive-code', (req, res) => {
  console.log("Received code")
})

app.get('/greeting', (req, res) => {
  res.send("Hola perro hp")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

