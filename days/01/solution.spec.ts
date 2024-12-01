import { part1, part2 } from './solution';

describe('Day 01', () => {
    describe('Part 1', () => {
        it('should return 11 for example', () => {
            const lines: string[] = [
                "3   4",
                "4   3",
                "2   5",
                "1   3",
                "3   9",
                "3   3"
            ];
            expect(part1(lines)).toEqual("11");
        });
    });

    describe('Part 2', () => {
        it.skip('should return 31 for example', () => {
            const lines: string[] = [
                "3   4",
                "4   3",
                "2   5",
                "1   3",
                "3   9",
                "3   3"
            ];
            expect(part2(lines)).toEqual("31");
        });
    });
});