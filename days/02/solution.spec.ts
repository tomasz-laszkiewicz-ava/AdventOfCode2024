import { part1, part2 } from "./solution";

describe("Day 01", () => {
  describe("Part 1", () => {
    it("should return 2 for example", () => {
      const lines: string[] = [
        "7 6 4 2 1",
        "1 2 7 8 9",
        "9 7 6 2 1",
        "1 3 2 4 5",
        "8 6 4 4 1",
        "1 3 6 7 9",
      ];
      expect(part1(lines)).toEqual("2");
    });
  });

  describe("Part 2", () => {
    it("should return 4 for example", () => {
      const lines: string[] = [
        "7 6 4 2 1",
        "1 2 7 8 9",
        "9 7 6 2 1",
        "1 3 2 4 5",
        "8 6 4 4 1",
        "1 3 6 7 9",
      ];
      expect(part2(lines)).toEqual("4");
    });
  });
});
