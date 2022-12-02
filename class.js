window.onload = function () {
  class Machine {
    constructor(info) {
      this.state = "stopped";
      this.time = 2000;
      this.timer = null;
      this.interval = null;
      this.info = info;
    }
    run() {
      this.state = "started";
      this.info.innerHTML += "Починаю роботу...";
      this.info.innerHTML += "Час приготування - " + this.time + " ";
      this.interval = setInterval(
        function () {
          this.info.innerHTML += " | ";
        }.bind(this),
        1000
      );
      this.timer = setTimeout(this.onReady, this.time);
      this.info.innerHTML += this.state;
    }
    onReady = () => {
      clearInterval(this.interval);
      clearTimeout(this.timer);
      this.info.innerHTML += "Готово! ";
      this.state = "stopped";
      this.info.innerHTML += this.state;
    };
    stop() {
      clearInterval(this.interval);
      clearTimeout(this.timer);
      this.info.innerHTML += "Примусове вимкнення!";
      this.state = "stopped";
      this.info.innerHTML += this.state;
    }
  }

  class CoffeeMachine extends Machine {
    constructor(info) {
      super();
      this.drink = "вода";
    }
    run(drink) {
      if (drink != undefined) {
        this.drink = drink;
      }
      this.info.innerHTML = `Приготування: ${this.drink} `;
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
        case "матча латте":
          this.time = 8000;
          break;
        case "горячий шоколад":
          this.time = 6000;
          break;
        default:
          this.info.innerHTML += "Такого напою немає!";
          CofeeMachine.stop();
          break;
      }
      super.run();
    }
  }

  class Multivariate extends Machine {
    constructor() {
      super();
      this.cook = "кип'ятіння";
    }
    run(cook) {
      if (cook != undefined) this.cook = cook;
      this.info.innerHTML += "Приготування: " + this.cook + " ";
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
          this.info.innerHTML += "Такого немає!";
          Multivariate.stop();
          break;
      }
      super.run();
    }
  }

  let info = document.getElementById("textCoffeMachine");
  let latte = document.getElementById("latte");
  //   let espresso = document.getElementById("espresso");
  //let stop = document.getElementById("stop");

  // let machine = new Machine(info);
  let coffeeMachine = new CoffeeMachine(info);

  latte.addEventListener("click", function () {
    coffeeMachine.run("латте");
  });

  //   espresso.addEventListener("click", function () {
  //     coffeeMachine.run("espresso");
  //   });
  // let multivariate = new Multivariate();
  // multivariate.run(prompt("Що сьогодні готуємо?"));
  //   let cofeeMachine = new CoffeeMachine(info);
  //   cofeeMachine.run(prompt("Який напій бажаєте?"));
};
