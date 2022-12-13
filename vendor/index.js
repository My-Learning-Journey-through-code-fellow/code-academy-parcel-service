'use strict';

const eventPool = require('../eventPool');

eventPool.on('DELIVERED', thankDriver);


setInterval(() => {
  console.log('------------New Interval------------');
  generateOrder();
}, 5000);



