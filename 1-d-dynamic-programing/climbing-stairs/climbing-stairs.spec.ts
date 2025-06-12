/*
https://leetcode.com/problems/climbing-stairs/description/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/


import {solutions} from "./climbing-stairs";

describe.each(solutions)("verify climbing-stairs", ({name, solution}) => {
    describe(name, () => {

        it("should return 1 for n = 1", () => {
            expect(solution(1)).toBe(1);
        });

        it("should return 2 for n = 2", () => {
            expect(solution(2)).toBe(2);
        });

        it("should return 3 for n = 3", () => {
            expect(solution(3)).toBe(3);
        });

        it("should return 5 for n = 4", () => {
            expect(solution(4)).toBe(5);
        });

        it("should return 8 for n = 5", () => {
            expect(solution(5)).toBe(8);
        });

        it("should handle larger n", () => {
            expect(solution(10)).toBe(89);
        });
    });
});
