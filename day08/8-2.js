const l = console.log
module.exports = (data) => {
    let acc = 0
    let index = 0
    let visited = []
    let i = 0
    let changed = false

    const a = data
        .trim()
        .split('\n')
        .map((i) => ({
            ins: i.split(' ')[0],
            amount: parseInt(i.split(' ')[1], 10),
        }))

    const findLoop = (onPos) => {
        let initial = 0
        while (true) {
            if (visited.includes(index)) {
                index = acc = 0
                visited = []
                changed = false
                return false
            }
            visited.push(index)
            if (!a[index]) return true
            let instruction = a[index].ins

            if (['jmp', 'nop'].includes(instruction)) {
                if (initial === onPos && !changed) {
                    instruction = instruction === 'jmp' ? 'nop' : 'jmp'
                    changed = true
                }
                initial++
            }
            switch (instruction) {
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

    while (true) {
        if (!findLoop(i)) {
            i++
        } else {
            return acc
        }
    }
}
