'use strict';

const eventPool = require('../eventPool');

function pickUpInTransit(payload) {
  console.log('Driver: recieved order: ', payload.orderId);
  eventPool.emit('IN_TRANSIT', payload);
}

function deliveryHandler(payload) {
  console.log('Driver: Delivered order: ', payload.orderId);
  eventPool.emit('DELIVERED', payload);
}

module.exports = { pickUpInTransit, deliveryHandler };
