/*
https://leetcode.com/problems/min-cost-climbing-stairs/description/
746. Min Cost Climbing Stairs

You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
 */

import {solutions} from "./MinCostClimbingStairs";

describe.each(solutions)("verify climbing-stairs", ({name, solution}) => {
    describe(name, () => {

        it("works", () => {
            expect(solution([10, 15, 20])).toBe(15)
        })

        it("works 2", () => {
            expect(solution([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6)
        })

    })
})
