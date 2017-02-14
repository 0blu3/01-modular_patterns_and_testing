'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('Greet Module', function() {
  describe('#sayHello', function() {
    it('should return Hello brae', function() {
      var result = greet.sayHello('brae');
      assert.ok(result === 'Hello brae', 'not equal to Hello brae');
    });

    it('should throw a missing name error', function() {
      assert.throws(function() {
        greet.sayHello();
      }, 'error not thrown');
    });
  });

  describe('#sayBye', function() {
    it('should return see you later', function() {
      var bye = 'see you later';
      assert.ok(bye === 'see you later', 'not equal to see you later');
    });
  });
});
