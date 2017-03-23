var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe("Hero", function() {

  var testHero;
  var testFood;
  var testChips;

  beforeEach(function() {
    testHero = new Hero("Cat Woman", "chips");
    testFood = new Food("apple", 20);
    testChips = new Food("chips", 50);
  })

  it("has a name", function() {
    assert.equal("Cat Woman", testHero.name);
  });

  it("has health", function() {
    assert.equal(100, testHero.health);
  });

  it("has a favourite food", function() {
    assert.equal("chips", testHero.favFood);
  });

  it("can talk saying their name", function() {
    assert.equal("My name is Cat Woman!", testHero.talk() );
  });

  it("should be able to eat food, and be healed", function() {
    testHero.eat(testFood);
    assert.equal(120, testHero.health);
  })

  it("should be healed more by fav food", function() {
    testHero.eat(testChips);
    assert.equal( 175, testHero.health)
  })

});