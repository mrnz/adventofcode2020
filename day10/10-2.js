const l = console.log
module.exports = (data, step = 3) => {
    let activePaths = [0]

    const a = data
        .trim()
        .split('\n')
        .map(Number)
        .sort((a, b) => a - b)

    const calc = (array, idx, memo = {}) => {
        let total = 0
        if (array.length - 1 === idx) return 1

        if (idx in memo) return memo[idx]

        if (array[idx + 1] && array[idx + 1] - array[idx] <= 3)
            total += calc(array, idx + 1, memo)
        if (array[idx + 2] && array[idx + 2] - array[idx] <= 3)
            total += calc(array, idx + 2, memo)
        if (array[idx + 3] && array[idx + 3] - array[idx] <= 3)
            total += calc(array, idx + 3, memo)

        memo[idx] = total
        return total
    }
    return calc(a, 0)
}
