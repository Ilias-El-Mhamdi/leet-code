/*
https://leetcode.com/problems/group-anagrams/description/

Group Anagrams
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
 */

import {groupAnagram} from "./group-anagram";

describe("group anagram", () => {
    it("works 1", () => {
        expect(deepSort(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]))).toEqual(
            deepSort([["hat"], ["act", "cat"], ["stop", "pots", "tops"]]))
    })

    it("works 2", () => {
        expect(deepSort(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))).toEqual(
            deepSort([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]))
    })

    it("works 3", () => {
        expect(deepSort(groupAnagram([""]))).toEqual(
            deepSort([[""]]))
    })

    it("works 4", () => {
        expect(deepSort(groupAnagram(["a"]))).toEqual(
            deepSort([["a"]]))
    })
})

it("deep sorts", () => {
    expect(deepSort([["hat"], ["cat", "act",], ["stop", "tops", "pots",]])).toEqual(
        [["act", "cat"], ["hat"], ["pots", "stop", "tops"]]
    )
})

const deepSort = (result: any) => {
    if (Array.isArray(result[0])) {
        result.sort((a, b) => {
            const ra = deepSort(a)[0][0]
            const rb = deepSort(b)[0][0]
            return ra.localeCompare(rb)
        })
        return result
    }
    result.sort()
    return result
}
