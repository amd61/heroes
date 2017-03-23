// var hero = {
//   name: "Cat Woman"
// }
// Every hero will be called "Cat Woman" !

var Hero = function(name, favFood) {
  this.name = name;
  this.health = 100;
  this.favFood = favFood;
  this.talk = function() {
    return "My name is " + this.name + "!";
  };
  this.eat = function(food) {
    if ( food.name === this.favFood) {
      this.health += food.replenishmentValue * 1.5;
    } else {
      this.health += food.replenishmentValue;
    }
  }
}

module.exports = Hero;