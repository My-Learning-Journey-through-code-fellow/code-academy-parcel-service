'use strict';

// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/caps');
const Chance = require('chance');
const chance = new Chance();


//--currying
// let callForPickup = generateOrder(socket);
// callForPickup(payload)


const generateOrder = (socket) => (payload = null) => {
  payload = payload ? payload : {
    store: chance.company(),
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  console.log('Vendor: order ready!',payload);
  socket.emit('PICKUP', payload);
}

function thankDriver(payload) {
  console.log('Vendor: Thanks for delivering to: ', payload.customer);
}

module.exports = { generateOrder, thankDriver };