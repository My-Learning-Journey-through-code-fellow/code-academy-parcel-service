'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT;
const server = new Server(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  socket.onAny((event, payload) => {
    const time = new Date();
    console.log('EVENT:', { event, time, payload });
  });

  console.log('Socket connected to caps on namespace:', socket.id);

  
  socket.on('PICKUP', (payload) => {
    console.log('Order ready!', payload);
    // logger('PICKUP', payload);
    socket.broadcast.emit('PICKUP', payload);
  });

  socket.on('IN_TRANSIT', (payload) => {
    console.log('Driver in transit with order: ', payload);
    // logger('IN_TRANSIT', payload);
    socket.broadcast.emit('IN_TRANSIT', payload);
  });

  socket.on('RECEIVED', (payload) => {
    console.log('Driver delievred order: ', payload);
    // logger('RECIEVED', payload);
    socket.broadcast.emit('RECEIVED', payload);
  });

});

