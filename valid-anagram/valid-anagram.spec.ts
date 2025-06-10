import {validAnagram} from "./valid-anagram";

describe("valid anagram", () => {
    it('is OK', () => {
        expect(validAnagram("anagram", "nagaram")).toBe(true)
    })
    it('is KO : not same length', () => {
        expect(validAnagram("rat", "raat")).toBe(false)
    })

    it('is KO : at a letter different', () => {
        expect(validAnagram("cat", "rat")).toBe(false)
    })

    it('is KO : not same occurrence of letter', () => {
        expect(validAnagram("caat", "catt")).toBe(false)
    })

    it('is KO : not same case of letter', () => {
        expect(validAnagram("Cat", "cat")).toBe(false)
    })


})