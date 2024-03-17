const assert = require('assert');
const { exampleFunction } = require('../src/index');

describe('Example Function', function() {
  it('should return true', function() {
    assert.strictEqual(exampleFunction(), true);
  });
});
