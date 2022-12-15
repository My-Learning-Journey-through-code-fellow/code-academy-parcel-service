'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps')
const { generateOrder, thankDriver } = require('./handlers');

const callForPickup = generateOrder(socket)

socket.on('DELIVERED', thankDriver);

setInterval(() => {
  console.log('------------New Interval------------');
  callForPickup();
}, 5000);
