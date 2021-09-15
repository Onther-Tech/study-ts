function CoffeeMachine(beans) {
  this.beans = beans;

  //Instance member level
  //   this.makeCoffe = (shots) => {
  //     console.log("making...");
  //   };
}

//Prototype member level
CoffeeMachine.prototype.makeCoffee = () => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
latteMachine.makeCoffee();
