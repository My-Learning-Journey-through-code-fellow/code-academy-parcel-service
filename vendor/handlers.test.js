'use strict';

const { generateOrder, thankDriver } = require('./handlers');
let socket = require('../socket-client');

jest.mock('../socket-client', () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Vendor', () => {
  it('emits order as expected', () => {
    const payload = {
      store: 'Target',
      orderId: 'test',
      customer: 'Trace',
      address: 'home',
    }
    generateOrder(socket)(payload);
    expect(console.log).toHaveBeenCalledWith('Vendor: order ready!', payload);
    expect(socket.emit).toHaveBeenCalledWith('PICKUP', payload);
  });
  it('thanks the driver', () => {
    thankDriver({ customer: 'Trace' });
    expect(console.log).toHaveBeenCalledWith('Vendor: Thanks for delivering to: ', 'Trace');
  });
});
