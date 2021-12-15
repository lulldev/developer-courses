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

  readTerm(termName) {
    return this.rl.question(`${termName} > `);
  }

  async readTerms(next) {
    const termA = await this.readTerm("a");
    this.calculator.setA(parseInt(termA));
    const termB = await this.readTerm("B");
    this.calculator.setB(parseInt(termB));
    return new Promise((resolve) => resolve());
  }

  async readCommand(next) {
    this.command = await this.rl.question("command > ");
    return new Promise((resolve) => resolve());
  }

  executeCalculation() {
    return this.commands[this.command]();
  }

  async run() {
    await this.readCommand();
    await this.readTerms();
    const calculationResult = this.executeCalculation();
    console.log(
      formatCalculation({
        a: this.calculator.getA(),
        b: this.calculator.getB(),
        operation: getSignByOperationName(this.command),
        result: calculationResult,
      })
    );
    // const next = () => {
    //   this.readTerms(() => {
    //     const calculationResult = this.executeCalculation();
    //     console.log(
    //       formatCalculation({
    //         a: this.calculator.getA(),
    //         b: this.calculator.getB(),
    //         operation: getSignByOperationName(this.command),
    //         result: calculationResult,
    //       })
    //     );
    //     this.readCommand(next);
    //   });
    // };
    // this.readCommand(next);
  }
}

module.exports = { ConsoleCalculator };
