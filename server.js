const express = require('express') 
const app = express()
// const cors = require('cors')
// app.use(cors())
const server = require('http').Server(app)
const { v4: uuidV4 } = require('uuid')
const io = require('socket.io')(server)

app.set('view engine','ejs');
app.use(express.static('public'));
   
app.get('/', (req, res) => {
    res.render(`/${uuidV4()}`)
})
//URL
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
  })

server.listen(3030);