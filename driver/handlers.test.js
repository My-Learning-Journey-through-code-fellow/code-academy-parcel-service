'use strict';

const { pickUpInTransit, deliveryHandler } = require('./handlers');
// const { io } = require('socket.io-client');
// const socket = io('http://localhost:3001/caps');
let socket = require('../socket-client');


jest.mock('../socket-client', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});

console.log = jest.fn();

describe('Driver', () => {
  it('picks up and emits in transit status as expected', () => {
    const payload = {
      store: 'Target',
      orderId: 'test',
      cutomer: 'Trace',
      address: 'Home',
    };
    pickUpInTransit(socket)(payload);
    expect(console.log).toHaveBeenCalledWith('Driver: recieved order: ', payload.orderId);
    expect(socket.emit).toHaveBeenCalledWith('IN_TRANSIT', payload);
  });

  it('delivery status is as expected', () => {
    const payload = {
      store: 'Target',
      orderId: 'test',
      cutomer: 'Trace',
      address: 'Home',
    };
    deliveryHandler(socket)(payload);
    expect(console.log).toHaveBeenCalledWith('Driver: Delivered order: ', payload.orderId);
    expect(socket.emit).toHaveBeenCalledWith('DELIVERED', payload);
  });
});


