module.exports = (data, invalid = 21806024) => {
    let idx = 0
    const a = data
        .trim()
        .split('\n')
        .map(Number)

    while (a[idx]) {
        let sum = 0

        for (let i = idx; i > 0; i--) {
            sum += a[i]

            if (sum > invalid) break

            if (sum === invalid) {
                const b = a.slice(i, idx).sort((a, b) => a - b)
                return b[0] + b[b.length - 1]
            }
        }

        idx++
    }
}
