'use strict';

const eventPool = require('../eventPool');
const { pickUpInTransit, deliveryHandler } = require('./handlers');

eventPool.on('PICKUP', driverHandler);

function driverHandler(payload) {
  setTimeout(() => {
    pickUpInTransit(payload);
  }, 1000);
  setTimeout(() => {
    deliveryHandler(payload);
  }, 1500);
}
