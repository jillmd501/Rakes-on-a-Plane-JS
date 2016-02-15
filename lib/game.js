const Node = require('../lib/node');
const Snake = require('../lib/snake')

function Game(canvas, context, snake, food){
    this.canvas = canvas;
    this.context = context;
    this.snake = snake;
    this.food = food;
    this.rakes = []
    this.context = canvas.getContext('2d');
    this.possibleLocations = Array(10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,
          170,180,190,200,210,220,230,240,250,260,270,280,290,300,
          310,320,330,340,350,360,370,380,390,400,410,420,430,440,
          450,460,470,480)
  };

Game.prototype.eatFace = function () {
  if (this.snake.x === this.food.x
  && this.snake.y === this.food.y){
    this.reposition_food();
    this.grow();
    this.snake.nextSnake = new Snake({x: this.food.y - 20, y: this.snake.x - 20,
                                      width: this.snake.width, height: this.snake.height,
                                      time: this.snake.time, nextSnake: null}, this.context);
    // this.rakes.push(this.snake.head)
    // this.rakes.push(this.snake.head.nextNode)
  }
}
  this.food.x = number1
  this.food.y = number2
}

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

Game.prototype.draw = function () {
  this.rakes.push([this.snake.x, this.snake.y])
  this.rakes.forEach (function(rake) {
    this.context.fillStyle="#000000";
    this.context.fillRect(rake[0], rake[1], 10, 10);
    this.context.clearRect(this.rakes[this.rakes.length - 1], this.rakes[this.rakes.length - 1], canvas.width, canvas.height);
    // this.rakes.pop()
  }.bind(this))
}

// Game.prototype.draw = function () {
//   this.context.fillStyle="#000000";
//   this.context.fillRect(this.grow.x, this.grow.y, 10, 10);
// }

Game.prototype.grow = function () {
  var current = this.snake
  while(current.nextSnake != null) {
    current = current.nextSnake
  }
  current.nextSnake = new Snake ({x: current.x , y: current.y, time: current.time, nextSnake: null}, this.context)
  console.log(this.snake)
  console.log(this.food)
  this.rakes.push(current.nextSnake.x)
  this.rakes.push(current.nextSnake.y)
  this.context.fillStyle="#000000";
  this.context.fillRect(current.nextSnake.x, current.nextSnake.y, 10, 10);



  // this.rakes.push([this.x, this.y, this.width, this.height]);
  // console.log(this.rakes); console.log(this.snake.head); console.log(this.snake.head.nextNode)
}

module.exports = Game;
