const l = console.log
module.exports = (data) => {
    console.time('a')
    let acc = 0
    let index = 0
    let visited = new Set()
    const a = data
        .trim()
        .split('\n')
        .map((i) => ({
            ins: i.split(' ')[0],
            amount: parseInt(i.split(' ')[1], 10),
        }))

    while (true) {
        if (visited.has(index)) {
            console.timeEnd('a')
            return acc
        }
        visited.add(index)

        switch (a[index].ins) {
            case 'jmp':
                index += a[index].amount
                break
            case 'acc':
                acc += a[index].amount
            default:
                index++
        }
    }
}
