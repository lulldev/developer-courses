const readline = require("readline");
const { Calculator } = require("./calculator");
const stdin = require("mock-stdin").stdin();

describe("Calculator", () => {
  test("Should setters/getters correctly work", () => {
    const calculator = new Calculator();
    calculator.setA(1);
    calculator.setB(2);
    expect(calculator.getA()).toBe(1);
    expect(calculator.getB()).toBe(2);
  });

  test("Should getter return undefined if values not set", () => {
    const calculator = new Calculator();
    expect(calculator.getA()).toBeUndefined();
    expect(calculator.getB()).toBeUndefined();
  });

  describe("sum", () => {
    test("Should sum() correctly calculate two numbers", () => {
      const calculator = new Calculator(1, 2);
      expect(calculator.sum()).toBe(3);
    });

    test("Should sum() correctly calculate two negative numbers", () => {
      const calculator = new Calculator(-1, -2);
      expect(calculator.sum()).toBe(-3);
    });
  });

  describe("sub", () => {
    test("Should sub() correctly calculate two numbers", () => {
      const calculator = new Calculator(1, 2);
      expect(calculator.sub()).toBe(-1);
    });
  });
});
