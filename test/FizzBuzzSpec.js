import { expect } from "chai";

import FizzBuzz from "../src/FizzBuzz";

describe("FizzBuzz", () => {
  describe("#eval", () => {
    context("for multiple of 3", () => {
      const multipleOf3 = [3, 6, 9];

      multipleOf3.forEach(number => {
        it(`returns 'Fizz' when given ${number}`, () => {
          expect(FizzBuzz.eval(number)).to.eq("Fizz");
        });
      });
    });

    context("for multiple of 5", () => {
      const multipleOf5 = [5, 10, 20];

      multipleOf5.forEach(number => {
        it(`returns 'Buzz' when given ${number}`, () => {
          expect(FizzBuzz.eval(number)).to.eq("Buzz");
        });
      });
    });

    context("for multiple of 15", () => {
      const multipleOf15 = [15, 30, 45];

      multipleOf15.forEach(number => {
        it(`returns 'FizzBuzz' when given ${number}`, () => {
          expect(FizzBuzz.eval(number)).to.eq("FizzBuzz");
        });
      });
    });

    context("for any other numbers", () => {
      const others = [1, 2, 4, 7, 8, 19];

      others.forEach(number => {
        it(`returns ${number} when given ${number}`, () => {
          expect(FizzBuzz.eval(number)).to.eq(number);
        });
      });
    });
  });
});
