module.exports = (data) => {
    let result = 0

    data = data
        .trim()
        .split('\n')
        .map(Number)

    for (const el of data) {
        const rest = 2020 - el

        for (const el2 of data) {
            const rest2 = rest - el2

            if (rest2 < 1) continue

            if (data.some((e) => e === rest2)) {
                result = el * el2 * rest2
                break
            }
        }

        if (result > 0) break
    }
    return result
}
