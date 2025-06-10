import {validAnagram} from "../valid-anagram/valid-anagram";


export const groupAnagram = (entries: string[]): string[][] => {
    const result = []
    entries.forEach(entry => {
        if (!hasRepresentative(result, entry)) {
            result.push([entry])
        }
    })
    return result
}

function hasRepresentative(result: any[], entry: string) {
    for (let k = 0; k < result.length; k++) {
        const group = result[k]
        const representative = group[0]
        if (validAnagram(entry, representative)) {
            group.push(entry)
            return true
        }
    }
    return false
}