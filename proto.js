function Machine() {
  this.state = "stopped";
  this.time = 2000;
  this.timer = null;
  this.interval = null;
}
Machine.prototype.run = function () {
  this.state = "started";
  document.write("Починаю роботу...");
  document.write("Час приготування - " + this.time + " ");
  this.interval = setInterval(
    function () {
      document.write(" | ");
    }.bind(this),
    1000
  );
  this.timer = setTimeout(this.onReady.bind(this), this.time);
  document.write(this.state);
};
Machine.prototype.onReady = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Готово! ");
  self.state = "stopped";
  document.write(self.state);
};
Machine.prototype.stop = function () {
  clearInterval(this.interval);
  clearTimeout(this.timer);
  document.write("Примусове вимкнення!");
  this.state = "stopped";
  document.write(this.state);
};

// let machine = new Machine();
// machine.run();
function CofeeMachine() {
  this.drink = "вода";
  Machine.apply(this);
}

CofeeMachine.prototype = Object.create(Machine.prototype);
CofeeMachine.prototype.constructor = CofeeMachine;
CofeeMachine.prototype.run = function (drink) {
  if (drink != undefined) this.drink = drink;
  document.write("Приготування: " + this.drink + " ");
  switch (this.drink) {
    case "вода":
      this.time = 2000;
      break;
    case "латте":
      this.time = 5000;
      break;
    case "еспрессо":
      this.time = 3000;
      break;
    case "латте":
      this.time = 8000;
      break;
    case "гарячий шоколад":
      this.time = 6000;
      break;
    default:
      document.write("Такого напою немає!");
      CofeeMachine.stop();
      break;
  }
  // if (this.drink == "латте") {
  //   this.time = 5000;
  // }
  // if (this.drink == "espresso") {
  //   this.time = 3000;
  // }
  Machine.prototype.run.apply(this);
};
function Multivariate() {
  this.cook = "кип'ятіння";
  Machine.apply(this);
}

Multivariate.prototype = Object.create(Machine.prototype);
Multivariate.prototype.constructor = Multivariate;
Multivariate.prototype.run = function (cook) {
  if (cook != undefined) this.cook = cook;
  document.write("Приготування: " + this.cook + " ");
  switch (this.cook) {
    case "кип'ятіння":
      this.time = 10000;
      break;
    case "суп":
      this.time = 15000;
      break;
    case "тушкування":
      this.time = 30000;
      break;
    case "випічки":
      this.time = 17000;
      break;
    default:
      document.write("Такого немає!");
      Multivariate.stop();
      break;
  }
  Machine.prototype.run.apply(this);
};

// let cofeeMachine = new CofeeMachine();
// cofeeMachine.run();

let multivariate = new Multivariate();
multivariate.run();
//cofeeMachine.stop();
