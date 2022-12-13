'use strict';

const { pickUpInTransit, deliveryHandler } = require('./handlers');
const eventPool = require('../eventPool');

jest.mock('../eventPool.js', () => {
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
    pickUpInTransit(payload);
    expect(console.log).toHaveBeenCalledWith('Driver: recieved order: ', payload.orderId);
    expect(eventPool.emit).toHaveBeenCalledWith('IN_TRANSIT', payload);
  });

  it('delivery status is as expected', () => {
    const payload = {
      store: 'Target',
      orderId: 'test',
      cutomer: 'Trace',
      address: 'Home',
    };
    deliveryHandler(payload);
    expect(console.log).toHaveBeenCalledWith('Driver: Delivered order: ', payload.orderId);
    expect(eventPool.emit).toHaveBeenCalledWith('DELIVERED', payload);
  });
});


