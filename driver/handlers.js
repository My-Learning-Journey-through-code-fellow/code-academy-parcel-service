'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');



const pickUpInTransit  = (socket) => (payload) => {
  console.log('Driver: recieved order: ', payload.orderId);
  socket.emit('IN_TRANSIT', payload);
};

const deliveryHandler = (socket) => (payload) => {
  console.log('Driver: Delivered order: ', payload.orderId);
  socket.emit('DELIVERED', payload);
};

module.exports = { pickUpInTransit, deliveryHandler };
