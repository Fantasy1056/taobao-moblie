const express = require('express')
const connection = require('./db/mysql')
const app = express()

app.get('/', (req, res) => {
  res.send({
    code: 200,
    id: 1
  })
})

app.listen(80, () => {
  console.log('server is active on localhost:80')
})
