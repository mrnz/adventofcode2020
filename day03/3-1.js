module.exports = (data, step, down) => {
    let x = 0
    let offset = 1

    return data
        .trim()
        .split('\n')
        .reduce((e, row, idx) => {
            if (idx === 0) return e
            if (idx % down !== 0) {
                return e
            }
            x = !row[x + step] ? x + step - row.length : x + step

            if (row[x] === '#') e++

            return e
        }, 0)
}
