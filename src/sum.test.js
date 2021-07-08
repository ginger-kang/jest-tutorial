// const sum = require("./sum");

// test("1 + 2", () => {
//   expect(sum(1, 2)).toBe(3);
// });

const { sum, sumOf } = require("./sum");

describe("sum", () => {
  it("1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("calculates all numbers", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(sumOf(arr)).toBe(15);
  });
});
