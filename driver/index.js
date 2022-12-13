'use strict';

const eventPool = require('../eventPool');
const { pickUpInTransit, deliveryHandler } = require('./handlers');

eventPool.on('PICKUP', driverHandler);

function driverHandler(payload) {
  setTimeout(() => {
    console.log('Driver: Picked up order: ', payload.order.Id);
    eventPool.emit('IN_TRANSIT', payload);
  }, 1000);

  setTimeout(() => {
    console.log('Driver: order delivered: ', payload.orderID);
    eventPool.emit('DELIVERED', payload);
  }, 2000);

}