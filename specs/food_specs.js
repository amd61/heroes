var assert = require('assert');
var Food = require('../food');

describe("Food", function() {

  var testFood;

  beforeEach(function() {
    testFood = new Food("chocolate", 15);
  })

  it("should have a name", function() {
    assert.equal("chocolate", testFood.name);
  });

  it("should have a replenishment value", function() {
    assert.equal(15, testFood.replenishmentValue);
  });

});