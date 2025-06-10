import {solutions} from "./contains-duplicate";

describe.each(solutions)("verify contains duplicate", ({name, solution}) => {
    describe(name, () => {

        it("contains duplicate", () => {
            expect(solution([1, 2, 4, 5, 4])).toBe(true)
        })

        it("doesn't contains duplicate", () => {
            expect(solution([1, 2, 4, 5])).toBe(false)
        })
    })
})

