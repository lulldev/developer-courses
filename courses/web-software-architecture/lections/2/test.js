const args = process.argv;
const number = parseInt(process.argv[2]);

// function isFizz(number) {
//   return number % 3 === 0;
// }

// function isBuzz(number) {
//   return number % 5 === 0;
// }

// const fizzBuzz = (number) =>
//   `${isFizz(number) ? "Fizz" : ""}${isBuzz(number) ? "Buzz" : ""}`;

// console.log(fizzBuzz(number));

// if (number % 3 === 0 && number % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 === 0) {
//   console.log("Fizz");
// } else if (number % 5 === 0) {
//   console.log("Buzz");
// }

// class FizzBuzz {
//   constructor(number) {
//     this.number = number; // состояние (!)
//   }

//   solve() {
//     if (this.number % 3 === 0 && this.number % 5 === 0) {
//       return "FizzBuzz";
//     } else if (this.number % 3 === 0) {
//       return "Fizz";
//     } else if (this.number % 5 === 0) {
//       return "Buzz";
//     }
//   }
// }

// const fizzBuzz = new FizzBuzz(number);
// console.log(fizzBuzz.solve());

// class FizzBuzz {
//   static solve(number) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       return "FizzBuzz";
//     } else if (number % 3 === 0) {
//       return "Fizz";
//     } else if (number % 5 === 0) {
//       return "Buzz";
//     }
//   }
// }

// console.log(FizzBuzz.solve(number));
