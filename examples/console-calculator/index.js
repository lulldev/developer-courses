const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { Calculator } = require("./calculator");
const { formatCalculation } = require("./utils/calculator");
const { ConsoleCalculator } = require("./console-calculator");

console.log("Welcome to calculator!");

const consoleCalculator = new ConsoleCalculator(rl);
consoleCalculator.run();
