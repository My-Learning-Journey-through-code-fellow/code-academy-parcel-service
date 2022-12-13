'use strict';

const eventPool = require('./eventPool');

module.exports = (payload) => {

  setTimeout(() => {
    console.log('Driver received', payload.order.ID);
  },700);
  setTimeout(() => {
    eventPool.emit('In Tranist', payload);
  }, 700);
  setTimeout(() => {
    eventPool.emit('Delivered', payload.orderID);
  }, 1000);
};