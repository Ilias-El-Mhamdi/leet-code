//brute force
/*

export const twoSum = (entry: number[], target: number): [i: number, j: number] => {
    for (let i = 0; i < entry.length - 1; i++) {
        const targetRsult = target - entry[i]
        for (let j = i + 1; j < entry.length; j++) {
            if (entry[j] === targetRsult) {
                return [i, j]
            }

        }
    }
    throw new Error('impossible')
}
 */

export const twoSum = (entry: number[], target: number): [i: number, j: number] => {
    const hash = {}
    entry.forEach((value, index) => {
        hash[value] = index
    })

    for (let i = 0; i < entry.length; i++) {
        const targetResult = target - entry[i]
        const j = hash[targetResult]
        if (j && j !== i) {
            return [i, j]
        }
    }
    throw new Error('impossible')
}