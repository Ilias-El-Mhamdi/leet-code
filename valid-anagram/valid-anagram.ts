/*
242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An anagram is a string that contains the exact same characters as another string,
 but the order of the characters can be different.

 */

export const validAnagram = (s: string, t: string): boolean => {
    const sHash = {}
    const tHash = {}
    if (s.length !== t.length) return false

    for (let k = 0; k < s.length; k++) {
        const sVal = s[k]
        const tVal = t[k]
        sHash[sVal] = (sHash[sVal] || 0) + 1
        tHash[tVal] = (tHash[tVal] || 0) + 1
    }
    for (const letter of s) {
        if (sHash[letter] !== tHash[letter]) {
            return false
        }
    }
    return true
}