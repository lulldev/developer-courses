const readline = require("readline");
const { formatCalculation } = require("./calculator");

describe("Calculator formatter", () => {
  test("Should formatCalculation correctly format", () => {
    expect(
      formatCalculation({
        a: 1,
        b: 1,
        operation: "+",
        result: 2,
      })
    ).toBe("1 + 1 = 2");

    expect(
      formatCalculation({
        a: 1,
        b: 1,
        operation: "-",
        result: 0,
      })
    ).toBe("1 - 1 = 0");

    expect(
      formatCalculation({
        a: 1,
        b: 1,
        operation: "*",
        result: 1,
      })
    ).toBe("1 * 1 = 1");
  });
});
