/*
https://leetcode.com/problems/two-sum/description/

Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.
 */

import {twoSum} from "./two-sum";

describe('two sums', () => {

    it("OK : 2 elements", () => {
        expect(twoSum([1, 2], 3)).toEqual([0, 1])
    })

    it("OK : doublons value", () => {
        expect(twoSum([2, 1, 5, 5, 3, 4], 10)).toEqual([2, 3])
    })

    it("OK : fisrt and last", () => {
        expect(twoSum([1, 1, 5, 5, 3, 4], 5)).toEqual([0, 5])
    })

    it("OK : fisrts", () => {
        expect(twoSum([1, 1, 5, 5, 3, 4], 2)).toEqual([0, 1])
    })

    it("OK : lasts", () => {
        expect(twoSum([1, 1, 5, 5, 3, 4], 7)).toEqual([4, 5])
    })

    it("OK : should not double the value", () => {
        // we don't want 3 + 3 [1,1]
        expect(twoSum([1, 3, 4, 2], 6)).toEqual([2, 3])
    })

    it("KO : no result", () => {
        expect(() => twoSum([1, 3, 4, 2], 10)).toThrow("impossible")
    })
})