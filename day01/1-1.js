module.exports = (data) => {
    let result = 0

    data = data
        .trim()
        .split('\n')
        .map(Number)

    for (const el of data) {
        const rest = 2020 - parseInt(el, 10)
        if (data.some((e) => e === rest)) {
            result = rest * parseInt(el, 10)
            break
        }
    }

    return result
}
