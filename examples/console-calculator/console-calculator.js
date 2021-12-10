const { Calculator } = require("./calculator");
const {
  formatCalculation,
  getSignByOperationName,
} = require("./utils/calculator");

class ConsoleCalculator {
  constructor(rl) {
    this.rl = rl;
    this.calculator = new Calculator();
    this.command = undefined;
    this.commands = {
      sum: () => this.calculator.sum(),
      sub: () => this.calculator.sub(),
      mul: () => this.calculator.mul(),
    };
  }

  readTerm(termName, callback) {
    this.rl.question(`${termName} > `, callback);
  }

  readTerms(next) {
    this.readTerm("a", (a) => {
      this.calculator.setA(parseInt(a));

      this.readTerm("b", (b) => {
        this.calculator.setB(parseInt(b));
        next();
      });
    });
  }

  readCommand(next) {
    this.rl.setPrompt("command > ");
    this.rl.prompt();

    this.rl.on("line", (command) => {
      this.command = command;
      next();
    });
  }

  executeCalculation() {
    return this.commands[this.command]();
  }

  run() {
    const next = () => {
      this.readTerms(() => {
        const calculationResult = this.executeCalculation();
        console.log(
          formatCalculation({
            a: this.calculator.getA(),
            b: this.calculator.getB(),
            operation: getSignByOperationName(this.command),
            result: calculationResult,
          })
        );
        this.readCommand(next);
      });
    };
    this.readCommand(next);
  }
}

module.exports = { ConsoleCalculator };
