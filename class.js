window.onload = function () {
  class Machine {
    constructor(info, img) {
      this.state = "stopped";
      this.time = 2000;
      this.timer = null;
      this.interval = null;
      this.info = info;
      this.img = img;
    }
    run() {
      this.state = "started";
      this.img.src = this.img.src.replace("-off", "-on");
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
      this.info.innerHTML = "Готово! ";
      this.state = "stopped";
      this.img.src = this.img.src.replace("-on", "-off");
      this.info.innerHTML += this.state;
    };
    stop() {
      clearInterval(this.interval);
      clearTimeout(this.timer);
      this.info.innerHTML = "Примусове вимкнення!";
      this.state = "stopped";
      this.img.src = this.img.src.replace("-on", "-off");
      this.info.innerHTML += this.state;
    }
  }

  class CoffeeMachine extends Machine {
    constructor(info, img) {
      super(info, img);
      this.drink = "вода";
    }
    run(drink) {
      try {
        if (this.state == "started") {
          throw new Error("Машина занята!");
        } else {
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
      } catch (ex) {
        this.info.innerHTML += ex.message;
      }
    }
  }

  class Multivariate extends Machine {
    constructor(info, img) {
      super(info, img);
      this.cook = "кип'ятіння";
    }
    run(cook) {
      try {
        if (this.state == "started") {
          throw new Error("Машина занята!");
        } else {
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
            case "випічка":
              this.time = 17000;
              break;
            default:
              this.info.innerHTML += "Такого немає!";
              Multivariate.stop();
              break;
          }
          super.run();
        }
      } catch (ex) {
        this.info.innerHTML += ex.message;
      }
    }
  }
  let imgCoffe = document.getElementById("imgCoffe");
  let infoCoffee = document.getElementById("textCoffeMachine");
  let latte = document.getElementById("latte");
  let espresso = document.getElementById("espresso");
  let matchaLatte = document.getElementById("matchaLatte");
  let hotChocolate = document.getElementById("hotChocolate");
  let stopCoffe = document.getElementById("stopCoffe");

  // let machine = new Machine(info);
  let coffeeMachine = new CoffeeMachine(infoCoffee, imgCoffe);

  latte.addEventListener("click", function () {
    coffeeMachine.run("латте");
  });

  espresso.addEventListener("click", function () {
    coffeeMachine.run("еспрессо");
  });
  matchaLatte.addEventListener("click", function () {
    coffeeMachine.run("матча латте");
  });

  hotChocolate.addEventListener("click", function () {
    coffeeMachine.run("горячий шоколад");
  });

  stopCoffe.addEventListener("click", function () {
    coffeeMachine.stop();
  });
  let imgMulti = document.getElementById("imgMulti");
  let infoMulti = document.getElementById("textMultivariate");
  let soup = document.getElementById("soup");
  let stewing = document.getElementById("stewing");
  let baking = document.getElementById("baking");
  let stopMulti = document.getElementById("stopMulti");

  let multivariate = new Multivariate(infoMulti, imgMulti);

  soup.addEventListener("click", function () {
    multivariate.run("суп");
  });

  stewing.addEventListener("click", function () {
    multivariate.run("тушкування");
  });
  baking.addEventListener("click", function () {
    multivariate.run("випічка");
  });

  stopMulti.addEventListener("click", function () {
    multivariate.stop();
  });
  // let multivariate = new Multivariate();
  // multivariate.run(prompt("Що сьогодні готуємо?"));
  //   let cofeeMachine = new CoffeeMachine(info);
  //   cofeeMachine.run(prompt("Який напій бажаєте?"));
};
