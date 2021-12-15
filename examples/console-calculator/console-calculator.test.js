const readline = require("readline");
const { ConsoleCalculator } = require("./console-calculator");

const readLineMock = {
  question: (label, callback) => callback("1"),
  on: (label, callback) => callback("sum"),
  setPrompt: (str) => {},
  prompt: () => {},
};

const consoleLogMock = jest.spyOn(console, "log").mockImplementation();

describe("Concole calculator", () => {
  test("Should", () => {
    const calculator = new ConsoleCalculator(readLineMock);
    calculator.run();
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
