module.exports = (data, range = 25) => {
    let idx = 0

    const a = data
        .trim()
        .split('\n')
        .map(Number)

    while (a[idx + range]) {
        const toSearch = a.slice(idx, range + idx)
        if (!toSearch.some((x) => toSearch.includes(a[range + idx] - x))) {
            return a[idx + range]
        }
        idx++
    }
}
