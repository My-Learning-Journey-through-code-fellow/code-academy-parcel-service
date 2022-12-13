'use strict';

const  { generateOrder, thankDriver };
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
      store: '1-206-flowers',
      orderId: 'test123',
      customer: 'Trace',
      address: 'home',
    }
    generateOrder(payload);
    expect(console.log).toHaveBeenCalledWith('Vendor: order ready for pickup');
    expect(eventPool.emit).toHaveBeenCalledWith('PICKUP', payload);
  });
  it('thanks the driver', () => {
    
  });
})