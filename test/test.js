const assert = require("assert");
const { sum } = require("../src/sum.js");

describe("sum", () => {
  it("should return sum of two numbers", () => {
    let actual = sum(1, 3);
    let expected = 4;
    assert.deepEqual(actual, expected);
  });
  it("should return sum of negative numbers", () => {
    let actual = sum(-1, -2);
    let expected = -3;
    assert.deepEqual(actual, expected);
  });
});
