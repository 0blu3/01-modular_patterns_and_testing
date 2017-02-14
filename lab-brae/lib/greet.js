'use strict';

module.exports = exports = {};

exports.sayHello = function(name) {
  if (arguments.length === 0) throw new Error('name not provided');
  return `Hello ${name}`;
};

  exports.sayBye = function() {
  console.log('see you later');
};
