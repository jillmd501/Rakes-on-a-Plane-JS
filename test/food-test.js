const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const Game = require('../lib/game');

describe('Food', function() {
  context('with default attributes', function() {
    var food = new Food({});
    it('should assign an x coordinate', function() {
      assert(this.food.x);
    });
    it('should assign a y coordinate', function() {
      assert(this.y);
    });
    it('should assign a height', function(){
      assert.equal(food.options.height, 10);
    });
    it('should assign a width', function(){
      assert.equal(food.options.width, 10);
    });
  });

describe('Game switches to new position', function(){
  var food = new Food({});
  it('should have new attributes with new position', function(){
    Game.prototype.reposition_food();
    assert((food.x !== 300) && (food.y !== 100));
    assert.equal(this.food.height, 10);
    assert.equal(this.food.width, 10);
  })
  })
});
