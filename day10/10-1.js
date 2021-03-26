const l = console.log
module.exports = (data, step = 3) => {
    let jolt = 0
    let i = 0
    let j = 0

    const a = data
        .trim()
        .split('\n')
        .map(Number)
        .sort((a, b) => a - b)

    while (a.length) {
        const newJolt = a.shift()
        l(newJolt)
        if (newJolt - jolt === 1) {
            i++
        } else if (newJolt - jolt === 3) {
            j++
        }
        jolt = newJolt
    }

    return i * (j + 1)
}
