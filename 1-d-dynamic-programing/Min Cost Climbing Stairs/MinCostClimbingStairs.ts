const minCostClimbingStairs = (cost: number[]) => {
    const minCostClimbingStairsHelper = (size: number): number => {
        if (size === 1) return 0
        if (size === 2) {
            return Math.min(cost[0], cost[1])
        }
        const path1 = cost[size - 1] + minCostClimbingStairsHelper(size - 1)
        const path2 = cost[size - 2] + minCostClimbingStairsHelper(size - 2)
        return Math.min(path1, path2)
    }

    return minCostClimbingStairsHelper(cost.length)

}

export const minCostClimbingStairsMemo = (cost: number[]) => {
    const solutions = {
        1: 0,
        2: Math.min(cost[0], cost[1])
    }
    const minCostClimbingStairsHelper = (size: number): number => {
        if (solutions[size]) return solutions[size]
        if (size === 1) return 0
        const path1 = cost[size - 1] + minCostClimbingStairsHelper(size - 1)
        const path2 = cost[size - 2] + minCostClimbingStairsHelper(size - 2)
        solutions[size] = Math.min(path1, path2)
        return solutions[size]
    }

    return minCostClimbingStairsHelper(cost.length)

}

export const minCostClimbingStairsIter = (cost: number[]) => {
    const solutions = {
        1: 0,
        2: Math.min(cost[0], cost[1])
    }

    for (let stair = 3; stair <= cost.length; stair++) {
        const path1 = cost[stair - 1] + solutions[stair - 1]
        const path2 = cost[stair - 2] + solutions[stair - 2]
        solutions[stair] = Math.min(path1, path2)
    }
    return solutions[cost.length]

}

export const solutions = [
    {name: "force", solution: minCostClimbingStairs},
    {name: "memo", solution: minCostClimbingStairsMemo},
    {name: "iterative", solution: minCostClimbingStairsIter}
]

