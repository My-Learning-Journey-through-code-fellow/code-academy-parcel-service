'use strict';

const eventPool = require('../eventPool');
const { generateOrder, thankDriver } = require('./handlers');

eventPool.on('DELIVERED', thankDriver);

setInterval(() => {
  console.log('------------New Interval------------');
  generateOrder();
}, 5000);
