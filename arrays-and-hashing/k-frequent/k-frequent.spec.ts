/*
https://leetcode.com/problems/top-k-frequent-elements/description/

Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.
 */

import {kFrequent} from "./k-frequent";

describe('k frequent elements', () => {
    it("works", () => {
        expect(kFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
    })

    it("works 2", () => {
        expect(kFrequent([7], 1)).toEqual([7])
    })

    it("works 3", () => {
        expect(kFrequent([1, 2, 2, 3, 3, 3], 2)).toEqual([3, 2])
    })


})