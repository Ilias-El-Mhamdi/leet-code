//217 https://leetcode.com/problems/contains-duplicate/

/*
Contains Duplicate
Given an integer array nums,
return true if any value appears more than once in the array, otherwise return false.
 */

const containsDuplicateSet = (input: number[]): boolean => {
    return Array.from(new Set(input)).length < input.length
}

export const containsDuplicateHash = (input: number[]): boolean => {
    const hash = {}
    for (const element of input) {
        if (hash[element]) {
            return true
        }
        hash[element] = true
    }
    return false
}


export const solutions = [
    {name: "hash", solution: containsDuplicateSet},
    {name: "set", solution: containsDuplicateHash}
]

