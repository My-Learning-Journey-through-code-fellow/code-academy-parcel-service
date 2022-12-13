'use strict';

const date = new Date();

function pickup(payload) {
  setTimeout(() => {
    let eventLog = {
      event: 'Pickup',
      time: date.toGMTString(),
      payload: payload,
    };
    console.log('Event log', eventLog);
  }, 500);
}

function inTransit(payload) {
  setTimeout(() => {
    let eventLog = {
      event: 'In Transit',
      time: date.toGMTString(),
      payload: payload,
    };
    console.log('Event log', eventLog);
  }, 700);
}

function delivered(payload) {
  setTimeout(() => {
    let eventLog = {
      event: 'delivered',
      time: date.toGMTString(),
      payload: payload,
    };
    console.log('Event log', eventLog);
  }, 1000);
}

module.exports = { pickup, inTransit, delivered };
