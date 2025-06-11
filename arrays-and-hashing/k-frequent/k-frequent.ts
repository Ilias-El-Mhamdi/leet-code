export const kFrequent = (entries: number[], k: number): number[] => {
    const hash: Record<string, number> = {}
    entries.forEach(elt => {
        hash[elt] = (hash[elt] || 0) + 1
    })
    const asArray = Object.entries(hash)
    asArray.sort((a, b) => b[1] - a[1])
    const preResult = asArray.slice(0, k)
    return preResult.map(elt => Number(elt[0]))
}