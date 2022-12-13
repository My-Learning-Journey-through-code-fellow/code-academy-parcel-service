'use strict';

const { generateOrder, thankDriver } = require('./handlers');
const eventPool = require('../eventPool');

jest.mock('../eventPool.js', () => {
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
    generateOrder(payload);
    expect(console.log).toHaveBeenCalledWith('Vendor: order ready!');
    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', payload);
  });
  it('thanks the driver', () => {
    thankDriver({ customer: 'Trace' });
    expect(console.log).toHaveBeenCalledWith('Vendor: Thanks for delivering to: ', 'Trace');
  });
});
