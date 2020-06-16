var express = require('express');
var socket = require('socket.io');

// app setup
var app = express();
var server = app.listen(4000, () => {
    console.log('listening to requests on port 4000');
})

// static files
app.use(express.static('public'));

// socket setup
var io = socket(server);

// listens for connection event i.e. connection to browser
// each client has its own socket
io.on('connection', socket => {
    console.log('made socket connection', socket.id);

    // listens for chat
    socket.on('chat', data => {
        // sockets is ALL sockets
        io.sockets.emit('chat', data)
    })

    socket.on('typing', data => {
        // emits to everyone apart from sender
        socket.broadcast.emit('typing', data);
    })
});

// listen for events