const stats = require("./stats");

describe("stats", () => {
  it("maximum value", () => {
    expect(stats.max([11, 42, 24, 33, 6])).toBe(42);
  });

  it("minimum value", () => {
    expect(stats.min([11, 42, 24, 33, 6])).toBe(6);
  });

  it("average value", () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });

  describe("medium", () => {
    it("sort", () => {
      expect(stats.sort([11, 42, 24, 33, 6])).toEqual([6, 11, 24, 33, 42]);
    });

    it("odd length", () => {
      expect(stats.medium([1, 2, 3, 4, 5])).toBe(3);
    });

    it("even length", () => {
      expect(stats.medium([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
  });
});
