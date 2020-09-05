/* eslint-disable */

// WebSocket.io

/*

npm init
npm express socket.io
socket.io will be used on the client and the server as well
touch server.js app.js index.html
nodemon server.js

app.js ---------------------------------------------------------
const express = require('express')
const app = express()
path require path

module.exports = app

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get '/' res.sendFile(path.join(__dirname))

app.use(err)
res.status(err.status || 500).send({message: err.message})

server.js ---------------------------------------------------------
const port = process.env || 3000
io = require socket.io

const app = require('./app)

const server = app.listen(port, () => console.log(listening))
const socketServer = io(server)
socketserver.on('connection', (client) => console.log(client))

socketserv.on('message', function(message) { console.log(message)})
socketserv.emit(message)

index.html ---------------------------------------------------------
<html> <body> <form> <input />

mkdir assets

scripts.js ---------------------------------------------------------
const socket = io()

socket.on('message' (message) => {
  const ul = doc select ul
  innerhtml += `<li> message </li>
})



doc.querysel('form').addevent('submit', (ev) =>
  prevent default
  const input = doc.query
  socket.emit('message', {text: input.value})


)


socketutils.js ------------------------------------------------

--notes 

on client side
whne component mount (app)
const socket = window.io()
socket.on('foo', (peet) => {console.log(peet)})
socket.on('messages', (message) => {console.log(messages)})
this.props.addmessage - action creator


in db
const {socketserver} = require('../sockethelper')
message model
hook aftercreate: function(messge) {
  if(socketServer)
  socketServer().emit('message, message)
 console.log(message.get())
}

in store

sequelize logging false


app.js


*/