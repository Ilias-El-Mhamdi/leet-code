export const climbingStairsBruteForce = (n: number) => {
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    return climbingStairsBruteForce(n - 1) + climbingStairsBruteForce(n - 2)
}

export const climbingStairsMemo = (n: number, solutions = {}) => {
    if (solutions[n]) return solutions[n]
    if (n === 1) {
        solutions[1] = 1
        return 1
    }
    if (n === 2) {
        solutions[2] = 1
        return 2
    }
    solutions[n] = climbingStairsMemo(n - 1) + climbingStairsMemo(n - 2)

    return solutions[n]
}

export const climbingStairsIter = (n: number) => {
    const solutions = {1: 1, 2: 2}
    for (let stair = 3; stair <= n; stair++) {
        solutions[stair] = solutions[stair - 1] + solutions[stair - 2]
    }

    return solutions[n]
}

export const solutions = [
    {name: "force", solution: climbingStairsBruteForce},
    {name: "memo", solution: climbingStairsMemo},
    {name: "iterative", solution: climbingStairsIter}
]

