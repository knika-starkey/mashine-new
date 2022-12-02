class Machine {
  constructor() {
    this.state = "stopped";
    this.time = 2000;
    this.timer = null;
    this.interval = null;
  }
  run() {
    this.state = "started";
    document.write("Починаю роботу...");
    document.write("Час приготування - " + this.time + " ");
    this.interval = setInterval(
      function () {
        document.write(" | ");
      }.bind(this),
      1000
    );
    this.timer = setTimeout(this.onReady, this.time);
    document.write(this.state);
  }
  onReady = () => {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Готово! ");
    this.state = "stopped";
    document.write(this.state);
  };
  stop() {
    clearInterval(this.interval);
    clearTimeout(this.timer);
    document.write("Примусове вимкнення!");
    this.state = "stopped";
    document.write(this.state);
  }
}

class CoffeeMachine extends Machine {
  constructor() {
    super();
    this.drink = "вода";
  }
  run(drink) {
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
    super.run();
  }
}
// let cofeeMachine = new CoffeeMachine();
// cofeeMachine.run(prompt("Який напій бажаєте?"));
class Multivariate extends Machine {
  constructor() {
    super();
    this.cook = "кип'ятіння";
  }
  run(cook) {
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
    super.run();
  }
}
let multivariate = new Multivariate();
multivariate.run(prompt("Що сьогодні готуємо?"));
