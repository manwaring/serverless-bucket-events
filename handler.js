'use strict';

module.exports.hello = (event, context, callback) => {
  console.log('Received bucket event', JSON.stringify(event));
  callback(null, 'Received event');
};
