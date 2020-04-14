const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('src'));

// At some point this was _sort_ of working, but now the console just says it can't find the file
//
// app.get('/src/game.js', (req, res) => {
//   res.sendFile(path.join(__dirname + '/src/game.js'))
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
