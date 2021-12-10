class Calculator {
  constructor(a = undefined, b = undefined) {
    this.a = a;
    this.b = b;
  }

  setA(a) {
    this.a = a;
  }

  setB(b) {
    this.b = b;
  }

  getA() {
    return this.a;
  }

  getB() {
    return this.b;
  }

  sum() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

module.exports = { Calculator };
