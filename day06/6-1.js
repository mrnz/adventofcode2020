module.exports = (data) => {
    return data
        .trim()
        .split('\n\n')
        .reduce(
            (acc, group) =>
                acc + new Set(group.replace(/\n/g, '').split('')).size,
            0
        )
}
