const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000


app.use(cors())
app.use(express.json())

app.post('/receive-code', (req, res) => {
  console.log("Received code")
  const body = req.body.body
  console.log(`body: ${body}`)

  res.status(200).send("Buena esa crack")
})

app.get('/greeting', (req, res) => {
  res.send("Hola perro hp")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

